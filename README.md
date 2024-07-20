## フロントエンドエンジニアのためのHotwire入門

これは「フロントエンドエンジニアのためのHotwire入門」のデモサイトです。
[Next.js](https://nextjs.org/)をベースに作ってあります。

## Getting Started

プロジェクトルートに`.env.local`ファイルを作成します。内容は下記の通りです。
（秘密鍵が必要なサービスは使っていないので、このままで大丈夫です！）
```bash
URL=http://localhost:3000
RESPONSE_DELAY=0
DATABASE_DELAY=500
```

開発用サーバ(Next.js)は下記のコマンドで起動します。

```bash
npm run dev
```

EJS(Hotwire)側を編集した時にTailwind CSSのスタイルを自動更新するには、下記のコマンドを実行します。

```bash
npm run hotwire-dev
```

ブラウザで [http://localhost:3000](http://localhost:3000)にアクセスして結果を見ます。

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

1. [プロジェクト構成](docs-draft/project-setup.md)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
