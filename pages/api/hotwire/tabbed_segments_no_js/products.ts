// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {allProducts, Product} from "@/repositories/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const products = await allProducts()
  const resultText = render("tabbed_segments_no_js/products.ejs",{products})

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
