import {CheckCircleIcon} from '@heroicons/react/20/solid'
import Layout from "@/pages/components/Layout";
import StyledLink from "@/pages/components/StyledLink";
import StyledList from "@/pages/components/StyledList";

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
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Hotwireの構成
            </h2>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <StyledList>
                <strong className="font-semibold text-gray-900">Turbo: </strong>
                <StyledLink href="https://turbo.hotwired.dev">Turbo</StyledLink>はサーバにレクエストを投げて、返ってきたHTMLをDOMに埋め込むためのライブラリです。敢えてサーバからHTMLしか返せないように制限をかけているのが大きな特徴です。（Turbo以前のRailsでは<StyledLink href="https://signalvnoise.com/posts/3697-server-generated-javascript-responses">サーバからJavaScriptを返す</StyledLink>ことが一般的で、むしろTurboより遥かに強力でした。Turboは強力さを捨てて、シンプルさを採用したとも言えます）
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">Stimulus: </strong>
                <StyledLink href="https://stimulus.hotwired.dev">Stimulus</StyledLink>はHTMLを新たにレンダリングするのではなく、すでにあるHTMLにJavaScriptを結びつけることに注力しています。Controllerというまとまりを作ることで、イベントハンドラのスパゲッティを避けています
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">Strada: </strong>
                <StyledLink href="https://strada.hotwired.dev">Strada</StyledLink>はWebとiOS, Androidを繋ぎ合わせる役割を担う、モバイルアプリ作成のためのライブラリです
              </StyledList>
            </ul>
            <p className="mt-6">
              Hotwireは上記の３つを組み合わせることにより、シンプルさを維持しつつ、モダンフロントエンドの要件を十分に満たすウェブサイトを作成を可能にします。
            </p>


            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Hotwireの特徴
              </h2>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <StyledList>
                  <strong className="font-semibold text-gray-900">バックエンド技術非依存: </strong>
                  <StyledLink href="https://rubyonrails.org">Ruby on Rails</StyledLink>に限らず、<StyledLink
                  href="https://www.djangoproject.com">Django</StyledLink>, <StyledLink
                  href="https://laravel.com">Laravel</StyledLink>, <StyledLink
                  href="https://www.java.com/ja/">Java</StyledLink>, <StyledLink
                  href="https://nodejs.org/en">Node</StyledLink>, <StyledLink
                  href="https://wordpress.com/">Wordpress</StyledLink>など、あらゆるバックエンド技術で使えます。本サイトのHotwireはすべて<StyledLink
                  href="https://nextjs.org">Next.js</StyledLink>の<StyledLink
                  href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes">API
                  routes</StyledLink>で動いています。
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">大幅なUXを向上: </strong>
                  ウェブサイトのUXを大幅に向上させます。体感レスポンスタイムの大幅短縮、画面の部分更新など、モダンフロントエンドのUX要件をカバーできます。
                  具体的には<StyledLink href="/">本サイトの各例</StyledLink>をお確かめください。
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">学習時間と工数の削減: </strong>
                  昔ながらのサーバでのHTML生成をするアプローチです。JSON
                  APIも使いません。ReactやNext.jsのような複雑さがありませんので、学習時間と作業工数を大幅に削減できます。
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">コンポーネント化: </strong>
                  Hotwireのコンポーネント化は各バックエンド技術のテンプレートエンジンによります。
                  Ruby on Railsであればpartialやview helper、
                  もしくは最近話題の<StyledLink href="https://viewcomponent.org">ViewComponent</StyledLink>や<StyledLink
                  href="https://viewcomponent.org">Phlex</StyledLink>などのコンポーネント化技術があります。
                  Laravel, Djangoなどもそれぞれのコンポーネント化技術があります。
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">注目されている技術です: </strong>
                  Elixir Phoenixの<StyledLink href="https://www.phoenixframework.org">Liveview</StyledLink>、PHP
                  Laravelの<StyledLink href="https://laravel-livewire.com">Livewire</StyledLink>、さらにHotwire同様にバックエンド非依存の<StyledLink
                  href="https://htmx.org">HTMX</StyledLink>など、Hotwireと同様のアプローチでモダンフロントエンドを作る技術が近年、注目を集めています。
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">セキュリティが高い: </strong>
                  レンダリング済みのHTMLのみをブラウザに送信するので、誤ってプライベートな情報を漏洩する心配がありません。
                  例えば秘密キーをブラウザに預ける必要がなく、またJSON APIに機密情報を流してしまうこともありません。詳しくは<StyledLink
                  href="/commentaries/page_transitions">ページ遷移の解説</StyledLink>で議論しています。
                </StyledList>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">プロジェクトの構成</h2>
              <p className="mt-6">
                本サイトのコードはすべて<StyledLink
                href="https://github.com/naofumi/hotwire_and_next">GitHub</StyledLink>に公開しています。
                また<StyledLink href="https://vercel.com">Vercel</StyledLink>でデプロイしています。
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <StyledList>
                  <strong className="font-semibold text-gray-900">100ms遅延: </strong>
                  高速なサイトだとどんなフロントエンド技術を使ってもサクサク動いてしまい、技術の違いが見えなくなります。
                  そこで本サイトではあえてすべてのリクエストに100msの遅延を入れています。
                  また擬似データベースアクセスは100msの遅延を入れています。
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">HotwireはEJS: </strong>
                  Hotwireはバックエンド技術非依存なので、HTMLが出力できればどこでも動きます。本プロジェクトでは<strong>Next.js
                  pages
                  routerの<StyledLink
                  href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes">API
                  routes</StyledLink>からHTMLをレスポンスとして返しています(<code>/api/hotwire/</code>配下)。</strong>
                  テンプレートエンジンは<StyledLink href="https://ejs.co">EJS</StyledLink>を使っています。
                  Hotwireの構成要素である<StyledLink
                  href="https://turbo.hotwired.dev/handbook/installing">Turbo</StyledLink>と<StyledLink
                  href="https://stimulus.hotwired.dev/handbook/installing">Stimulus</StyledLink>はそれぞれbuild済みのものをダウンロードし、<code>public/hotwire/javascript</code>に配置しています。
                  またCSSは<StyledLink href="https://tailwindcss.com">Tailwind</StyledLink>を使用しています。
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">ReactはNext.js pages router: </strong>
                  Hotwireと比較するためのReact側は、目まぐるしく変わるフロントエンド開発環境の中でも比較的共通して見られる技術を選定しました。
                  <ul>
                    <StyledList color="text-gray-400">
                      フレームワークはNext.jsを使用しています。ただしまた<StyledLink
                      href="https://nextjs.org/docs/app">app router</StyledLink>はまた使用しているプロジェクトが少ないと考え、<StyledLink
                      href="https://nextjs.org/docs/pages">pages router</StyledLink>を中心に作成しています。
                      ただし一部app routerと比較したいケースの時はこれも使っています。
                    </StyledList>
                    <StyledList color="text-gray-400">
                      内容が頻繁に更新されるウェブアプリ（例えば業務アプリや管理画面、注文予約アプリなど）を想定しているため、古いデータが表示されたままになってしまうタイプのキャッシュは使用していません。特にapp
                      routerを使っている時は<StyledLink
                      href="https://nextjs.org/docs/app/building-your-application/caching#router-cache">Router
                      Cache</StyledLink>、<StyledLink href="https://nextjs.org/docs/app/building-your-application/caching#full-route-cache">Full Route Cache</StyledLink>、<StyledLink href="https://nextjs.org/docs/app/building-your-application/caching#data-cache">Data
                      Cache</StyledLink>は<StyledLink href="https://nextjs.org/docs/app/building-your-application/caching#segment-config-options">オフにしています</StyledLink>。
                    </StyledList>
                  </ul>
                </StyledList>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Hotwireの学習リソース</h2>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <StyledList>
                  <strong className="font-semibold text-gray-900">公式サイト: </strong><br/>
                  <StyledLink href="https://turbo.hotwired.dev">Turbo公式サイト</StyledLink><br/>
                  <StyledLink href="https://turbo.hotwired.dev">Stimulus公式サイト</StyledLink>
                </StyledList>
                <StyledList>
                  <strong className="font-semibold text-gray-900">コミュニティサイト: </strong><br/>
                  <StyledLink href="https://hotwire.io">Hotwire.io</StyledLink>
                </StyledList>
              </ul>
          </div>
        </div>
      </div>
    </Layout>
)
}
