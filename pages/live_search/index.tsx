import Link from "next/link";
import {useEffect, useState} from "react";
import {User} from "@/repositories/user";
import Layout from "@/pages/components/Layout";
import Image from "next/image"
import rocketImage from "@/public/images/rocket.gif"

export default function LiveSearchIndex() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetch start for Users useEffect")
    fetch("/api/users").then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  function handleSearch(query: string) {
    const escapedQuery = encodeURIComponent(query)
    fetch(`/api/users/search?query=${escapedQuery}`).then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }

  return (
    <Layout>
      {loading
        ? <div className="flex justify-evenly w-full mt-24 h-96 mb-48">
          <Image src={rocketImage} alt="loader" className="w-16 h-16"/>
        </div>
        : <>
          <div className="my-10 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">Live Search</h1>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="mb-2">
                <label htmlFor="search" className="text-sm mr-2">Search</label>
                <input id="search" type="text"
                       onChange={(e) => handleSearch(e.target.value)}
                       className="border rounded p-1"/>
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
                    <Link href="/api/hotwire/live_search"
                          className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                      HotwireによるLive Search</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </Layout>
  )
}
