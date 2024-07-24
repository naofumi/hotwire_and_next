// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

import {allUsers, searchUsers, User} from "@/repositories/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const queryString = req.query["query"]

  let users = (typeof queryString === "string" && queryString.length > 0)
    ? await searchUsers(queryString)
    : await allUsers()

  const resultText = render("live_search/index.ejs",
    {users, queryString}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
