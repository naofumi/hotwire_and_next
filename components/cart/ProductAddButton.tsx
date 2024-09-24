import {Product} from "@/repositories/product";
import {FormEvent} from "react";

export default function ProductAddButton ({product, addToCart}: {product: Product, addToCart: (event: FormEvent<HTMLFormElement>) => void}) {
  return (<form method="post" onSubmit={addToCart}>
      <input type="hidden" name="product_id" value={product.id}/>
      <button type="submit"
              className="btn-primary border border-orange-600">Add to Cart
      </button>
    </form>
  )
}
