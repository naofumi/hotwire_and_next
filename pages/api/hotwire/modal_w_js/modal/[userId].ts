// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {findUserWithDetails} from "@/repositories/user_detail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const id = req.query.userId
  if (!(typeof id === 'string')) throw "Bad request"
  const userDetail = await findUserWithDetails(parseInt(id))

  const resultText = render("modal_w_js/modal.ejs",
    {id: userDetail.id, userDetail}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
