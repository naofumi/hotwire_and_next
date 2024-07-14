// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {render} from "@/helpers/template-renderer"
import {User} from "@/pages/api/users";

export const users: User[] = [
  {name: "Hogeta Hogeo", title: "Front-end developer", email: "hogeta@example.com", role: "Member"},
  {name: "Hogehara Hogeko", title: "Designer", email: "hogeko@example.com", role: "Member"},
  {name: "Fugata Fugao", title: "PM", email: "fugata@example.com", role: "Member"},
  {name: "Fugakawa Fugako", title: "Back-end developer", email: "fugako@example.com", role: "Member"},
  {name: "Piyota Piyogishi", title: "IT administrator", email: "piyota@example.com", role: "Admin"},
  {name: "Hogeta Hogeo", title: "Front-end developer", email: "hogeta@example.com", role: "Member"},
  {name: "Hogehara Hogeko", title: "Designer", email: "hogeko@example.com", role: "Member"},
  {name: "Fugata Fugao", title: "PM", email: "fugata@example.com", role: "Member"},
  {name: "Fugakawa Fugako", title: "Back-end developer", email: "fugako@example.com", role: "Member"},
  {name: "Piyota Piyogishi", title: "IT administrator", email: "piyota@example.com", role: "Admin"},
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const resultText = render("popup/users.ejs", {users: users})

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
