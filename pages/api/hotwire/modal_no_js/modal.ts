// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

import {sleep} from "@/helpers/sleep";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {

  await sleep(2000);

  const resultText = render("modal_no_js/modal.ejs",
    {}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
