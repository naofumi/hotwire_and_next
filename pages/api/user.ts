// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

import {User} from "@/repositories/user";
import {findUserWithDetails, UserDetail} from "@/repositories/user_detail";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User & UserDetail>,
) {
    const id = req.query.id as string;

    const userWithDetails = await findUserWithDetails(parseInt(id));
    res.status(200).json(userWithDetails);
}
