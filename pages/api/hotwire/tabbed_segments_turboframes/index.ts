// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"
import {allUsers} from "@/repositories/user";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const users = allUsers()
  const resultText = render("tabbed_segments_turboframes/index.ejs",{users})

  res.appendHeader("Content-Type", "text/html")
    .status(200)
    .send(resultText)
}
