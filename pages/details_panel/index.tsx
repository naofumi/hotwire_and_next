import Link from "next/link";
import {useState} from "react";
import {User} from "@/repositories/user";
import Layout from "@/components/Layout";
import UserDetailPanel from "@/components/details_panel/UserDetailPanel";

export async function getServerSideProps() {
  console.log("Fetch start for Users SSR")
  const res = await fetch(process.env.URL + "/api/users")
  const users = await res.json()
  return {props: {users}}
}

export default function DetailsPanelIndex({users}: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  function showDetails(user: User) {
    setSelectedUser(user)
  }

  return (
    <Layout>
      <>
        <div className="mt-10 px-4 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="demo-h1">詳細パネル: useEffect</h1>
            <h2 className="demo-h2">Users</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="px-4 sm:px-6 lg:px-8">
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
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map((user, i) => (
                      <tr key={i}
                          className={`hover:cursor-pointer divide-x divide-gray-200 ${user.id === selectedUser?.id ? 'bg-yellow-100' : ''}`}
                          onClick={() => showDetails(user)}
                      >
                        <td
                          className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                          {user.name}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {user.title}
                        </td>
                      </tr>))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border p-4 rounded min-h-44">
            { selectedUser && <UserDetailPanel id={selectedUser.id} /> }
          </div>
        </div>
        <div className="my-10 flex items-center justify-center gap-x-6">
          <Link href="/api/hotwire/details_panel"
                className="btn-primary">
            Hotwire/Turbo Frames版へ</Link>
        </div>
      </>
    </Layout>
  )
}
