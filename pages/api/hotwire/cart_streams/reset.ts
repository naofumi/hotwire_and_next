// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {deleteCookie} from "cookies-next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method !== "POST") { throw new Error("Bad request"); }

  deleteCookie("cart", {res, req})

  res.redirect(303, process.env.URL + "/api/hotwire/cart_streams")
}
