// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";

export default function IndexPage() {
    return (
        <>
            <div className="bg-white flex justify-end p-1">
                <a href="/hotwire/index.html" className="text-lg p-1 rounded text-red-600 mr-2">Hotwire</a>
                <Link href="/" className="text-lg p-1 rounded bg-blue-600 text-white">Next.js</Link>
            </div>
            <div className="bg-white">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Hotwire for Frontend developers
                        </h2>
                        <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">フロントエンドエンジニアのためのHotwire入門</h3>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            HotwireはRuby on Railsコミュニティを中心に注目されているフロントエンドの技術です。
                            React/Next.jsとの対比に重きを置きながら、Hotwireの何が同じで、何が違うかをお伝えします。
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="/users"
                               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                               data-turbo="false">ブラウザネイティブ 画面遷移</a>
                            <Link href="/users"
                               className="rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                               data-turbo="true">Next.jsによる 画面遷移</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
