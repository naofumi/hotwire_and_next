// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

import {allProducts} from "@/repositories/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const resultText = render("products.ejs",
    {products: allProducts()}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
