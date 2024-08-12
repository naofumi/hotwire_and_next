import Link from "next/link";
import {User} from "@/repositories/user";
import Layout from "@/components/Layout";
import {GetServerSidePropsContext} from "next";

// Simulate Next.js acting as a BFF for a JSON API server
export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("Fetch start for Users SSR")
  const res = await fetch(process.env.URL + "/api/users")
  const users = await res.json()
  const hideLoadingIndicator = !!(context.query.hide_loading_indicator);
  return {props: {users, hideLoadingIndicator}}
}

export default function UsersSsrIndex({users, hideLoadingIndicator}: { users: User[], hideLoadingIndicator: boolean }) {
  return (
    <Layout hideLoadingIndicator={hideLoadingIndicator}>
      <>
        <div className="my-10 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="demo-h1">Next.js Pages Router SSR画面遷移</h1>
              <h2 className="demo-h2">Users</h2>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr className="divide-x divide-gray-200">
                    <th scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Title
                    </th>
                    <th scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Email
                    </th>
                    <th scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                      Role
                    </th>
                  </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map((user, i) => (
                    <tr key={i} className="divide-x divide-gray-200">
                      <td
                        className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {user.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {user.title}
                      </td>
                      <td
                        className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td
                        className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                        {user.role}
                      </td>
                    </tr>))}
                  </tbody>
                </table>
                <div className="my-10 flex items-center justify-center gap-x-6">
                  <Link href="/products_ssr"
                        className="btn-primary">
                    Productsへ SSR</Link>
                  <Link href="/products_ssr?hide_loading_indicator=1"
                        className="ml-2 btn-primary">
                    Productsへ SSR(アニメーションを隠す)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
