import CartTechNav from "@/components/cart/CartTechNav";
import CartIcon from "./components/CartIcon";
import ProductList from "./components/ProductList";
import {Cart} from "@/repositories/cart";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {deleteCookie, getCookie} from "cookies-next"
import {cookies} from "next/headers"

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getCart(): Promise<Cart> {
  const cartString = getCookie("cart", {cookies})
  const cart = cartString ? JSON.parse(cartString) : {}

  return cart
}

async function clearCart() {
  "use server"

  deleteCookie("cart", {cookies})

  revalidatePath("/cart_app")
  redirect("/cart_app")
}

export default async function CartPage() {
  const cart = await getCart()

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="demo-h1">複数箇所更新 (ショッピングカート)</h1>
          <CartTechNav selected="server_actions"/>
          <div className="flex justify-between">
            <h2 className="demo-h2">Products</h2>
            <div className="flex">
              <form action={clearCart}>
                <button type="submit"
                        className="p-1 mr-4 border rounded border-orange-600 text-orange-600">Clear
                  Cart
                </button>
              </form>
              <div id="cart_icon">
                {cart
                  ? <CartIcon cart={cart}/>
                  : <span>Loading...</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  )
}
