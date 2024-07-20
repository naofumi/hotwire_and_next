// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {allCitiesInPrefecture} from "@/repositories/postal_code";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (typeof req.query.code !== 'string') throw Error("bad request")
  const code = parseInt(req.query.code)
  const cities = await allCitiesInPrefecture(code)

  const resultText = render("prefectures/cities/index.ejs",{code, cities})

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
