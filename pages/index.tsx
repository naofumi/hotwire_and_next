// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import Head from "next/head";
import Layout from "@/pages/components/Layout";

export default function IndexPage() {
  return (
    <Layout hideTechLabel={true} hideTopButton={true}>
      <Head>
        <title>Next pages | Hotwire for Frontend devs</title>
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
              バックエンドに非依存で、Rails, Laravel, Django, Expressでも関係なく動きます。
              このサイトは<strong>HotwireをNext.js上で動かしています</strong></p>
            <p className="text-left mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-600">
              本サイトでは<strong>実際に動作するサイトでUXを比較し、またソースコードを確認しながら</strong>、HotwireとReact/Next.jsを比較します。
            </p>
            <p className="text-left mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-600">本サイトのコードはすべて<a href="https://github.com/naofumi/hotwire_and_next"
                                          className="text-orange-600 hover:text-orange-400 underline">GitHub</a>に公開しています。また<a
              href="https://vercel.com" className="text-orange-600 hover:text-orange-400 underline">Vercel</a>でデプロイしています。</p>
            <div className="text-center mt-4">
              <Link href="/about" className="text-orange-600 hover:text-orange-400 underline">
                もっと詳しく...
              </Link>
            </div>
          </div>
          <hr className="my-8"/>
          <div className="mx-auto max-w-2xl text-center">
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">ページ遷移: TurboDrive</h3>
            <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
              HotwireのTurboDriveは、Next.jsの<code>Link</code>タグとほぼ同じ位置付けの機能です。
              主にリンクをクリックした時の画面遷移のヌルサク感を大幅に向上させます。<br/>
              なお、Next.jsはdev環境ではprefetchが動かないので、buildしてからお試しください。<br/>
              なお、初回ロードを再現するために、下記のリンクは<code>Link</code>ではなく、普通の<code>a</code>タグになっています。
              また、prefetchの影響を見やすくするために、Next.js app routerのRouter Cacheはオフにしてあります。
            </p>
            <div className="text-center mt-4">
              <Link href="/commentaries/page_transitions" className="text-orange-600 hover:text-orange-400 underline">
                もっと詳しく...
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/api/hotwire/users"
                 className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                 data-turbo="false">ブラウザネイティブ</a>
              <a href="/api/hotwire/users"
                 className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                TurboDrive</a>
              <a href="/users_ssg"
                 className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                 data-turbo="true">Next.js <code>Link</code> SSG</a>
              <a href="/users"
                 className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                 data-turbo="true">Next.js useEffect</a>
              <a href="/users_ssr"
                 className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                 data-turbo="true">Next.js page router SSR</a>
              <a href="/users_app"
                 className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                 data-turbo="true">Next.js app router Server component</a>
            </div>
          </div>
          <hr className="my-8"/>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              タブメニュー: TurboFrames
            </h3>
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
          <div className="mx-auto max-w-2xl text-center">
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">ポップアップ:
              TurboFrames</h3>
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
          <div className="mx-auto max-w-2xl text-center">
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">階層プルダウンメニュー:
              TurboFrames</h3>
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
    </Layout>
  )
}
