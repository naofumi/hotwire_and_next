import Layout from "@/pages/components/Layout";
import StyledLink from "@/pages/components/StyledLink";
import transitionImage from "@/public/images/transition-after-first-load.png"
import Image from "next/image"
import StyledList from "@/pages/components/StyledList";
import H2WithHash from "@/pages/components/H2WithHash";

export default function PageTransitions() {
  return (
    <Layout hideTechLabel={true}>
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-orange-600">Commentary</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tabbed Menus</h1>
          <p className="mt-6 text-xl leading-8">
            タブメニュー
          </p>
          <div className="mt-4 max-w-2xl mx-auto">
            <H2WithHash id="partial-rewrites-with-turbo-frames">Turbo Framesは部分的入れ替えのパッケージ</H2WithHash>
            <p className="mt-4">
              タブメニューを作成するためには<StyledLink href="https://turbo.hotwired.dev/handbook/drive">Turbo
              Frames</StyledLink>を使います。まずこれについて解説します。
            </p>
            <p className="mt-4">
              HotwireでTurbo Driveの次によく使うのが<StyledLink href="https://turbo.hotwired.dev/handbook/drive">Turbo
              Frames</StyledLink>です。Turbo Driveがページ遷移、つまり画面全体の入れ替えをするのに対して、<StyledLink
              href="https://turbo.hotwired.dev/handbook/drive">Turbo Frames</StyledLink>は一部分だけを入れ替えます。
            </p>
            <p className="mt-4">
              「モーダル」「ポップアップ」「ドロップダウンメニュー」「ドロワーメニュー（引き出し）」「ライブ検索」、住所を入力するときに使う「階層メニュー」など、サーバから内容を読みUI要素はたくさんあります。どれも画面の部分的入れ替えが必要で、<StyledLink
              href="https://turbo.hotwired.dev/handbook/drive">Turbo Frames</StyledLink>で実装できます。インタラクティブと言われるUI要素も、大部分はシンプルな部分的入れ替えで実現できるのです。
            </p>

            <H2WithHash id="turbo-frames-is-a-package">Turbo Framesはコミコミのパッケージ</H2WithHash>
            <p className="mt-4">
              <StyledLink href="https://turbo.hotwired.dev/handbook/drive">Turbo Frames</StyledLink>は画面の部分的入れ替えを提供するだけでなく、<code>a</code>タグや<code>form</code>タグとの<StyledLink href="https://turbo.hotwired.dev/handbook/frames">連携</StyledLink>、<StyledLink href="https://turbo.hotwired.dev/handbook/frames#lazy-loading-frames">Lazy
              loading (遅延ロード)</StyledLink>、<StyledLink href="https://turbo.hotwired.dev/handbook/drive#prefetching-links-on-hover">prefetch</StyledLink>、<StyledLink href="https://turbo.hotwired.dev/handbook/frames#promoting-a-frame-navigation-to-a-page-visit">URL同期</StyledLink>、<StyledLink href="https://turbo.hotwired.dev/reference/frames#html-attributes">ローダー表示用のCSS</StyledLink>など、それに伴う便利機能をパッケージとして提供しています。
            </p>
            <p className="mt-4">
              Reactなどの場合は<StyledLink href="https://ja.react.dev/reference/react/useState"><code>useState</code>フック</StyledLink>や<StyledLink
              href="https://ja.react.dev/learn/conditional-rendering">条件付きレンダー</StyledLink>などのパターンを提供してくれますが、これを組み合わせてUI要素を作るのは開発者しだいです。その意味でReactはフルスクラッチでUI要素を作成するのに適している一方、HotwireはUIライブラリとまではいかないものの、パッケージしたものを提供します。
            </p>
            <p className="mt-4">
              なおコミコミの機能が不要で、単に部分入れ替えだけをしたい場合には、<StyledLink href="https://turbo.hotwired.dev/handbook/streams">Turbo Streams</StyledLink>を使います。Turbo Streamsを使うとより柔軟に部分入れ替えが行えます。
            </p>


            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              タブメニューの作り方 (MPAの場合)
            </h2>
            <p className="mt-8">
              <strong>普通のMPAのページにTurboをインストールするだけで、Turbo
                Driveによる画面遷移が手に入ります。</strong>インストール方法はライブラリを読み込むだけです。<StyledLink
              href="https://turbo.hotwired.dev/handbook/installing">公式ドキュメント</StyledLink>を確認してください。
            </p>
            <p className="mt-4">
              また本サイトではTurboのJavaScriptファイルはpublic/hotwire/javascript/turbo.es2017-esm.jsにダウンロードされており、<code>templates/layouts/header.ejs</code>から参照されています。これだけでTurbo
              Driveが使用できるようになっています。
            </p>

            <H2WithHash id="page-transition-ux">ページ遷移のUX</H2WithHash>
            <p className="mt-8">
              上記の表に挙げた仕組みのうち、ネイティブ(MPA)以外はすべてSPA的にページ遷移をします。つまりページ遷移のたびにJavaScript,
              CSSを読み込まないので、ページ切り替えがスムーズになります。
            </p>
            <p className="mt-4">
              ヌルサク感が一番向上するのはprefetchです。リンクが画面に現れた時、もしくは上をホバーした時にリクエストを飛ばすので、事実上の<strong>フライング</strong>です。うまくいくと、ボタンをクリックした時にはもうすでにリンク先はダウンロードされています。
            </p>
            <p className="mt-4">
              Hotwire/TurboもNext.jsもprefetch機能があります。しかし細かく見ていくと、Next.jsのprefetchはいろいろと条件付きです。効果が限定的、もしくはそもそも機能しないケースが多いのです。
            </p>
            <p className="mt-4">
              Next.jsでuseEffectを使った場合、prefetchされるのはuseEffectが機能する前のHTML、つまりデータを含まないページだけです。データをfetchできるのはuseEffectをブラウザが実行した後で、これはクリックして画面遷移して、新画面がレンダリングされた後です。したがってprefetchで時間を稼いでも、最終的な画面表示までの合計時間は短縮できません。
            </p>
            <p className="mt-4">
              またNext.jsは動的なコンテンツを含むページ(<code>getServerSideProps</code>を使っているか<code>dynamic
              rendering</code>を使っているページ)はprefetchしません。app routerの場合は<code>loading.js</code>まではprefetchしますが、その先はしません。このケースではprefetchは動作しません。
            </p>
            <p className="mt-4">
              結果として、動的コンテンツの場合はHotwire (Turbo Drive)が体感として一番ヌルサクになります。
            </p>
            <div className="mt-12">
              <div className="w-max-[560px] flex justify-center">
                <iframe className="aspect-video" src="https://www.youtube.com/embed/UWluEz8YPbo?si=ZPz6s2MWPQShzH6q"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
            <div className="mt-12">
              <Image src={transitionImage} alt="Page Transition image"></Image>
            </div>


            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              セキュリティ: データ漏洩
            </h2>
            <p className="mt-8">
              ネイティブ(MPA)及ぼHotwireでは、サーバはページに表示するHTML<strong>のみ</strong>をブラウザに送ります。そのため、意図しないデータをブラウザに送ってしまう可能性は低く、データ漏洩のリスクは少ないと言えます。
            </p>
            <p className="mt-4">
              一方でNext.jsの場合はデータ漏洩の可能性があります。サーバで取得されたデータを、開発者から見えにくいところで自動的にそのままブラウザに送るからです。</p>
            <p className="mt-4">
              <code>useEffect</code>等でブラウザからデータを<code>fetch</code>した場合は、APIのJSONがそのままブラウザに送られます。これはよく知られた問題であり、かつ開発者が明示的にAPIを設計するときに気をつけるところです。一方でNext.jsのPages
              routerの場合は<code>getStaticProps</code>, <code>getServerSideProps</code>の返り値も、実はほぼそのまま自動的にJSONでブラウザに送られます。あまり意識されないところなので、注意が必要です。なおかつこのデータはブラウザに表示されるとは限らないので、気づかずにデータ漏洩してしまう可能性が高くなります。
            </p>
            <p className="mt-4">
              本デモでは、この問題を実際に確認していただくために、敢えてセキュリティ問題のあるコードを書いています。<strong>コードにセキュリティ問題があっても、Hotwireの場合は情報が漏洩しにくいことを見ていただくためです。</strong>具体的には<code>User</code> repositoryがそのまま<code>password_digest</code>(秘密の情報)を返してしまうようにしています。また各エンドポイントでも<code>password_digest</code>をブロックしていません。
            </p>
            <ul className="list-disc ml-6 my-4 space-y-4">
              <StyledList>
                ネイティブ画面遷移(MPA)およびHotwire Turbo Driveを使っている場合は<code>password_digest</code>は漏洩しません。レスポンスにはHTMLしか含まれないので、画面に表示しない内容はブラウザに送信されないためです。
              </StyledList>
              <StyledList>
                Next.js Pages
                routerのSSGおよびSSRの時は、最初にダウンロードされるHTMLファイル最下部の<code>script</code>タグ中に<code>password_digest</code>が漏洩します。ここはhydrationに使われるデータで、HTMLにレンダリングされるかどうかに関わらず含まれます。またページ遷移をするたびにダウンロードされるJSONファイルにも漏洩します。
              </StyledList>
              <StyledList>
                Next.js
                useEffectの時は<code>/api/users</code>からのJSONレスポンスに<code>password_digest</code>が漏洩します
              </StyledList>
              <StyledList>
                Next.js
                App routerのServer componentだけを使っている場合は<code>password_digest</code>は漏洩しません。RSC
                payloadはHTMLにレンダリングされる内容しか含まないためです。しかし<StyledLink
                href="https://zenn.dev/moozaru/articles/d270bbc476758e">Server componentの中にClient
                componentを埋め込んでいる場合はデータが漏洩する可能性があります</StyledLink>ので、要注意です。
              </StyledList>
            </ul>
            <p className="mt-4">
              Next.jsをセキュアにする場合は<code>User</code> repositoryのデータをそのままコンポーネントに渡さず、<StyledLink
              href="https://nextjs.org/blog/security-nextjs-server-components-actions#data-access-layer">Data Access
              Layer</StyledLink>をの中で、権限に応じて必要なデータのみを含むDTO(Data
              Transfer Object)を作成することが奨励されています。
              Reactの方でも<StyledLink
              href="https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#preventing-sensitive-data-from-being-exposed-to-the-client">React
              Taint API</StyledLink>で対策されていく見込みですが、これはどちらかというと注意喚起のメカニズムだけであり、対応は別途必要になります。
            </p>
            <p className="mt-4">
              一方でHotwireの場合は、HTMLを出力するテンプレートファイル自身がこのようなData Access
              Layerの役割を果たしているとも言えます。ユーザに見せたい情報・見せたくない情報はテンプレートファイルが呼び出す・呼び出さないで結果的に制御されています。もちろんviewレイヤーにはなるべくロジックを持たせたくないので、判定処理そのものは別のところに任せます。</p>
            <p className="mt-4">
              結論として、ネイティブ画面遷移(MPA)やHotwire Turbo Driveを使用するときに比べ、Next.jsはデータ漏洩に神経を使う必要がありそうです。
            </p>
            <div className="mt-12">
              <div className="w-max-[560px] flex justify-center">
                <iframe className="aspect-video" src="https://www.youtube.com/embed/LxLhCviX8iQ?si=wjTL03S_bw7k25OF"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
