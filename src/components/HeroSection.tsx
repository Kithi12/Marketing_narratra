import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AudioCard } from "./AudioCard";
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#F5F7FF] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-[#3a5ef0]/10 rounded-full blur-3xl animate-blob top-1/4 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[#5E3BEE]/10 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 -right-48"></div>
        <div className="absolute w-96 h-96 bg-[#3a5ef0]/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-1/4 left-1/2"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
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
            }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="inline-block text-[#3a5ef0] font-medium mb-4"
            >
              Your New Adventure
            </motion.span>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="text-5xl md:text-6xl font-bold text-[#1E1F36] mb-6"
            >
              Listen to Your
              <br />
              <span className="text-[#3a5ef0]">Favorite Books</span>
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="text-xl text-gray-600 mb-8 max-w-lg"
            >
              Experience the rich heritage of Sinhala literature through
              immersive audiobooks.
              <strong> Listen anywhere, anytime.</strong>
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/download"
                className="group bg-[#3a5ef0] text-white px-8 py-4 rounded-lg border border-[#2f4ce0] shadow-md hover:shadow-[0px_0px_15px_#ece8fc] hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span>Download Now</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 rounded-lg border-2 border-[#3a5ef0] text-[#3a5ef0] hover:bg-[#3a5ef0] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
            <AudioCard />
          </div>
        </div>
      </div>
    </section>
  );
};
