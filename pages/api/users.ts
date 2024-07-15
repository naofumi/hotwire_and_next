// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {User, allUsers} from "@/repositories/user";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>,
) {
    res.status(200).json(allUsers());
}
