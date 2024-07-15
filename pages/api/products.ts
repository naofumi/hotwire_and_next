// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {allProducts, Product} from "@/repositories/product";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>,
) {
    res.status(200).json(allProducts());
}
