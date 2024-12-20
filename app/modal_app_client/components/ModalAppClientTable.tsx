"use client"

import React, {useState} from "react";
import {User} from "@/repositories/user";
import UserDetailModal from "@/app/modal_app_client/components/UserDetailModal";
import {createPortal} from "react-dom";

export default function ModalAppClientTable({users}: { users: User[] }) {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <>
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
              <button className="text-orange-600 underline inline-block active:scale-105"
                      onClick={() => setSelectedUserId(i + 1)}>{user.name}</button>
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
      {(typeof window !== 'undefined') && createPortal(
        <>{selectedUserId && <UserDetailModal id={selectedUserId} closeModal={() => setSelectedUserId(null)}/>}</>,
        window.document.body
      )}
    </>
  )
}
