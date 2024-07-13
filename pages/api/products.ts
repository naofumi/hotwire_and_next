// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Product = {
    name: string
    catalogNumber: string
    price: number
    availability: string
};

const products = [
    {name: "Chili Potatoes", catalogNumber: "15413234", price: 200, availability: "On Sale"},
    {name: "Rock hard Senbei", catalogNumber: "5624523", price: 400, availability: "Discontinues"},
    {name: "Fruity Jelly", catalogNumber: "125476435", price: 300, availability: "On Sale"},
    {name: "Chocolate Bucket", catalogNumber: "5234526234", price: 1000, availability: "On Sale"},
    {name: "Happy Biscuit", catalogNumber: "1325345", price: 600, availability: "On Sale"},
    {name: "Chili Potatoes", catalogNumber: "15413234", price: 200, availability: "On Sale"},
    {name: "Rock hard Senbei", catalogNumber: "5624523", price: 400, availability: "Discontinues"},
    {name: "Fruity Jelly", catalogNumber: "125476435", price: 300, availability: "On Sale"},
    {name: "Chocolate Bucket", catalogNumber: "5234526234", price: 1000, availability: "On Sale"},
    {name: "Happy Biscuit", catalogNumber: "1325345", price: 600, availability: "On Sale"},
    {name: "Chili Potatoes", catalogNumber: "15413234", price: 200, availability: "On Sale"},
    {name: "Rock hard Senbei", catalogNumber: "5624523", price: 400, availability: "Discontinues"},
    {name: "Fruity Jelly", catalogNumber: "125476435", price: 300, availability: "On Sale"},
    {name: "Chocolate Bucket", catalogNumber: "5234526234", price: 1000, availability: "On Sale"},
    {name: "Happy Biscuit", catalogNumber: "1325345", price: 600, availability: "On Sale"},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>,
) {
    setInterval(() => {res.status(200).json(products);}, 500)
}
