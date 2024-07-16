// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hotwire for Frontend developers
            </h2>
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">フロントエンドエンジニアのためのHotwire入門</h3>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Hotwireは近年注目されているフロントエンド技術です。
              サーバからもっぱらHTMLが送信されることに特徴があります。
              React/Next.jsと対比しながら下記に紹介します。
            </p>
          </div>
          <hr className="my-8"/>
          <div className="mx-auto max-w-2xl text-center">
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">ページ遷移: TurboDrive</h3>
            <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
              HotwireのTurboDriveは、Next.jsの<code>Link</code>タグとほぼ同じ位置付けの機能です。
              主にリンクをクリックした時の画面遷移のヌルサク感を大幅に向上させます。
              なお、Next.jsの場合はdev環境ではpreloadが動かないので、buildしてお試しください。
              またNext.jsではSSRを使った場合とuseEffectを使った場合で挙動が異なります。
              SSRを使った方がTurboDriveと似た動作になります。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/api/hotwire/users"
                 className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 data-turbo="false">ブラウザネイティブ</a>
              <a href="/api/hotwire/users"
                 className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                TurboDrive</a>
              <Link href="/users"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-turbo="true">Next.js <code>Link</code> useEffect</Link>
              <Link href="/users_ssr"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-turbo="true">Next.js <code>Link</code> SSR</Link>
              <Link href="/users_ssg"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-turbo="true">Next.js <code>Link</code> SSG</Link>
            </div>
          </div>
          <hr className="my-8"/>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              画面の部分的書き換え: TurboFrames
            </h3>
            <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
              画面全体を書き換えるのではなく、一部分だけを切り替えたいときがある。例えばタブ切り替えUIなどが代表例である。
              <br/>
              Reactではコンポーネントを入れ替えることによってタブ切り替える実現することが多い。Remix,
              Next.js app routerなどではネスト化されたルートが用意され始めているが、まだ一般的ではない。
              <br/>
              Hotwireでは大きいパーツを入れ替える機能としてTurboframes機能が用意されているので、これを使うことになる。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/tabbed_segments"
                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 data-turbo="false">タブ切り替えUI</a>
            </div>
          </div>
          <hr className="my-8"/>
          <div className="mx-auto max-w-2xl text-center">
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">大きい部分的画面書き換え<br/>
              タブ切り替えUIがあるときなど</h3>
            <p className="text-left mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
              画面全体を書き換えるのではなく、一部分だけを切り替えたいときがある。例えばタブ切り替えUIなどが代表例である。
              <br/>
              Reactではコンポーネントを入れ替えることによってタブ切り替える実現することが多い。Remix,
              Next.js app routerなどではネスト化されたルートが用意され始めているが、まだ一般的ではない。
              <br/>
              Hotwireでは大きいパーツを入れ替える機能としてTurboframes機能が用意されているので、これを使うことになる。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/tabbed_segments"
                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 data-turbo="false">タブ切り替えUI</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
