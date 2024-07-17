// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {allPrefectures, allCitiesInPrefecture, allPostalCodesInCity} from "@/repositories/postal_code";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (typeof req.query.code !== 'string') throw Error("bad request")
  if (typeof req.query.city !== 'string') throw Error("bad request")
  const code = parseInt(req.query.code)
  const city = req.query.city
  const postalCodes = await allPostalCodesInCity(code, city)

  const resultText = render("prefectures/cities/show.ejs",{code, city, postalCodes})

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
