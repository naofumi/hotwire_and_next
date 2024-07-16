# TurboDrive: ページ遷移

## TurboDriveは2ページ目以降をSPAにする

Hotwireでは`a tag`や`form tag`を介してアクセスしたページはSPA的にロードされる。つまりJavascript, CSS等を再読み込みせず、コンテンツのみを更新する。これにより表示の高速化を実現している。 この仕組みの歴史は古く、前身の[TurboLinks](https://github.com/turbolinks/turbolinks)(2012)から実装している。TurboLinksを発展させたものが現在のTurboDriveとなっている。

Next.jsも`Link tag`を介してアクセスしたページはSPA的にロードされる。この機構はHotwire, Next.jsのヌルサク感に大きく寄与している。

## Next.jsの`Link tag`とTurboDriveの機能は酷似している

* 双方とも２ページ目のSPA化により、高速化を実現している
* 双方ともprefetch機能により、リンクをクリックする前からリンク先のページを読み込む。そしてネットワーク・サーバ速度の限界を超えた体感速度を実現している
* ただしNext.jsの`Link tag`は複雑で、動く時と動かないときの条件がわかりにくい。Pages routerではSSR(getServerSideProps)を使うとprefetchはしてくれない。App routerでも条件によりprefetchしたりしなかったりする。

TurboDriveの場合は次の機能も用意されている。

* **プログレスバーの表示:** SPA化するとブラウザネイティブのプログレスバーが表示されない。TurboDriveでは専用のプログレスバーが自動的に表示され、これを補っている

## Next.jsのprefetchは動的コンテンツのヌルサク感を向上させない

動的なページを表示する場合、Next.jsでは２種類の方法が用いられる。

* まず`getServerSideProps`を使用して、DBやJSON APIからデータを取得する。そしてこれをPageコンポーネントにpropsとして渡して、サーバでレンダリングした後に、ブラウザに送る。これがSSRのアプローチ
* まず、動的なデータを含まないが`useEffect`が記述されているPageコンポーネントを先にブラウザに送る(SSG)。ブラウザがこのコンポーネントをレンダリングすると`useEffect`の中身が実行され、DBやJSON APIからデータを取得する。レスポンスのデータを使って再レンダリングをすると、最新のデータを含む画面が表示される

Pages routerを使った場合、前者の`getServerSideProps`を使った画面はprefetchされない。また後者の場合、prefetchにより動的なデータを含まないページはいち早くブラウザに届けられるが、`useEffect`からのリクエストはprefetchされない。結局、最新のデータの画面が表示されるまでには結局時間がかかってしまうので、ヌルサク感の向上は限定的である。

## 結論

