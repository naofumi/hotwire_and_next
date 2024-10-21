// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import UsersList from "@/components/popup/UsersList";
import Layout from "@/components/Layout";
import PopupTechNav from "@/components/popup/TechNav";
import { User } from "@/repositories/user";

export async function getServerSideProps() {
  const response = await fetch(process.env.URL + "/api/users")
  const users = await response.json()
  return {props: {users}}
}

export default function PopupIndexPage({users}: {users: User[]}) {
  return (
    <Layout>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="demo-h1">
              ポップアップのUI
            </h1>
            <PopupTechNav selected="useeffect" />
            <UsersList users={users}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
