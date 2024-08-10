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
            <h1 className="demo-h1">
              ポップアップのUI
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/api/hotwire/popup"
                 className="btn-outline-primary">
                Turbo Frames & JS ポップアップ</a>
              <a href="/api/hotwire/popup_stimulus"
                 className="btn-outline-primary">
                Turbo Frames & Stimulus ポップアップ</a>
              <Link href="/popup"
                    className="btn-primary">
                Next.js ポップアップ</Link>
            </div>
            <UsersList/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
