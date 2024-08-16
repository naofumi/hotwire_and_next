// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {setCookie} from "cookies-next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const greeting = JSON.parse(req.body).greeting;

  if (greeting) {
    setCookie("greeting", greeting, { req, res });
  }

  res.status(200).json({greeting})
}
