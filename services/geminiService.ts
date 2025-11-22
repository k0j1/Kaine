import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateRestaurantResponse = async (userMessage: string, context: string): Promise<string> => {
  if (!apiKey) {
    return "申し訳ございません。現在AIコンシェルジュは調整中です。(API Key missing)";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
    あなたは福島県郡山市菜根にある「割烹食堂かいね (Kappo Shokudo Kaine)」のAIコンシェルジュです。
    
    店舗情報:
    - 住所: 福島県郡山市菜根4丁目4-4
    - 電話番号: 024-954-4579
    - 営業時間: 
       ランチ 11:30～14:00 (L.O. 13:30)
       ディナー 17:30～22:00 (L.O. 21:00)
    - 定休日: 日曜日 (その他不定休あり)
    - 駐車場: 全10台完備（店舗横6台、斜め向かい「tictac hair」裏に契約駐車場4台）
    
    メニューの特徴:
    - ランチ: 「鶏かつ定食(980円)」「レバかつ定食(880円)」が人気。ご飯おかわり無料。
    - ディナー: 一品料理（ポテトミルクコロッケ、だし巻き玉子、銀たら煮付けなど）とお酒を楽しめる。
    - コース: 季節のおまかせコース(6600円〜)もあり。
    - ドリンク: 自家製レモンサワー、福島の地酒が豊富。
    
    役割:
    - お客様からの質問（メニュー、アクセス、おすすめ、雰囲気など）に、丁寧かつ親しみやすい日本語で答えてください。
    - 予約に関する質問には、「InstagramのDM（ダイレクトメッセージ）にて承っております」と案内してください。
    - 以下のコンテキスト情報を参考にしてください: ${context}
    
    回答は短すぎず、長すぎない（200文字以内程度）ようにまとめてください。
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "申し訳ございません。うまく聞き取れませんでした。もう一度おっしゃっていただけますか？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ございません。現在システムが混み合っており、お答えできません。";
  }
};