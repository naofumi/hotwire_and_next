// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Head from "next/head";
import Layout from "@/components/Layout";
import H2WithHash from "@/components/H2WithHash";
import StyledLink from "@/components/StyledLink";
import PrimaryButtonWithLink from "@/components/PrimaryButtonWithLink";
import {ChapterListFromHeaders} from "@/components/ChapterList";

const chapterHeaders = [
  {level: 2, link: "#hotwire-vs-nextjs", name: "HotwireとNext.jsをちゃんと見て比較しよう"},
  {level: 2, link: "#page-transition", name: "ページ遷移: Turbo Drive"},
  {level: 2, link: "#tabbed-menu", name: "タブメニュー: Turbo Frames"},
  {level: 2, link: "#details-panel", name: "詳細パネル: Turbo Frames"},
  {level: 2, link: "#loading-animations", name: "ローディングアニメーション問題: Turbo Frames"},
  {level: 2, link: "#modal", name: "モーダルダイアログ: Turbo Frames"},
  {level: 2, link: "#popup", name: "ポップアップ: Turbo Frames"},
  {level: 2, link: "#live-search", name: "ライブ検索: Turbo Frames"},
  {level: 2, link: "#hierarchical-menus", name: "階層プルダウンメニュー: Turbo Frames"},
  {level: 2, link: "#turbo-streams", name: "複数箇所の更新（カート）：Turbo Streams"},
  {level: 2, link: "#glossary", name: "用語集"},
  {level: 2, link: "#instructions", name: "サイトの使い方"},
]

export default function IndexPage() {
  return (
    <Layout hideTechLabel={true} hideTopButton={true} hideTitle={true} showDelaySetter={true}>
      <Head>
        <title>Hotwire for Frontend devs</title>
      </Head>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hotwire for Frontend Developers
            </h1>
            <h2
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">フロントエンドエンジニアのためのHotwire入門</h2>

            <div className="mt-8 max-w-xl text-left mx-auto">
              <ChapterListFromHeaders headers={chapterHeaders}/>
            </div>

            <article>
              <H2WithHash id="hotwire-vs-nextjs">
                HotwireとNext.jsをちゃんと見て比較しよう
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                本サイトでは、React/Next.jsに詳しいフロントエンドエンジニアを対象に、<strong>実際に動くコードと実際に動くデモ</strong>を体感しながら <strong>HotwireとReact/Next.jsを比較します</strong>。
              </p>

              <p className="text-left mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                各技術でのUIの作り方を伝えるだけでなく、さまざまな状況での動きを確認していただくために、仕組みや限界も紹介します。そのため、かなり細部の議論もしています。
              </p>

              <div className="text-left mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                <ul className="ml-4 my-4 space-y-2 ">
                  <li>HotwireでもNext.jsと同等か、それ以上のUI/UXが実現できます。<strong>「Hotwireは簡単だけど、React/Next.jsの方が優れたUI/UXが作れる」というのは、かなり特殊なものでない限りは誤解です</strong>
                  </li>
                  <li>Hotwireはバックエンド非依存です。Rails, Laravel, Django, Go,
                    Nodeでも関係なく動きます。実際、本サイトのHotwireコードはNext.js
                    API Routesで動かしています
                  </li>
                </ul>
              </div>

              <p
                className="text-left mx-auto mt-2 max-w-2xl text-lg leading-8 text-gray-600">本サイトのコードは<StyledLink
                href="https://github.com/naofumi/hotwire_and_next">GitHub</StyledLink>に公開しています。また<StyledLink
                href="https://zenn.dev/naofumik/articles/8849c2e8feecc0">Kamalを使ってさくらのVPSサーバ</StyledLink>で
                <StyledLink href="https://hotwire-n-next.castle104.com">デプロイ・公開</StyledLink>しています。実際に触って、さらにコードを見て、上記が誇張かどうかを確認していただければと思います。
              </p>
              <div className="text-center my-12 text-xl tracking-wider">
                <StyledLink href="/about">
                  Hotwireについてもっと詳しく...
                </StyledLink>
              </div>


              <div className="mt-6">
                <div className="w-max-[560px] flex justify-center">
                  <iframe className="aspect-video" width="560" height="315"
                          src="https://www.youtube.com/embed/fzd8Xn18eFw?si=SNmev3E43NsgTYFl"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </article>

            <div className="flex gap-8 mt-16">
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="page-transition">
                  ページ遷移: Turbo Drive
                </H2WithHash>
                <p className="mt-8 leading-6 text-gray-600">
                  ウェブサイトのUI/UXにはページ遷移の体感が大きく影響します。
                </p>
                <p className="mt-2 leading-6 text-gray-600">
                  ダイナミックなコンテンツのサイトでは、一般に<strong>Hotwireの方が高速なUI/UXになります</strong>。
                </p>
                <div className="text-center my-12 text-xl tracking-wider">
                  <StyledLink href="/commentaries/page_transitions">
                    解説はこちら...
                  </StyledLink>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                  <PrimaryButtonWithLink href="/api/hotwire/users">
                    ページ遷移
                  </PrimaryButtonWithLink>
                </div>
              </article>
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="tabbed-menu">
                  タブメニュー: Turbo Frames
                </H2WithHash>
                <p className="mt-8 leading-6 text-gray-600">
                  タブメニューを例に、データをサーバから取得し、画面を部分的に書き換える方法を比較します。
                </p>
                <p className="mt-2 leading-6 text-gray-600">
                  <strong>Turbo Framesは非常に簡便な解決策を提供します。</strong>
                </p>
                <div className={`text-center my-12 text-xl tracking-wider`}>
                  <StyledLink href="/commentaries/tabbed_menus">
                    解説はこちら...
                  </StyledLink>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/api/hotwire/tabbed_segments_turboframes"
                     className="btn-primary"
                     data-turbo="false">タブメニューUI</a>
                </div>
              </article>
            </div>

            <div className="mt-8 flex gap-8">
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="details-panel">
                  詳細パネル: Turbo Frames
                </H2WithHash>
                <p className="mt-8 leading-6 text-gray-600">
                  表の中にあるボタンをクリックして、詳細をパネルに表示するUIです。メールアプリなどでよく見かけるタイプのUIです。
                </p>
                <p className="mt-2 leading-6 text-gray-600">
                  タブメニューとよく似ていますが、画面上で離れている要素が互いにが連携する点が異なります。
                </p>
                <div className={`text-center my-12 text-xl tracking-wider`}>
                  <StyledLink href="/commentaries/details_panel">
                    解説はこちら...
                  </StyledLink>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/api/hotwire/details_panel"
                     className="btn-primary"
                     data-turbo="false">詳細パネルUI</a>
                </div>
              </article>
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="loading-animations">
                  ローディングアニメーション問題: Turbo Frames
                </H2WithHash>
                <p className="mt-8 leading-6 text-gray-600">
                  レスポンスが遅いサイトでは、ユーザに適切にフィードバックを与えないと不安にさせてしまいます。
                </p>
                <p className="mt-2 leading-6 text-gray-600">
                  AJAX/fetchで非同期通信をするサイトでは、これを見落としがちです。
                  Hotwireでこの問題を解決する方法を解説します。
                </p>
                <div className={`text-center my-12 text-xl tracking-wider`}>
                  <StyledLink href="/commentaries/loading_animations">
                    解説はこちら...
                  </StyledLink>
                </div>
              </article>
            </div>

            <div className="mt-8 flex gap-8">
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="modal">
                  モーダルダイアログ: Turbo Frames
                </H2WithHash>
                <p className="mt-8 leading-6 text-gray-600">
                  モーダルダイアログはUI要素として非常によく使われています。作り方もたくさんあります。
                </p>
                <p className="mt-2 leading-6 text-gray-600">
                  HotwireでカスタムJavaScriptを使わない方法からReact Server
                  ComponentのLayoutを使う方法まで各種紹介・比較します。
                </p>
                <div className={`text-center my-12 text-xl tracking-wider`}>
                  <StyledLink href="/commentaries/modal_dialogs">
                    解説はこちら...
                  </StyledLink>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/api/hotwire/modal_w_js"
                     className="btn-primary"
                     data-turbo="false">モーダルUI</a>
                </div>
              </article>
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="popup">
                  ポップアップ: Turbo Frames
                </H2WithHash>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  Turbo
                  Framesはサーバにリクエストを送り、画面を部分的に書き換えるだけでも多くのウェブUIが実装できます。<br/>カスタムのJavaScriptを少し追加すると、さらに可能性が増える例です。
                </p>
                <div className={`text-center my-12 text-xl tracking-wider`}>
                  <StyledLink href="/commentaries/popups">
                    解説はこちら...
                  </StyledLink>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/api/hotwire/popup_stimulus"
                     className="btn-primary"
                     data-turbo="false">ポップアップUI</a>
                </div>
              </article>
            </div>

            <div className="mt-8 flex gap-8">
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="live-search">
                  ライブ検索: Turbo Frames
                </H2WithHash>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  リアルタイムで検索をするUIです。Turbo Framesを使って作りますが、aタグやformタグを契機に作動するのではなく、<code>onInput</code>イベントで動くので、JavaScriptを使う必要があります。Turbo
                  Framesを使う理由は、検索条件フィールドのステートを保ち、リセットされるのを防ぐためです。
                </p>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  Turbo
                  Framesを使っていますので、URLとの連携もできています。今回は<code>data-turbo-action=&quot;replace&quot;</code>属性とを使って、検索結果がブックマークできるようにしています。
                </p>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  またReact側ではただの<code>fetch</code>を使っていることもあり、競合状態 (race
                  condition)対策はされていません。一方でHotwire側は、Turboが提供する<code>Turbo.visit()</code>を使うだけで競合状態対策がされています。ネットワークタブを見ながらご確認ください。
                </p>
                <div className={`text-center my-12 text-xl tracking-wider`}>
                  <StyledLink href="/commentaries/live_search">
                    解説はこちら...
                  </StyledLink>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/api/hotwire/live_search"
                     className="btn-primary"
                     data-turbo="false">ライブ検索</a>
                </div>
              </article>
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="hierarchical-menus">
                  階層プルダウンメニュー: Turbo Frames
                </H2WithHash>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  動的に、階層的に絞り込まれるプルダウンメニューを使って、住所を入力していくUIをTurbo Framesで作ります。
                  小さい箇所の置換が複数ある場合はTurbo Streamsを使うことが多いのですが、1つまとめられる場合はTurbo
                  Framesの方が良いケースもあります。
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/api/hotwire/address_selector"
                     className="btn-primary"
                     data-turbo="false">住所入力UI</a>
                </div>
              </article>
            </div>

            <div className="mt-8 flex gap-8">
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="turbo-streams">
                  複数箇所の更新（カート）：Turbo Streams
                </H2WithHash>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  インタラクティブUIに必要な部分置換の大半はTurbo DriveやTurbo Framesで十分です。
                  しかしTurbo Streamsが必要なケースもあります。そのようなケースの１つとして、画面の複数箇所を更新するショッピングカートの例を紹介します。
                </p>
                <div className={`text-center my-12 text-xl tracking-wider`}>
                  <StyledLink href="/commentaries/turbo_streams">
                    解説はこちら...
                  </StyledLink>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/api/hotwire/cart_streams"
                     className="btn-primary"
                     data-turbo="false">複数箇所の更新（カート）</a>
                </div>
              </article>
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
              </article>
            </div>


            <div className="mt-8 flex gap-8">
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="glossary">
                  用語集
                </H2WithHash>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  フロントエンドの技術評価で登場する用語を解説し、定義します。
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <StyledLink href="/commentaries/glossary">
                    用語集はこちら...
                  </StyledLink>
                </div>
              </article>
              <article className="flex-1 px-6 py-8 rounded-lg border border-gray-200 text-left">
                <H2WithHash id="instructions">
                  サイトの使い方
                </H2WithHash>
                <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                  このサイトの機能と使い方を紹介します。
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <StyledLink href="/commentaries/instructions">
                    サイトの機能と使い方はこちら...
                  </StyledLink>
                </div>
              </article>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}
