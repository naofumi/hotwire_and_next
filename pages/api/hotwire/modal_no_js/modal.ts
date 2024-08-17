// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {findUserWithDetails} from "@/repositories/user_detail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const id = req.query.id
  let resultText = ""
  if (typeof id === 'string') {
    const userDetail = await findUserWithDetails(parseInt(id))

    resultText = render("modal_no_js/modal.ejs",
      {id: userDetail.id, userDetail}
    )
  } else {
    resultText = "<turbo-frame id='modal'></turbo-frame>"
  }

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
