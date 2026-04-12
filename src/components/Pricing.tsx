import React from "react";
import config from "../config/index.json";

const Pricing = () => {
  const { pricing } = config;
  const { items } = pricing;
  const [enterprisePlan, businessPlan, startupPlan] = items;

  return (
    <section className="relative py-24 bg-white" id="pricing">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-1/2 top-0 -ml-[50%] h-full w-full bg-[url('/images/grid.svg')] bg-center"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-200 mb-4">
            FLEXIBLE SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Enterprise-Grade
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customized packages for businesses of all sizes with blockchain
            integration options
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Startup Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {startupPlan?.name}
                </h3>
                <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  STARTUP
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Essential technology solutions for growing businesses
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {startupPlan?.price}
                </span>
                <span className="text-gray-500">/{startupPlan?.price}</span>
              </div>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                Get Started
              </button>
            </div>
            <div className="p-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Includes
              </h4>
              <ul className="space-y-3">
                {startupPlan?.features.map((feature) => (
                  <li
                    key={`${startupPlan.name}-${feature}`}
                    className="flex items-start text-gray-700"
                  >
                    <svg
                      className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Plan - Featured */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 transform md:scale-105 relative z-10 group overflow-hidden">
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {businessPlan?.name}
                </h3>
                <span className="text-xs font-medium bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                  BUSINESS
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive solutions with blockchain integration
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {businessPlan?.price}
                </span>
                <span className="text-gray-500">/{businessPlan?.price}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-md">
                Get Started
              </button>
            </div>
            <div className="p-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Includes
              </h4>
              <ul className="space-y-3">
                {businessPlan?.features.map((feature) => (
                  <li
                    key={`${businessPlan.name}-${feature}`}
                    className="flex items-start text-gray-700"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-cyan-300 transition-all duration-300 group overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {enterprisePlan?.name}
                </h3>
                <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  ENTERPRISE
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Custom solutions for large-scale operations
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {enterprisePlan?.price}
                </span>
                <span className="text-gray-500">/{enterprisePlan?.price}</span>
              </div>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
            <div className="p-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Includes
              </h4>
              <ul className="space-y-3">
                {enterprisePlan?.features.map((feature) => (
                  <li
                    key={`${enterprisePlan.name}-${feature}`}
                    className="flex items-start text-gray-700"
                  >
                    <svg
                      className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gray-900 rounded-2xl p-10 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/grid.svg')] bg-center"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need Custom Enterprise Solutions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team specializes in building tailored technology stacks that
              combine traditional business systems with blockchain
              infrastructure for large organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                Request Consultation
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
