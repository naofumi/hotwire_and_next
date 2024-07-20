// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {allUsers, User} from "@/repositories/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>,
) {
    const users: User[] = await allUsers()

    res.status(200).json(users);
}
