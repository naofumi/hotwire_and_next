import Layout from "@/pages/components/Layout";
import StyledLink from "@/pages/components/StyledLink";
import transitionImage from "@/public/images/transition-after-first-load.png"
import Image from "next/image"
import StyledList from "@/pages/components/StyledList";
import H2WithHash from "@/pages/components/H2WithHash";

export default function PageTransitions() {
  const people = [
    {name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member'},
    // More people...
  ]
  return (
    <Layout hideTechLabel={true}>
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-orange-600">Commentary</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page Transitions</h1>
          <p className="mt-6 text-xl leading-8">
            ページ遷移
          </p>
          <div className="mt-10 max-w-2xl mx-auto">
            <p>
              ウェブの最も基本的でかつ重要な動作とも言えるページの遷移。それだけにUXへのインパクトが大きいものです。
            </p>

            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                      <th scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                        タイプ
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        データロード
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        ローダー表示
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        prefetch
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        セキュリティ
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        その他
                      </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr key={1} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        ネイティブ(MPA)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        する
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        しない
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ○
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        JavaScript, CSSは要再読み込み
                      </td>
                    </tr>
                    <tr key={2} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Hotwire (TurboDrive)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <StyledLink
                          href="https://turbo.hotwired.dev/handbook/drive#displaying-progress">する</StyledLink>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <StyledLink
                          href="https://turbo.hotwired.dev/handbook/drive#prefetching-links-on-hover">する</StyledLink>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ○
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        hoverでprefetch
                      </td>
                    </tr>
                    <tr key={3} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next SSG
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <StyledLink
                          href="https://nextjs.org/docs/pages/api-reference/components/link#prefetch">する</StyledLink>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        △ (要DAL)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        動的なサイトでは使えないが、参考までに紹介
                      </td>
                    </tr>
                    <tr key={4} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next useEffect
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        後にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <StyledLink
                          href="https://nextjs.org/docs/pages/api-reference/components/link#prefetch">静的な部分まで</StyledLink>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        △ (要DAL)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        useEffect内のfetchはprefetchされない
                      </td>
                    </tr>
                    <tr key={5} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next page router SSR
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        しない
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        △ (要DAL)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        SSRを使うとprefetchしない
                      </td>
                    </tr>
                    <tr key={6} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next app router Server component
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <StyledLink
                          href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching">静的な部分まで</StyledLink>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        △ (要DAL)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        dynamic componentを使った場合はloading.jsのところまでprefetch
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Turboのインストール
            </h2>
            <p className="mt-8">
              <strong>普通のMPAのページにTurboをインストールするだけで、TurboDriveによる画面遷移が手に入ります。</strong>インストール方法はライブラリを読み込むだけです。<StyledLink
              href="https://turbo.hotwired.dev/handbook/installing">公式ドキュメント</StyledLink>を確認してください。
            </p>
            <p className="mt-4">
              また本サイトではTurboのJavaScriptファイルはpublic/hotwire/javascript/turbo.es2017-esm.jsにダウンロードされており、<code>templates/layouts/header.ejs</code>から参照されています。これだけでTurboDriveが使用できるようになっています。
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
              結果として、動的コンテンツの場合はHotwire (TurboDrive)が体感として一番ヌルサクになります。
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
                ネイティブ画面遷移(MPA)およびHotwire TurboDriveを使っている場合は<code>password_digest</code>は漏洩しません。レスポンスにはHTMLしか含まれないので、画面に表示しない内容はブラウザに送信されないためです。
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
              一方でHotwireの場合は、HTMLを出力するテンプレートファイル自身がこのようなData Access Layerの役割を果たしているとも言えます。ユーザに見せたい情報・見せたくない情報はテンプレートファイルが呼び出す・呼び出さないで結果的に制御されています。もちろんviewレイヤーにはなるべくロジックを持たせたくないので、判定処理そのものは別のところに任せます。</p>
            <p className="mt-4">
              結論として、ネイティブ画面遷移(MPA)やHotwire TurboDriveを使用するときに比べ、Next.jsはデータ漏洩に神経を使う必要がありそうです。
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
