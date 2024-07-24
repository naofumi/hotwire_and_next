// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {allUsers, searchUsers, User} from "@/repositories/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  const queryString = req.query["query"]

  let users = (typeof queryString === "string" && queryString.length > 0)
    ? await searchUsers(queryString)
    : await allUsers()

  res.status(200).json(users);
}
