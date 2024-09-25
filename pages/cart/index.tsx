import Layout from "@/components/Layout";
import CartTechNav from "@/components/cart/CartTechNav";
import CartIcon from "@/components/cart/CartIcon";
import type {Cart} from "@/repositories/cart";
import {useEffect, useState} from "react";
import {Product} from "@/repositories/product";
import AddedBadge from "@/components/cart/AddedBadge";
import ProductAddButton from "@/components/cart/ProductAddButton";
import ProductList from "@/components/cart/ProductList";

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
        <ProductList products={products} cart={cart} addToCart={addToCart} />
      </div>
    </Layout>
  )
}
