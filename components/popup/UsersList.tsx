import {useEffect, useState} from "react";
import UserPopup from "@/components/popup/UserPopup";
import {User} from "@/repositories/user";
import rocketImage from "@/public/images/rocket.gif"
import Image from "next/image";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([])
  const [showUserDetailKey, setshowUserDetailKey] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/users").then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  return (
    <>
      {users.length === 0
        ? <div className="flex justify-evenly w-full mt-24 h-96 mb-48">
          <Image src={rocketImage} alt="loader" className="w-16 h-16"/>
        </div>
        : <>
          <div className="my-10 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300 mb-48">
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
                          <div className="flex gap-2 items-center relative">
                            {user.name}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 hover:cursor-pointer"
                                 onClick={() => {
                                   setshowUserDetailKey(user.id)
                                 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                            </svg>
                            {showUserDetailKey === user.id
                              ? <div
                                className="absolute z-10 -top-12 left-48 w-72 px-4 pt-1 pb-8 bg-white border shadow-lg rounded-md border-gray-400">
                                <div className="flex justify-between mb-4 border-b border-gray-200">
                                  <div></div>
                                  <div className="p-1 text-sm w-auto hover:cursor-pointer translate-x-2 active:scale-125"
                                       onClick={() => setshowUserDetailKey(null)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="size-6 text-orange-600">
                                      <path fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                            clipRule="evenodd"/>
                                    </svg>
                                  </div>
                                </div>
                                <UserPopup id={showUserDetailKey}/>
                              </div>
                              : null
                            }
                          </div>
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{user.title}</td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{user.email}</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{user.role}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
