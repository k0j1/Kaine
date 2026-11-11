
import { MenuCategory, MenuSectionData, InstagramPost, MediaLink, PlacePhoto, PlacePhotoCategory, LightpaperSection, CommitmentPillar } from './types';

export const APP_VERSION = "1.0.6";
export const SITE_NAME = "割烹食堂かいね";
export const SITE_SUBTITLE = "Kappo Shokudo Kaine";

export const ADDRESS = "〒963-8862 福島県郡山市菜根4丁目4-4";
export const PHONE_NUMBER = "024-954-4579";
// Official Instagram profile link
export const RESERVATION_URL = "https://www.instagram.com/kaine_cuisine/";
// 公式note記事リンク（割烹食堂かいねのこだわり）
export const NOTE_ARTICLE_URL = "https://note.com/firm_emu2667/n/nf27eed0b29ce";
// 店舗アクセス用Googleマップリンク
export const GOOGLE_MAPS_LOCATION_URL = "https://www.google.com/maps/search/?api=1&query=%E5%89%B2%E7%83%99%E9%A3%9F%E5%A0%82%E3%81%8B%E3%81%84%E3%81%AD+%E7%A6%8F%E5%B3%B6%E7%9C%8C%E9%83%A1%E5%B1%B1%E5%B8%82";

// 添付された実際の割烹食堂かいねのお料理写真（メイン画像）
export const MAIN_HERO_IMAGE = "assets/aistudio/Img_2025_04_12_12_59_49_104cbefa.jpeg";

/**
 * 割烹食堂かいね 公式note記事「割烹食堂かいねのこだわり」に基づく5大哲学
 * https://note.com/firm_emu2667/n/nf27eed0b29ce
 */
export const KAINE_COMMITMENT_PILLARS: CommitmentPillar[] = [
  {
    id: 'name-philosophy',
    number: '01',
    title: '店名「かいね（海音）」に込めた想い',
    subtitle: '海の音色のように、五感すべてで四季の息吹を味わう',
    summary: '海から離れた福島県郡山の地であっても、市場直送の厳選鮮魚と旬の食材を通じて、五感すべてで「海の音色」や自然の営みを感じていただきたいという確固たる料理哲学が息づいています。',
    details: [
      '店名の「かいね」は「海の音色」に由来し、訪れた方の心に深く穏やかに染み入る和の食体験をお届けします。',
      '内陸部だからこそ鮮度に妥協せず、豊洲・気仙沼・小名浜などの港や信頼できる仲買から直送された魚介を厳選しています。',
      '料理の盛り付け、器の温もり、店内の静謐な空気感まで、五感で季節の移ろいをお愉しみいただけます。'
    ],
    image: 'assets/aistudio/Img_2025_04_12_12_59_49_104cbefa.jpeg',
    tag: '屋号の由来・料理哲学'
  },
  {
    id: 'daily-menu',
    number: '02',
    title: '毎日変わる「一期一会」のお品書き',
    subtitle: 'その日の最高鮮魚と対話し、素材が持つ魅力を極限まで引き出す',
    summary: '固定の定番メニューだけに甘んじることなく、その日に水揚げされた極上の海の幸や地元・福島の滋味豊かな季節野菜に合わせて毎日お品書きを仕立て直す「一期一会」の心構えを貫いています。',
    details: [
      '毎朝の仕入れ状況によって献立を決定。同じ魚種であっても脂の乗りや身の締まりを見極めて調理法を変えます。',
      'お造り、煮付け、炙り、たたき、椀物など、魚が持つ個性を最も引き立てる仕立てで提供します。',
      '「今日ここだけでしか出逢えない」特別な一皿との一期一会を大切にしています。'
    ],
    image: 'assets/aistudio/Img_2025_04_15_12_38_57_92f74187.jpeg',
    tag: '市場直送・日替わり旬鮮'
  },
  {
    id: 'homemade-seasonings',
    number: '03',
    title: '調味料まで手作りのこだわり',
    subtitle: '既製品には頼らない。厨房で一から創り出す滋味深い味の土台',
    summary: '既製品のタレやソースを一切使わず、干し椎茸と昆布の旨味を凝縮した「特製出汁ソース」、プラム等季節の果実をブレンドした「自家製果実塩」、長期熟成赤酢の「特製寿司酢」など、卓上の調味料すべてを手作りしています。',
    details: [
      '【名物専用 出汁ソース】肉料理や揚げ物の旨味を増幅させるため、干し椎茸と昆布、香味野菜をじっくり煮詰めて抽出。',
      '【自家製果実塩】季節の果実（プラムや柑橘）の自然な酸味と甘みを引き出し、ミネラル豊富な自然塩と合わせた特製調味塩。',
      '【特製合わせ醤油・赤酢】お造りには魚の甘みを引き出す自家製土佐醤油、ちらし寿司には芳醇なコクを生む赤酢ブレンドを採用。'
    ],
    image: 'assets/aistudio/Img_2025_03_26_12_57_15_96449b80.jpeg',
    tag: '自家製出汁ソース・季節の果実塩'
  },
  {
    id: 'ultimate-serving',
    number: '04',
    title: '最高の一杯・極上の一皿を届ける姿勢',
    subtitle: '低温調理の科学と一番出汁の伝統が紡ぎ出す至福の食感',
    summary: '看板料理「鶏かつ」は低温スロークック（低温火入れ）で水分を閉じ込めてから急速揚げし、極厚ながらシルクのような柔らかさを実現。「レバかつ」はフォアグラのようなとろとろの食感に仕上げています。',
    details: [
      '【鶏かつ・レバかつ】肉質変化を精密にコントロールする低温火入れ技術により、パサつきゼロの極上ジューシー食感。',
      '【黄金一番出汁】鹿児島県枕崎産の本枯節と北海道利尻産の一等昆布を使用し、毎朝雑味を出さず丁寧に抽出。',
      '【炊きたてご飯とお酒】定食のご飯はおかわり無料で常に最高の状態を保ち、夜は店主厳選の福島の希少地酒とペアリング。'
    ],
    image: 'assets/aistudio/Img_2025_03_23_13_06_02_1871321e.jpeg',
    tag: '低温火入れ・黄金一番出汁'
  },
  {
    id: 'hospitality',
    number: '05',
    title: '食を愉しむための「おもてなし」',
    subtitle: '気取らない「食堂」の温もりと、本格「割烹」の粋の調和',
    summary: '「割烹」の敷居を高く感じさせず、誰もが日常のなかで本物の日本料理を気軽に楽しめる「食堂」でありたい。気さくな会話と細やかな心配りで、お客様一人ひとりが心から寛げる空間を紡ぎます。',
    details: [
      '昼は満足感あふれる定食で活力をチャージし、夜は旬の酒菜やおまかせ会席で贅沢なひとときを。',
      'カウンター越しに交わされる店主との温かな対話と、細やかなおもてなし。',
      '一人呑み、ご家族連れ、お祝い事まで、あらゆるシーンで「来てよかった」と感じていただける居心地の良さを大切にしています。'
    ],
    image: 'assets/aistudio/Img_2025_04_12_12_59_49_104cbefa.jpeg',
    tag: '割烹と食堂の融合・おもてなし'
  }
];




// Placeholders for the images provided in the prompt. 
// In a real deployment, replace these URLs with the actual hosted image URLs.
export const MENU_SCANS = [
  { src: "https://placehold.co/600x850/f5f5f0/1a1a1a?text=Lunch+Menu+Scan", alt: "定食メニュー" },
  { src: "https://placehold.co/600x850/f5f5f0/1a1a1a?text=Ippin+Menu+Scan", alt: "一品メニュー" },
  { src: "https://placehold.co/600x850/f5f5f0/1a1a1a?text=Drink+Menu+Scan", alt: "ドリンクメニュー" }
];

// Google Driveの画像を直接表示するためのURL
export const PARKING_IMAGE_URL = "https://drive.google.com/uc?export=view&id=1u0MrL7ZpTTTwqMaFCG349yWCSBzlGUKa";

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

export const MEDIA_LINKS: MediaLink[] = [
  {
    id: 'note',
    siteName: '公式 note コラム',
    description: '『割烹食堂かいねのこだわり』店名「かいね」に込めた想い、毎日変わる一期一会のお品書き、調味料まで手作りの哲学、食を愉しむためのおもてなしを店主自ら綴る必読の公式記事です。',
    url: NOTE_ARTICLE_URL,
    image: 'assets/aistudio/Img_2025_04_12_12_59_49_104cbefa.jpeg',
    tags: ['店主のこだわり', '公式note記事', '自家製調味料', '料理哲学']
  },
  {
    id: 'instagram',
    siteName: '公式 Instagram',
    description: '店主が更新する公式インスタグラム。その日の日替わり定食や、入荷したばかりの旬の鮮魚・厳選日本酒の入荷情報をいち早くお届けします。日々の営業状況もご確認いただけます。',
    url: 'https://www.instagram.com/kaine_cuisine/',
    image: 'assets/aistudio/Img_2025_03_26_12_57_15_96449b80.jpeg',
    tags: ['最新情報', '日替わりメニュー', '旬の鮮魚']
  },
  {
    id: 'google',
    siteName: 'Google Maps',
    description: '店舗の正確な場所や、現在の混雑状況を確認できます。ナビ機能でスムーズにご来店いただけます。',
    url: GOOGLE_MAPS_LOCATION_URL,
    image: 'assets/aistudio/Img_2025_03_23_13_06_02_1871321e.jpeg',
    tags: ['店舗位置', 'アクセス', '地図']
  },
  {
    id: 'tabelog',
    siteName: '食べログ',
    description: '日本最大級のグルメサイト。詳細なメニュー情報や営業時間などが掲載されています。',
    url: 'https://www.google.com/search?q=%E5%89%B2%E7%83%99%E9%A3%9F%E5%A0%82%E3%81%8B%E3%81%84%E3%81%AD+%E9%A3%9F%E3%81%B9%E3%83%AD%E3%82%B0',
    image: 'assets/aistudio/Img_2025_04_15_12_38_57_92f74187.jpeg',
    tags: ['店舗情報', 'メニュー詳細', '評価']
  },
  {
    id: 'fukulabo',
    siteName: 'ふくラボ！',
    description: '福島県の地域情報ポータルサイト「ふくラボ！」。地元ならではの視点で、お店のこだわりや店主の人柄、おすすめの一品などが特集されています。',
    url: 'https://www.google.com/search?q=%E5%89%B2%E7%83%99%E9%A3%9F%E5%A0%82%E3%81%8B%E3%81%84%E3%81%AD+%E3%81%B5%E3%81%8F%E3%83%A9%E3%83%9C',
    image: 'assets/aistudio/Img_2025_03_23_13_06_02_1871321e.jpeg',
    tags: ['地元情報', '特集記事', 'インタビュー']
  }
];

/**
 * 割烹食堂かいね 実際のお料理写真コレクション
 * （店主・店舗より提供された本物の料理写真を高精細に展示）
 */
export const PLACE_PHOTOS: PlacePhoto[] = [
  {
    id: 'k1',
    title: '本鮪の贅沢炙り 海鮮丼仕立て',
    category: PlacePhotoCategory.SEAFOOD,
    imageUrl: 'assets/aistudio/Img_2025_04_12_12_59_49_104cbefa.jpeg',
    thumbnailUrl: 'assets/aistudio/Img_2025_04_12_12_59_49_104cbefa.jpeg',
    description: '市場直送の上質な本鮪を表面だけサッと炙り、たっぷりの青葱、香り高い刻み海苔、炒り胡麻をあしらった珠玉の一皿。香ばしさと極上の脂の甘みが口いっぱいに広がります。',
    price: '本日の特選海鮮',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '割烹食堂かいね 実際のお料理',
    rating: 5,
    featured: true,
    tags: ['本鮪炙り', '市場直送鮮魚', '胡麻と青葱', '特選海鮮'],
    has3D: true,
    video3DUrl: 'assets/aistudio/gemini_generated_video_b2e289ab_9df8df7a.mp4'
  },
  {
    id: 'k2',
    title: '旬魚のタタキ 香味ガーリック仕立て',
    category: PlacePhotoCategory.SEAFOOD,
    imageUrl: 'assets/aistudio/Img_2025_03_26_12_57_15_96449b80.jpeg',
    thumbnailUrl: 'assets/aistudio/Img_2025_03_26_12_57_15_96449b80.jpeg',
    description: '絶妙な火入れで香ばしく焼き締めた旬の鮮魚に、クリスピーなフライドガーリックとシャキシャキの香味野菜、特製出汁タレを合わせた極上の酒菜。',
    price: '旬の酒菜',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '割烹食堂かいね 実際のお料理',
    rating: 5,
    featured: true,
    tags: ['旬魚タタキ', '自家製タレ', '香味ガーリック', 'お酒のアテ']
  },
  {
    id: 'k3',
    title: '桜生麩と丸大根の割烹仕立て 黄金一番出汁',
    category: PlacePhotoCategory.SEASONAL,
    imageUrl: 'assets/aistudio/Img_2025_03_23_13_06_02_1871321e.jpeg',
    thumbnailUrl: 'assets/aistudio/Img_2025_03_23_13_06_02_1871321e.jpeg',
    description: '枕崎産鰹節と利尻昆布から毎日丁寧に引く黄金の澄まし出汁。季節の桜生麩、出汁が芯まで染みた大根、香り高い山葵が織りなす和食割烹の真髄。',
    price: '季節の椀物',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '割烹食堂かいね 実際のお料理',
    rating: 5,
    featured: true,
    tags: ['黄金一番出汁', '桜生麩', '出汁大根', '割烹椀物'],
    has3D: true,
    video3DUrl: 'assets/aistudio/gemini_generated_video_ab9a9cdb_a47598c0.mp4'
  },
  {
    id: 'k4',
    title: '天然鮮魚と生アオサ海苔の彩り和え',
    category: PlacePhotoCategory.SEAFOOD,
    imageUrl: 'assets/aistudio/Img_2025_04_15_12_38_57_92f74187.jpeg',
    thumbnailUrl: 'assets/aistudio/Img_2025_04_15_12_38_57_92f74187.jpeg',
    description: '豊かな海の香りを纏う生アオサ海苔と、プリプリの天然白身魚、青葱、金胡麻を特製合わせ出汁で仕立てた海鮮小鉢。鮮やかな緑と魚の旨味が調和します。',
    price: '旬の一品',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '割烹食堂かいね 実際のお料理',
    rating: 5,
    featured: true,
    tags: ['生アオサ海苔', '天然鮮魚', '金胡麻', '市場直送']
  }
];

/**
 * 割烹食堂かいね ライトペーパー（設計仕様書・料理技術規格・アップデート履歴）
 */
export const LIGHTPAPER_DATA: LightpaperSection[] = [
  {
    id: 'concept',
    title: '店舗コンセプトと屋号の由来',
    subtitle: '海の音色のように、穏やかで心に染み入る本格割烹料理を日常に',
    content: [
      '「割烹食堂 かいね」の店名は「海の音色（かいね）」に由来しています。気取らず立ち寄れる食堂の親しみやすさと、銀座や老舗割烹で培われた本格的な板前技術を融合させた、郡山市菜根の隠れ家的名店です。',
      'ランチタイムには手間暇を惜しまず仕込んだ「鶏かつ定食」「レバかつ定食」「海鮮ばらチラシ」を良心的な価格で提供し、ディナータイムには旬の食材を余すところなく味わえる会席コースや土鍋ご飯、希少な地酒をご堪能いただけます。'
    ],
    specs: [
      { label: '屋号', value: '割烹食堂 かいね（海音）' },
      { label: '所在地', value: '福島県郡山市菜根4丁目4-4' },
      { label: '料理長', value: '和食割烹一筋の熟練板前' },
      { label: 'こだわり', value: '自家製調味料・低温調理・市場直送鮮魚・一番出汁' }
    ]
  },
  {
    id: 'culinary-specs',
    title: '調理技術規格・クラフトマンシップ',
    subtitle: '科学的アプローチと伝統技法が織りなす「かいねの味」',
    content: [
      '看板料理「鶏かつ」は、秘伝の調味液に漬け込んで肉質を安定させた後、厳密な温度管理下で低温スロークック（低温火入れ）を実施。仕上げに高温の良質油で短時間揚げることで、極厚肉でありながらシルクのような柔らかさと溢れ出る肉汁を両立しています。',
      '調味料もすべて厨房内で手作り。干し椎茸と昆布の旨味を凝縮させた「専用出汁ソース」、プラム等の果実をブレンドした「自家製果実塩」、赤酢を用いた「特製寿司酢」など、既製品に頼らない誠実な味づくりを徹底しています。'
    ],
    specs: [
      { label: '鶏かつ火入れ', value: '秘伝ソミュール液浸漬 ＋ 厳密低温調理 ＋ 急速白衣揚げ' },
      { label: 'レバかつ仕込み', value: '徹底した血抜き・下処理 ＋ フォアグラ仕立ての絶妙火加減' },
      { label: '出汁規格', value: '枕崎産本枯節 × 利尻一等昆布 毎日抽出の黄金一番出汁' },
      { label: '寿司酢', value: '長期熟成赤酢ブレンド（海鮮の旨味を倍加）' }
    ]
  },
  {
    id: 'changelog',
    title: 'デジタル体験仕様・アップデート履歴',
    subtitle: 'WebサイトおよびFarcaster Mini App連携の技術仕様',
    content: [
      '【v1.0.6 アップデート】AIコンシェルジュ機能を完全に削除。',
      '【v1.0.5 アップデート】ご提供いただいた360度ターンテーブル撮影動画から料理を全方位から立体的に確認できる「3D 360°インタラクティブ料理ビューアー」機能を新設。「本鮪の贅沢炙り丼」「桜生麩と丸大根の割烹椀」の2品において、左右ドラッグ・スワイプによる360度シームレス回転、視点プリセット（正面0°・右面90°・背面180°・左面270°）、ズーム拡大検査が可能になりました。',
      '【v1.0.4 アップデート】公式note記事「割烹食堂かいねのこだわり（https://note.com/firm_emu2667/n/nf27eed0b29ce）」への公式リンクを追加。noteで語られている「店名（海の音色）に込めた想い」「毎日変わる一期一会のお品書き」「調味料まで手作りのこだわり」「最高の一杯を届ける姿勢」「割烹と食堂のおもてなし」の5大柱をこだわりセクション（Concept）およびメディアセクションに完全統合。',
      '【v1.0.3 アップデート】Googleマップからの写真掲載に関する文言および機能を完全削除。店舗・ユーザーより提供された「本鮪の贅沢炙り丼」「旬魚のタタキ 香味ガーリック仕立て」「桜生麩と丸大根の椀物」「天然鮮魚と生アオサ海苔和え」の実際のお料理写真をページのメイン画像（Hero）および料理ギャラリーに全面適用。',
      '【v1.0.2 アップデート】空席状況・WEB予約機能（Airリザーブ）を完全削除。',
      '【v1.0.1 アップデート】Farcaster Mini Apps SDK初期化処理（sdk.actions.ready）、単一グローバルテーマ（AppTheme）統制、OOPデータモデル（PhotoItemModel / GalleryService）の導入。'
    ],
    specs: [
      { label: '現在バージョン', value: 'v1.0.6' },
      { label: 'AIアシスタント', value: '完全削除（シンプル軽量化）' },
      { label: '3D料理ビューアー', value: '360° ターンテーブル動画連動（全方位ドラッグ回転・ズーム）' },
      { label: '公式note記事連携', value: '割烹食堂かいねのこだわり（全文リンク）' },
      { label: 'こだわり5大方針', value: '海の音色・一期一会・自家製調味料・至高の火入れ・おもてなし' },
      { label: 'メインビジュアル', value: '割烹食堂かいね 実際のお料理写真4選' },
      { label: '写真掲載方針', value: '仮画像を完全排除し、実物写真のみで構成' },
      { label: '予約機能', value: 'WEB予約削除（お電話・店頭対応に一本化）' },
      { label: 'デザインシステム', value: 'AppTheme（単一グローバルテーマ管理）' },
      { label: '対応規格', value: 'Farcaster Mini App v1' }
    ]
  }
];

