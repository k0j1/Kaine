
import { MenuCategory, MenuSectionData, MediaLink, PlacePhoto, PlacePhotoCategory, LightpaperSection, CommitmentPillar } from './types';

export const APP_VERSION = "1.0.11";
export const SITE_NAME = "割烹食堂かいね";
export const SITE_SUBTITLE = "Kappo Shokudo Kaine";

export const ADDRESS = "〒963-8862 福島県郡山市菜根4丁目4-4";
export const PHONE_NUMBER = "024-954-4579";
// Official Instagram profile link
export const RESERVATION_URL = "https://www.instagram.com/kaine_cuisine/";
// 公式note記事リンク（割烹食堂かいねのこだわり）
export const NOTE_ARTICLE_URL = "https://note.com/firm_emu2667/n/nf27eed0b29ce";
// 公式note記事リンク（定番ランチメニュー・全5品）
export const NOTE_LUNCH_ARTICLE_URL = "https://note.com/firm_emu2667/n/n6fd871f52b1f";
// 公式note記事リンク（低温火入の肉料理・全21品）
export const NOTE_MEAT_ARTICLE_URL = "https://note.com/firm_emu2667/n/n2f10b059166f";
// 公式note記事リンク（麺料理・全11品）
export const NOTE_NOODLE_ARTICLE_URL = "https://note.com/firm_emu2667/n/nc0e9b07a2b93";
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




// 添付された実際の割烹食堂かいね 駐車場案内図
export const PARKING_IMAGE_URL = "assets/aistudio/image_3bbb772d.png";

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
    id: 'note-lunch',
    siteName: '公式 note「定番ランチメニュー」',
    description: '昼の看板「鶏かつ（150g）」「鶏かつW（300g）」をはじめ、「レバカツ定食」「お刺身定食」「海鮮バラちらし」まで、割烹食堂かいねが誇る王道の昼定食ラインナップをご紹介。',
    url: NOTE_LUNCH_ARTICLE_URL,
    image: 'https://assets.st-note.com/img/1795486825-f0PhDM9HyYv8K3VLlGk5S4s2.png',
    tags: ['定番ランチ', '鶏かつ定食', 'お刺身定食', '海鮮バラちらし']
  },
  {
    id: 'note-meat',
    siteName: '公式 note「低温火入の肉料理」',
    description: '看板の「鶏かつ」をはじめ、福島牛・仙台牛ステーキ、低温調理レバニラ、豚かしら、ロースト3種盛り合わせまで、温度と時間にこだわり抜いた全21品の肉料理アーカイブ。',
    url: NOTE_MEAT_ARTICLE_URL,
    image: 'https://assets.st-note.com/img/1795433930-ElUqyfiWhrcV9OwQMP6N70J5.png',
    tags: ['低温火入', '鶏かつ・鶏レバー', '福島牛・仙台牛', '全21品掲載']
  },
  {
    id: 'note-noodles',
    siteName: '公式 note「特製 麺料理」',
    description: '三色素麺・梅そうめんから鯛出汁塩だれラーメン、本鮪の目玉出汁カレーうどん、鴨葱・葱鮪蕎麦、鮪の肉味噌冷麺、塩出汁米麺まで、出汁が主役の全11品の麺料理特集。',
    url: NOTE_NOODLE_ARTICLE_URL,
    image: 'https://assets.st-note.com/img/1795435808-dVKg8Nyec59MA76tmYvRFJCi.png',
    tags: ['和食屋の麺料理', '本格出汁', '蕎麦・うどん・冷麺', '全11品掲載']
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
    tags: ['本鮪炙り', '市場直送鮮魚', '胡麻と青葱', '特選海鮮']
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
    tags: ['黄金一番出汁', '桜生麩', '出汁大根', '割烹椀物']
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
  },
  // =========================================================================
  // 公式note「【割烹食堂かいね】低温火入の肉料理」全21品
  // https://note.com/firm_emu2667/n/n2f10b059166f
  // =========================================================================
  // --- 鶏料理 (7品) ---
  {
    id: 'note-meat-1',
    title: '鶏かつ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '鶏料理',
    imageUrl: 'https://assets.st-note.com/img/1795433930-ElUqyfiWhrcV9OwQMP6N70J5.png',
    description: '当店昼の看板メニュー、低温火入れによって仕上げる国産鶏ももかつ。じっくりと低温で火入れし続ける事でしっとり柔らかく皮で覆うように巻くことで、よりジューシーに仕上げています。出汁に1晩漬け込んで火入れをする事で独特の臭みや雑味を抑えこみ旨味を増しています。干し椎茸や昆布をふんだんに使って仕込む特製出汁ソースに、季節の果実等を使った自家製の塩を添えてお召し上がりください。',
    price: '昼の看板メニュー',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    featured: true,
    tags: ['低温火入', '国産鶏もも', '出汁ソース', '果実塩']
  },
  {
    id: 'note-meat-2',
    title: '鶏レバニラ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '鶏料理',
    imageUrl: 'https://assets.st-note.com/img/1795434765-Bn2OsDrA9M3HthUmEpYyd64T.png',
    altImageUrl: 'https://assets.st-note.com/img/1795437068-6PZTtguxmQeO5B7pFfSbjV8q.png',
    description: '丁寧な下処理で血生臭さは感じさせない上品な味わいでトロトロの食感と濃厚な味わいが魅力。にんにくやバター、りんごや唐辛子を加えた特製辛味噌で仕上げるニラダレをたっぷりとかけてお召し上がりください。（低温で1時間以上かけて火入をした鶏のレバーとハツを使用）',
    price: '低温調理 鶏料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    featured: true,
    tags: ['低温火入', '鶏レバー', '特製辛味噌', 'ニラダレ']
  },
  {
    id: 'note-meat-3',
    title: '鶏レバニラ ニンニク味噌',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '鶏料理',
    imageUrl: 'https://assets.st-note.com/img/1775693958-kpjmNu3FbslQn5z7KctSGTZy.png',
    description: '低温調理をした鶏レバーはクセがなくねっとり濃厚な味わい。たっぷりのニラと甘めのニンニク味噌バターの濃い味付けが好相性。ご飯が進みます。',
    price: '低温調理 鶏料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '鶏レバー', 'ニラ', 'ニンニク味噌バター']
  },
  {
    id: 'note-meat-4',
    title: '鶏レバ刺し',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '鶏料理',
    imageUrl: 'https://assets.st-note.com/img/1795429375-QoeJIc5OdhuYaD3l1pGg4nm2.png',
    description: '丁寧な下処理と低温火入れで仕上げた、ねっとり濃厚で臭みのない上品な鶏レバ刺し。',
    price: '低温調理 鶏料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '鶏レバー', '鶏レバ刺し']
  },
  {
    id: 'note-meat-5',
    title: '鶏レバミルクチーズ煮定食',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '鶏料理',
    imageUrl: 'https://assets.st-note.com/img/1795428355-oRrvVD5amLz3KPBEFqYU26hN.png',
    description: 'ミルク＋出汁＋チーズの濃厚な旨味が低温火入で仕上がるねっとり鶏レバーとも相性抜群です。通常メニューのレバかつとはひと味違う味わいを是非ご賞味下さい。',
    price: '低温調理 定食',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', 'ミルク', '出汁', 'チーズ']
  },
  {
    id: 'note-meat-6',
    title: '鶏天定食',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '鶏料理',
    imageUrl: 'https://assets.st-note.com/img/1795427739-rmMs0fHTW5NivtYj31wLSGdk.png',
    description: '63℃約2時間半火入れをした鶏胸肉を使用。鶏胸肉でも肉質は固くなっておらず、柔らかくしっとり仕上がります。脂身はほんのり甘いので、たっぷりのおろしポン酢でお召し上がりください。',
    price: '低温調理 定食',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['鶏胸肉', '63℃低温火入', '大根おろし', 'ポン酢']
  },
  {
    id: 'note-meat-7',
    title: '鶏天丼と梅乳麺定食',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '鶏料理',
    imageUrl: 'https://assets.st-note.com/img/1775694215-CuckGIQbl1SPBeE8nRho46zi.png',
    description: '低温で仕上げた鶏胸肉はしっとり柔らか仕立て。ご飯と合うよう甘だれをたっぷりかけて提供します。乳麺（あたたかい素麺）は梅を練りこんだ麺を使用。',
    price: '低温調理 定食',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '鶏天丼', '梅乳麺']
  },
  // --- 牛料理 (9品) ---
  {
    id: 'note-meat-8',
    title: '福島牛ガーリックステーキ丼',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795428791-Z5EubamsqiH9w74DTv1pYQJN.png',
    description: '福島牛ザブトン（肩ロース芯）を使用。たっぷりのにんにくで香り出しをしたオイルで両面さっと焼き上げレア仕立てにして、肉汁にきのこを加えてバターと焦がし醤油で仕上げてご飯も進む濃厚な味わいです。行者にんにくの醤油漬けを添えて、天にはサクサクのにんにくチップをたっぷりとかけてお召し上がりください。',
    price: '厳選 牛料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    featured: true,
    tags: ['福島牛', 'ザブトン', '焦がし醤油', '行者にんにく']
  },
  {
    id: 'note-meat-9',
    title: '和牛ガーリックステーキ丼 ~濃厚ソース仕立て~',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795436467-bsrMc1f9Eje4XORQgw5tSUzy.png',
    description: '国産牛（福島牛など仕入れにより）を強火でサッと炙りレア仕立てでガツンとニンニクを効かせて、肉汁とバター醤油を加えた濃厚ソースをたっぷりとかけているのでご飯が進みます。',
    price: '厳選 牛料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['国産牛', '炙りレア', 'バター醤油', 'ニンニク']
  },
  {
    id: 'note-meat-10',
    title: '和牛ローストビーフ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795434213-Fxj6tbeCGoknQcUuf849AZWL.png',
    description: '12時間低温火入れした国産牛もも、程よくサシも入っているので、口当たりもよくしっとり柔らか、甘みもしっかり感じる仕上がりに。玉ねぎをふんだんに使って肉汁と共にじっくりと煮詰めた甘辛ソースと季節の塩を添えてお召し上がりください。',
    price: '12時間低温火入',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    featured: true,
    tags: ['低温火入', '国産牛もも', '甘辛ソース', '季節塩']
  },
  {
    id: 'note-meat-11',
    title: '和牛ローストビーフ丼 ~塩山葵タレ~',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795436219-6FWsyYd0q28La7cCZVxpuI31.png',
    description: '低温で半日以上かけて仕込む当店自慢のローストビーフ。程よくサシの入った和牛モモ肉は出汁に1晩漬け込む事で独特の臭みは感じさせず旨味を閉じ込めています。じっくりと火入れする事で驚く程しっとり柔らかく噛むほどに脂の優しい甘さ、牛の旨味が堪能出来ます。本山葵と牛の出汁を活かした塩山葵のタレを添えて。',
    price: '半日以上低温火入',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '和牛モモ', 'ローストビーフ', '塩山葵']
  },
  {
    id: 'note-meat-12',
    title: '国産牛もも ローストビーフ丼 ~塩わさび~',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795432133-NobIFgPRkaED3e6pMOXs40yh.png',
    description: 'A4等級福島県産牛もものブロック肉を丸一日幽庵地に漬け込み、5時間かけて低温火入れ。程よいサシで口当たり滑らか、とろける口溶け。牛の旨味の詰まった出汁を煮詰めて甘辛く仕上げました。本生わさびをふんだんに加えた塩わさびダレを添えて。',
    price: 'A4等級 福島牛',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['A4等級', '福島牛', '幽庵地', '塩わさび']
  },
  {
    id: 'note-meat-13',
    title: '仙台牛肩ロースガーリックステーキ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795433078-iGWfKzMYFj47op5lswNy8xZI.png',
    description: '融点の低い仙台牛は柔らかく口溶けが良い。クリーミーな脂の甘み、旨み。サシと赤身のバランスが絶妙で肉汁を活かしたコクのある濃厚なガーリックソースが食欲をそそります。',
    price: '仙台牛 特選',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['仙台牛', '肩ロース', 'ガーリックソース']
  },
  {
    id: 'note-meat-14',
    title: '仙台牛ハツステーキ ~レモンバター醤油~',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795432776-3Fsw0H9WZlEOXftJkPSx6qvg.png',
    description: 'コリコリ食感は残しつつ歯切れの良い柔らかさは低温火入ならではです。肉汁にレモンバター醤油を加えてコクがありながら、さっぱりとした味わいに仕上がりました。',
    price: '仙台牛 低温火入',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '仙台牛', 'ハツ', 'レモンバター醤油']
  },
  {
    id: 'note-meat-15',
    title: '和牛ハツステーキ ~ニンニクねぎ塩~',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795434511-HdtGfzsgS4hXjTiYBPonc1q2.png',
    description: '低温火入れしたハツをさっと焼き目をつけ、ニンニクと胡麻で香りを引き立てレモン汁、玉葱と長葱をふんだんに加えた特製ねぎ塩だれをたっぷりとかけてお召し上がりください。',
    price: '和牛 低温火入',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '和牛', 'ハツ', '特製ねぎ塩だれ']
  },
  {
    id: 'note-meat-16',
    title: '上ミノステーキ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '牛料理',
    imageUrl: 'https://assets.st-note.com/img/1795435218-1oOD7xgHyhNiJCd5KFZej9vT.png',
    description: '肉厚な和牛の上ミノを使用。下処理は最低限に留め旨味は逃さずに出汁に漬け込んで旨味を補っています。低温火入の効果でよりジューシーにさっと焼き色をつけて、コリコリ食感は残しつつ濃厚な辛味噌バター仕立てが上ミノの旨味とマッチします。',
    price: '和牛 低温火入',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '和牛上ミノ', '出汁漬け', '辛味噌バター']
  },
  // --- 豚料理 (4品) ---
  {
    id: 'note-meat-17',
    title: '豚かしらガーリックステーキ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '豚料理',
    imageUrl: 'https://assets.st-note.com/img/1795432611-YwkvUPgONK4BQZnfF5DRGXq6.png',
    description: '低温でじっくり5時間火入れした豚のかしらはまるで上質なハムのよう。表面をさっと炙って、ニンニクをがっつりと効かせたバター醤油をたっぷりとかけてお召し上がりください。',
    price: '5時間低温火入',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '豚かしら', 'バター醤油', 'ガーリック']
  },
  {
    id: 'note-meat-18',
    title: 'ローストポークステーキ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '豚料理',
    imageUrl: 'https://assets.st-note.com/img/1795428512-PIajpdA9Z0es2GY5RygMOhz1.png',
    description: '国産豚ひれ、肩ロース、バラを低温で15時間火入れする事で柔らかくジューシーに仕上げています。煮汁を活かした濃厚ガーリックバターソースをたっぷりとかけて。',
    price: '15時間低温火入',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['国産豚', '15時間低温火入', 'ガーリックバターソース']
  },
  {
    id: 'note-meat-19',
    title: '国産豚バラ＋肩ロース葱塩レモンステーキ',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '豚料理',
    imageUrl: 'https://assets.st-note.com/img/1795436943-HbyC1id3gGnDvPO6TF8IsXKU.png',
    description: '低温で火入した豚肉はしっとり柔らかく長ねぎとにんにく・胡麻をふんだんに使用した濃厚葱塩ダレですが、仕上げに檸檬を加える事でコクもあり爽やかな味わいがクドさを感じさせません。',
    price: '低温調理 豚料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '豚バラ', '豚肩ロース', '葱塩ダレ']
  },
  {
    id: 'note-meat-20',
    title: '国産豚タンステーキ ~ねぎ塩檸檬仕立~',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '豚料理',
    imageUrl: 'https://assets.st-note.com/img/1795435017-N5sqVmvweThy0Yoli8rGWCfI.png',
    description: '国産豚の舌先から元まで使用。余分な脂や旨味まで抜けてしまうため下処理・臭み抜き等は丁寧かつ最低限にして、出汁に漬け込み特有の雑味を抑え込み旨味を補っています。低温火入をしてから表面をサッと炙り檸檬＋ねぎ塩だれをたっぷりとかけてお召し上がりください。',
    price: '低温調理 豚料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    tags: ['低温火入', '国産豚タン', '出汁漬け', 'ねぎ塩檸檬']
  },
  // --- 盛り合わせ (1品) ---
  {
    id: 'note-meat-21',
    title: 'ロースト3種',
    category: PlacePhotoCategory.MEAT_LOWTEMP,
    subCategory: '盛り合わせ',
    imageUrl: 'https://assets.st-note.com/img/1795432320-4pu9QPsjCXJ31RNkmaLDGTKv.png',
    description: '国産A4等級牛もも肉 低温10時間火入れ ~塩本わさびたれ~／国産豚肩ロース肉 低温18時間火入れ ~胡麻ねぎ塩だれ~／米国産牛タン 低温20時間火入れ ~にんにくねぎ塩レモンだれ~。それぞれの肉質に合わせて最適の温度帯と時間で調整して仕上げています。肉汁も余すことなく使用した濃厚仕立てのたれでお召し上がりください。',
    price: '特選 3種盛り合わせ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 低温火入の肉料理',
    sourceArticleUrl: NOTE_MEAT_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】低温火入の肉料理',
    featured: true,
    tags: ['A4牛もも10h', '豚肩ロース18h', '牛タン20h', '3種盛り合わせ']
  },
  // =========================================================================
  // 公式note「【割烹食堂かいね】麺料理」全11品
  // https://note.com/firm_emu2667/n/nc0e9b07a2b93
  // =========================================================================
  // --- 素麺（そうめん） (2品) ---
  {
    id: 'note-noodle-1',
    title: '三色素麺〜とまと出汁〜定食',
    category: PlacePhotoCategory.NOODLES,
    subCategory: '素麺（そうめん）',
    imageUrl: 'https://assets.st-note.com/img/1777419724-MwX2D9FEhcbRirOtlIQ0p6aj.png',
    description: '茶・玉子・梅の三種そうめんの合盛り。天にはみょうがを添えて、そうめんの周りには出汁水を散らしています。とまとと昆布でひいた出汁は旨味たっぷりで、刻んだおくらと大葉、とまとを加えたつゆに絡ませてさっぱりと召し上がれます。',
    price: '素麺 定食',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['茶・玉子・梅そうめん', 'とまと昆布出汁', '出汁水']
  },
  {
    id: 'note-noodle-2',
    title: '梅そうめん',
    category: PlacePhotoCategory.NOODLES,
    subCategory: '素麺（そうめん）',
    imageUrl: 'https://assets.st-note.com/img/1795435679-m5Et1oaLnlAOIVJkXSPdr6D4.png',
    description: 'トマトの旨味が詰まったほんのり酸味を効かせた出汁は梅を麺に練りこんだ梅そうめんとの相性も抜群。定食のお供に、夜の〆の1杯にもおすすめ。',
    price: '素麺・〆の一杯',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['梅そうめん', 'トマト出汁', '〆の一杯']
  },
  // --- ラーメン (1品) ---
  {
    id: 'note-noodle-3',
    title: '鯛出汁塩だれ鶏ももラーメン',
    category: PlacePhotoCategory.NOODLES,
    subCategory: 'ラーメン',
    imageUrl: 'https://assets.st-note.com/img/1795435808-dVKg8Nyec59MA76tmYvRFJCi.png',
    description: '鯛をメインに数種の魚介と昆布を炊き合わせた出汁をじっくり煮詰めた自家製の塩ダレで仕上げる、すっきりとした味わいの塩出汁ラーメン。灰分の低い良質小麦の麺に低温火入れ鶏ももをのせた、飲んだ後の締めにもおすすめの一杯です。',
    price: '魚介塩出汁ラーメン',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    featured: true,
    tags: ['鯛出汁', '自家製塩ダレ', '低温火入鶏もも', '昆布']
  },
  // --- うどん (3品) ---
  {
    id: 'note-noodle-4',
    title: '豆乳クリーミーカレーうどん',
    category: PlacePhotoCategory.NOODLES,
    subCategory: 'うどん',
    imageUrl: 'https://assets.st-note.com/img/1795436112-rMfPpxYRm2IigeCQkqwaFycz.png',
    description: '鰤のカブトとソイ、昆布と鰹の合わせ出汁に豆乳をベースに練り上げたカレーを合わせ、濃厚な魚の出汁とコクが味わえる特製カレーうどん。コシのある喉越しの良い麺とも相性抜群です。',
    price: '特製 うどん',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['鰤・ソイ魚出汁', '鰹昆布出汁', '豆乳カレー']
  },
  {
    id: 'note-noodle-5',
    title: '濃厚豆乳クリーミーカレーうどん ~本鮪の目玉出汁仕立て 讃岐生うどん~',
    category: PlacePhotoCategory.NOODLES,
    subCategory: 'うどん',
    imageUrl: 'https://assets.st-note.com/img/1795436109-lJMu2f0tKDZOev98sYX5VjnC.png',
    description: '本鮪の目玉の濃厚な出汁を活かした特製カレーうどん。国産大豆100%「スゴイダイズ」をベースに使用し、本鮪の目玉の脂や出汁のコクと調和した深い余韻が楽しめます。',
    price: '本鮪出汁 讃岐生うどん',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    featured: true,
    tags: ['本鮪目玉出汁', '讃岐生うどん', 'スゴイダイズ', '濃厚カレー']
  },
  {
    id: 'note-noodle-6',
    title: '春野菜出汁桜うどん',
    category: PlacePhotoCategory.NOODLES,
    subCategory: 'うどん',
    imageUrl: 'https://assets.st-note.com/img/1795436112-SoIFO0rJ35xZnHVCEvb6Ly19.png',
    description: '春野菜のおひたしの出汁に、ほんのりと桜の味わいと香りを纏った桜うどんが織りなす季節の一杯。',
    price: '季節の桜うどん',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['桜うどん', '春野菜', 'おひたし出汁']
  },
  // --- 蕎麦（そば） (2品) ---
  {
    id: 'note-noodle-7',
    title: '鴨葱蕎麦',
    category: PlacePhotoCategory.NOODLES,
    subCategory: '蕎麦（そば）',
    imageUrl: 'https://assets.st-note.com/img/1795322700-gTDZtAKPWQpJS4n8aj7oHFGM.png',
    description: '鴨の切り身に蕎麦粉を纏わせて炙ってから鴨出汁を摂ることで旨味の強い出汁に仕上がっています。お昼の定食には自家製たらこを乗せたいなり寿司をセットでご提供。',
    price: '本格 蕎麦',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['炙り鴨出汁', '蕎麦', '自家製たらこいなり']
  },
  {
    id: 'note-noodle-8',
    title: '葱鮪（ねぎま）蕎麦 ~鮪天ぷら付~',
    category: PlacePhotoCategory.NOODLES,
    subCategory: '蕎麦（そば）',
    imageUrl: 'https://assets.st-note.com/img/1795323254-FlcSBwYzbv1U57rsLW2akNny.png',
    description: '醤油と昆布の旨味を加えた出汁に炙った葱と本鮪の脂身から摂る濃厚鮪出汁。3種の蕎麦粉と山芋で打った極細ながらコシのある3割蕎麦に、鮪赤身の天ぷらと春菊を添えて。',
    price: '鮪天ぷら付 蕎麦',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['本鮪脂身出汁', '3種蕎麦粉・山芋', '鮪天ぷら', '春菊']
  },
  // --- 冷麺（れいめん） (2品) ---
  {
    id: 'note-noodle-9',
    title: '鮪の肉味噌冷麺',
    category: PlacePhotoCategory.NOODLES,
    subCategory: '冷麺（れいめん）',
    imageUrl: 'https://assets.st-note.com/img/1795323474-pnkDO51G9a2RoQE8vB7Y6Swi.png',
    description: '鮪の中落ちをふんだんに叩いてひき肉仕立てに。ニンニク・生姜・胡麻の香りに玉ねぎとトマト、出汁を加えた味噌仕立てのコクのある漬け汁が蕎麦粉入りの韓国風冷麺と好相性。',
    price: '特製 冷麺',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['鮪中落ち', '肉味噌漬け汁', '蕎麦粉冷麺']
  },
  {
    id: 'note-noodle-10',
    title: '胡麻味噌冷麺',
    category: PlacePhotoCategory.NOODLES,
    subCategory: '冷麺（れいめん）',
    imageUrl: 'https://assets.st-note.com/img/1795435962-SnaltTx1ijJPe4DwF9dkmchG.png',
    description: '白練り胡麻をベースに味噌を加えて仕込む特製出汁に、蕎麦粉や馬鈴薯澱粉を練りこんだ香り良くコシのある韓国風の麺を使用。旬の野菜を添えた夏季のおすすめメニュー。',
    price: '夏季限定 冷麺',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['白練り胡麻', '味噌出汁', '韓国風麺', '旬野菜']
  },
  // --- 米麺（こめめん） (1品) ---
  {
    id: 'note-noodle-11',
    title: '塩出汁米麺（サイドメニュー）',
    category: PlacePhotoCategory.NOODLES,
    subCategory: '米麺（こめめん）',
    imageUrl: 'https://assets.st-note.com/img/1777419546-qA28zlhW6eDPJpiHT9jtQOad.png',
    description: '昆布と鰹の優しい吸い地に米＋タピオカのもっちり麺を合わせ、魚の出汁を煮詰めて作る特製塩ダレをかけた魚介の旨味広がるお米の麺。〆にもおすすめです。',
    price: 'サイドメニュー・〆',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 特製 麺料理',
    sourceArticleUrl: NOTE_NOODLE_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】麺料理',
    tags: ['米＋タピオカ麺', '昆布鰹吸い地', '特製塩ダレ']
  },
  // =========================================================================
  // 公式note「【割烹食堂かいね】定番ランチメニュー」全5品
  // https://note.com/firm_emu2667/n/n6fd871f52b1f
  // =========================================================================
  {
    id: 'note-lunch-1',
    title: '鶏かつ定食（150g）',
    category: PlacePhotoCategory.SIGNATURE,
    subCategory: '定番ランチメニュー',
    imageUrl: 'https://assets.st-note.com/img/1795486825-f0PhDM9HyYv8K3VLlGk5S4s2.png',
    description: 'じっくりと低温で火入れし続ける事でしっとり柔らかく、皮で覆うように巻くことでよりジューシーに仕上げています。出汁に1晩漬け込んで火入れをする事で独特の臭みや雑味を抑えこみ旨味を増しています。干し椎茸や昆布をふんだんに使って仕込む特製出汁ソースと、季節の果実等を使った自家製の塩を添えて。',
    price: '¥980',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 定番ランチメニュー',
    sourceArticleUrl: NOTE_LUNCH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】定番ランチメニュー',
    featured: true,
    tags: ['低温火入', '国産鶏もも', '干し椎茸・昆布', '出汁ソース', '果実塩']
  },
  {
    id: 'note-lunch-2',
    title: '鶏かつW定食（300g）',
    category: PlacePhotoCategory.SIGNATURE,
    subCategory: '定番ランチメニュー',
    imageUrl: 'https://assets.st-note.com/img/1795487504-Bfiv8cKHFZ6h057EmDsukteO.png',
    description: '国産鶏もも肉をたっぷり300g使用した満足感あふれるダブル定食。出汁に1晩漬け込み低温火入れすることで極厚ながら驚くほどしっとりジューシー。干し椎茸と昆布の特製出汁ソース・自家製果実塩でお愉しみください。',
    price: '¥1,380',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 定番ランチメニュー',
    sourceArticleUrl: NOTE_LUNCH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】定番ランチメニュー',
    tags: ['低温火入', '鶏かつ300g', '国産鶏もも', '出汁ソース', '果実塩']
  },
  {
    id: 'note-lunch-3',
    title: 'レバカツ定食',
    category: PlacePhotoCategory.SIGNATURE,
    subCategory: '定番ランチメニュー',
    imageUrl: 'https://assets.st-note.com/img/1795487293-57Urc8vnPLXpxD62qCNGZs9o.png',
    description: '丁寧な下処理と低温火入れによって臭みを一切感じさせず、まるでフォアグラのようなとろとろの食感を引き出した割烹食堂かいね定番のレバカツ定食。特製ダシソースと炊きたてご飯（おかわり無料）との相性も格別です。',
    price: '¥880',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 定番ランチメニュー',
    sourceArticleUrl: NOTE_LUNCH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】定番ランチメニュー',
    featured: true,
    tags: ['定番ランチ', '低温火入', 'とろとろ食感', '特製出汁ソース']
  },
  {
    id: 'note-lunch-4',
    title: 'お刺身定食',
    category: PlacePhotoCategory.SIGNATURE,
    subCategory: '定番ランチメニュー',
    imageUrl: 'https://assets.st-note.com/img/1795484470-3NinJGkm6yzw4lF1Ebf7eps5.png',
    altImageUrl: 'https://assets.st-note.com/img/1795487102-NZzU9BH25fLgVXYhclCTjR1E.png',
    description: 'こだわりの新鮮な旬の魚介を盛り込んだ当店自慢のお刺身定食です。（銚子産 めばち鮪トロ・北海道産 水たこ 生たこ刺し・宮崎県産 勘八 華造り・青森県産 平目 薄造り）',
    price: '¥1,800',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 定番ランチメニュー',
    sourceArticleUrl: NOTE_LUNCH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】定番ランチメニュー',
    featured: true,
    tags: ['めばち鮪トロ', '北海道産水たこ', '宮崎産勘八', '青森産平目']
  },
  {
    id: 'note-lunch-5',
    title: '海鮮バラちらし',
    category: PlacePhotoCategory.SIGNATURE,
    subCategory: '定番ランチメニュー',
    imageUrl: 'https://assets.st-note.com/img/1775795697-HtaLpJ5U1blxN906nkT3c7gW.png',
    description: 'かいね特製のざらめで仕込む寿司酢を加え、甘みと酸味、塩味のバランスがヅケにした海鮮とも相性◎',
    price: '¥1,580',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 定番ランチメニュー',
    sourceArticleUrl: NOTE_LUNCH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】定番ランチメニュー',
    featured: true,
    tags: ['海鮮バラちらし寿司', 'ざらめ', '特製寿司酢', 'ヅケ海鮮']
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
      '【v1.0.11 アップデート】3D 360°で料理を見る機能および関連する料理動画を削除し、高精細な実物お料理写真と公式note特集料理の閲覧に最適化したシンプル・軽量構成としました。',
      '【v1.0.10 アップデート】公式note「定番ランチメニュー（https://note.com/firm_emu2667/n/n6fd871f52b1f）」より、「鶏かつ定食（150g）」「鶏かつW定食（300g）」「レバカツ定食」「お刺身定食」「海鮮バラちらし」の全5品を定番ランチ・名物定食カテゴリへ追加し、実物写真（お刺身定食の2アングル対応含む）と調理解説・記事リンクを統合しました。',
      '【v1.0.9 アップデート】駐車場のご案内セクションの駐車場案内図を店舗提供の公式案内図（店舗すぐそば6台 ＋ 斜め向かい「tictac hair」様ビル裏の契約駐車場4台〔4・5・8・9番〕、全10台詳細図）へ差し替え、拡大表示に対応しました。',
      '【v1.0.8 アップデート】仮表示の「メニュー写真」セクションおよびInstagramサンプル写真フィードセクションを削除し、実物のお料理写真と公式note特集料理のみで構成されたクリーンな構成に整理しました。',
      '【v1.0.7 アップデート】割烹食堂かいね公式noteの2大レシピ特集記事「低温火入の肉料理（全21品）」および「麺料理（全11品）」から全32品のお料理データ（写真・調理解説・カテゴリ・サブカテゴリ・素材タグ・note記事リンク）を完全取り込み。ギャラリーにカテゴリ別フィルター（鶏/牛/豚/盛り合わせ、素麺/ラーメン/うどん/蕎麦/冷麺/米麺）とキーワード検索、画像読み込みフォールバックを実装しました。',
      '【v1.0.6 アップデート】AIコンシェルジュ機能を完全に削除。',
      '【v1.0.4 アップデート】公式note記事「割烹食堂かいねのこだわり（https://note.com/firm_emu2667/n/nf27eed0b29ce）」への公式リンクを追加。noteで語られている「店名（海の音色）に込めた想い」「毎日変わる一期一会のお品書き」「調味料まで手作りのこだわり」「最高の一杯を届ける姿勢」「割烹と食堂のおもてなし」の5大柱をこだわりセクション（Concept）およびメディアセクションに完全統合。',
      '【v1.0.3 アップデート】Googleマップからの写真掲載に関する文言および機能を完全削除。店舗・ユーザーより提供された「本鮪の贅沢炙り丼」「旬魚のタタキ 香味ガーリック仕立て」「桜生麩と丸大根の椀物」「天然鮮魚と生アオサ海苔和え」の実際のお料理写真をページのメイン画像（Hero）および料理ギャラリーに全面適用。',
      '【v1.0.2 アップデート】空席状況・WEB予約機能（Airリザーブ）を完全削除。',
      '【v1.0.1 アップデート】Farcaster Mini Apps SDK初期化処理（sdk.actions.ready）、単一グローバルテーマ（AppTheme）統制、OOPデータモデル（PhotoItemModel / GalleryService）の導入。'
    ],
    specs: [
      { label: '現在バージョン', value: 'v1.0.11' },
      { label: '掲載料理点数', value: '実写特選4品 ＋ 公式note定番ランチ5品 ＋ 肉料理21品 ＋ 麺料理11品（計41品）' },
      { label: 'AIアシスタント', value: '完全削除（シンプル軽量化）' },
      { label: '公式note記事連携', value: 'こだわり・定番ランチ・低温火入の肉料理・麺料理（全4記事連携）' },
      { label: 'こだわり5大方針', value: '海の音色・一期一会・自家製調味料・至高の火入れ・おもてなし' },
      { label: 'メインビジュアル', value: '割烹食堂かいね 実際のお料理写真4選' },
      { label: '写真掲載方針', value: '仮画像を完全排除し、実物写真のみで構成' },
      { label: '予約機能', value: 'WEB予約削除（お電話・店頭対応に一本化）' },
      { label: 'デザインシステム', value: 'AppTheme（単一グローバルテーマ管理）' },
      { label: '対応規格', value: 'Farcaster Mini App v1' }
    ]
  }
];

