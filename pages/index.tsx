// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Next pages | Hotwire for Frontend devs</title>
      </Head>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hotwire for Frontend developers
            </h2>
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">フロントエンドエンジニアのためのHotwire入門</h3>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Hotwireは近年注目されているフロントエンド技術です。<br />
              サーバからJSONではなく、HTMLが送信されることに特徴があります。<br />
              React/Next.jsと対比しながら紹介します。
            </p>
          </div>
          <hr className="my-8"/>
          <div className="mx-auto max-w-2xl text-center">
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">ページ遷移: TurboDrive</h3>
            <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
              HotwireのTurboDriveは、Next.jsの<code>Link</code>タグとほぼ同じ位置付けの機能です。
              主にリンクをクリックした時の画面遷移のヌルサク感を大幅に向上させます。<br />
              なお、Next.jsはdev環境ではpreloadが動かないので、buildしてお試しください。
              またNext.jsではpages routerのSSGを使った場合はオン、pages routerのSSRを使った場合はオフ、app routerを使ったいかつLinkタグにprefetch trueを指定した場合はオン、useEffectを使った場合は無効と挙動が異なります。<br />
              なおprefetchの効果を見やすくするために、Next.js app routerのRouter Cacheはオフにしてあります。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/api/hotwire/users"
                 className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 data-turbo="false">ブラウザネイティブ</a>
              <a href="/api/hotwire/users"
                 className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                TurboDrive</a>
              <Link href="/users_ssg"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-turbo="true">Next.js <code>Link</code> SSG</Link>
              <Link href="/users"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-turbo="true">Next.js useEffect</Link>
              <Link href="/users_ssr"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-turbo="true">Next.js page router SSR</Link>
              <Link href="/users_app"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-turbo="true">Next.js app router</Link>
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
                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 data-turbo="false">住所入力UI</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
