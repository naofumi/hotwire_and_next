import Layout from "@/pages/components/Layout";
import StyledLink from "@/pages/components/StyledLink";
import StyledList from "@/pages/components/StyledList";
import H2WithHash from "@/pages/components/H2WithHash";

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

            <H2WithHash id="great-UX-with-small-teams">Hotwireは優れたUXを小チームで作るための技術</H2WithHash>
            <p className="mt-6">
              Hotwireおよびその前身の技術は、ウェブデザイン会社として創業した37signals社が、<StyledLink
              href="https://basecamp.com/">Basecamp</StyledLink>、<StyledLink
              href="https://www.hey.com/">Hey</StyledLink>などのSaaS製品を開発するために作成されたものです。ユーザ向けのすべての画面で使われているのはもちろんのこと、モバイルアプリでもHotwireは使われています。一方で<StyledLink
              href="https://3.basecamp-help.com/article/35-the-six-week-cycle#who-does-the-work?">37signals社の各チームのサイズはデザイナーを含めてたったの３人です</StyledLink>。
            </p>
            <p className="mt-6">
              このようにHotwireは人気の有料SaaSアプリで十分なUXを提供することが証明されているだけでなく、小さいチームでの開発に適していることも実証されています。
            </p>
            <p className="mt-6">
              例えば「管理画面はHotwireでも良いけど、お客様向け画面はReactにしよう」などと悩む必要はありません。お客様がお金を払ってでも使いたくなる製品のUXが、Hotwireで十分に実現できることは<strong>疑いの余地がありません</strong>。
            </p>

            <H2WithHash id="hotwire-components">
              Hotwireの構成
            </H2WithHash>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <StyledList>
                <strong className="font-semibold text-gray-900">Turbo: </strong>
                <StyledLink href="https://turbo.hotwired.dev">Turbo</StyledLink>はサーバにレクエストを投げて、返ってきたHTMLをDOMに埋め込むためのライブラリです。敢えてサーバからHTMLしか返せないように制限をかけているのが大きな特徴です。（Turbo以前のRailsでは<StyledLink
                href="https://signalvnoise.com/posts/3697-server-generated-javascript-responses">サーバからJavaScriptを返す</StyledLink>ことが一般的で、15年間、Turboよりむしろ遥かに柔軟なやり方でした。Turboは柔軟さを捨てて、シンプルさを優先したとも言えます）
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">Stimulus: </strong>
                <StyledLink href="https://stimulus.hotwired.dev">Stimulus</StyledLink>はHTMLを新たにレンダリングするのではなく、すでにあるHTMLにJavaScriptを結びつけることに注力しています。Controllerというまとまりを作ることで、イベントハンドラのスパゲッティを避けています
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">Strada: </strong>
                <StyledLink href="https://strada.hotwired.dev">Strada</StyledLink>はWebとiOS,
                Androidを繋ぎ合わせる役割を担う、モバイルアプリ作成のためのライブラリです
              </StyledList>
            </ul>
            <p className="mt-6">
              Hotwireは上記の３つを組み合わせることにより、シンプルさを維持しつつ、モダンフロントエンドの要件を十分に満たすウェブサイトの作成を可能にします。
            </p>


            <H2WithHash id="turbo-components">
              Turboの構成
            </H2WithHash>
            <p className="mt-4">
              Turboは<code>fetch</code>を使い、ウェブページの部分更新をするライブラリです。Hotwireの中心的な技術です。更新する範囲と付随する機能に応じて、3種類の更新方法があります。
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-6 text-gray-600">
              <StyledList>
                <strong className="font-semibold text-gray-900">Turbo Drive: </strong>
                <StyledLink
                  href="https://turbo.hotwired.dev/handbook/drive">TurboDrive</StyledLink>は<code>body</code>タグの中身を丸々入れ替える技術です。Next.jsの<StyledLink
                href="https://nextjs.org/docs/pages/building-your-application/routing">router</StyledLink>、あるいは<StyledLink
                href="https://reactrouter.com/">React Router</StyledLink>に相当します。<code>Link</code>タグのような特別なものは必要とせず、Turboがインストールされれば<code>a</code>タグは全て自動的にTurboDriveを使うようになります。
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">Turbo Frames: </strong>
                <StyledLink href="https://turbo.hotwired.dev/handbook/frames">Turbo Frames</StyledLink>は部分更新を実現するものです。画面の一部を入れ替えるだけではなく、画面を<strong>「枠」</strong>に分割する性質があり、デフォルトでは枠内の<code>a</code>タグおよび<code>form</code>タグも中に閉じ込めるように動きます。<StyledLink
                href="https://turbo.hotwired.dev/handbook/frames#promoting-a-frame-navigation-to-a-page-visit">ルータとの連携</StyledLink>、<StyledLink
                href="https://turbo.hotwired.dev/handbook/frames#lazy-loading-frames">Lazy Load</StyledLink>なども用意され、画面の部分更新だけでなく、関連するUXもパッケージされています。柔軟性も高く、これだけでほとんどの部分更新は可能です。
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">Turbo Streams: </strong>
                <StyledLink href="https://turbo.hotwired.dev/handbook/streams">Turbo Streams</StyledLink>は画面を細かく、柔軟に書き替える技術です。IDで指定された要素を１つずつ追加・更新したり、削除したりできます。またWebSocketを介した更新も可能になっています。柔軟性は非常に高いのですが、それだけに更新ステップ数が増大する傾向があり、必要なところで慎重に使うのがポイントではないかと思います。<StyledLink
                href="https://api.jquery.com/category/manipulation/">jQuery</StyledLink>の<code>prepend()</code>, <code>append()</code>, <code>remove()</code>, <code>html()</code>をHTML属性から呼び出す感覚に近いとも言えます。
              </StyledList>
            </ul>

            <p className="mt-6">
              この他、Turboには<StyledLink
              href="https://turbo.hotwired.dev/handbook/page_refreshes">Morphing</StyledLink>があります。これは<StyledLink
              href="https://ja.legacy.reactjs.org/docs/reconciliation.html">Reactの差分検出処理</StyledLink>と似たものであり、ブラウザのDOMとサーバから送られてきたHTMLの差分を検出し、なるべくブラウザのステートを保持しつつ更新処理をかけるものです。
            </p>

            <p className="mt-6">
              Turboは上記のたった３つのパーツしかないのですが、実際にやってみるとこれだけでほとんどのインタラクティブなUIが作れてしまいます。
            </p>

            <H2WithHash id="turbo-components">
              Hotwireに慣れていないエンジニアの傾向
            </H2WithHash>
            <p className="mt-4">
              個人的見解も入りますが、慣れていない人が初めてHotwireを使い始める時は下記の傾向があります。
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <StyledList>
                <strong className="font-semibold text-gray-900">Turbo Streamsを使いすぎる: </strong>
                Reactのコンポーネントの影響かもしれませんし、<StyledLink href="https://ja.react.dev/learn/conditional-rendering">Reactの条件付きレンダー</StyledLink>の影響かもしれませんが、Hotwireに慣れていない人は画面更新を細かい単位に分解しすぎる傾向があります。そうなると細かい更新に適したTurbo Streamsを数多く書く必要があり、コードが複雑になります。<br />
                そうではなく、むしろ許容される最大の更新単位は何かを考え、なるべくたった１つの大きなTurbo Frameで処理した方がシンプルなHotwireコードが書けます。どうしても更新箇所が分散している時は、大きな処理単位にしつつmorphingを検討します。<br />
                さらに条件によって表示内容を変えたい場合は、細くTurbo Streamを送ってHTMLを変えるのではなく、StimulusでCSS classを書き換えて visible/hidden を変えます。<br />
                こうすることで、よりHotwireらしいシンプルなコードになります。
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">JavaScriptなしで作ろうとする: </strong>
                Turbo Framesは複数の機能がパッケージされているので、これだけでモーダルダイアログなどは作れてしまいます。しかしこれをやると、ブラウザステート（モーダルの開閉状態）とサーバステート（更新データ）が分けられなくなってしまいます。例えば開閉アニメーションが作れなくなったり、Turboのキャッシュとぶつかったりなど、問題が発生しやすくなります。JavaScriptなしで作ろうとするのではなく、ブラウザとサーバのステートを分けて管理し、ブラウザステートはStimulusに処理させた方が苦労も少なく、優れたUXが実現できます。
              </StyledList>
            </ul>

            <H2WithHash id="hotwire-features">
              Hotwireの特徴
            </H2WithHash>
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
                href="https://www.phlex.fun/">Phlex</StyledLink>などのコンポーネント化技術があります。
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

            <H2WithHash id="structure-of-this-site">
              本サイトの構成
            </H2WithHash>
            <p className="mt-6">
              本サイトのコードはすべて<StyledLink
              href="https://github.com/naofumi/hotwire_and_next">GitHub</StyledLink>に公開しています。
              また<StyledLink href="https://vercel.com">Vercel</StyledLink>でデプロイしています。
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
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
                Hotwireと比較するためのReact側は、目まぐるしく変わるフロントエンド開発環境の中でも、比較的頻繁に見られる技術を選定しました。
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
                    Cache</StyledLink>、<StyledLink
                    href="https://nextjs.org/docs/app/building-your-application/caching#full-route-cache">Full Route
                    Cache</StyledLink>、<StyledLink
                    href="https://nextjs.org/docs/app/building-your-application/caching#data-cache">Data
                    Cache</StyledLink>は<StyledLink
                    href="https://nextjs.org/docs/app/building-your-application/caching#segment-config-options">オフにしています</StyledLink>。
                  </StyledList>
                </ul>
              </StyledList>
              <StyledList>
                <strong className="font-semibold text-gray-900">100ms遅延: </strong>
                高速なサイトだとどんなフロントエンド技術を使ってもサクサク動いてしまい、技術の違いが見えなくなります。
                そこで本サイトではあえてすべてのリクエストに100msの遅延を入れています。
                また擬似データベースアクセスは100msの遅延を入れています。
              </StyledList>
            </ul>

            <H2WithHash id="hotwire-resources">
              Hotwireのリソース
            </H2WithHash>
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
