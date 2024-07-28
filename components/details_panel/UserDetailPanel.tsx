import {User} from "@/repositories/user";
import {useEffect, useState} from "react";
import {UserDetail} from "@/repositories/user_detail";
import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif";

export default function UserDetailPanel({id}: {id: number}) {
  const [userDetail, setuserDetail] = useState<User & UserDetail|null>(null);

  useEffect(() => {
    setuserDetail(null)
    fetch(`/api/user?id=${id}`).then(res => res.json())
      .then(data => {
        setuserDetail(data)
      })
  }, [id])

  return <>
    {
      !userDetail
        ? <div>
          <Image src={rocketImage} alt="loader" className="m-auto w-16 h-16"/>
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
  </>

}
