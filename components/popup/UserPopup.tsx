import {useEffect, useState} from "react";
import {User} from "@/repositories/user";
import {UserDetail} from "@/repositories/user_detail";
import rocketImage from "@/public/images/rocket.gif"
import Image from "next/image";

export default function UserPopup({id}: { id: number }) {
  const [user, setUser] = useState<User & UserDetail | null>(null)

  useEffect(() => {
    fetch(`/api/user/${id}`).then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, [id])

  return (
    <>
      {
        !user
          ? <div>
            <Image src={rocketImage} alt="loader" className="m-auto w-16 h-16"/>
          </div>
          : user
            ?
            <div>
              <div className="mb-2">{new Date().toLocaleTimeString()}</div>
              <table>
                <tbody>
                <tr>
                  <td className="font-bold pr-3 text-right">Name:</td>
                  <td className="text-right">{user.name}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 text-right">Title:</td>
                  <td className="text-right">{user.title}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 text-right">Email:</td>
                  <td className="text-right">{user.email}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 text-right">Hobby:</td>
                  <td className="text-right">{user.hobby}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 text-right">Joined At:</td>
                  <td className="text-right">{user.joinedAt}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 text-right">Job Grade:</td>
                  <td className="text-right">{user.jobGrade}</td>
                </tr>
                </tbody>
              </table>
            </div>
            : null
      }
    </>
  )
}
