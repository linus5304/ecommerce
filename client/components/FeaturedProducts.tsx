import React from "react"
import { Product } from "./Product"

interface FeaturedProductsProps {}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({}) => {
  return (
    <div>
      <div className="font-semibold text-4xl p-4">Featured Products</div>
      <div className="grid grid-cols-4 gap-4 px-40 py-10">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}
