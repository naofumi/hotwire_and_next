import React from "react";
import Modal from "@/app/modal_app_parallel/components/Modal";

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getUserDetails(userId: string) {
  const response = await fetch(process.env.URL + `/api/user/${userId}`)
  const data = await response.json();
  return data;
}

export default async function UserDetailModal(
  {params}: { params: { userId: string } }
) {
  const userDetail = await getUserDetails(params.userId);

  console.log("rendering Modal")

  return (
    <Modal>
      <div className="mt-5 sm:mt-6">
        <div>
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
      </div>
    </Modal>
  )
}
