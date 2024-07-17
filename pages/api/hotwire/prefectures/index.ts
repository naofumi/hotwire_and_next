// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {allPrefectures} from "@/repositories/prefecture";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const prefectures = await allPrefectures()

  const resultText = render("prefectures/index.ejs",{prefectures})

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
