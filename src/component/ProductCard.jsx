function ProductCard({ img, title, price, oldPrice, rating, discount }) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg" />

      <h2 className="mt-3 font-semibold text-sm">{title}</h2>

      
      <p className="text-yellow-500 text-sm">
        ⭐⭐⭐⭐☆ <span className="text-gray-500 ml-1">{rating}/5</span>
      </p>

    
      <div className="flex items-center gap-2 mt-1">
        <span className="font-bold">${price}</span>
        {oldPrice && (
          <span className="line-through text-gray-400">${oldPrice}</span>
        )}
        {discount && (
          <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded-full">
            {discount}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;