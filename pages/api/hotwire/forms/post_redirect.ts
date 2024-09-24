// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {render} from "@/helpers/template-renderer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method === "POST") {
    const responseType: string = req.body.response_type
    if (responseType === "303") {
      res.redirect(303, process.env.URL + "/api/hotwire/forms/show")
    } else if (responseType === "200") {
      const resultText = render("forms/show.ejs", {})
      res.appendHeader("Content-Type", "text/html")
        .status(200)
        .send(resultText)
    } else if (responseType === "422") {
      const resultText = render("forms/post_redirect.ejs", {message: "Status 422 Error message"})
      res.appendHeader("Content-Type", "text/html")
        .status(422)
        .send(resultText)
    } else if (responseType === "404") {
      const resultText = render("forms/404_error_wo_turbo.ejs", {})
      res.appendHeader("Content-Type", "text/html")
        .status(404)
        .send(resultText)
    } else if (responseType === "404_with_turbo") {
      const resultText = render("forms/404_error_with_turbo.ejs", {})
      res.appendHeader("Content-Type", "text/html")
        .status(404)
        .send(resultText)
    } else if (responseType === "500") {
      const resultText = render("forms/500_error_wo_turbo.ejs", {})
      res.appendHeader("Content-Type", "text/html")
        .status(500)
        .send(resultText)
    } else if (responseType === "stream") {
      const resultText = render("forms/turbo_stream_response.ejs", {})
      res.appendHeader("Content-Type", "text/vnd.turbo-stream.html")
        .status(200)
        .send(resultText)
    }
  } else {
    const resultText = render("forms/post_redirect.ejs", {message: ""})
    res.appendHeader("Content-Type", "text/html")
      .status(200)
      .send(resultText)
  }
}
