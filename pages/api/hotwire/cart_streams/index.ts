// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {getCookie} from "cookies-next"

import {allProducts} from "@/repositories/product";
import {Cart} from "@/repositories/cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const products = await allProducts()
  const cartString = getCookie("cart", {req, res})
  const cart: Cart = cartString ? JSON.parse(cartString) : {}
  console.log(cart)

  const resultText = render("cart_streams/index.ejs",
    {products, cart}
  )

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
