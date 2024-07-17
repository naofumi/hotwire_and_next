// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {
  City,
  getCitiesForSelect,
  getPostalCodesForSelect,
  getPrefecturesForSelect,
  PostalCode,
  Prefecture
} from "@/repositories/prefecture";

export type AddressSelectorProps = {
  prefectureOptions: Prefecture[]
  cityOptions: City[]
  postalCodeOptions: PostalCode[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddressSelectorProps>,
) {
  const codeAsString = req.query.code as string | undefined
  const city = req.query.city as string | undefined
  const code = (typeof codeAsString === "string" && codeAsString) ? parseInt(codeAsString) : undefined

  const prefectureOptions = await getPrefecturesForSelect(code)
  const cityOptions = await getCitiesForSelect(code, city)
  const postalCodeOptions = await getPostalCodesForSelect(code, city)


  res.status(200)
    .json({prefectureOptions, cityOptions, postalCodeOptions})
}
