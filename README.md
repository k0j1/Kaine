
# 割烹食堂かいね (Kappo Shokudo Kaine) Website

福島県郡山市菜根にある「割烹食堂かいね」の公式ウェブサイトプロジェクトです。
React, TypeScript, Tailwind CSS, Vite を使用して構築されています。

## プロジェクトのセットアップ

### 1. 依存関係のインストール
プロジェクトのフォルダで以下のコマンドを実行してください。

```bash
npm install
```

### 2. 環境変数の設定 (Google Maps API / Gemini API)
`.env` ファイルをプロジェクトルートに作成し、以下のAPIキーを設定してください。

```env
# Google AI Studio (AIコンシェルジュ用)
VITE_API_KEY=your_gemini_api_key_here

# Google Cloud Platform (店舗写真取得用)
# 有効化が必要なAPI: Maps JavaScript API, Places API
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 3. 開発サーバーの起動（プレビュー）
手元のブラウザで確認するには以下のコマンドを実行します。

```bash
npm run dev
```
ターミナルに表示されるURL（例: `http://localhost:5173`）を開いてください。

## 画像ファイルの配置について
駐車場の画像などは `public/image/` フォルダに配置してください。
例: `public/image/Parking.png`

Viteでは `public` フォルダ内のファイルがビルド後のルートディレクトリに配置されます。

## GitHub Pagesへの公開方法

このプロジェクトは **GitHub Actions** を使用して自動的に公開されるように設定されています。

1. **Gitのインストール**
   もし `Error: spawn git ENOENT` というエラーが出る場合は、Gitがインストールされていません。
   [Git公式サイト](https://git-scm.com/)からインストールし、パソコンを再起動してください。

2. **GitHubへのプッシュ**
   変更を保存して公開するには、以下のコマンドを実行するだけです。

   ```bash
   git add .
   git commit -m "変更内容のメモ"
   git push origin main
   ```

3. **公開確認**
   GitHubのリポジトリページの「Actions」タブで進行状況を確認できます。
   完了すると、「Settings」>「Pages」に記載されているURLでサイトが見られるようになります。

## トラブルシューティング

### Google Maps API エラー: ApiNotActivatedMapError
ブラウザのコンソールに `ApiNotActivatedMapError` が表示される場合、APIキーに紐づくGoogle Cloudプロジェクトで **「Maps JavaScript API」** が有効になっていません。

**解決手順:**
1. [Google Cloud Console](https://console.cloud.google.com/) にアクセスします。
2. 左上のメニューから対象のプロジェクトを選択します。
3. 「APIとサービス」 > 「ライブラリ」を選択します。
4. 検索バーで **「Maps JavaScript API」** を検索し、「有効にする」をクリックします。
5. 同様に **「Places API (New)」** または **「Places API」** も検索して有効にしてください。

## 構成技術
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **AI:** Google Gemini API (AIコンシェルジュ機能)
- **Map:** Google Maps Places API (店舗写真取得)
