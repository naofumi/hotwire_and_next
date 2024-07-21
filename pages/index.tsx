// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import Head from "next/head";
import Layout from "@/pages/components/Layout";
import H2WithHash from "@/pages/components/H2WithHash";
import StyledLink from "@/pages/components/StyledLink";
import PrimaryButtonWithAnchor from "@/pages/components/PrimaryButtonWithAnchor";

export default function IndexPage() {
  return (
    <Layout hideTechLabel={true} hideTopButton={true}>
      <Head>
        <title>Hotwire for Frontend devs</title>
      </Head>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hotwire for Frontend Developers
            </h2>
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">フロントエンドエンジニアのためのHotwire入門</h3>
            <p className="text-left mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Hotwireは近年注目されているフロントエンド技術です。</p>
            <p className="text-left mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-600">
              <strong>React/Next.jsをすでに理解しているフロントエンドエンジニアを対象に</strong>、実際に動くコードを見ながらHotwireとReact/Next.jsを比較し、Hotwireの素晴らしさと考え方を理解してもらうことが本サイトの目的です。</p>
            <p className="text-left mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-600">
              Hotwireはバックエンド非依存です。Rails, Laravel, Django, Nodeでも関係なく動きます。
              このサイトも<strong>HotwireをNext.js上で動かしていて、すべてJavaScript (TypeScript)で書かれています。</strong>
              JavaScriptさえわかれば簡単にコードを追うことができます。</p>
            <p className="text-left mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-600">本サイトのコードは<StyledLink
              href="https://github.com/naofumi/hotwire_and_next">GitHub</StyledLink>に公開しています。また<StyledLink
              href="https://vercel.com">Vercel</StyledLink>でデプロイしています。
            </p>
            <div className="text-center mt-4">
              <StyledLink href="/about">
                もっと詳しく...
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
                ページ遷移: TurboDrive
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
                HotwireのTurboDriveは、Next.jsの<code>Link</code>タグとほぼ同じ位置付けの機能です。
                主にリンクをクリックした時の画面遷移のヌルサク感を大幅に向上させます。<br/>
                なお、Next.jsはdev環境ではprefetchが動かないので、ローカル環境でUXを確認する場合はbuild, startしてからお試しください。
              </p>
              <div className="text-center mt-4">
                <StyledLink href="/commentaries/page_transitions">
                  もっと詳しく...
                </StyledLink>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <PrimaryButtonWithAnchor href="/api/hotwire/users">
                  ブラウザネイティブ
                </PrimaryButtonWithAnchor>
                <PrimaryButtonWithAnchor href="/api/hotwire/users">
                  TurboDrive
                </PrimaryButtonWithAnchor>
                <PrimaryButtonWithAnchor href="/users_ssg">
                  Next.js SSG
                </PrimaryButtonWithAnchor>
                <PrimaryButtonWithAnchor href="/users">
                  Next.js useEffect
                </PrimaryButtonWithAnchor>
                <PrimaryButtonWithAnchor href="/users_ssr">
                  Next.js page router SSR
                </PrimaryButtonWithAnchor>
                <PrimaryButtonWithAnchor href="/users_app">
                  Next.js app router Server component
                </PrimaryButtonWithAnchor>
              </div>
            </div>


            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="tabbed-menu">
                タブメニュー: TurboFrames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
                インタラクティブなウェブUIの大半は、画面の部分的な書き換えである。そして新しいコンテンツがすでにブラウザに読み込まれている場合、これは難しくない。<br/>
                厄介なのは新しいコンテンツをサーバから読み込む時だが、TurboFramesを使うと簡単にできる。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/tabbed_segments"
                   className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                   data-turbo="false">タブメニューUI</a>
              </div>
            </div>


            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="popup">
                ポップアップ: TurboFrames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
                TurboFramesはサーバにリクエストを送り、画面を部分的に書き換えるだけでも多くのウェブUIが実装できます。<br/>カスタムのJavaScriptを少し追加すると、さらに可能性が増える例です。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/popup"
                   className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                   data-turbo="false">ポップアップUI</a>
              </div>
            </div>


            <hr className="my-8"/>
            <div className="">
              <H2WithHash id="hierarchical-menus">
                階層プルダウンメニュー: TurboFrames
              </H2WithHash>
              <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
                動的に、階層的に絞り込まれるプルダウンメニューを使って、住所を入力していくUIをTurboFramesで作ります。
                小さい箇所のアップデートにもTurboFramesが有効です。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/api/hotwire/address_selector"
                   className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                   data-turbo="false">Hotwire 住所入力UI</a>
                <a href="/address_selector"
                   className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                   data-turbo="false">Next 住所入力UI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
