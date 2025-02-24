import React from "react";
import { motion } from "framer-motion";
import { AudioCard } from "./AudioCard";
export const DownloadSection = () => {
  return (
    <section id="download" className="pt-32 min-h-screen bg-[#F5F7FF]">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-[#3a5ef0]/10 rounded-full blur-3xl animate-blob top-1/4 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[#5E3BEE]/10 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 -right-48"></div>
        <div className="absolute w-96 h-96 bg-[#3a5ef0]/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-1/4 left-1/2"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#1E1F36]">
              Make Narratra Yours!!
              <br />
              <span className="text-[#3a5ef0]">
                Start Your New Reading Journey Today
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of users already enjoying Narratra on their mobile
              devices.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Available for both iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Updated Google Play Button */}
              <a
                href="#"
                className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
              </a>
              {/* Updated App Store Button */}
              <a
                href="#"
                className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="lg:w-1/2 flex justify-center"
          >
            <AudioCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
