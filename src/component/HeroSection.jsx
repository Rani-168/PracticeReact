import './Header.css';

function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 py-10 md:py-16 bg-[#F2F2F2] gap-10">
      
      {/* LEFT CONTENT */}
      <div className="max-w-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full w-full sm:w-auto">
          Shop Now
        </button>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">200+</h2>
            <p className="text-gray-500 text-xs sm:text-sm">International Brands</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">2,000+</h2>
            <p className="text-gray-500 text-xs sm:text-sm">High-Quality Products</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">30,000+</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img 
          src="src/assets/image1.png"
          alt="fashion"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
        />
      </div>

    </div>
  );
}

export default HeroSection;