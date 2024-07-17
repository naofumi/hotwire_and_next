// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {getCitiesForSelect, getPostalCodesForSelect, getPrefecturesForSelect} from "@/repositories/postal_code";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const codeAsString = req.query.code as string | undefined
  const city = req.query.city as string | undefined
  const code = (typeof codeAsString === "string" && codeAsString) ? parseInt(codeAsString) : undefined

  const prefectureOptions = await getPrefecturesForSelect(code)
  const cityOptions = await getCitiesForSelect(code, city)
  const postalCodeOptions = await getPostalCodesForSelect(code, city)

  const resultText = render("address_selector/index.ejs",{
    code,
    city,
    prefectureOptions,
    cityOptions,
    postalCodeOptions})

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}

