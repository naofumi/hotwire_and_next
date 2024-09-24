// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {getCookie, setCookie} from "cookies-next"
import {Cart} from "@/repositories/cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method !== "POST") { throw new Error("Bad request"); }

  const productId: string = req.body.product_id
  const cartString = getCookie("cart", {req, res})
  const cart: Cart = cartString ? JSON.parse(cartString) : {}

  cart[productId] = 1
  setCookie("cart", JSON.stringify(cart), {res, req})

  res.appendHeader("Content-Type", "json/application")
    .status(200)
    .json(JSON.stringify(cart))
}
