// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {allProducts, Product} from "@/repositories/product";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>,
) {
    const products: Product[] = await allProducts()

    res.status(200).json(products);
}
