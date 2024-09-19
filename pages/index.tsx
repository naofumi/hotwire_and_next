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
]

export default function IndexPage() {
  return (
    <Layout hideTechLabel={true} hideTopButton={true} showDelaySetter={true}>
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

            <H2WithHash id="hotwire-vs-nextjs">
              HotwireとNext.jsをちゃんと見て比較しよう
            </H2WithHash>
            <p className="text-left mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              本サイトでは、React/Next.jsをすでに理解しているフロントエンドエンジニアを対象に、<strong>実際に動くコードと実際に動くデモ</strong>を体感しながらHotwireとReact/Next.jsを比較します。
            </p>

            <div className="text-left mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              <ul className="ml-4 my-4 space-y-2 ">
                <li>HotwireでもNext.jsと同等か、それ以上のUI/UXが実現できます。「Hotwireは簡単だけど、React/Next.jsの方が優れたUI/UXが作れる」というのは誤解です</li>
                <li>Hotwireはバックエンド非依存です。Rails, Laravel, Django, Nodeでも関係なく動きます。実際、本サイトはHotwireをNext.js API Routesで動いています</li>
              </ul>
            </div>

            <p
              className="text-left mx-auto mt-2 max-w-2xl text-lg leading-8 text-gray-600">本サイトのコードは<StyledLink
              href="https://github.com/naofumi/hotwire_and_next">GitHub</StyledLink>に公開しています。また<StyledLink
              href="https://vercel.com">Vercel</StyledLink>でデプロイしています。実際に触って、さらにコードを見て、上記が誇張かどうかを確認していただければと思います。
            </p>
            <div className="text-center mt-4 text-xl tracking-wider">
              <StyledLink href="/about">
                もっと詳しく...
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

            <article className="mt-16 border-t border-t-gray-200">
              <H2WithHash id="page-transition">
                ページ遷移: Turbo Drive
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                HotwireのTurbo Driveは、Next.jsの<code>Link</code>タグとほぼ同じ位置付けの機能です。
                主に画面遷移のヌルサク感を大幅に向上させます。<br/>
                ダイナミックなコンテンツを中心としたサイトでは、prefetch等の違いにより、<strong>Hotwireの方が高速なUI/UXになります</strong>。
              </p>
              <div className="text-center mt-4 text-xl tracking-wider">
                <StyledLink href="/commentaries/page_transitions">
                  解説はこちら...
                </StyledLink>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <PrimaryButtonWithLink href="/api/hotwire/users">
                  ブラウザネイティブ
                </PrimaryButtonWithLink>
                <PrimaryButtonWithLink href="/api/hotwire/users">
                  Turbo Drive
                </PrimaryButtonWithLink>
                <PrimaryButtonWithLink href="/users_ssg">
                  Next.js SSG
                </PrimaryButtonWithLink>
                <PrimaryButtonWithLink href="/users">
                  Next.js useEffect
                </PrimaryButtonWithLink>
                <PrimaryButtonWithLink href="/users_ssr">
                  Next.js Pages Router SSR
                </PrimaryButtonWithLink>
                <PrimaryButtonWithLink href="/users_app">
                  Next.js App Router Server component
                </PrimaryButtonWithLink>
              </div>
            </article>


            <article className="mt-16 border-t border-t-gray-200">
              <H2WithHash id="tabbed-menu">
                タブメニュー: Turbo Frames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                インタラクティブなウェブUIは、突き詰めると画面の部分的な書き換えに集約されます。ほとんどの場合、これは難しくありません。<br/>
                厄介なのは新しい内容をサーバから読み込む時です。Turbo Framesはここを担当し、簡単に実現してくれます。
              </p>
              <div className={`text-center mt-4 text-xl tracking-wider`}>
                <StyledLink href="/commentaries/tabbed_menus">
                  解説はこちら...
                </StyledLink>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/tabbed_segments"
                   className="btn-primary"
                   data-turbo="false">タブメニューUI</a>
              </div>
            </article>


            <article className="mt-16 border-t border-t-gray-200">
              <H2WithHash id="details-panel">
                詳細パネル: Turbo Frames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                リスト項目を選択して、その詳細をパネルに表示するUIです。メールアプリなどでよく見かけるタイプのUIです。タブメニューとよく似ていますが、サーバから読み込んだ内容が、リンクがあったところとは別の場所に埋め込まれる点が異なります。
              </p>
              <div className={`text-center mt-4 text-xl tracking-wider`}>
                <StyledLink href="/commentaries/details_panel">
                  解説はこちら...
                </StyledLink>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/details_panel"
                   className="btn-primary"
                   data-turbo="false">詳細パネルUI</a>
              </div>
            </article>


            <article className="mt-16 border-t border-t-gray-200">
              <H2WithHash id="loading-animations">
                ローディングアニメーション問題: Turbo Frames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                特にレスポンスが遅い場合、ボタンクリック後の「ローディング中」状態をユーザに伝えるのことはとても重要です。これを怠ると、ユーザを不安にさせてしまいます。<br/>
                残念ながら、AJAX/fetchで非同期通信をするサイトの多くが、これを見落としています。<br/>
                TurboおよびNext.jsでこの問題を解決する方法を紹介し、比較します。
              </p>
              <div className={`text-center mt-4 text-xl tracking-wider`}>
                <StyledLink href="/commentaries/loading_animations">
                  解説はこちら...
                </StyledLink>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/popup"
                   className="btn-primary"
                   data-turbo="false">ポップアップUI</a>
              </div>
            </article>

            <article className="mt-16 border-t border-t-gray-200">
              <H2WithHash id="modal">
                モーダルダイアログ: Turbo Frames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                モーダルダイアログはUI要素として非常によく使われています。元の画面のスクロール位置などのステートを維持しつつ、追加の情報や編集用のFormを表示するのに使用されます。
                中身がダイナミックな場合はサーバからデータを取得する必要がありますので、Turbo
                Framesがよく使われます。<br/>
                JavaScriptなしで実装することも可能ですが、<strong>やはり多少のJavaScriptやCSSがあった方がUXは随分とよくなります</strong>ので、その違いを紹介します。<br/>
                Next.jsは新しくApp Routerが出てきて、ベストプラクティスがまだ模索中のところがあります。従来のPage
                Routerを使った方法に加えて、<strong>App Routerでのモーダルの出し方もいくつか比較検討します</strong>。
              </p>
              <div className={`text-center mt-4 text-xl tracking-wider`}>
                <StyledLink href="/commentaries/modal_dialogs">
                  解説はこちら...
                </StyledLink>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/modal"
                   className="btn-primary"
                   data-turbo="false">モーダルUI</a>
              </div>
            </article>

            <article className="mt-16 border-t border-t-gray-200">
              <H2WithHash id="popup">
                ポップアップ: Turbo Frames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                Turbo
                Framesはサーバにリクエストを送り、画面を部分的に書き換えるだけでも多くのウェブUIが実装できます。<br/>カスタムのJavaScriptを少し追加すると、さらに可能性が増える例です。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/popup"
                   className="btn-primary"
                   data-turbo="false">ポップアップUI</a>
              </div>
            </article>


            <article className="mt-16 border-t border-t-gray-200">
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
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/api/hotwire/live_search"
                   className="btn-primary"
                   data-turbo="false">Hotwire ライブ検索</a>
                <a href="/live_search"
                   className="btn-primary"
                   data-turbo="false">React ライブ検索</a>
              </div>
            </article>

            <article className="mt-16 border-t border-t-gray-200">
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
                   data-turbo="false">Hotwire 住所入力UI</a>
                <a href="/address_selector"
                   className="btn-primary"
                   data-turbo="false">Next 住所入力UI</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}
