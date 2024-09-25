import {Product} from "@/repositories/product";
import {FormEvent} from "react";

export default function ProductAddButton ({product, addToCart}: {product: Product, addToCart: (numberId: number) => void}) {
  return (<button type="button"
              onClick={() => addToCart(product.id)}
              className="btn-primary border border-orange-600">Add to Cart
      </button>)
}
