// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

import {allUsers, searchUsers, User} from "@/repositories/user";
import {findUserWithDetails} from "@/repositories/user_detail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const users: User[] = await allUsers();

  const id = req.query.id
  let userWithDetails = {}
  if (typeof id === 'string') {
    userWithDetails = await findUserWithDetails(parseInt(id))
  }

  const resultText = render("modal_no_js/index.ejs",
    {users, userWithDetails}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
