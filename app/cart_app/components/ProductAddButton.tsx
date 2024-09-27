import {Product} from "@/repositories/product";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers"
import {getCookie, setCookie} from "cookies-next"

async function addToCart(productId: number, formData: FormData) {
  "use server"

  // const productId = formData.get("product_id") as string

  const cartString = getCookie("cart", {cookies})
  const cart = cartString ? JSON.parse(cartString) : {}
  cart[productId] = 1

  setCookie("cart", JSON.stringify(cart), {cookies, httpOnly: true})

  revalidatePath("/cart_app")
}


export default function ProductAddButton({product}: { product: Product }) {
  return (<form action={addToCart.bind(null, product.id)}>
    <button type="submit"
            className="btn-primary border border-orange-600">Add to Cart
    </button>
  </form>)
}
