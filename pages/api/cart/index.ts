// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {getCookie} from "cookies-next"

import {Cart} from "@/repositories/cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart>,
) {
  const cartString = getCookie("cart", {req, res})
  const cart: Cart = cartString ? JSON.parse(cartString) : {}

  res.status(200).json(cart)
}
