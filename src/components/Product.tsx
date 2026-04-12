import React from "react";

const Product = () => {
  const products = [
    {
      title: "HomeMaker",
      subtitle: "Smart Household Shopping, Warmer Homes",
      description:
        "HomeMaker blends technology with homemaking wisdom, turning your everyday shopping into rewarding experiences. Earn points on groceries, discover smart home solutions, and enjoy exclusive deals with $HOME token—all while building a cozier, more efficient home.",
      link: "https://myhomemakr.com",
      tags: ["Groceries", "Smart Home", "$HOME Token", "Rewards"],
      icon: "🏠",
      color: "white",
    },
    {
      title: "HandyMan",
      subtitle: "Decentralized Household Services",
      description:
        "A blockchain-powered platform connecting homeowners with trusted service providers. Book, pay, and review home services using crypto with transparent pricing and decentralized reputation systems.",
      link: "#",
      tags: ["Home Services", "Blockchain", "Decentralized", "Crypto Payments"],
      icon: "🛠️",
      color: "white",
    },
  ];

  return (
    <section className="relative bg-gray-900 overflow-hidden" id="product">
      {/* Glowing background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-cyan-400 ring-1 ring-inset ring-cyan-400/30 mb-4">
            <svg
              className="-ml-0.5 mr-1.5 h-2 w-2 text-cyan-400 animate-pulse"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            OUR PRODUCTS
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-6xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Home & Lifestyle
            </span>{" "}
            Reimagined
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Blockchain-powered solutions for modern households, combining
            convenience with crypto rewards
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 hover:border-${product.color}-400/50 transition-all duration-300`}
            >
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${product.color}-900/50 flex items-center justify-center border border-${product.color}-400/20`}
                  >
                    <span className="text-2xl">{product.icon}</span>
                  </div>
                  <div>
                    <span
                      className={`text-xs font-medium text-${product.color}-400 uppercase tracking-wider`}
                    >
                      {product.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {product.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 mb-8">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700 hover:bg-${product.color}-900/30 hover:border-${product.color}-400/30 hover:text-white transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={product.link}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 hover:from-${product.color}-600 hover:to-${product.color}-700 shadow-lg hover:shadow-${product.color}-500/30 transition-all duration-300`}
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-${product.color}-500 rounded-full filter blur-3xl opacity-10 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "10K+", label: "Active Users", color: "white" },
            { value: "$5M+", label: "Token Volume", color: "white" },
            { value: "95%", label: "Satisfaction", color: "white" },
            { value: "24/7", label: "Support", color: "white" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-colors"
            >
              <div className={`text-3xl font-bold mb-2 text-${stat.color}-400`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Token integration */}
        <div className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('/images/grid-dark.svg')] bg-center"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Powered by $HOME Token
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Our ecosystem runs on the $HOME utility token, rewarding users and
              powering transactions across all platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">
                  Live on Ethereum
                </span>
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                <span className="text-sm font-medium text-gray-300">
                  ERC-20 Compatible
                </span>
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                <span className="text-sm font-medium text-gray-300">
                  Staking Rewards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
