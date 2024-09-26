import {User} from "@/repositories/user"
import Link from "next/link"
import React from "react"

async function getUsers(): Promise<User[]> {
  console.log("Fetch start for Users")
  const res = await fetch(process.env.URL + "/api/users")
  const users = await res.json()
  return users
}

export default async function UserList() {
  const users = await getUsers()

  return (
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
              <tr key={i} className="divide-x divide-gray-200 cursor-pointer">
                <td
                  className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                  <Link href={`/modal_app_parallel/users/${user.id}`}
                        className="underline text-orange-600 inline-block active:scale-105"
                        scroll={false}>
                    {user.name}
                  </Link>
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
        </div>
      </div>
    </div>
  )
}
