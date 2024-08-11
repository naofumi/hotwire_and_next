// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Head from "next/head";
import Layout from "@/components/Layout";
import H2WithHash from "@/components/H2WithHash";
import StyledLink from "@/components/StyledLink";
import PrimaryButtonWithLink from "@/components/PrimaryButtonWithLink";
import {isDev} from "@/helpers/feature_flags";

export default function IndexPage() {
  return (
    <Layout hideTechLabel={true} hideTopButton={true}>
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
            <p className="text-left mx-auto mt-20 max-w-2xl text-lg leading-8 text-gray-600">
              Hotwireは近年、大きく注目を集めているフロントエンド技術です。</p>
            <p className="text-left mx-auto mt-2 max-w-2xl text-lg leading-8 text-gray-600">
              本サイトでは、<strong>React/Next.jsをすでに理解しているフロントエンドエンジニアを対象に</strong>、実際に動くコードを見ながらHotwireとReact/Next.jsを比較し、Hotwireの素晴らしさと考え方を理解していただくことを目的としています。
            </p>
            <p className="text-left mx-auto mt-2 max-w-2xl text-lg leading-8 text-gray-600">
              「HotwireはRails専用じゃないの？」と思っている方も多いと思いますが、実はHotwireはバックエンド非依存です。Rails, Laravel, Django, Nodeでも関係なく動きます。
              このサイトも<strong>HotwireをNext.js上で動かしていて、すべてJavaScript
              (TypeScript)で書かれています。</strong>
              JavaScriptさえわかれば簡単にコードを追うことができます。</p>
            <p className="text-left mx-auto mt-2 max-w-2xl text-lg leading-8 text-gray-600">本サイトのコードは<StyledLink
              href="https://github.com/naofumi/hotwire_and_next">GitHub</StyledLink>に公開しています。また<StyledLink
              href="https://vercel.com">Vercel</StyledLink>でデプロイしています。実際に触って、さらにコードを見て、理解を深けめていただきたいと思います。
            </p>
            <div className="text-center mt-4 text-xl tracking-wider">
              <StyledLink href="/about">
                もっと詳しい解説はこちら...
              </StyledLink>
            </div>


            <div className="mt-6">
              <div className="w-max-[560px] flex justify-center">
                <iframe className="aspect-video" src="https://www.youtube.com/embed/fzd8Xn18eFw?si=SNmev3E43NsgTYFl"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>


            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="page-transition">
                ページ遷移: Turbo Drive
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                HotwireのTurbo Driveは、Next.jsの<code>Link</code>タグとほぼ同じ位置付けの機能です。
                主にリンクをクリックした時の画面遷移のヌルサク感を大幅に向上させます。<br/>
                なお、Next.jsはdev環境ではprefetchが動かないので、ローカル環境でUXを確認する場合はbuild, startしてからお試しください。
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
            </div>


            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="tabbed-menu">
                タブメニュー: Turbo Frames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                インタラクティブなウェブUIの大半は、突き詰めると画面の部分的な書き換えです。
                新しい内容がすでにブラウザに読み込まれているなら、これは難しくありません。<br/>
                厄介なのは新しい内容をサーバから読み込む時ですが、Turbo Framesなら簡単に実現できます。
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
            </div>


            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="tabbed-menu">
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
            </div>


            <hr className="my-8"/>
            <div className="">
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
            </div>


            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="hierarchical-menus">
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
            </div>

            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="hierarchical-menus">
                階層プルダウンメニュー: Turbo Frames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                動的に、階層的に絞り込まれるプルダウンメニューを使って、住所を入力していくUIをTurbo Framesで作ります。
                小さい箇所の置換が複数ある場合はTurbo Streamsを使うことが多いのですが、1つまとめられる場合はTurbo Framesの方が良いケースもあります。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/api/hotwire/address_selector"
                   className="btn-primary"
                   data-turbo="false">Hotwire 住所入力UI</a>
                <a href="/address_selector"
                   className="btn-primary"
                   data-turbo="false">Next 住所入力UI</a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </Layout>
  )
}
