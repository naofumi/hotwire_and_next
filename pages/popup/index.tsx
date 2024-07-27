// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import UsersList from "@/components/popup/UsersList";
import Layout from "@/components/Layout";

export default function PopupIndexPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ポップアップのUI
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/api/hotwire/popup"
                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Turbo Frames & JS ポップアップ</a>
              <a href="/api/hotwire/popup_stimulus"
                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Turbo Frames & Stimulus ポップアップ</a>
              <Link href="/popup"
                    className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Next.js ポップアップ</Link>
            </div>
            <UsersList/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
