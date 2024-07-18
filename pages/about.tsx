import {CheckCircleIcon} from '@heroicons/react/20/solid'
import Layout from "@/pages/components/Layout";

export default function About() {
  return (
    <Layout hideTechLabel={true}>
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">About</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hotwire for Frontend
          Developers</h1>
        <p className="mt-6 text-xl leading-8">
          フロントエンドエンジニアのためのHotwire入門
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
          <p>
            「Hotwire for Frontend
            Developers（フロントエンドエンジニアのためのHotwire入門）」は、Ruby on
            Railエンジニアに限らず、<strong>すべてのウェブ開発者がHotwireの良さを理解できるように</strong>作成したサイトです。
          </p>
          <p className="mt-2">
            なお本サイトは教材サイトではありません。したがってチュートリアル等はありません。<br/>
            代わりに<strong>Hotwireで書かれたコードとReact (Next.js)で書かれたページを並べ</strong>、UXの違いを体感していただきつつ、それぞれのコードを確認していただけるようになっています。
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Hotwireの特徴</h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
              <span>
                <strong className="font-semibold text-gray-900">バックエンド技術非依存: </strong>
                Ruby on Railsに限らず、Django, Laravel, Java, Node, Wordpressなど、あらゆるバックエンド技術で使えます。本サイトはHotwireはすべてNext.jsの<a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                className="text-indigo-600 hover:text-indigo-400 underline">API routes</a>で動いています。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
              <span>
                <strong className="font-semibold text-gray-900">大幅なUXを向上: </strong>
                ウェブサイトのUXを大幅に向上させます。体感レスポンスタイムの大幅短縮、画面の部分更新など、モダンフロントエンドのUX要件をNext.jsと同レベルで、Hotwireだけでカバーできます。具体的には本サイトの例をお確かめください。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
              <span>
                <strong className="font-semibold text-gray-900">学習時間と工数の削減: </strong>
                古典的なHTML生成を使い、JSON APIも使わないアプローチです。ReactやNext.jsのような複雑さがありませんので、学習時間と作業工数を削減できます。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
              <span>
                <strong className="font-semibold text-gray-900">注目されている技術です: </strong>
                Elixir PhoenixのLiveview、PHP LaravelのLivewire、さらにHotwire同様にバックエンド非依存のHTMXをはじめ、Hotwireと同様のアプローチでモダンフロントエンドを作る技術が近年注目を集めています。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
              <span>
                <strong className="font-semibold text-gray-900">セキュリティが高い: </strong>
                ユーザに見せたいものだけをHTMLを送信するだけなので、誤ってプライベートな情報を送ってしまう心配がありません。例えば秘密キーをブラウザに預ける必要がなく、またJSON APIに不要な情報を流してしまうこともありません。
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">プロジェクトの構成</h2>
          <p className="mt-6">
            本サイトのコードはすべて<a href="https://github.com/naofumi/hotwire_and_next"
                                       className="text-indigo-600 hover:text-indigo-400 underline">GitHub</a>に公開しています。また<a
            href="https://vercel.com" className="text-indigo-600 hover:text-indigo-400 underline">Vercel</a>でデプロイしています。
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
              <span>
                <strong className="font-semibold text-gray-900">HotwireはEJS: </strong>
                Hotwireはバックエンド技術非依存なので、HTMLが出力できればどこでも動きます。本プロジェクトではNext.js pages routerの<a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                className="text-indigo-600 hover:text-indigo-400 underline">API routes</a>からHTMLをレスポンスとして返しています。テンプレートエンジンは<a
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                className="text-indigo-600 hover:text-indigo-400 underline">EJS</a>を使っています。Hotwireの構成要素であるTurboとStimulusはそれぞれbuild済みのものをダウンロードし、<code>public/hotwire/javascript</code>に配置しています。またCSSはTailwindを使用しています。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
              <span>
                <strong className="font-semibold text-gray-900">ReactはNext.js app router: </strong>
                Hotwireと比較するためのReact側は、目まぐるしく変わるフロントエンド開発環境の中でも比較的共通して見られる技術を選定しました。
                <ul>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gray-400"/>
                    <span>フレームワークはNext.jsを使用しています。ただしまた<a href="https://nextjs.org/docs/app"
                                                                               className="text-indigo-600 hover:text-indigo-400 underline">app router</a>はまた使用しているプロジェクトが少ないと考え、<a
                      href="https://nextjs.org/docs/pages" className="text-indigo-600 hover:text-indigo-400 underline">pages router</a>を中心に作成しています。
                      ただし一部app routerと比較したいケースの時はこれも使っています。
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gray-400"/>
                    <span>
                      データのロードは主に<a
                      href="https://react.dev/reference/react/useEffect#fetching-data-with-effects"
                      className="text-indigo-600 hover:text-indigo-400 underline">useEffect</a>を使い、一部で<a
                      href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"
                      className="text-indigo-600 hover:text-indigo-400 underline">Server-side Rendering</a>を使っています。まだSSRを使っている現場は少なく、まだuseEffect (あるいはこのアプローチを拡張したTanstack Query, SWR等)を使っている現場が多いと感じているからです。エラーハンドリング等は省略しています。
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gray-400"/>
                    <span>内容が頻繁に更新されるウェブアプリを想定しているため、古いデータが表示されたままになってしまうタイプのキャッシュは使用していません。例えば<a
                      href="https://nextjs.org/docs/app/building-your-application/caching#router-cache"
                      className="text-indigo-600 hover:text-indigo-400 underline">Router Cache</a>はオフにしています。
                    </span>
                  </li>
                </ul>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </Layout>
  )
}
