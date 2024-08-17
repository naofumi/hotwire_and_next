import React, {useEffect, useState} from "react";
import {User} from "@/repositories/user";
import {UserDetail} from "@/repositories/user_detail";
import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif";


export default function Modal({closeModal, id}: {
  closeModal: () => void,
  id: number,
}) {
  const [userDetail, setuserDetail] = useState<User & UserDetail | null>(null);

  useEffect(() => {
    setuserDetail(null)
    fetch(`/api/user?id=${id}`).then(res => res.json())
      .then(data => {
        setuserDetail(data)
      })
  }, [id])

  return <>
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-1 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:pt-2">
            <div className="flex justify-between mb-4 border-b border-gray-200">
              <div></div>
              <div className="p-1 text-sm w-auto hover:cursor-pointer translate-x-2"
                   onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="size-6 text-orange-600">
                  <path fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              {
                !userDetail
                  ? <div>
                    <Image src={rocketImage} alt="loader" className="m-auto mt-10 w-16 h-16"/>
                  </div>
                  : <div>
                    <div className="mb-2">{new Date().toLocaleTimeString()}</div>
                    <table>
                      <tbody>
                      <tr>
                        <td className="font-bold pr-3 text-right">Name:</td>
                        <td className="text-right">{userDetail.name}</td>
                      </tr>
                      <tr>
                        <td className="font-bold pr-3 text-right">Title:</td>
                        <td className="text-right">{userDetail.title}</td>
                      </tr>
                      <tr>
                        <td className="font-bold pr-3 text-right">Email:</td>
                        <td className="text-right">{userDetail.email}</td>
                      </tr>
                      <tr>
                        <td className="font-bold pr-3 text-right">Hobby:</td>
                        <td className="text-right">{userDetail.hobby}</td>
                      </tr>
                      <tr>
                        <td className="font-bold pr-3 text-right">Joined At:</td>
                        <td className="text-right">{userDetail.joinedAt}</td>
                      </tr>
                      <tr>
                        <td className="font-bold pr-3 text-right">Job Grade:</td>
                        <td className="text-right">{userDetail.jobGrade}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
