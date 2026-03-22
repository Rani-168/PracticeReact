import './Header.css';
function HeroSection() {
  return (
    <div className="flex items-center justify-between px-10 py-16 bg-blue-600 grid grid-cols-1 sm:bg-[#F2F2F2] sm:grid-cols-2  ">
      
      {/* Left Content */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-extrabold leading-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p className="text-gray-600 mt-4">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
          Shop Now
        </button>

        {/* Stats */}
        <div className="flex gap-10 mt-10">
          <div>
            <h2 className="text-2xl font-bold">200+</h2>
            <p className="text-gray-500 text-sm">International Brands</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">2,000+</h2>
            <p className="text-gray-500 text-sm">High-Quality Products</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">30,000+</h2>
            <p className="text-gray-500 text-sm">Happy Customers</p>
          </div>
        </div>
      </div>

     
      <div>
        <img 
          src="src/assets/image1.png"
          alt="fashion"
          className="rounded-lg h-120 "

        />
      </div>
    </div>
  );
}

export default HeroSection;