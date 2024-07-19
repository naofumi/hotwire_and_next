import {CheckCircleIcon} from '@heroicons/react/20/solid'
import Layout from "@/pages/components/Layout";
import StyledLink from "@/pages/components/StyledLink";

export default function About() {
  return (
    <Layout hideTechLabel={true}>
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-orange-600">About</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hotwire for Frontend
          Developers</h1>
        <p className="mt-6 text-xl leading-8">
          フロントエンドエンジニアのためのHotwire入門
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
          <p>
            「Hotwire for Frontend
            Developers（フロントエンドエンジニアのためのHotwire入門）」は、Ruby on
            Railエンジニアに限らず、<strong>すべてのウェブ開発者がHotwireの良さを体感していただけるように</strong>作成したサイトです。
          </p>
          <p className="mt-2">
            なお本サイトは教材サイトではありません。したがってチュートリアル等はありません。<br/>
            代わりに<strong>Hotwireで書かれたページとReact (Next.js)で書かれたページを並べ</strong>、それぞれのUXを体験し、コードを確認していただけるようになっています。
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Hotwireの特徴</h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">バックエンド技術非依存: </strong>
                <StyledLink href="https://rubyonrails.org">Ruby on Rails</StyledLink>に限らず、<StyledLink href="https://www.djangoproject.com">Django</StyledLink>, <StyledLink href="https://laravel.com">Laravel</StyledLink>, <StyledLink href="https://www.java.com/ja/">Java</StyledLink>, <StyledLink href="https://nodejs.org/en">Node</StyledLink>, <StyledLink href="https://wordpress.com/">Wordpress</StyledLink>など、あらゆるバックエンド技術で使えます。本サイトのHotwireはすべて<StyledLink href="https://nextjs.org">Next.js</StyledLink>の<StyledLink href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes">API routes</StyledLink>で動いています。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">大幅なUXを向上: </strong>
                ウェブサイトのUXを大幅に向上させます。体感レスポンスタイムの大幅短縮、画面の部分更新など、モダンフロントエンドのUX要件をカバーできます。
                具体的には<StyledLink href="/">本サイトの各例</StyledLink>をお確かめください。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">学習時間と工数の削減: </strong>
                昔ながらのサーバでのHTML生成をするアプローチです。JSON APIも使いません。ReactやNext.jsのような複雑さがありませんので、学習時間と作業工数を大幅に削減できます。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">コンポーネント化: </strong>
                Hotwireのコンポーネント化は各バックエンド技術のテンプレートエンジンによります。
                Ruby on Railsであればpartialやview helper、もしくは最近話題の<StyledLink href="https://viewcomponent.org">Phlex</StyledLink>などのコンポーネント化技術があります。
                Laravel, Djangoなどもそれぞれのコンポーネント化技術があります。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">注目されている技術です: </strong>
                Elixir Phoenixの<StyledLink href="https://www.phoenixframework.org">Liveview</StyledLink>、PHP Laravelの<StyledLink href="https://laravel-livewire.com">Livewire</StyledLink>、さらにHotwire同様にバックエンド非依存の<StyledLink href="https://htmx.org">HTMX</StyledLink>など、Hotwireと同様のアプローチでモダンフロントエンドを作る技術が近年、注目を集めています。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">セキュリティが高い: </strong>
                レンダリング済みのHTMLのみをブラウザに送信するので、誤ってプライベートな情報を漏洩する心配がありません。
                例えば秘密キーをブラウザに預ける必要がなく、またJSON APIに機密情報を流してしまうこともありません。詳しくは<StyledLink href="/commentaries/page_transitions">ページ遷移の解説</StyledLink>で議論しています。
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">プロジェクトの構成</h2>
          <p className="mt-6">
            本サイトのコードはすべて<StyledLink href="https://github.com/naofumi/hotwire_and_next">GitHub</StyledLink>に公開しています。
            また<StyledLink href="https://vercel.com">Vercel</StyledLink>でデプロイしています。
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">100ms遅延: </strong>
                高速なサイトだとどんなフロントエンド技術を使ってもサクサク動いてしまい、技術の違いが見えなくなります。
                そこで本サイトではあえてすべてのリクエストに100msの遅延を入れています。
                また擬似データベースアクセスは100msの遅延を入れています。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">HotwireはEJS: </strong>
                Hotwireはバックエンド技術非依存なので、HTMLが出力できればどこでも動きます。本プロジェクトではNext.js pages routerの<StyledLink
                href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes">API routes</StyledLink>からHTMLをレスポンスとして返しています。
                テンプレートエンジンは<StyledLink href="https://ejs.co">EJS</StyledLink>を使っています。
                Hotwireの構成要素である<StyledLink href="https://turbo.hotwired.dev/handbook/installing">Turbo</StyledLink>と<StyledLink href="https://stimulus.hotwired.dev/handbook/installing">Stimulus</StyledLink>はそれぞれbuild済みのものをダウンロードし、<code>public/hotwire/javascript</code>に配置しています。
                またCSSは<StyledLink href="https://tailwindcss.com">Tailwind</StyledLink>を使用しています。
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">ReactはNext.js pages router: </strong>
                Hotwireと比較するためのReact側は、目まぐるしく変わるフロントエンド開発環境の中でも比較的共通して見られる技術を選定しました。
                <ul>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gray-400"/>
                    <span>フレームワークはNext.jsを使用しています。ただしまた<StyledLink href="https://nextjs.org/docs/app">app router</StyledLink>はまた使用しているプロジェクトが少ないと考え、<StyledLink href="https://nextjs.org/docs/pages">pages router</StyledLink>を中心に作成しています。
                      ただし一部app routerと比較したいケースの時はこれも使っています。
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gray-400"/>
                    <span>内容が頻繁に更新されるウェブアプリを想定しているため、古いデータが表示されたままになってしまうタイプのキャッシュは使用していません。例えばapp routerを使っている時でも、<StyledLink
                      href="https://nextjs.org/docs/app/building-your-application/caching#router-cache">Router Cache</StyledLink>はオフにしています。
                    </span>
                  </li>
                </ul>
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Hotwireの学習リソース</h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">公式サイト: </strong><br />
                <StyledLink href="https://turbo.hotwired.dev">Turbo公式サイト</StyledLink><br/>
                <StyledLink href="https://turbo.hotwired.dev">Stimulus公式サイト</StyledLink>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"/>
              <span>
                <strong className="font-semibold text-gray-900">コミュニティサイト: </strong><br />
                <StyledLink href="https://hotwire.io">Hotwire.io</StyledLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </Layout>
  )
}
