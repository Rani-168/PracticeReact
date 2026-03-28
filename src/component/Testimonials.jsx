function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.",
    },
    {
      name: "James L.",
      text: "As someone who’s always on the lookout for unique fashion pieces, I'm thrilled.",
    },
  ];

  return (
    <div className="px-10 py-12 bg-gray-50">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">OUR HAPPY CUSTOMERS</h1>

        <div className="flex gap-4 text-xl cursor-pointer">
          <span>←</span>
          <span>→</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">

            {/* Stars */}
            <p className="text-yellow-500 text-lg">★★★★★</p>

            {/* Name */}
            <h3 className="font-semibold mt-2">
              {item.name} <span className="text-green-500">✔</span>
            </h3>

            {/* Text */}
            <p className="text-gray-600 mt-2 text-sm">
              "{item.text}"
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;