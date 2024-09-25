import Layout from "@/components/Layout";
import CartTechNav from "@/components/cart/CartTechNav";
import CartIcon from "@/components/cart/CartIcon";
import type {Cart} from "@/repositories/cart";
import {useEffect, useState} from "react";
import {Product} from "@/repositories/product";
import AddedBadge from "@/components/cart/AddedBadge";
import ProductAddButton from "@/components/cart/ProductAddButton";

export async function getServerSideProps() {
  const response = await fetch(process.env.URL + "/api/products");
  const data = await response.json();

  return {props: {products: data}}
}

export default function CartPage({products}: { products: Product[] }) {
  const [cart, setCart] = useState<Cart | null>(null)

  useEffect(() => {
    fetch("/api/cart")
      .then(response => response.json())
      .then(data => setCart(data))
  }, [])

  function addToCart(productId: number) {
    fetch("/api/cart/add_to_cart", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({product_id: productId}),
    }).then(response => response.json())
      .then(data => setCart(data));
  }

  function clearCart() {
    fetch("/api/cart/reset", {
      method: "POST"
    }).then(response => response.json())
      .then(data => setCart(data))
  }

  return (
    <Layout>
      <div className="my-10 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="demo-h1">複数箇所更新 (ショッピングカート)</h1>
            <CartTechNav selected="react"/>
            <div className="flex justify-between">
              <h2 className="demo-h2">Products</h2>
              <div className="flex">
                <button type="button"
                        onClick={clearCart}
                        className="p-1 mr-4 border rounded border-orange-600 text-orange-600">Clear
                  Cart
                </button>
                <div id="cart_icon">
                  {cart
                    ? <CartIcon cart={cart}/>
                    : <span>Loading...</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                <tr className="divide-x divide-gray-200">
                  <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Catalog
                    Number
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Availability
                  </th>
                  <th scope="col"
                      className="w-36 py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Cart
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {
                  products.map((product, i) => {
                    return (<tr key={i} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {product.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {product.catalogNumber}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {product.price}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                        {product.availability}
                      </td>
                      <td className="text-center whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                        {cart
                          ? cart[product.id.toString()]
                            ? <AddedBadge/>
                            : <ProductAddButton product={product} addToCart={addToCart}/>
                          : <span>Loading...</span>
                        }
                      </td>
                    </tr>)
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
