import { useState, useEffect } from 'react';

// Google Maps APIの型定義（簡易版）
declare global {
  interface Window {
    google: any;
    initMap?: () => void;
    gm_authFailure?: () => void; // Auth failure callback
  }
}

// 環境変数のみを使用し、ハードコードされたフォールバックキーは削除
const GOOGLE_MAPS_API_KEY = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY;
const PLACE_NAME = "割烹食堂かいね 福島県郡山市";

export const useGooglePlacePhotos = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 認証エラーハンドラー（APIキーが無効、APIが有効でない場合など）
    window.gm_authFailure = () => {
      console.error("Google Maps API Authentication Error. Please check if 'Maps JavaScript API' is enabled in Google Cloud Console.");
      setError("Google Maps API Authentication Error");
      setLoading(false);
    };

    if (!GOOGLE_MAPS_API_KEY) {
      // APIキーがない場合は警告を出さずに静かに終了（デフォルト画像を使用するため）
      console.debug("Google Maps API Key is missing. Using default images.");
      setLoading(false);
      return;
    }

    // スクリプトが既に存在するかチェック
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => fetchPhotos();
      script.onerror = () => {
        setError("Failed to load Google Maps API");
        setLoading(false);
      };
      document.head.appendChild(script);
    } else {
      fetchPhotos();
    }

    function fetchPhotos() {
      // 少し待機してからチェック（スクリプト読み込み直後のタイミング対策）
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        setTimeout(fetchPhotos, 100);
        return;
      }

      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      
      const request = {
        query: PLACE_NAME,
        fields: ['photos', 'place_id'],
      };

      try {
        service.findPlaceFromQuery(request, (results: any[], status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
            const place = results[0];
            if (place.photos && place.photos.length > 0) {
              // 最大10枚まで取得、最大幅1600pxでURLを取得
              const photoUrls = place.photos.slice(0, 10).map((photo: any) => 
                photo.getUrl({ maxWidth: 1600 })
              );
              setPhotos(photoUrls);
            } else {
              console.log("No photos found for this place.");
            }
          } else {
            console.error("Place search failed:", status);
            setError("Failed to find place");
          }
          setLoading(false);
        });
      } catch (e) {
        console.error("Error executing findPlaceFromQuery:", e);
        setError("Error executing Google Maps Service");
        setLoading(false);
      }
    }
    
    // Cleanup
    return () => {
      window.gm_authFailure = undefined;
    };
  }, []);

  return { photos, loading, error };
};