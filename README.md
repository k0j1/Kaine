# 割烹食堂かいね (Kappo Shokudo Kaine) Website

福島県郡山市菜根にある「割烹食堂かいね」の公式ウェブサイトプロジェクトです。
React, TypeScript, Tailwind CSS, Vite を使用して構築されています。

## プロジェクトのセットアップ

### 1. 依存関係のインストール
プロジェクトのフォルダで以下のコマンドを実行してください。

```bash
npm install
```

### 2. 開発サーバーの起動（プレビュー）
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

## 構成技術
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **AI:** Google Gemini API (AIコンシェルジュ機能)

## AIコンシェルジュ機能について
AIコンシェルジュ（チャットボット）を動作させるには、有効な Gemini API Key が必要です。
`.env` ファイルを作成し、以下のように設定してください（ローカル開発時）。

```
VITE_API_KEY=your_api_key_here
```