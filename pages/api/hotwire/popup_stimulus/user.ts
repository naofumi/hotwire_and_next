// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

import {findUserWithDetails} from "@/repositories/user_detail";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const id = req.query.id
  if (!(typeof id === 'string')) throw "Bad request"

  const resultText = render("popup_stimulus/user.ejs",
    {id: parseInt(id), userWithDetails: findUserWithDetails(parseInt(id))}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
