# プロジェクト構成

## 目的

本プロジェクトは「フロントエンドエンジニアのためのHotwire入門」と銘打っている。Ruby on Railsなどを普段から使っているバックエンドエンジニアではなく、普段はReactやNext.jsなどを使い、バックエンド技術に慣れていない人を対象としている。

HotwireはRuby on Railsと組み合わせて使うことが多いが、これではフロントエンドの人にとってハードルが高い教材になってしまう。これを懸念して、フロントエンドエンジニアに馴染みにある技術だけで構成するように努めた。

## Next.jsベース

HotwireもReactも目的は優れたUI/UXをユーザに提供することである。だからこそ、フロントエンジニアがすでに蓄積されている知識をベースに教材を展開したいと願っている。 このためにはReact/Next.jsと常に対比させ、同じ面、異なる面をハイライトするようにしたい。「Reactだったらこうする場面では、Hotwireではこうするのか」という納得感を大切にしたいと考えている。

そこでフロントエンドで最も多くの人が利用していると推定されるNext.jsをベースに教材を用意した。まだapp routerは新しいのでpages routerを使い、さらにSSRはまだそれほど浸透していない可能性があるので、主にuseEffectからfetchするパターンを使用した。

## Next.jsはHotwireのバックエンドも兼ねる

HotwireはRuby on Railsのフロントエンド技術として生まれたが、実際にはRubyにもRailsにも依存していない。PHP/LaravelでもPython/Djangoでも、それこそ静的HTMLサイトでも、あるいはWordpressでもHotwireは問題なく使用できる。この教材でもHTMLをレスポンスとして返す、何かしらのバックエンドが必要であった。

Next.js [pages router](https://nextjs.org/docs/pages)の[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)は、別途Expressサーバなどを立ち上げなくても、それだけでHTMLのレスポンスが返せる。そこで今回はNext.jsのAPI routesをHotwire用のバックエンドとした。HTMLのテンプレートシステムとしては[EJS](https://ejs.co)を採用した。

このため、Ruby/PHP/Python/Java等を知らなくても、Next.jsさえ理解していれば動きが理解できるバックエンドになっている。

## Tailwind

CSSはTailwindを使用している。Hotwire側専用のTailwindコンパイルをしています (package.jsonの"hotwire-dev"参照)
