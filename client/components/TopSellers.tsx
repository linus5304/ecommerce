import React from "react"

interface TopSellersProps {}

export const TopSellers: React.FC<TopSellersProps> = ({}) => {
  return (
    <div>
    <div className="font-semibold text-4xl p-4">Top Sellers</div>
      <div className="carousel carousel-center h-150 justify-center h-60 space-x-2 bg-gray-100">
        <div className="carousel-item">
          <img className="cursor-pointer"  src="https://picsum.photos/id/500/256/144" />
        </div>
        <div className="carousel-item">
          <img className="cursor-pointer"  src="https://picsum.photos/id/501/256/144" />
        </div>
        <div className="carousel-item">
          <img className="cursor-pointer"  src="https://picsum.photos/id/502/256/144" />
        </div>
        <div className="carousel-item">
          <img className="cursor-pointer" src="https://picsum.photos/id/503/256/144" />
        </div>
      </div>
    </div>
  )
}
