import { motion } from "framer-motion";
import { FaqSection } from "../components/FaqSection";
export const FaqPage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="pt-16"
    >
      <div className="bg-[#1E1F36]/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{
              y: -20,
            }}
            animate={{
              y: 0,
            }}
            className="text-4xl font-bold text-[#1E1F36] text-center"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Find answers to common questions about Narratra and our services.
          </p>
        </div>
      </div>
      <FaqSection />
    </motion.div>
  );
};
