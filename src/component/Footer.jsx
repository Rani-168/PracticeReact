import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-100 pt-10">
      {/* Newsletter Section */}
      <div className="max-w-8xl mx-auto px-18">
        <div className="bg-black max-w-8xl text-white rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 gap-4 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-full text-black w-full md:w-72 outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7.5xl mx-auto px-28  mt-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">SHOP.CO</h2>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            We have clothes that suits your style and which you're proud to wear.
            From women to men.
          </p>

          <div className="flex gap-3 mt-4 text-gray-600">
            {[FaFacebookF, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

        {/* Columns */}
        {[
          {
            title: "COMPANY",
            items: ["About", "Features", "Works", "Career"],
          },
          {
            title: "HELP",
            items: [
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ],
          },
          {
            title: "FAQ",
            items: ["Account", "Manage Deliveries", "Orders", "Payments"],
          },
          {
            title: "RESOURCES",
            items: [
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-black cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-7.5xl mx-auto px-22 mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="flex gap-3 mt-4 md:mt-0">
          {["VISA", "MasterCard", "PayPal", "Apple Pay", "G Pay"].map(
            (item, i) => (
              <span
                key={i}
                className="bg-white px-3 py-1 rounded shadow hover:scale-105 transition cursor-pointer"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}