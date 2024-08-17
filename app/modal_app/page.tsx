import ModalTechNav from "@/components/modal/TechNav";
import Link from "next/link";
import React from "react";
import {cookies} from "next/headers";
import Modal from "@/app/modal_app/components/Modal";
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
* Implement a modal dialog using exclusively Server Components and Server Actions without
* any Client Components. The official Next.js documentation suggests a solution with Parallel routers
* and Intercepting routes. However, this is complex, and I think it is worthwhile
* to investigate alternative approaches.
*
* The implementation below switches between modal:shown and modal:hidden by changing
* the `showModal` search parameter. Showing a modal is simply a matter of having a `Link` tag
* that points to `/modal_app?showModal=true`.
*
* The RSC payload from the `/modal_app?showModal=true` endpoint will return not only the modal,
* but also the whole page including the section that is hidden by the modal backdrop.
* The entire page including the modal will be drawn, but React is clever enough to
* maintain browser state for form inputs, and so from the user's perspective, the only thing
* that changes is the appearance of the modal.
*
* The problem with this approach, however, is when the network response is slow. The browser
* does not provide feedback after clicking the modal link. Since Server Components do not
* allow event handlers, there is no way to use JavaScript to provide the feedback.
*
* Although insufficient, one thing you can do to add feedback is to use CSS `:active`.
* */
export default async function ModalAppPage({searchParams}: { searchParams: { userId: string | undefined} }) {
  const userId = searchParams.userId
  const users = await getUsers()

  return (
      <>
        <div className="my-10 px-4 sm:px-6 lg:px-8">
          <ModalTechNav selected={`server_component`}/>
          <div className="mt-16 sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="demo-h1">Next.js Server ComponentによるModal</h1>
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
                        <Link href={`/modal_app?userId=${user.id}`}
                              className="underline text-orange-600 active:font-bold">
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
        { userId && <Modal userId={userId} />}
      </>
  )
}
