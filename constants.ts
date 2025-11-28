import { MenuCategory, MenuSectionData, InstagramPost } from './types';

export const SITE_NAME = "割烹食堂かいね";
export const SITE_SUBTITLE = "Kappo Shokudo Kaine";

export const ADDRESS = "〒963-8862 福島県郡山市菜根4丁目4-4";
export const PHONE_NUMBER = "024-954-4579";
// Using the profile link as it is the most reliable way to reach DM button on mobile/desktop
export const RESERVATION_URL = "https://www.instagram.com/kaine_cuisine/";

// Placeholders for the images provided in the prompt. 
// In a real deployment, replace these URLs with the actual hosted image URLs.
export const MENU_SCANS = [
  { src: "https://placehold.co/600x850/f5f5f0/1a1a1a?text=Lunch+Menu+Scan", alt: "定食メニュー" },
  { src: "https://placehold.co/600x850/f5f5f0/1a1a1a?text=Ippin+Menu+Scan", alt: "一品メニュー" },
  { src: "https://placehold.co/600x850/f5f5f0/1a1a1a?text=Drink+Menu+Scan", alt: "ドリンクメニュー" }
];

// GitHub Pages等のサブディレクトリ展開に対応するため、BASE_URLを使用
// 安全にアクセスするためにオプショナルチェーンを使用し、未定義の場合は '/' をフォールバックとする
// @ts-ignore
const baseUrl = import.meta.env?.BASE_URL ?? '/';
export const PARKING_IMAGE_URL = `${baseUrl}image/Parking.png`;

export const MENU_DATA: MenuSectionData[] = [
  {
    category: MenuCategory.LUNCH,
    items: [
      { id: 'l1', name: '鶏かつ定食 (150g)', price: '¥980', description: '低温火入れによる鶏肉の進化した味わい。極厚ながら柔らかくジューシー。【ご飯おかわり無料】' },
      { id: 'l2', name: '鶏かつW定食 (300g)', price: '¥1,380', description: '鶏かつを存分に楽しみたい方へ。ボリューム満点の300g。【ご飯おかわり無料】' },
      { id: 'l3', name: 'レバかつ定食', price: '¥880', description: 'とろとろな口当たりはまるでフォアグラのよう。ダシソースで濃厚な味わい。【ご飯おかわり無料】' },
      { id: 'l4', name: 'お刺身定食', price: '¥1,800', description: '新鮮なお刺身を盛り込んだこだわりの日替わり定食。自家製土佐醤油と共に。【ご飯おかわり無料】' },
      { id: 'l5', name: '海鮮ばらチラシ', price: '¥1,580', description: '特製寿司酢が自慢。夜の定番メニューでも人気のちらし寿司。【ご飯おかわり無料】' },
    ]
  },
  {
    category: MenuCategory.SIDES,
    items: [
      { id: 'ls1', name: '鶏かつ 単品', price: '¥680', description: 'ランチサイド限定価格' },
      { id: 'ls2', name: 'レバカツ 単品', price: '¥580', description: 'ランチサイド限定価格' },
      { id: 'ls3', name: '刺身3種盛り', price: '¥1,000', description: '' },
      { id: 'ls4', name: '鮎の塩焼き', price: '¥580', description: '' },
      { id: 'ls5', name: 'ポテトミルクコロッケ 2個', price: '¥300', description: '' },
      { id: 'ls6', name: '長芋ニンニク醤油漬け', price: '¥250', description: '' },
      { id: 'ls7', name: '焼き茄子', price: '¥250', description: '' },
      { id: 'ls8', name: 'ランチソフトドリンク各種', price: '各¥150', description: 'コーラ/ジンジャーソーダ/レモンスカッシュ/黒酢りんご/カルピス/烏龍茶' },
    ]
  },
  {
    category: MenuCategory.ALACARTE,
    items: [
      { id: 'a1', name: '長芋ニンニク醤油漬け', price: '¥400', description: '' },
      { id: 'a2', name: '枝豆ペペロンチーノ', price: '¥450', description: '' },
      { id: 'a3', name: 'ポテトミルクコロッケ', price: '¥450', description: '' },
      { id: 'a4', name: '季節野菜のサラダ', price: '¥680', description: '' },
      { id: 'a5', name: 'だし巻き玉子', price: '¥680', description: '' },
      { id: 'a6', name: 'ホルモン煮付け', price: '¥580', description: '' },
      { id: 'a7', name: 'レバかつ', price: '¥680', description: '' },
      { id: 'a8', name: '鶏かつ', price: '¥880', description: '' },
      { id: 'a9', name: '銀たら煮付け', price: '¥950', description: '' },
      { id: 'a10', name: '自家製たらマヨおにぎり', price: '¥300', description: '' },
      { id: 'a11', name: 'ご飯セット', price: '¥450', description: '' },
      { id: 'a12', name: 'お茶漬け', price: '¥580', description: '' },
      { id: 'a13', name: '鮪尾肉カレーライス', price: '¥900', description: '' },
      { id: 'a14', name: '海鮮ばらチラシ寿司', price: '¥1,580', description: '' },
    ]
  },
  {
    category: MenuCategory.DINNER,
    items: [
      { id: 'd1', name: '季節のおまかせコース', price: '¥6,600~', description: '先付、椀物、造り、焼物、煮物、食事、甘味。旬の食材を贅沢に使ったフルコース。(要予約)' },
      { id: 'd2', name: '季節の土鍋ご飯', price: '¥2,200~', description: '注文を頂いてから炊き上げる、香り高い逸品です。(2人前〜)' },
      { id: 'd3', name: '本日のお造り盛り合わせ', price: '¥1,800~', description: '市場直送。店主の目利きで選んだその日一番の鮮魚を盛り合わせで。' },
    ]
  },
  {
    category: MenuCategory.DRINKS,
    items: [
      { id: 'dr1', name: 'アサヒ瓶ビール(中)', price: '¥680', description: 'ノンアルコールビール ¥500' },
      { id: 'dr2', name: '自家製レモンサワー', price: '¥480', description: '樽熟成焼酎レモンサワー ¥580' },
      { id: 'dr3', name: '角ハイボール', price: '¥450', description: '樽熟成ハイボール ¥550' },
      { id: 'dr4', name: '焼酎 (グラス)', price: '¥450~', description: '黒霧島(¥450)、二階堂(¥450)、吉四六(¥550)、中々(¥550) ※ボトルあり' },
      { id: 'dr5', name: '果実酒', price: '¥450~', description: '柚子酒、梅酒、自家製梅酒、自家製びわ酒' },
      { id: 'dr6', name: 'ソフトドリンク', price: '各¥300', description: 'コーラ、ジンジャーエール、カルピス、烏龍茶、緑茶、自家製レモンスカッシュ' },
    ]
  }
];

export const GALLERY_IMAGES = [
  { id: 'g1', src: 'https://picsum.photos/800/600?random=101', alt: 'Seasonal Sashimi Platter', span: 'col-span-2 row-span-2' },
  { id: 'g2', src: 'https://picsum.photos/400/400?random=102', alt: 'Clay Pot Rice', span: 'col-span-1 row-span-1' },
  { id: 'g3', src: 'https://picsum.photos/400/600?random=103', alt: 'Tempura Selection', span: 'col-span-1 row-span-2' },
  { id: 'g4', src: 'https://picsum.photos/400/400?random=104', alt: 'Sake Collection', span: 'col-span-1 row-span-1' },
  { id: 'g5', src: 'https://picsum.photos/800/400?random=105', alt: 'Interior Atmosphere', span: 'col-span-2 row-span-1' },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: '1', imageUrl: 'https://picsum.photos/400/400?random=20', caption: '【季節の土鍋ご飯】今月は桜海老と筍の土鍋ご飯です。蓋を開けた瞬間の香りをお楽しみください。 #郡山グルメ #土鍋ご飯', likes: 85 },
  { id: '2', imageUrl: 'https://picsum.photos/400/400?random=21', caption: '本日の特選素材。立派な金目鯛が入荷しました。煮付けや炙り刺しでどうぞ。 #割烹食堂かいね #郡山ディナー', likes: 72 },
  { id: '3', imageUrl: 'https://picsum.photos/400/400?random=22', caption: 'ランチの一番人気「かいね御膳」。少しずつ色々な料理を楽しめると好評です。 #郡山ランチ', likes: 94 },
  { id: '4', imageUrl: 'https://picsum.photos/400/400?random=23', caption: '福島の地酒、新しい銘柄が入りました。春限定の「かすみ酒」もございます。 #日本酒 #福島', likes: 66 },
];