import ModalTechNav from "@/components/modal/TechNav";
import Link from "next/link";
import React, {ReactNode} from "react";
import {User} from "@/repositories/user";

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getUsers(): Promise<User[]> {
  console.log("Fetch start for Users")
  const res = await fetch(process.env.URL + "/api/users")
  const users = await res.json()
  return users
}

/*
* Goal of this demo:
*
* This demo improves on the simple React Component one by using the Layout
* feature in App Router.
*
* To my knowledge, Server Components are limited in how you can update fragments
* of the screen, and the only way you can do this with Next.js is by using Layouts.
*
* Next.js also provides Parallel rendering, but this seems to be an
* extension of Layouts, and we will not discuss this separately.
*
* Layouts are designed for cases where the fragment being switched out is large.
* The Layout is normally just a frame around the fragment (children).
* However, since modals are typically small, we need to flip the semantics.
* The Layout will contain the bulk of the content, and the children will
* be just a small modal.
*
* The benefit of using Layouts is that we no longer have to redraw the whole
* screen when showing modals, and we now also have a Suspense boundary
* where we can put `layout.js` files to provide a loading screen.
* This `layout.js` file will also be pre-fetched, so we can show the loading
* screen instantly after a link is clicked.
* Note that pre-fetching does not work in development, so you need to do
* `npm run build` and `npm run start` to see the effects.
* */
export default async function ModalAppLayoutLayout({children}: { children: ReactNode }) {
  const users = await getUsers()
  console.log("rendering Layout")

  return (
    <>
      <div className="my-10 px-4 sm:px-6 lg:px-8">
        <ModalTechNav selected={`server_component_layout`}/>
        <div className="mt-16 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="demo-h1">Next.js Server Component LayoutによるModal</h1>
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
                  <tr key={i} className="divide-x divide-gray-200 cursor-pointer">
                    <td
                      className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                      <Link href={`/modal_app_layout/modal/${user.id}`}
                            className="underline text-orange-600 active:font-bold"
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
      </div>
      {children}
    </>
  )
}
