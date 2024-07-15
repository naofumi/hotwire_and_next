# プロジェクト構成

## 目的

本プロジェクトは「フロントエンドエンジニアのためのHotwire入門」となっています。HotwireはRuby on Rails用に誕生しましたが、フロントエンドエンジニアに改めてRubyを学習していただくのも負担が大きいと考え、そのような方にとって馴染みにある技術だけで構成するように努めました。

そこでJavaScriptの中でも最も人気の高い技術のみを使い、プロジェクトを構成しました。

## Next.jsベース

プロジェクトの目的は「Hotwire入門」ですが、すでにフロントエンドの技術に馴染みのある方にとっては、それを出発点に話を進めた方が深く理解していただけるのではないかと考えました。

そこでHotwireを教えるだけではなく、React/Next.jsと常に対比させ、同じ面、異なる面を常にハイライトするようにしたいと考えています。

そのためにNext.jsのpages routerをベースに、SSRではなくuseEffectからfetchする技法でReactを書き、これとHotwireで書いたページを比較できるようにしています。

## Hotwireのバックエンド

HotwireはRuby on Railsのフロントエンド技術として生まれましたが、実際にはRubyにもRailsにも依存していません。PHP/LaravelでもPython/Djangoでも、それこそ静的HTMLサイトでも、あるいはWordpressでもHotwireは問題なく使用できます。

今回はNext.js [pages router](https://nextjs.org/docs/pages)の[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)を使い、ここから動的にHTMLを生成する形でバックエンドを用意しました。HTMLのテンプレートシステムとしては、Expressのデフォルトでもある[EJS](https://ejs.co)を採用しています。

このため、Ruby/PHP/Python/Java等を知らなくても、Next.jsさえ理解していれば動きが理解できるバックエンドになっています。

## Tailwind

CSSはTailwindを使用しています。Hotwire側専用のTailwindコンパイルをしています (package.jsonの"hotwire-dev"参照)
