import {Product} from "@/repositories/product";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {cookies} from "next/headers"
import {getCookie, setCookie} from "cookies-next"

async function addToCart(formData: FormData) {
  "use server"

  const productIdString = formData.get("product_id") as string
  const productId = parseInt(productIdString)

  const cartString = getCookie("cart", {cookies})
  const cart = cartString ? JSON.parse(cartString) : {}
  cart[productId] = 1

  setCookie("cart", JSON.stringify(cart), {cookies})

  revalidatePath("/cart_app")
  redirect("/cart_app")
}


export default function ProductAddButton({product}: { product: Product }) {
  return (<form action={addToCart}>
    <input type="hidden" name="product_id" value={product.id} />
    <button type="submit"
            className="btn-primary border border-orange-600">Add to Cart
    </button>
  </form>)
}
