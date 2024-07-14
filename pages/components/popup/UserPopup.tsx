import {useEffect, useState} from "react";
import {User} from "@/repositories/user";
import {UserDetail} from "@/repositories/user_detail";

export default function UserPopup({id}: { id: number }) {
  const [user, setUser] = useState<User & UserDetail | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(`/api/user?id=${id}`).then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [id])

  return (
    <>
      {
        loading
          ? <div className="w-48">
            <img src="/images/rocket.gif" alt="loader" className="m-auto w-16 h-16" />
        </div>
          : user
            ? <table>
              <tbody>
              <tr>
                <td className="font-bold pr-3">Name:</td>
                <td className="text-right">{user.name}</td>
              </tr>
              <tr>
                <td className="font-bold pr-3">Title:</td>
                <td className="text-right">{user.title}</td>
              </tr>
              <tr>
                <td className="font-bold pr-3">Email:</td>
                <td className="text-right">{user.email}</td>
              </tr>
              <tr>
                <td className="font-bold pr-3">Hobby:</td>
                <td className="text-right">{user.hobby}</td>
              </tr>
              <tr>
                <td className="font-bold pr-3">Joined At:</td>
                <td className="text-right">{user.joinedAt}</td>
              </tr>
              <tr>
                <td className="font-bold pr-3">Job Grade:</td>
                <td className="text-right">{user.jobGrade}</td>
              </tr>
              </tbody>
            </table>
            : null
      }
    </>
  )
}
