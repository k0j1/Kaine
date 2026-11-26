
import { MenuCategory, MenuSectionData, MediaLink, PlacePhoto, PlacePhotoCategory, LightpaperSection, CommitmentPillar } from './types';

export const APP_VERSION = "1.0.20";
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
// 公式note記事リンク（お刺身・海の幸・山の幸・全24品）
export const NOTE_SASHIMI_ARTICLE_URL = "https://note.com/firm_emu2667/n/na6fd74ed8939";
// 公式note記事リンク（焼き魚・全4品）
export const NOTE_GRILLED_FISH_ARTICLE_URL = "https://note.com/firm_emu2667/n/na9069131b4d1";
// 公式note記事リンク（天ぷら／フライ・全38品）
export const NOTE_TEMPURA_ARTICLE_URL = "https://note.com/firm_emu2667/n/n4448391c9159";
// 公式note記事リンク（とまと料理・全4品）
export const NOTE_TOMATO_ARTICLE_URL = "https://note.com/firm_emu2667/n/n424f9123c3ae";
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
    id: 'note-sashimi',
    siteName: '公式 note「お刺身・旬の海と山の幸」',
    description: 'お刺身盛り合わせ、本鮪カマトロ、活伊佐木焼霜造り（白子醤油）、藁焼き鰹、低温火入サーモン、活鮑、仙鳳趾ミルク牡蠣、生桜海老・白海老、会津産馬刺しなど全24品の珠玉の一皿。',
    url: NOTE_SASHIMI_ARTICLE_URL,
    image: 'https://assets.st-note.com/img/1795490127-69pYkW5SIleM38ALPfXzaKqJ.png',
    tags: ['お刺身盛り合わせ', '活魚・貝類', '生海老', '会津馬刺し・山菜']
  },
  {
    id: 'note-grilled-fish',
    siteName: '公式 note「旬の焼き魚」',
    description: '紀州産「鮎の塩焼き」、高知県産真鯵を使った「鯵の塩焼き」、特製塩糀ダシに丸2日以上漬け込んだ「生鰊塩糀漬け焼き」、300g超えの「ムラソイ姿焼き」の全4品をご紹介。',
    url: NOTE_GRILLED_FISH_ARTICLE_URL,
    image: 'https://assets.st-note.com/production/uploads/images/266013378/rectangle_large_type_2_408e29997c2e771ed75a9a5c1cb84288.jpeg?fit=bounds&quality=85&width=1280',
    tags: ['鮎の塩焼き', '真鯵', '生鰊塩糀漬け焼き', 'ムラソイ姿焼き']
  },
  {
    id: 'note-tempura',
    siteName: '公式 note「天ぷら／フライ」',
    description: '瀬戸内・広島産牡蠣フライ＆特製半熟タルタル、白子・真鯛鱗揚げ・穴子天丼・目光天丼・鰈唐揚げ・旬の山菜や四季野菜天ぷら、アイス・バナナ・無花果の甘味天ぷらまで全38品の揚げ物アーカイブ。',
    url: NOTE_TEMPURA_ARTICLE_URL,
    image: 'https://assets.st-note.com/img/1795655048-81e7ihdcPGkuO3Ug2KjNsy5Y.png',
    tags: ['牡蠣フライ・半熟タルタル', '真鯛鱗揚げ', '穴子・目光天丼', '旬野菜＆甘味天ぷら']
  },
  {
    id: 'note-tomato',
    siteName: '公式 note「特製 とまと料理」',
    description: '昆布と梅干しの旨味が凝縮された「とまとのおひたし」、外はサクサク中はとろーり「トマトチーズ挟み揚げ」、冷製「梅そうめん～トマト出汁～」、特製「トマトぽん酢」の全4品をご紹介。',
    url: NOTE_TOMATO_ARTICLE_URL,
    image: 'https://assets.st-note.com/production/uploads/images/267070919/rectangle_large_type_2_d30fa6ff70b31b93de99a62f6a8cd19b.jpeg?fit=bounds&quality=85&width=1280',
    tags: ['とまとのおひたし', 'トマトチーズ挟み揚げ', '梅そうめん', 'トマトぽん酢']
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
    subCategory: '特選お料理',
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
    subCategory: '特選お料理',
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
    subCategory: '特選お料理',
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
  },
  // =========================================================================
  // 公式note「【割烹食堂かいね】お刺身」全24品
  // https://note.com/firm_emu2667/n/na6fd74ed8939
  // =========================================================================
  // --- 海の幸（鮮魚） (15品) ---
  {
    id: 'note-sashimi-1',
    title: 'お刺身盛り合わせ（夜の看板メニュー・5〜6種）',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795490127-69pYkW5SIleM38ALPfXzaKqJ.png',
    altImageUrl: 'https://assets.st-note.com/img/1795489592-qrtzysWgKGYMfV3BdavwUhP4.png',
    description: '新鮮な旬の鮮魚や白身、貝類などを盛り込んだ当店自慢のお刺身盛り合わせ。季節やその日の仕入れごとに魚種が変わり、一期一会の旬の味覚をお楽しみいただけます。（例：千葉県産鮪中トロ、宮崎県産勘八、青森県産本鱒、岩手県産平目、青森県産あおり烏賊）',
    price: '夜の看板メニュー',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    featured: true,
    tags: ['お刺身盛り合わせ', '千葉県産鮪中トロ', '宮崎県産勘八', '青森県産あおり烏賊']
  },
  {
    id: 'note-sashimi-2',
    title: 'お刺身盛り合わせ（春の旬鮮仕立て）',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1775692785-GREQOTIvYdM0omZ4FPc8e9S7.png',
    description: '春の恵みを感じる旬魚を中心に、職人の包丁技と彩りで仕立てた季節のお刺身盛り合わせです。',
    price: '旬のお造り盛り合わせ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['春のお刺身', 'お刺身盛り合わせ', '季節の鮮魚']
  },
  {
    id: 'note-sashimi-3',
    title: '本鮪カマトロ',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1775645560-4tbWx3HlfczQkFKgByVvN9M0.png',
    description: 'お刺身で提供できる本鮪のカマトロは、鮪1尾からわずか数百gしか取れない超希少価値の高い部位。脂乗り抜群で、まるで大トロのような濃厚な味わいをご堪能いただけます。',
    price: '超希少部位',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    featured: true,
    tags: ['本鮪カマトロ', '長崎県産', '刺身', '希少部位']
  },
  {
    id: 'note-sashimi-4',
    title: '鰆（さわら）炙り刺し',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795488740-P5H8ibzSy72oCplBwv1qNrhQ.png',
    description: '淡泊ながら上品で甘みも感じられる福岡県産の鰆（さわら）。当店では皮目を香り高く炙ってご提供します。自家製の塩がより一層その甘みを引き立てます。',
    price: '自家製塩でいただく炙り刺し',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['福岡県産', '鰆（さわら）', '炙り刺し', '自家製塩']
  },
  {
    id: 'note-sashimi-5',
    title: '活伊佐木（いさき）焼霜造り 〜白子醤油添え〜',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795488802-hSCky3PVHoWQ5x0bEFeT17fs.png',
    description: '朝まで生きていた千葉県産の活伊佐木。皮目を炙る焼霜造りで皮下の一番旨味が強い部分を引き出し、酒煎りして裏ごしした濃厚でもっちりとした白子醤油（または肝醤油）を合わせてお召し上がりください。',
    price: '活〆 焼霜造り',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['千葉県産', '活伊佐木', '焼霜造り', '白子醤油']
  },
  {
    id: 'note-sashimi-6',
    title: '高知県産 鰹（かつお）藁焼き',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795489036-zFVDCMhfbItUPoLH2ZOi1Jj4.png',
    description: '藁焼きした鰹は芳醇な燻香をまとい味わい深い一皿に。新玉ねぎと香味野菜、にんにくスライス、特製ポン酢でお愉しみください。',
    price: '名物 藁焼き',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['高知県産', '鰹（かつお）', '藁焼き', '香味野菜']
  },
  {
    id: 'note-sashimi-7',
    title: '鰹のたたき 〜特製トマトぽん酢〜',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795489329-vlgdVmZaEHrYn638CwxFbi2A.png',
    description: '脂の乗った戻り鰹に強めにあら塩を振り、しっかりと炙って旨味を凝縮。たっぷりの薬味と特製トマトぽん酢をかけてご提供します。',
    price: '特製トマトぽん酢',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['戻り鰹', '鰹たたき', '特製トマトぽん酢', 'あら塩炙り']
  },
  {
    id: 'note-sashimi-8',
    title: '真魚鰹（まながつお）薄造り',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795490923-YOmI73ypuUChjwxS8fnKrVDH.png',
    description: '上品な白身で繊細な味わいの旬のマナガツオ。程よく脂が乗っており、薄造りにすることで口に入れるととろける食感とほんのりとした甘み、コクのある旨味が際立ちます。',
    price: '旬の白身 薄造り',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['マナガツオ', '薄造り', '白身刺身']
  },
  {
    id: 'note-sashimi-9',
    title: '北海道産 秋刀魚（さんま）刺し 〜肝醤油添え〜',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795489035-OweY8F2g0jpfo1NP3SIVCRaW.png',
    description: '秋刀魚の旨味を余すことなく堪能していただくため、お刺身には肝を練り込んだ特製肝醤油を添えてご提供いたします。ほんのりとした苦味と甘み、脂の溶け込んだ醤油が相性抜群です。',
    price: '特製肝醤油添え',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['北海道産', '秋刀魚刺し', '肝醤油']
  },
  {
    id: 'note-sashimi-10',
    title: '特製 〆鯖（しめさば）',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795489035-6cm293EjPMgpaGy4uFiDHArV.png',
    description: '当店の〆鯖は生により近い状態で仕上げるため口当たりが滑らかで、鯖本来の甘みをしっかり堪能できます。強塩の時間は極力短く、特製甘酢の塩味と酸味のバランスが鯖の脂と好相性。冷凍せず細やかな隠し包丁を入れることで安心・安全かつ極上の生食感をお届けします。',
    price: '生食感 自家製〆鯖',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['自家製〆鯖', '特製甘酢', '隠し包丁']
  },
  {
    id: 'note-sashimi-11',
    title: '細魚（さより）姿造り',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795490567-sLrSZdBRD9XEMpzkAn68bNCH.png',
    description: '冬から春にかけて旬を迎える「春を告げる魚」さより。上品で澄んだ甘みと旨みが感じられ、ほんのりと漂う余韻がアクセントになる繊細な姿造りです。',
    price: '旬の姿造り',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['細魚（さより）', '姿造り', '春を告げる魚']
  },
  {
    id: 'note-sashimi-12',
    title: 'サーモン刺身 〜低温火入れ〜',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795489035-VoFwfLy4p8UDIe7OGghRQTKB.png',
    description: 'アトランティックサーモンに低温火入れを施すことで味わいが格段に変化。「火の通った生」として口の中でほろりと崩れる、新感覚の食感をお楽しみいただけます。',
    price: '低温火入 刺身',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['サーモン刺身', 'アトランティック', '低温火入']
  },
  {
    id: 'note-sashimi-13',
    title: '目光（めひかり）炙り刺し',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795490666-rSUaWstMuFOzBNoxQ4TK62mg.png',
    altImageUrl: 'https://assets.st-note.com/img/1775690593-enIpZS3QPBrU1Yvucdksg9lE.png',
    description: '新鮮なその日にしか味わうことのできない生目光のお刺身。皮目に細かく包丁を入れて炙ることで、表面に目光特有の極上の脂が溢れ出し、とろける口当たりと濃厚な旨味・甘みをご堪能いただけます。',
    price: '鮮度抜群 炙り刺し',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['目光（めひかり）', '炙り刺し', '細工包丁']
  },
  {
    id: 'note-sashimi-14',
    title: '穴子（あなご）焼霜造り',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795488981-s5dGnASmoBhEpF30yq2LXw4U.png',
    description: '湯引きしてから皮目をしっかり炙ってレアに近い状態で仕上げる穴子の焼霜造り。丁寧な骨切りを施しているため骨は気にならず、穴子本来の旨味と香味がしっかり味わえます。',
    price: '湯引き・骨切り仕立て',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['穴子', '湯引き', '焼霜造り', '骨切り']
  },
  {
    id: 'note-sashimi-15',
    title: '赤なまこ 〜わさび醤油〜',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（鮮魚）',
    imageUrl: 'https://assets.st-note.com/img/1795490329-5sorFqSyh3Q9fzg8kY0I1jx7.png',
    description: '磯の香りとコリコリ食感が魅力の赤なまこ。茶ぶりすることで柔らかく、独特のクセを取り除き食べやすく仕立てております。香り高いわさび醤油にてご提供します。',
    price: '茶ぶり仕立て',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['赤なまこ', '茶ぶり', 'わさび醤油']
  },
  // --- 海の幸（貝類） (2品) ---
  {
    id: 'note-sashimi-16',
    title: '活鮑（あわび）刺し 〜肝醤油〜',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（貝類）',
    imageUrl: 'https://assets.st-note.com/img/1775647681-PlicjvEMqCsfIJGtu4SKdBV7.png',
    description: '大振りで活きの良い鮑（あわび）。コリコリの歯ごたえと豊かな旨味を、濃厚な味わいが魅力の特製肝醤油でご提供いたします。',
    price: '活貝・肝醤油添え',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['活鮑刺し', '肝醤油', '大振り鮑']
  },
  {
    id: 'note-sashimi-17',
    title: '仙鳳趾産 ミルク牡蠣',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（貝類）',
    imageUrl: 'https://assets.st-note.com/img/1795489401-thp1QzbE09enMaoj3q5f6LAx.png',
    description: '北海道・仙鳳趾（せんぽうし）産の超濃厚・特大の牡蠣。その名の通り、まるでミルクのようにとろとろで濃厚な旨味とクリーミーな味わいが広がります。',
    price: '仙鳳趾産 特大牡蠣',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['仙鳳趾産', 'ミルク牡蠣', '濃厚クリーミー']
  },
  // --- 海の幸（その他魚介類） (2品) ---
  {
    id: 'note-sashimi-18',
    title: '駿河湾産 生桜海老 刺身',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（その他魚介類）',
    imageUrl: 'https://assets.st-note.com/img/1775648799-CavKMZ8kJNTOduUmsQ5zStWD.png',
    description: '静岡県駿河湾でのみ唯一水揚げされる生の桜海老。鮮度落ちが非常に早いため、良質な鮮度が保たれているうちでなければお刺身では味わえない格別の逸品です。',
    price: '駿河湾産 希少生刺身',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['駿河湾産', '生桜海老', '刺身']
  },
  {
    id: 'note-sashimi-19',
    title: '富山産 生白海老刺し',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '海の幸（その他魚介類）',
    imageUrl: 'https://assets.st-note.com/img/1775649241-FP9MZetk3iRNHo4vIxBb5wpE.png',
    description: '別名「富山湾の宝石」と呼ばれ、限られた時期にのみ水揚げされる白海老。お刺身で食べられるのは極めて希少で、ねっとりとした上品な甘みと海老の旨味が濃厚に広がります。',
    price: '富山湾の宝石',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['富山産', '生白海老刺し', '富山湾の宝石']
  },
  // --- 山の幸 (5品) ---
  {
    id: 'note-sashimi-20',
    title: '季節の野菜のお造り',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795490823-aDkbZxIGtnPhouCJYmfHvR13.png',
    description: '水茄子、姫セロリ、モロッコインゲン、蛇腹胡瓜、らっきょう、ミニトマトなど旬の生野菜を彩りよく盛り込んださっぱりとした一皿。季節の塩と檸檬胡椒マヨを添えてお召し上がりください。（※中身は仕入れにより変わります）',
    price: '季節の塩＆檸檬胡椒マヨ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['水茄子', '姫セロリ', '季節の塩', '檸檬胡椒マヨ']
  },
  {
    id: 'note-sashimi-21',
    title: '二本松産 朝獲れ竹の子刺し 〜梅塩添え〜',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795490755-INjXOS5yruidWVflBn2RH9zC.png',
    altImageUrl: 'https://assets.st-note.com/img/1795488925-tacqUzVyEn0wmr9iTAvKPpSD.png',
    description: 'アクの回っていない朝獲れの新鮮な二本松産竹の子。瑞々しく柔らかい穂先と小気味よい歯触りを、特製梅塩を添えたお刺身でお楽しみください。',
    price: '二本松産 朝獲れ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['二本松産', '朝獲れ竹の子', '竹の子刺し', '梅塩']
  },
  {
    id: 'note-sashimi-22',
    title: '真菰竹（マコモダケ）',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1777728549-W9lQk4vUs0tFy78AzZurTbBf.png',
    description: '沼や川に自生するイネ科植物マコモの茎が肥大化した、別名「ハナガツミ」。真っ白い身はアクやクセがほとんどなく生食でもほのかな甘みと小気味よい食感があり、天ぷらにすると甘みが増してとうもろこしのような香りが口いっぱいに広がります。',
    price: '旬の山菜・ハナガツミ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['真菰竹', 'マコモタケ', 'ハナガツミ']
  },
  {
    id: 'note-sashimi-23',
    title: '会津産 馬刺し（赤身・特製林檎辛味噌添え）',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795489743-9kztaRj1ED673pvBn4dwgQUP.png',
    description: '福島・会津名産の極上馬赤身刺し。しっとりと柔らかな赤身の旨味に、林檎を加えて仕込んだ特製辛味噌を添えてご提供いたします。',
    price: '会津産 馬赤身',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['会津産', '馬刺し', '林檎辛味噌']
  },
  {
    id: 'note-sashimi-24',
    title: '馬刺し2種盛り（赤身とたてがみ）',
    category: PlacePhotoCategory.SEAFOOD,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795489862-2Oh9LapX8dNGJ6DQFK1RqwgY.png',
    description: '定番の赤身と真っ白い「たてがみ」の贅沢な2種盛り合わせ。たてがみはコリコリとした食感と優しい甘み、クリーミーな味わいが魅力です。赤身と一緒に召し上がるのもおすすめです。',
    price: '赤身＆たてがみ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note お刺身特集',
    sourceArticleUrl: NOTE_SASHIMI_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】お刺身',
    tags: ['馬刺し', '赤身', 'たてがみ', '2種盛り']
  },
  // =========================================================================
  // 公式note「【割烹食堂かいね】焼き魚」全4品
  // https://note.com/firm_emu2667/n/na9069131b4d1
  // =========================================================================
  {
    id: 'note-grilled-1',
    title: '鮎の塩焼き',
    category: PlacePhotoCategory.GRILLED_FISH,
    subCategory: '焼き魚',
    imageUrl: 'https://assets.st-note.com/img/1775698193-zRn3VjZuTCWYLIw0rpxEQ4q7.png',
    description: '夏を代表する香魚。キュウリウオ科の魚で、その名を冠する通り釣りたては胡瓜や西瓜に近い香りをまとっている。（同科目の魚ではワカサギやししゃもなど）紀州産の鮎は、より天然に近い養殖と餌にこだわっているため品質と栄養価が高い。',
    price: '紀州産 塩焼き',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 焼き魚特集',
    sourceArticleUrl: NOTE_GRILLED_FISH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】焼き魚',
    featured: true,
    tags: ['紀州産', '鮎', '塩焼き', '生姜']
  },
  {
    id: 'note-grilled-2',
    title: '鯵(あじ)の塩焼き',
    category: PlacePhotoCategory.GRILLED_FISH,
    subCategory: '焼き魚',
    imageUrl: 'https://assets.st-note.com/img/1775648626-0gDfhJvI8UrPQljkpoT4YAzN.png',
    description: '本日入荷の鯵は脂も乗り刺身でも充分美味しいですが、4種の調理法でご提供いたします。なめろうも塩焼きもおすすめですが、生の身に衣をつけてサッとあげるフライはふわふわで揚げ物なのに軽く食べられます。骨も一緒に揚げて煎餅のように召し上がれます。',
    price: '高知県産 真鯵',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 焼き魚特集',
    sourceArticleUrl: NOTE_GRILLED_FISH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】焼き魚',
    tags: ['高知県産', '真鯵', '塩焼き', '刺し・なめろう・フライ']
  },
  {
    id: 'note-grilled-3',
    title: '生鰊(にしん)塩糀漬け焼き',
    category: PlacePhotoCategory.GRILLED_FISH,
    subCategory: '焼き魚',
    imageUrl: 'https://assets.st-note.com/img/1775697827-ZtLhKFrnoSGJMB13vY8iNfuW.png',
    description: '生のにしんを特製の塩糀ダシに丸2日以上漬け込んでいます。塩の効果で身はふっくらとして臭みは無く、程よい塩糀でご飯が進みます。生にしんは40cm近くもあり食べ応えがあるのに安価なのが魅力。',
    price: '特製 塩糀漬け焼き',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 焼き魚特集',
    sourceArticleUrl: NOTE_GRILLED_FISH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】焼き魚',
    featured: true,
    tags: ['生鰊', 'にしん', '塩糀漬け']
  },
  {
    id: 'note-grilled-4',
    title: 'ムラソイ姿焼き',
    category: PlacePhotoCategory.GRILLED_FISH,
    subCategory: '焼き魚',
    imageUrl: 'https://assets.st-note.com/img/1775797476-OcIl1DACTMGBXiqnhj4EVR9U.png',
    description: '1尾300gを超える大きめでふっくらとした身は噛み締めるごとに上品な甘みを感じます。',
    price: '青森県産 姿焼き',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 焼き魚特集',
    sourceArticleUrl: NOTE_GRILLED_FISH_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】焼き魚',
    tags: ['青森県産', 'ムラソイ', '姿焼き']
  },
  // =========================================================================
  // 公式note「【割烹食堂かいね】とまと料理」全4品
  // https://note.com/firm_emu2667/n/n424f9123c3ae
  // =========================================================================
  {
    id: 'note-tomato-1',
    title: 'とまとのおひたし',
    category: PlacePhotoCategory.TOMATO,
    subCategory: 'とまとが主役',
    imageUrl: 'https://assets.st-note.com/img/1776054381-XJ0utgNRSDUYMGQ8v1P4mKse.png',
    altImageUrl: 'https://assets.st-note.com/img/1795651531-2vxmIoS5rLBQ0dDhtMTz1fHw.png',
    description: 'とまとと昆布の旨味が凝縮された、昆布とトマトと梅干しの出汁によるグルタミン酸豊富な出汁料理。甘味＋塩味＋酸味＋旨味のバランスが良く、滋味深い味わいでお酒との相性も抜群です。',
    price: 'とまとと昆布の出汁料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note とまと料理特集',
    sourceArticleUrl: NOTE_TOMATO_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】とまと料理',
    featured: true,
    tags: ['とまとのおひたし', '昆布', 'トマト', '梅干し', '出汁']
  },
  {
    id: 'note-tomato-2',
    title: 'トマトチーズ挟み揚げ',
    category: PlacePhotoCategory.TOMATO,
    subCategory: 'とまとが主役',
    imageUrl: 'https://assets.st-note.com/img/1795652449-ljr2D3Yi4bV0fSNWFeTyGAs7.png',
    altImageUrl: 'https://assets.st-note.com/img/1795651653-zpwaO2ATnWNBJvkPj0CLHGKh.png',
    description: '湯むきしたトマトにたっぷりのチーズを挟んでミルフィーユ仕立てのフライに。外はサクサク、中はとろーりチーズが溢れます。程よく中まで熱を通すことでチーズの塩味が増し、トマトの甘みと旨味がより引き立ちます。',
    price: 'ミルフィーユ仕立て',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note とまと料理特集',
    sourceArticleUrl: NOTE_TOMATO_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】とまと料理',
    featured: true,
    tags: ['トマト', 'チーズ', '挟み揚げ', 'ミルフィーユ']
  },
  {
    id: 'note-tomato-3',
    title: '梅そうめん～トマト出汁～',
    category: PlacePhotoCategory.TOMATO,
    subCategory: '麺料理',
    imageUrl: 'https://assets.st-note.com/img/1795651909-LsDCPAV1EpvJRjtz9TNeZHBQ.png',
    description: 'トマトの旨み溢れる冷製出汁料理。トマトの旨味が詰まったほんのり酸味を効かせた出汁は、梅を麺に練りこんだ梅そうめんとの相性も抜群です。定食のお供に、夜の〆の1杯にもおすすめ。',
    price: '冷製トマト出汁',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note とまと料理特集',
    sourceArticleUrl: NOTE_TOMATO_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】とまと料理',
    tags: ['トマト', '梅', '麺', '冷製出汁']
  },
  {
    id: 'note-tomato-4',
    title: 'トマトぽん酢',
    category: PlacePhotoCategory.TOMATO,
    subCategory: '調味料',
    imageUrl: 'https://assets.st-note.com/img/1795652068-8J74zOTLHN1B2yV9sk0brYZI.png',
    description: 'グルタミン酸豊富な昆布とトマトの旨味が詰まった特製ポン酢です。',
    price: '自家製 特製ポン酢',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note とまと料理特集',
    sourceArticleUrl: NOTE_TOMATO_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】とまと料理',
    tags: ['トマト', '昆布', 'ポン酢']
  },
  // =========================================================================
  // 公式note「【割烹食堂かいね】天ぷら／フライ」全38品（44写真）
  // https://note.com/firm_emu2667/n/n4448391c9159
  // =========================================================================
  // --- 海の幸 (24品) ---
  {
    id: 'note-tempura-1',
    title: 'かいねオリジナル牡蠣フライと半熟タルタル',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655048-81e7ihdcPGkuO3Ug2KjNsy5Y.png',
    description: '岡山県瀬戸内産の生牡蠣を、生パン粉にパセリや黒胡椒などを加えた香草パン粉で香り良いフライ仕立てに。牡蠣のオイル漬けとクレソンを刻み、自家製いぶりがっこと粒マスタード、マヨネーズ、温玉で仕上げた特製半熟タルタルソースをたっぷりつけて味わうオリジナル牡蠣フライです。',
    price: '岡山県 瀬戸内産 生牡蠣',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    featured: true,
    tags: ['瀬戸内産', '生牡蠣', '香草パン粉', '半熟タルタル', 'いぶりがっこ']
  },
  {
    id: 'note-tempura-2',
    title: '牡蠣香味フライ 〜牡蠣チーズタルタル〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795656188-jghZYSNdvkzJxG5tpUA0aFoW.png',
    description: '広島県産の牡蠣に3種類の香草を加えた香味フライ。自家製のいぶりがっこ＋ニンニク＋牡蠣のオイル漬けにチーズをたっぷりと加え、刻んだ玉ねぎの甘酢漬けをプラスした、濃厚なコクとこりこりの歯ごたえが魅力の特製タルタルを添えて。',
    price: '広島県産 生牡蠣',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['広島県産', '生牡蠣', '香草フライ', '牡蠣チーズタルタル']
  },
  {
    id: 'note-tempura-3',
    title: '白子香味フライ 〜濃厚白子のタルタル添え〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795656576-IyjdxBoeHiARpJN0GPnt7TqO.png',
    description: 'パン粉には2種類の香草やスパイスとニンニクを配合。出汁を摂った白子の裏漉しとチーズ・バター・マヨネーズ・玉ねぎの甘酢漬けを加えた濃厚な白子のタルタルを添えてご提供します。',
    price: '白子のタルタル添え',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['白子', '香味フライ', '白子のタルタル', '香草スパイス']
  },
  {
    id: 'note-tempura-4',
    title: '白子の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795656576-E1V6Ystz5arKMFLR70CyTpol.png',
    description: 'ぷりぷりで口の中でとろりと濃厚な旨味が溢れる魅力の白子を、軽やかな天ぷらに仕立てました。',
    price: '旬の天ぷら',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['白子', '天ぷら']
  },
  {
    id: 'note-tempura-5',
    title: '鯵フライ定食',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795654309-pU3Zu0mBe7NFIwCrtxMank8l.png',
    description: '新鮮で刺身でも充分な程、脂の乗った鯵を贅沢に1尾丸ごと使用。身も大きく塩味と甘みのバランスも良くふわふわの食感。骨も頭ごと食べられるようカリカリに揚げています。',
    price: '1尾丸ごと 鯵フライ定食',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    featured: true,
    tags: ['鯵フライ', '1尾丸ごと', '骨煎餅', '定食']
  },
  {
    id: 'note-tempura-6',
    title: '小鯵唐揚げ',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795657697-1QaPRnkWtjNMiJTqfFIz50Ue.png',
    description: '頭も中骨も丸ごと食べられる小さい鯵の唐揚げ。食べやすく火が通りやすいよう開いてから、特製の塩ダレに漬けて香ばしく揚げています。',
    price: '特製塩ダレ唐揚げ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['小鯵', '唐揚げ', '塩ダレ']
  },
  {
    id: 'note-tempura-7',
    title: 'なめた鰈の唐揚げ 〜骨煎餅付〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655392-QXAZ6oBKR45cPbw7tqJFflkC.png',
    description: '煮付けで定番のなめたかれい。肉厚でクセのない白身はふわふわで唐揚げも絶品。骨煎餅まで美味しく召し上がれます。',
    price: '骨煎餅付 唐揚げ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['なめた鰈', '唐揚げ', '骨煎餅']
  },
  {
    id: 'note-tempura-8',
    title: '宗八鰈唐揚げ 〜濃厚肝ソース〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655226-p3eKdyY2swucUaki6oRFAENt.png',
    description: '福島県産宗八鰈を使用。プリプリで脂の乗った肝をソースに練り込みました。甘みも強い肝ソースが身の唐揚げと相性抜群。骨も定番の骨煎餅仕立てです。',
    price: '福島県産 濃厚肝ソース',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['福島県産', '宗八鰈', '唐揚げ', '肝ソース', '骨煎餅']
  },
  {
    id: 'note-tempura-9',
    title: '真子鰈唐揚げ 〜真子タルタル付〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795657341-QoLkxrUG4qhtWORCbHcKFPBw.png',
    description: '真子（卵）がたっぷりと詰まった鰈を身は唐揚げ、骨は揚げて煎餅に。真子は強塩してから煮付けて特製タルタルに仕立てました。ふわふわで甘みのある身とタルタルの相性が抜群です。',
    price: '真子タルタル付 唐揚げ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['真子鰈', '唐揚げ', '骨煎餅', '真子タルタル']
  },
  {
    id: 'note-tempura-10',
    title: '真鯛鱗揚げ 〜鯛出汁焼き塩添え〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795656081-BeMzDOygb5LtRsu7vVWkYT1j.png',
    description: 'ふわふわに揚がった鯛の身と、皮目につけた鱗のサクサク感が小気味よい食感。鱗まで余すことなく味わえる一品を鯛出汁焼き塩と共にお召し上がりください。',
    price: '鯛出汁焼き塩添え',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    featured: true,
    tags: ['真鯛', '鱗揚げ', '鯛出汁焼き塩']
  },
  {
    id: 'note-tempura-11',
    title: '甘鯛若狭焼き（鱗揚げ仕立て）',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795658694-N0VTRsa5cHFo2zum7KOgUdAj.png',
    description: '甘鯛を鱗をつけたまま若狭地（日本酒＋醤油）を塗りながら仕上げる福井県若狭地方の郷土料理。鱗の香ばしくパリパリとした食感と、甘鯛のふっくらとした甘みのある身のコントラストが魅力です。',
    price: '若狭地 郷土料理',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['甘鯛', '鱗揚げ', '若狭地', '郷土料理']
  },
  {
    id: 'note-tempura-12',
    title: '真薯かつ（真鱈すり身・鰤炙り出汁）',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795657566-KTcJvFf2ZuD965ErRwita8eW.png',
    description: '真鱈のすり身と大和芋、卵白をふんだんに使い、鰤を炙った濃厚な出汁を加えて仕上げる魚の旨味溢れる真薯（しんじょ）をかつ仕立てで。塩とわさび醤油でご提供いたします。',
    price: '塩＆わさび醤油添え',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['真鱈', '真薯かつ', '大和芋', '鰤炙り出汁']
  },
  {
    id: 'note-tempura-13',
    title: '鯖かつ檸檬チーズソース',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655745-2kB6rUep0nM7hCmINSfvds8q.png',
    description: '当店でも人気の高い鯖かつに、檸檬をたっぷり加えた特製チーズソースを合わせました。',
    price: '人気の一品',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['鯖かつ', '檸檬', 'チーズソース']
  },
  {
    id: 'note-tempura-14',
    title: '北海道産 生にしん 梅チーズ海苔巻き天',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655700-tjN0snScYehHpGaIEgOD7dR9.png',
    description: '北海道産の生にしんを使用。青魚特有の脂のりと旨味、栄養豊富な旬魚で、期間も短くこの時期にしか味わえない梅チーズの海苔巻き天ぷらです。',
    price: '北海道産 生にしん',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['生にしん', '梅チーズ', '海苔巻き天']
  },
  {
    id: 'note-tempura-15',
    title: '生鰊（にしん）天 〜檸檬チーズソース〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655700-0WR1GTSXnlmQFEZagbPNtIzr.png',
    description: '生のにしんに海苔を巻いて歯応えと風味を増し、たっぷりの檸檬を加えたチーズソースをかけて仕上げました。',
    price: '檸檬チーズソース',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['生鰊天', '海苔巻き', '檸檬チーズソース']
  },
  {
    id: 'note-tempura-16',
    title: '太刀魚かつ（骨煎餅付）',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655906-3CWDg1UhNOYz2ASti7n4xIkl.png',
    description: 'かつにするとふわふわで上品な身は程よく脂が乗って甘みも旨味も感じる太刀魚。骨は薄いため骨煎餅も固くなく、カリカリさくさくで美味しく召し上がれます。',
    price: '骨煎餅付 魚かつ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['太刀魚', 'かつ', '骨煎餅']
  },
  {
    id: 'note-tempura-17',
    title: '目光天丼',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795657956-FWZXzS5dv1nmyiKHrgQD3LTc.png',
    description: '特大の目光は食べ応え抜群。ふわふわで甘みも旨味も強く、穴子の骨を炙って仕込む甘辛い特製照りダレが目光の天ぷらと相性◎。ボリューム満点の天丼です。',
    price: '特大目光・特製照りダレ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    featured: true,
    tags: ['目光', '天丼', '穴子骨出汁', '照りダレ']
  },
  {
    id: 'note-tempura-18',
    title: '黒曹以（くろそい）の塩唐揚げ 〜肝玉タルタル添え〜',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795658102-pezFKM4BfXrHV385iuW6tJqO.png',
    description: '特製の塩だれに漬け込んで仕上げる黒そいの唐揚げ。びっちり詰まった卵はニンニクと塩で煮て、プリプリの肝は醤油に練り込み、新生姜の甘酢を刻んだ黒そいの旨味豊富な濃厚タルタルを添えて。',
    price: '肝玉タルタル添え',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['黒そい', '塩唐揚げ', '肝玉タルタル', '新生姜甘酢']
  },
  {
    id: 'note-tempura-19',
    title: '宮城県産 ほやの天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795653787-Cc6FMdVHpTNjYInJX9SaxGvA.png',
    description: '夏にかけて旬を迎える別名「海のパイナップル」ほや。新鮮なほやは臭みがなく旨味が豊富でお酒の引き立て役です。焼きや天ぷらにすると旨味が増し、独特のクセが和らぎ美味しく召し上がれます。',
    price: '宮城県産 真海鞘',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['宮城県産', 'ほや', '真海鞘', '天ぷら']
  },
  {
    id: 'note-tempura-20',
    title: '穴子天丼（骨煎餅付）',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795658600-q17ZLXpvQ2IV0G8dPRg6Fxa4.png',
    altImageUrl: 'https://assets.st-note.com/img/1795653916-8GUQzVsBevF7Soaq5PjhgZW3.png',
    description: '外はカリッと中はフワフワな穴子の天ぷらに、頭や骨を炙って摂る濃厚照りダレをたっぷりとかけて。丁寧な骨切りで骨は気にならず、穴子の旨味と香味がしっかり味わえます。骨もカリカリ煎餅仕立てに。',
    price: '濃厚照りダレ＆骨煎餅',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    featured: true,
    tags: ['穴子', '天丼', '天ぷら', '照りダレ', '骨切り']
  },
  {
    id: 'note-tempura-21',
    title: '富山県産 蛍烏賊（ほたるいか）の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795656627-dfWamvFqtMHkIhZY3Cxj91bo.png',
    altImageUrl: 'https://assets.st-note.com/img/1795653977-0kT5r2BGLZAdMVmU86IheE1x.png',
    description: '春が旬の富山県産蛍烏賊。熱を加えるとワタがとろっと溶け出し、天ぷらにすることで甘みとコクが増して口の中に蛍烏賊の旨味が広がります。',
    price: '富山県産 春の旬',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['富山県産', '蛍烏賊', 'ほたるいか', '天ぷら']
  },
  {
    id: 'note-tempura-22',
    title: '白魚と芹(せり)のかき揚げ',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795652889-wBbo6XkC7Eqj3e9iZM54hKcI.png',
    description: '刺身でも食べられる鮮度の良い白魚はほのかな甘みと苦味が魅力。歯ごたえが良く強い香りが特徴の冬セリと合わせた香り高いかき揚げです。',
    price: '冬セリ＆鮮度抜群白魚',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['白魚', '芹（せり）', 'かき揚げ']
  },
  {
    id: 'note-tempura-23',
    title: '静岡県産 生白海老の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795654450-G3dN2Bcfpn0yDIxl4C9kS1LW.png',
    description: '静岡県産の生白海老を軽やかに揚げた天ぷら。サクサクとした衣の中に白海老の上品な甘みと香ばしさが凝縮されています。',
    price: '静岡県産 生白海老',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['静岡県産', '生白海老', '天ぷら']
  },
  {
    id: 'note-tempura-24',
    title: '生桜海老のかき揚げ',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '海の幸',
    imageUrl: 'https://assets.st-note.com/img/1795653306-efujEsH8IlgF0TYZcnA37CWy.png',
    description: '豊かな香ばしさが際立つ生桜海老。かき揚げにすることで香味がより一層増し、大変おすすめの一品です。',
    price: '香味豊かなかき揚げ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['生桜海老', 'かき揚げ']
  },
  // --- 山の幸 (11品) ---
  {
    id: 'note-tempura-25',
    title: '（天然）鮎のうるか揚げと岩魚山椒塩糀唐揚げ',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795658262-IvkNnX09tlBb1wET4ehDpAmV.png',
    description: '釣り物のアユとイワナを使用した唐揚げ。鮎は肝の旨味を活かした地に漬け込んで鮎特有のほろ苦さと旨味を味わい、岩魚は山椒の葉と実を練り込んだ特製塩糀漬けに。山椒の爽やかな香りと辛味があと引く味わいで、山椒塩糀ぽん酢を添えてご提供します。',
    price: '天然釣り物・山椒塩糀ぽん酢',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    featured: true,
    tags: ['天然鮎', '岩魚', 'うるか揚げ', '山椒塩糀ぽん酢']
  },
  {
    id: 'note-tempura-26',
    title: '日替わり野菜の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1775644121-efGy7D9ctAKjOvpLX4U2rq8R.png',
    description: '日替わりで仕入れた野菜を盛り込んでいます。その時期の旬素材も取り入れて、季節の味わいを楽しんでいただけます。',
    price: '日替わり旬野菜',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['日替わり', '野菜', '天ぷら']
  },
  {
    id: 'note-tempura-27',
    title: '春野菜・旬の山菜の天ぷら盛り合わせ',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1777732033-VNCHn8LGbJ7SqFcXDMxTpwyB.png',
    altImageUrl: 'https://assets.st-note.com/img/1775649502-A6mVUECxb0XJsDWodaLtOpwF.png',
    description: '福島県産蕗の薹とこごみ、山形県産たらの芽、こしあぶらなど大地の恵みがたっぷりと詰まった旬の山菜天ぷら盛り合わせ。独特のほろ苦さが持ち味でデトックス効果もある春の味わいです。',
    price: '福島・山形産 旬山菜',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['蕗の薹', 'こごみ', 'たらの芽', 'こしあぶら', '春の山菜']
  },
  {
    id: 'note-tempura-28',
    title: '浅葱（あさつき）＆蕾菜（つぼみな）の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795657125-PdNuR8LFlzYC3Xb7VDEo2Qqj.png',
    description: '酢味噌や薬味として扱われることが多い浅葱（あさつき）は、ひげ根までサクサク食べられる天ぷらも美味。揚げることでねぎ特有の甘みにニラのような風味が味わえます。春の訪れを感じる蕾菜は天ぷらにするとホクホク食感で甘みが際立ちます。',
    price: '春野菜 天ぷら',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['浅葱（あさつき）', 'ひげ根', '蕾菜', '春野菜天ぷら']
  },
  {
    id: 'note-tempura-29',
    title: '旬の夏野菜5種類の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795657805-4L6fxkmqC2FvdRZoIzQhUpG1.png',
    altImageUrl: 'https://assets.st-note.com/img/1776055984-d6TQOiZ5FMbY9KeAPEHtNfk0.png',
    description: 'ミニトマト・南瓜・オクラ・茄子・ズッキーニなど、仕入れによってらっきょうやモロヘイヤ、とうもろこしなど色鮮やかな旬の夏野菜5種類を盛り込んだ天ぷら盛り。ブルーベリー塩など季節の塩と相性抜群です。',
    price: '旬の夏野菜 5種盛り',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['夏野菜', 'ズッキーニ', 'モロヘイヤ', 'ブルーベリー塩']
  },
  {
    id: 'note-tempura-30',
    title: '秋野菜の天ぷら盛り合わせ',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795655536-SFBIEmuU9lsrZTQOGg5X4oWA.png',
    altImageUrl: 'https://assets.st-note.com/img/1795658553-H31mBrKCLagwbsTMZoEDuWX8.png',
    description: 'れんこん・かぼちゃ・茄子・さつまいもなど秋を彩る野菜をその日の仕入れで4〜5種類組み合わせて盛り付けた天ぷら盛り合わせ。季節の果実塩と檸檬胡椒を添えてご提供します。',
    price: '果実塩＆檸檬胡椒添え',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['秋野菜', 'れんこん', 'かぼちゃ', 'さつまいも', '果実塩']
  },
  {
    id: 'note-tempura-31',
    title: '秋きのこの天ぷら（3種〜盛り合わせ）',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1777357110-Mfu5FO4e0tBv8rHpJcLbAj1V.png',
    altImageUrl: 'https://assets.st-note.com/img/1795658405-iUs3J9YSrdqmuBjytHnQhVZ7.png',
    description: '舞茸・椎茸・エリンギ・ひらたけ・大黒本しめじなど、その日の仕入れから厳選した旬きのこの天ぷら盛り合わせ。豊かな香りと旨味を季節の果実塩と檸檬胡椒でお楽しみください。',
    price: '旬のきのこ盛り',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['舞茸', '椎茸', '大黒本しめじ', 'ひらたけ', 'きのこ天ぷら']
  },
  {
    id: 'note-tempura-32',
    title: '二本松産 朝獲れ竹の子の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1795658935-3kpxYMuQ7hr8Rj2gvN4D5WaP.png',
    description: '鮮度抜群の二本松産・朝獲れ竹の子を使用した天ぷら。瑞々しい甘みと小気味よい歯触りをサクサクの衣で閉じ込めました。',
    price: '二本松産 朝獲れ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['二本松産', '朝獲れ', '竹の子', '天ぷら']
  },
  {
    id: 'note-tempura-33',
    title: 'マコモダケ天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1777728714-4opK5XN9tnqYdcOzx2sIj0PF.png',
    description: '沼や川などに生えるイネ科の多年草植物マコモの茎が肥大化した別名「ハナガツミ」。皮を剥いた真っ白い身はアクやクセがほとんどなく、天ぷらにすると更に甘みが増しとうもろこしのような香りが口の中に広がります。',
    price: '旬の山菜・ハナガツミ',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['マコモ', 'マコモタケ', 'ハナガツミ', '天ぷら']
  },
  {
    id: 'note-tempura-34',
    title: '鹿児島県産 生らっきょうの天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1775797884-HVlxyULn1WNcPtMARbd74Yfr.png',
    description: '鮮度の良いうちは天ぷらにてご提供いたします。揚げた時のほくほく食感とにんにくのような香味が特徴で、ご飯にもお酒のお供にもぴったりの一品です。',
    price: '鹿児島県産 生らっきょう',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['鹿児島県産', '生らっきょう', '天ぷら']
  },
  {
    id: 'note-tempura-35',
    title: '宮崎県産 とうもろこしの天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '山の幸',
    imageUrl: 'https://assets.st-note.com/img/1776054205-DP4OB5mtofWN3q2LdIMrnXjE.png',
    description: '甘みの強い宮崎県産とうもろこしの天ぷら。干したヒゲも天ぷらにすることでサクサク食感となり、ヒゲの味まで余すことなくしっかり味わえます。',
    price: '宮崎県産 ヒゲまで美味',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['とうもろこし', '宮崎県産', '天ぷら']
  },
  // --- 甘味 (3品) ---
  {
    id: 'note-tempura-36',
    title: 'アイスの天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '甘味',
    imageUrl: 'https://assets.st-note.com/img/1795653589-0jDIhKL2uJ38qXpStNnlgeYf.png',
    description: 'サクッと香ばしく温かい衣の中に冷たいアイスクリームを閉じ込めた、食後の楽しみにぴったりの甘味天ぷらです。',
    price: '甘味 天ぷら',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['アイス', '天ぷら', '甘味']
  },
  {
    id: 'note-tempura-37',
    title: 'バナナの天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '甘味',
    imageUrl: 'https://assets.st-note.com/img/1777728440-u6sLBDbpykI52RQalVJwGmzh.png',
    description: 'インドネシアでは屋台おやつとしてポピュラー。熱を加えることで甘みが増し、塩をつけて食べると更に甘みが引き立ちます。',
    price: '塩で味わう甘味天ぷら',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['バナナ', '塩', '天ぷら', '甘味']
  },
  {
    id: 'note-tempura-38',
    title: '生いちじく（無花果）の天ぷら',
    category: PlacePhotoCategory.TEMPURA_FRY,
    subCategory: '甘味',
    imageUrl: 'https://assets.st-note.com/img/1795658471-nNzmYUI56vbVSGKdRcXafCOQ.png',
    description: '生いちじくは天ぷらにすることでカリカリの食感が生まれ、熱を加えることで特有の甘みが引き立ちます。',
    price: '季節の果実天ぷら',
    googleMapsUrl: GOOGLE_MAPS_LOCATION_URL,
    authorName: '公式note 天ぷら／フライ特集',
    sourceArticleUrl: NOTE_TEMPURA_ARTICLE_URL,
    sourceArticleTitle: '【割烹食堂かいね】天ぷら／フライ',
    tags: ['いちじく', '無花果', '天ぷら', '甘味']
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
      '【v1.0.20 アップデート】SEOおよびアクセシビリティ（WCAG準拠）向上のため、画像代替テキスト（alt属性）を一元生成・正規化するOOPサービス（ImageAltService）を新設し、ヒーロー画像・サムネイル・こだわり写真・ギャラリー一覧・カルーセル・拡大モーダル（メイン／別アングル動的切替）・掲載メディアカード・駐車場案内図（通常／拡大）のすべての画像コンポーネントへ文脈に応じた適切なalt属性を付与しました。あわせてResilientImageの装飾画像対応・非同期デコード対応・駐車場案内図のキーボード操作対応・OGP/Twitter画像altメタタグも整備しています。',
      '【v1.0.19 アップデート】スマートフォン表示時のナビゲーション導線を画面下部バーへ一本化し、画面右上のハンバーガーメニューボタンを非表示に整理することで、ヘッダーの視認性と片手操作性をさらに高めました。',
      '【v1.0.18 アップデート】トップ画像（ヒーローセクション）を店舗実写特選4品だけでなく公式note記事の全料理写真を含む計111品からFisher-Yates方式でランダム表示する仕組み（HeroSlideshowService）へ刷新し、任意のタイミングで別のお料理へ切り替えられるシャッフル機能と外部画像読み込み失敗時の自動フォールバックを搭載しました。あわせてスマートフォン表示時の操作性を高めるため、親指で直感的に操作できる画面下部固定ナビゲーションバー（トップ・お品書き・料理写真・アクセス・メニュー）および全セクション・クイックアクション対応ボトムシート（MobileBottomNav）を追加しました。',
      '【v1.0.17 アップデート】公式note「天ぷら／フライ（https://note.com/firm_emu2667/n/n4448391c9159）」より、瀬戸内・広島産牡蠣フライ＆半熟タルタル、白子、鯵フライ定食、鰈唐揚げ各種、真鯛鱗揚げ・甘鯛若狭焼き、真薯かつ・鯖かつ・生にしん天・太刀魚かつ、目光＆穴子天丼、黒そい塩唐揚げ、ほや・蛍烏賊・白魚かき揚げ・白海老・桜海老、天然鮎＆岩魚唐揚げ、四季の野菜・山菜・きのこ・竹の子・マコモダケ・生らっきょう・とうもろこし、アイス・バナナ・無花果の甘味天ぷらまで全38品（44写真）を新カテゴリ「天ぷら・フライ」に追加しました。',
      '【v1.0.16 アップデート】公式note「とまと料理（https://note.com/firm_emu2667/n/n424f9123c3ae）」より、「とまとのおひたし（2アングル）」「トマトチーズ挟み揚げ（2アングル）」「梅そうめん～トマト出汁～」「トマトぽん酢」の全4品を新カテゴリ「とまと料理」に追加。さらにギャラリーの「一覧」「カルーセル」切替を洗練されたアイコン専用ボタンへ刷新し、PC閲覧時の上部メニューが常に美しい1行で表示されるよう最適化しました。',
      '【v1.0.15 アップデート】公式note「焼き魚（https://note.com/firm_emu2667/n/na9069131b4d1）」より、「鮎の塩焼き」「鯵(あじ)の塩焼き」「生鰊(にしん)塩糀漬け焼き」「ムラソイ姿焼き」の全4品を新カテゴリ「旬の焼き魚」およびメディア掲載一覧に追加しました。',
      '【v1.0.14 アップデート】開発サーバー設定（Vite）を最適化し、ローカルおよびプレビュー環境でポート3000のルートパス（/）が正常に起動・応答するよう修正しました（GitHub Pages向け本番ビルドのベースパス構成は維持）。',
      '【v1.0.13 アップデート】お料理ギャラリーのカルーセルを全面刷新。従来の3Dリング表示によるスマートフォン画面での写真重なり・はみ出しを解消し、スマホでは1枚ずつ、タブレット2枚、PC3枚の重なりゼロ・水平スワイプ対応カルーセル（サムネイル早見バー、自動再生切替、タップ拡大詳細連携付き）へ改善しました。',
      '【v1.0.12 アップデート】公式note「お刺身（https://note.com/firm_emu2667/n/na6fd74ed8939）」より、お刺身盛り合わせ・本鮪カマトロ・鰆炙り刺し・活伊佐木焼霜造り・鰹藁焼き＆たたき・真魚鰹薄造り・北海道産秋刀魚・特製〆鯖・細魚・低温火入サーモン・目光炙り刺し・穴子焼霜造り・赤なまこ・活鮑・仙鳳趾ミルク牡蠣・生桜海老＆白海老・季節野菜のお造り・二本松産竹の子・真菰竹・会津産馬刺し（赤身/たてがみ2種）の全24品を追加しました。',
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
      { label: '現在バージョン', value: 'v1.0.20' },
      { label: '掲載料理点数', value: '実写特選4品 ＋ 定番ランチ5品 ＋ お刺身・山海の幸24品 ＋ 焼き魚4品 ＋ 天ぷら・フライ38品 ＋ とまと料理4品 ＋ 肉料理21品 ＋ 麺料理11品（計111品）' },
      { label: 'AIアシスタント', value: '完全削除（シンプル軽量化）' },
      { label: '公式note記事連携', value: 'こだわり・定番ランチ・お刺身・焼き魚・天ぷら／フライ・とまと料理・低温火入の肉料理・麺料理（全8記事連携）' },
      { label: 'こだわり5大方針', value: '海の音色・一期一会・自家製調味料・至高の火入れ・おもてなし' },
      { label: 'メインビジュアル', value: '店舗実写特選＋公式note料理（全111品）ランダムスライドショー＆シャッフル対応' },
      { label: 'モバイル操作性', value: '画面下部固定ナビゲーションバー＆スライドアップ全メニュー対応' },
      { label: 'SEO・アクセシビリティ', value: 'ImageAltServiceによる全画像コンテキスト別alt属性付与・WCAG準拠フォールバック' },
      { label: '写真掲載方針', value: '仮画像を完全排除し、実物写真のみで構成' },
      { label: '予約機能', value: 'WEB予約削除（お電話・店頭対応に一本化）' },
      { label: 'デザインシステム', value: 'AppTheme（単一グローバルテーマ管理）' },
      { label: '対応規格', value: 'Farcaster Mini App v1' }
    ]
  }
];

