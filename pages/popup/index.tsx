// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import {useState} from "react";
import UsersList from "@/pages/components/popup/UsersList";

export default function PopupIndexPage() {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  return (
    <>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ポップアップのUI
            </h2>
            <p className="text-left mx-auto mt-6 max-w-xl leading-8 text-gray-600">
              タブで区切られたUIでは、タブの下の部分をコンポーネントに分けて、stateによってどのコンポーネントを表示するかを切り替えるのがReactでは一般的ではないかと思う。<br/>
              HotwireではTurboFrameを使うか、もしくは<code>data-turbo-permanent</code>を使い、ページをセクションに区切ることで同じ効果を実現する。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/hotwire/popup/index.html"
                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Hotwireによるポップアップ</a>
              <Link href="/popup"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Next.jsによるポップアップ</Link>
            </div>
            <UsersList />
          </div>
        </div>
      </div>
    </>
  )
}
