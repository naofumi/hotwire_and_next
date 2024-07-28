// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

import {findUserWithDetails} from "@/repositories/user_detail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const id = req.query.id
  if (!(typeof id === 'string')) throw "Bad request"
  const userWithDetails = await findUserWithDetails(parseInt(id))

  const resultText = render("popup/user.ejs",
    {id: userWithDetails.id, userWithDetails}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
