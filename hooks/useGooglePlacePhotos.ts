
import { useState, useEffect } from 'react';

// Google Maps APIの型定義（簡易版）
declare global {
  interface Window {
    google: any;
    gm_authFailure?: () => void; // Auth failure callback
  }
}

// 環境変数のみを使用
const GOOGLE_MAPS_API_KEY = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY;
const PLACE_NAME = "割烹食堂かいね 福島県郡山市";

export const useGooglePlacePhotos = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 認証エラーハンドラー
    window.gm_authFailure = () => {
      console.error("Google Maps API Authentication Error. Please check if 'Maps JavaScript API' is enabled in Google Cloud Console.");
      setError("Google Maps API Authentication Error");
      setLoading(false);
    };

    if (!GOOGLE_MAPS_API_KEY) {
      console.warn("Google Maps API Key is missing. If running on GitHub, ensure 'VITE_GOOGLE_MAPS_API_KEY' is set in Repository Secrets and a new build has been triggered.");
      setLoading(false);
      return;
    }

    // Google Maps APIの読み込みと写真取得
    const loadAndFetch = async () => {
      try {
        // スクリプトがまだない場合は注入
        if (!window.google?.maps) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            // loading=async を追加して警告を解消
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&loading=async&v=weekly`;
            script.async = true;
            script.defer = true;
            script.onload = () => resolve();
            script.onerror = (e) => reject(new Error("Failed to load Google Maps script"));
            document.head.appendChild(script);
          });
        }

        await fetchPhotos();

      } catch (err) {
        console.error("Setup error:", err);
        setError("Failed to initialize Google Maps");
        setLoading(false);
      }
    };

    // 写真取得ロジック (Modern Places API)
    async function fetchPhotos() {
      try {
        if (!window.google?.maps?.importLibrary) {
          throw new Error("Google Maps library not loaded properly.");
        }

        // 従来のPlacesServiceではなく、新しいPlaceクラスを使用
        // @ts-ignore
        const { Place } = await window.google.maps.importLibrary("places");
        
        // テキスト検索を実行 (Places API New)
        // @ts-ignore
        const { places } = await Place.searchByText({
            textQuery: PLACE_NAME,
            fields: ['photos'], // 必要なフィールドのみ指定
        });

        if (places && places.length > 0) {
          const place = places[0];
          
          if (place.photos && place.photos.length > 0) {
            // 最大20枚まで取得 (サイト全体で使用するため増量)
            const photoUrls = place.photos.slice(0, 20).map((photo: any) => {
              // 新しいAPIでは getURI() を使用する場合がありますが、
              // 返ってくるPhotoオブジェクトが互換性を持つ場合 getUrl() も使えることがあります。
              // Place classのPhotoオブジェクトは getURI({ maxWidth, maxHeight }) を持ちます。
              if (typeof photo.getURI === 'function') {
                  return photo.getURI({ maxWidth: 1600 });
              }
              // Legacy fallback
              if (typeof photo.getUrl === 'function') {
                  return photo.getUrl({ maxWidth: 1600 });
              }
              return '';
            }).filter((url: string) => url !== '');
            
            setPhotos(photoUrls);
          } else {
            console.log("No photos found for this place.");
          }
        } else {
          console.warn("Place not found by search.");
        }
      } catch (e) {
        console.error("Error fetching place photos:", e);
        setError("Error using Google Maps Places API");
      } finally {
        setLoading(false);
      }
    }

    loadAndFetch();
    
    // Cleanup
    return () => {
      window.gm_authFailure = undefined;
    };
  }, []);

  return { photos, loading, error };
};
