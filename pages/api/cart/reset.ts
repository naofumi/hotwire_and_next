// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {deleteCookie, getCookie, setCookie} from "cookies-next"

import {allProducts} from "@/repositories/product";
import {NextResponse} from "next/server";
import {Cart} from "@/repositories/cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart>,
) {
  if (req.method !== "POST") { throw new Error("Bad request"); }

  deleteCookie("cart", {res, req})

  res.status(200).json({})
}
