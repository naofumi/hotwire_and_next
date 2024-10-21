// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

import {allUsers, User} from "@/repositories/user";
import { findUserWithDetails, UserDetail } from "@/repositories/user_detail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const users: User[] = await allUsers()

  const id = req.query.userId
  let userDetail: User & UserDetail | null = null

  if (id) {
    if (!(typeof id === 'string')) throw "Bad request"
    userDetail = await findUserWithDetails(parseInt(id))
  }

  const resultText = render("modal_mpa/index.ejs",
    {users, userDetail}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
