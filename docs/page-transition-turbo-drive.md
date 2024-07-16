# TurboDrive: ページ遷移

## TurboDriveは2ページ目以降をSPAにする

Hotwireでは`a tag`や`form tag`を介してアクセスしたページはSPA的にロードされる。つまりJavascript, CSS等を再読み込みせず、コンテンツのみを更新する。これにより表示の高速化を実現している。 この仕組みの歴史は古く、前身の[TurboLinks](https://github.com/turbolinks/turbolinks)(2012)から実装している。TurboLinksを発展させたものが現在のTurboDriveとなっている。

Next.jsも`Link tag`を介してアクセスしたページはSPA的にロードされる。この機構はHotwire, Next.jsのヌルサク感に大きく寄与している。

## Next.jsの`Link tag`とTurboDriveの機能は酷似している

* 双方とも２ページ目のSPA化により、高速化を実現している
* 双方ともprefetch機能により、リンクをクリックする前からリンク先のページを読み込む。そしてネットワーク・サーバ速度の限界を超えた体感速度を実現している

TurboDriveの場合は次の機能も用意されている。

* **プログレスバーの表示:** SPA化するとブラウザネイティブのプログレスバーが表示されない。TurboDriveでは専用のプログレスバーが自動的に表示され、これを補っている

## Next.jsのprefetchは動的コンテンツのヌルサク感を向上させない

Next.jsのprefetchは静的ページ(SSG)では非常に有効だが、動的コンテンツの場合の動作は難しく、ヌルサク感の向上に繋げるのは難しい。これを説明するにはまずNext.jsで動的ページを表示する仕組みを理解しないといけない。

Next.jsでは主に２つの方法で動的ページを作成する。

1. **SSRを使った方法:** まず`getServerSideProps`がサーバで実行され、サーバがDBやJSON APIからデータを取得する。そしてこれをPageコンポーネントにpropsとして渡して、サーバ上でレンダリングした後に、ブラウザに送る
2. **useEffectを使った方法:** まず`useEffect`が記述されている静的ページをブラウザに送る(SSG)。Hydration後、ブラウザ上で`useEffect`の中身が実行され、ブラウザはJSON APIからデータを取得する。レスポンスのデータを使ってブラウザで再レンダリングをすると、最新のデータを含む画面がブラウザに表示される

最初のSSRについて、Next.jsの`Link tag`は`getServerSideProps`を使ったページをprefetchをしないようになっている(ブラウザからprefetchリクエストは送られるが、サーバからは空のレスポンスが返されるのみ)。またApp routerでも動的なコンテンツについては、条件によりprefetchしたりしなかったりする。したがってSSRを使った方法では、prefetchによるヌルサク感の向上はない。

また`useEffect`を使った場合は、prefetchは最初の静的ページをSSGで取得するところまでである。`useEffect`からJSON APIを呼び出すところはprefetchされない。結局はprefetchされていないリクエスト・レスポンスが終わるまで最新のページは表示されないので、ヌルサク感の向上への寄与は限定的である。

このようにNext.jsのprefetchは静的ページには有効だが、動的ページでは効果を発揮できない。一方でHotwireは動的ページでもprefetchが有効なので、動的ページでもヌルサクになる。

## 結論

HotwireもNext.jsも２ページ目へのアクセスをSPA化させており、ページのアクセスが高速化されている。しかし最も効果があるprefetch機能については差があり、Next.jsは静的ページのSSG時以外はprefetchが効果を発揮しない。

またNext.jsの`Link tag`ではプログレスバーは出てこないため、レスポンスが遅いページの場合は`Router.events`を使って[プログレスバー](https://github.com/apal21/nextjs-progressbar?tab=readme-ov-file)を作る必要がある

