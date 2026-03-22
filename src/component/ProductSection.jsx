import ProductCard from "./ProductCard";

function ProductSection({ title, products }) {
  return (
    <div className="py-12 px-6 md:px-20 bg-gray-100">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        {title}
      </h1>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="border px-6 py-2 rounded-full hover:bg-black hover:text-white">
          View All
        </button>
      </div>
      <ProductCard></ProductCard>
    </div>
  );
}

export default ProductSection;