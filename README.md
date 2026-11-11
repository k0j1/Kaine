
# 割烹食堂かいね (Kappo Shokudo Kaine) Website

福島県郡山市菜根にある「割烹食堂かいね」の公式ウェブサイトプロジェクトです。
React, TypeScript, Tailwind CSS, Vite を使用して構築されています。

## プロジェクトのセットアップ

### 1. 依存関係のインストール
プロジェクトのフォルダで以下のコマンドを実行してください。

```bash
npm install
```

### 2. 環境変数の設定 (ローカル開発用)
ローカルで開発する場合は、`.env` ファイルをプロジェクトルートに作成し、以下のAPIキーを設定してください。

```env
# Google AI Studio (AIコンシェルジュ用)
VITE_API_KEY=your_gemini_api_key_here
```

### 3. 開発サーバーの起動（プレビュー）
手元のブラウザで確認するには以下のコマンドを実行します。

```bash
npm run dev
```

## 画像ファイルの配置について
駐車場の画像などは `public/image/` フォルダに配置してください。
例: `public/image/Parking.png`

## GitHub Pagesへの公開方法 (本番環境)

このプロジェクトは **GitHub Actions** を使用して自動的に公開されます。
本番環境でAPIキーを有効にするには、GitHub上で「Secrets」の設定が必要です。

### APIキーの設定手順 (GitHub Secrets)
1. GitHubリポジトリの **[Settings]** タブを開きます。
2. 左メニューから **[Secrets and variables]** > **[Actions]** を選択します。
3. **[New repository secret]** をクリックし、以下を登録してください。

| Name | Value (Secret) |
| :--- | :--- |
| `VITE_API_KEY` | Gemini APIキー |

### デプロイの手順
設定完了後、変更をプッシュすると自動的にデプロイされます。

```bash
git add .
git commit -m "Update site"
git push origin main
```

## 構成技術
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API
