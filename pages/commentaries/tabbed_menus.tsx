import Layout from "@/components/Layout";
import StyledLink from "@/components/StyledLink";
import Image from "next/image"
import StyledList from "@/components/StyledList";
import H2WithHash from "@/components/H2WithHash";
import amazonImage from "@/public/images/tabbed_amazon.png"
import turbodriveImage from "@/public/images/tabbed_turbodrive.png"
import turboframesImage from "@/public/images/tabbed_turboframes.png"

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
            <H2WithHash id="partial-rewrites-with-turbo-frames">Turbo Framesは部分的置換のパッケージ</H2WithHash>
            <p className="mt-4">
              タブメニューを作成するためには<StyledLink href="https://turbo.hotwired.dev/handbook/frames">Turbo
              Frames</StyledLink>を使います。そこで、まずTurbo Framesについて概略を説明します。
            </p>
            <p className="mt-4">
              Turbo Driveに次いでよく使うのが<StyledLink href="https://turbo.hotwired.dev/handbook/frames">Turbo
              Frames</StyledLink>です。Turbo Driveがページ遷移、つまり画面全体の置換するのに対して、<StyledLink
              href="https://turbo.hotwired.dev/handbook/drive">Turbo Frames</StyledLink>は一部分だけを置換します。
            </p>
            <p className="mt-4">
              「モーダル」「ポップアップ」「ドロップダウンメニュー」「ドロワーメニュー（引き出し）」「ライブ検索」、住所を入力するときに使う「階層メニュー」など、サーバから内容を読みUI要素はたくさんあります。どれも画面の部分的置換が必要で、<StyledLink
              href="https://turbo.hotwired.dev/handbook/frames">Turbo Frames</StyledLink>で実装できます。インタラクティブと言われるUI要素も、大部分はシンプルな部分的置換で実現できるのです。
            </p>

            <H2WithHash id="turbo-frames-is-a-package">Turbo Framesはコミコミのパッケージ</H2WithHash>
            <p className="mt-4">
              <StyledLink href="https://turbo.hotwired.dev/handbook/frames">Turbo Frames</StyledLink>は画面の部分的置換を提供するだけでなく、<code>a</code>タグや<code>form</code>タグとの<StyledLink
              href="https://turbo.hotwired.dev/handbook/frames">連携</StyledLink>、<StyledLink
              href="https://turbo.hotwired.dev/handbook/frames#lazy-loading-frames">Lazy
              loading (遅延ロード)</StyledLink>、<StyledLink
              href="https://turbo.hotwired.dev/handbook/drive#prefetching-links-on-hover">prefetch</StyledLink>、<StyledLink
              href="https://turbo.hotwired.dev/handbook/frames#promoting-a-frame-navigation-to-a-page-visit">URL同期</StyledLink>、<StyledLink
              href="https://turbo.hotwired.dev/reference/frames#html-attributes">ローダー表示用のCSS</StyledLink>など、それに伴う便利機能をパッケージとして提供しています。
            </p>
            <p className="mt-4">
              一方でReactなどの場合は<StyledLink
              href="https://ja.react.dev/reference/react/useState"><code>useState</code>フック</StyledLink>や<StyledLink
              href="https://ja.react.dev/learn/conditional-rendering">条件付きレンダー</StyledLink>などのパターンを提供してくれますが、これを組み合わせてUI要素を作るのは開発者しだいです。その意味でReactはフルスクラッチでUI要素を作成するのに適している一方、HotwireはUIライブラリとまではいかないものの、パッケージしたものを提供していると言えます。
            </p>
            <p className="mt-4">
              なお<StyledLink href="https://turbo.hotwired.dev/handbook/frames">Turbo Frames</StyledLink>が提供するコミコミの機能が不要で、単に部分置換だけをしたい場合には、<StyledLink
              href="https://turbo.hotwired.dev/handbook/streams">Turbo Streams</StyledLink>を使います。Turbo
              Streamsを使うとより柔軟に部分置換が行えます。
            </p>


            <H2WithHash id="tabs-MPA">MPAによるタブメニューの作り方</H2WithHash>
            <p className="mt-8">
              MPA流のタブメニューは<StyledLink
              href="http://localhost:3000/api/hotwire/tabbed_segments_no_js">ここでお試しいただけます。</StyledLink>
            </p>
            <p className="mt-4">
              MPA流のタブメニューの実装方法を<StyledLink href="/api/hotwire/tabbed_segments_no_js">ここ</StyledLink>に示しました。タブより上の箇所が全く同じ２つの画面を用意しているだけです。タブの上の方は全く同じなので、置換されていることに気づきません。一方でタブの下の部分は異なる内容が表示されているので、ここだけが置換されたとユーザは錯覚します。
            </p>
            <p className="mt-4">
              例えば<StyledLink href="https://www.amazon.co.jp">Amazon.co.jp</StyledLink>のサイトでも、このようなMPA流のタブメニューが実装されています。ただしAmazonの場合はコンテンツシフトをしてしまっているので、ページ切り替えの時にタブの上やタブ内も動いてしまい、置換されていることに気づいてしまいます。
            </p>
            <p className="mt-4">
              それでもやはり、この方法はとても有効であり、非常に多くのウェブサイトで使われ続けています。コンテンツシフトさえしなければ、UXも優れたものです。
            </p>
            <div className="mt-4">
              <Image src={amazonImage} alt="amazon tabs"></Image>
            </div>

            <H2WithHash id="tabs-turbodrive">Turbo Driveによるタブメニューの作り方</H2WithHash>
            <p className="mt-8">
              Turbo Driveによるタブメニューは<StyledLink
              href="http://localhost:3000/api/hotwire/tabbed_segments_turbodrive">ここでお試しいただけます。</StyledLink>
            </p>
            <p className="mt-4">
              <StyledLink href="https://turbo.hotwired.dev/handbook/drive">Turbo Drive</StyledLink>を使う場合は、MPAのサイトに<StyledLink
              href="https://turbo.hotwired.dev/handbook/installing">TurboのJavaScriptファイルをダウンロードする</StyledLink>だけです。
              この場合はTurbo Driveによってヌルサクになった分だけ、タブの切り替えが自然に見えてきます。しかし実際にやっているのはMPAの場合と同様、<strong>画面全体の置換です。</strong>
            </p>
            <p className="mt-4">
              一見するとタブだけが差し代わっているようには見えますが、下記の点を細かくみると、実際には画面全体の置換だとバレてしまいます。
            </p>
            <ul className="list-disc ml-6 my-4 space-y-4">
              <StyledList>
                少し下にスクロールした後にタブをクリックすると、タブの中身が差し代わるだけではなく、トップにスクロールしてしまうことがわかります。なおこの動きは画面全体を置換するから起こるのではなく、<StyledLink
                href="https://turbo.hotwired.dev/handbook/drive">Turbo Drive</StyledLink>がMPAの動きを真似るためにわざとやっているものです。条件と設定によってスクロールを抑制することも可能です。
              </StyledList>
              <StyledList>
                <code>Search</code>のテキスト入力フィールドに文字を入力し、その後にタブを切り替えると、テキスト入力フィールドの文字は消えてしまいます。これは画面全体を置換する時にこのフィールドも丸ごと置換されるためです。
              </StyledList>
              <StyledList>
                なお、今回は<StyledLink href="https://turbo.hotwired.dev/handbook/drive">Turbo Drive</StyledLink>で画面全体が差し代わることを説明していますが、実は<StyledLink
                href="https://turbo.hotwired.dev/handbook/page_refreshes">Morphing</StyledLink>を使うと、全画面を置換するのではなく、差分だけを更新することも可能です。Morphingについては後ほどまとめて紹介したいと思いますが、<StyledLink
                href="https://ja.react.dev/learn/preserving-and-resetting-state">Reactに近い更新</StyledLink>を可能にするもので、かなり強力なものです。
              </StyledList>
            </ul>

            <div className="mt-6">
              <Image src={turbodriveImage} alt="turbodrive image"></Image>
            </div>


            <H2WithHash id="tabs-turboframe">Turbo Framesによるタブメニューの作り方</H2WithHash>
            <p className="mt-8">
              Turbo Framesによるタブメニューは<StyledLink
              href="http://localhost:3000/api/hotwire/tabbed_segments_turboframes">ここでお試しいただけます。</StyledLink>
            </p>
            <p className="mt-4">
              まず大切なことは、<StyledLink href="https://turbo.hotwired.dev/handbook/turboframes">Turbo
              Frames</StyledLink>を使った場合のUIの違いです。一見するとTurbo Driveの場合とあまり差がありませんが、以下の点が異なります。
            </p>

            <ul className="list-disc ml-6 my-4 space-y-4">
              <StyledList>
                少し下にスクロールした後にタブをクリックしても、トップにスクロールしません。デフォルトではスクロール位置が維持されます。より細かく制御したい場合は、<code>autoscroll</code>属性で<StyledLink
                href="https://turbo.hotwired.dev/reference/frames#html-attributes">調整できます</StyledLink>。
              </StyledList>
              <StyledList>
                Searchのテキスト入力フィールドに文字を入力し、その後にタブを切り替えても、テキスト入力フィールドの文字はそのまま維持されます。フォーカルも維持されます。今回設定したTurbo
                Framesでは、Searchのテキスト入力フィールドはTurbo
                Framesの外にあります（下図）。タブが切り替わっても、SearchのDOM要素はそのままなのです。だから文字およびフォーカスが維持されています。
              </StyledList>
            </ul>

            <p className="mt-4">
              このようにTurbo Framesの特徴は画面を枠で分割し、枠内を置換しつつ、枠外をそのままに維持するところです。
            </p>

            <p className="mt-4">
              Turbo Framesによるタブメニューの作り方はごく簡単です。まずは<StyledLink
              href="/commentaries/tabbed_menus#tabs-turbodrive">Turbo Driveのバージョン</StyledLink>から出発します。そして、どこをTurbo
              Framesで囲むかを決めます。今回はSearchのテキスト入力フィールドの下のところからテーブルの最後までを囲むことにします。
            </p>

            <div className="mt-4">
              <Image src={turboframesImage} alt="turbo frames image"></Image>
            </div>

            <p className="mt-4">
              次にエディタで該当するEJSファイルの内容を確認し、囲みたいところを <code>&lt;turbo-frame
              id=&quot;[適当な名前]&quot;&gt;&lt;/turbo-frame&gt;</code>のタグで囲みます。今回は２つのページ
              (<code>Users</code>と<code>Products</code>)がありますので、双方のEJSファイルで同じ処理をします。結果は<StyledLink
              href="https://github.com/naofumi/hotwire_and_next/blob/main/templates/tabbed_segments_turbodrive/index.ejs">templates/tabbed_segments_turboframes/index.ejs</StyledLink>および<StyledLink
              href="https://github.com/naofumi/hotwire_and_next/blob/main/templates/tabbed_segments_turbodrive/index.ejs">templates/tabbed_segments_turboframes/products.ejs</StyledLink>にあります。
            </p>
            <p className="mt-4">
              はい、以上でおしまいです！
            </p>
            <p className="mt-4">
              少し解説を加えます。
            </p>
            <p className="mt-4">
              &lt;turbo-frame&gt;&lt;/turbo-frame&gt;でくくることによって、Turbo
              Frame中に含まれる<code>a</code>タグや<code>formタグは</code>タグは通常と違う性質を持つようになります。通常であれば<StyledLink
              href="https://turbo.hotwired.dev/handbook/drive">Turbo Drive</StyledLink>のような全画面遷移をするのではなく、デフォルトでは同じTurbo
              Frame内の画面遷移をするように変化します。
            </p>
            <p className="mt-4">
              今回はTurbo Frameの中にタブがくるように配置しましたので、<code>Users</code>, <code>Products</code>のタブはTurbo
              Frame内たけを部分置換します。
            </p>
            <p className="mt-4">
              タブを押すと、通常の<code>a</code>タグと同じようにHTTPリクエストは飛びます。そして全画面分のHTMLが返ってくるのきます。しかしそれで画面全体を置換するのではなく、新しいページにある&lt;turbo-frame&gt;&lt;/turbo-frame&gt;を探し出し、その中身を置換するのです。この時、<code>id</code>属性をみて<code>turbo-frame</code>のペアを認識するので、<code>id</code>を揃えておく必要があります。
            </p>
            <p className="mt-4">
              これだけでTurbo Framesによるタブメニューが出来上がりました。
            </p>

            <H2WithHash id="tabs-comparison-with-react">Reactとの比較</H2WithHash>
            <p className="mt-8">
              Reactによるタブメニューは<StyledLink
              href="http://localhost:3000/tabbed_segments">ここでお試しいただけます。</StyledLink>
            </p>

            <p className="mt-4">
              <StyledLink href="https://github.com/naofumi/hotwire_and_next/blob/main/pages/tabbed_segments/index.tsx">Reactの場合</StyledLink>は、どのタブが選択されているかを
            </p>


            <H2WithHash id="tabs-summary">タブメニューのまとめ</H2WithHash>
            <p className="mt-8">
              今回はTurbo Framesによるタブメニューを実装しました。非常に簡単なものでしたので、UI的にMPAと大きな差はありませんでした。しかしTurbo
              Framesの枠外のステートが維持できていることが確認できました。
            </p>
            <p className="mt-4">
              今後はもう少しだけ設定やJavaScriptを加えながら、より多くのUIをTurbo Framesで実装していこうと思います。
            </p>


          </div>
        </div>
      </div>
    </Layout>
  )
}
