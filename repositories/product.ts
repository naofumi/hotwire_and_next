import {databaseSleep} from "@/helpers/sleep";

export type Product = {
  id: number
  name: string
  catalogNumber: string
  price: number
  availability: string
};

const products = [
  {id: 1, name: "Chili Potatoes", catalogNumber: "15413234", price: 200, availability: "On Sale"},
  {id: 2, name: "Rock hard Senbei", catalogNumber: "5624523", price: 400, availability: "Discontinued"},
  {id: 3, name: "Fruity Jelly", catalogNumber: "125476435", price: 300, availability: "On Sale"},
  {id: 4, name: "Chocolate Bucket", catalogNumber: "5234526234", price: 1000, availability: "On Sale"},
  {id: 5, name: "Happy Biscuit", catalogNumber: "1325345", price: 600, availability: "On Sale"},
  {id: 6, name: "Chili Potatoes", catalogNumber: "15413234", price: 200, availability: "On Sale"},
  {id: 7, name: "Rock hard Senbei", catalogNumber: "5624523", price: 400, availability: "Discontinued"},
  {id: 8, name: "Fruity Jelly", catalogNumber: "125476435", price: 300, availability: "On Sale"},
  {id: 9, name: "Chocolate Bucket", catalogNumber: "5234526234", price: 1000, availability: "On Sale"},
  {id: 10, name: "Happy Biscuit", catalogNumber: "1325345", price: 600, availability: "On Sale"},
  {id: 11, name: "Chili Potatoes", catalogNumber: "15413234", price: 200, availability: "On Sale"},
  {id: 12, name: "Rock hard Senbei", catalogNumber: "5624523", price: 400, availability: "Discontinued"},
  {id: 13, name: "Fruity Jelly", catalogNumber: "125476435", price: 300, availability: "On Sale"},
  {id: 14, name: "Chocolate Bucket", catalogNumber: "5234526234", price: 1000, availability: "On Sale"},
  {id: 15, name: "Happy Biscuit", catalogNumber: "1325345", price: 600, availability: "On Sale"},
]

export async function allProducts(): Promise<Product[]> {
  await databaseSleep()
  return products
}
