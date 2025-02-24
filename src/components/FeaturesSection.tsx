import { motion } from "framer-motion";
import { Headphones, Award, BookOpen, Sparkles } from "lucide-react";
const features = [
  {
    icon: <Headphones size={32} />,
    title: "AI-Generated Narration",
    description:
      "High-quality AI voices bring Sinhala literature to life with natural-sounding narration.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Extensive Library",
    description:
      "Access thousands of Sinhala books across various genres and categories.",
  },
  {
    icon: <Award size={32} />,
    title: "Gamified Rewards",
    description:
      "Earn points and unlock achievements as you listen to more audiobooks.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Smart Recommendations",
    description:
      "Get personalized book suggestions based on your listening history and preferences.",
  },
];
export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our App?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best of Sinhala literature with our feature-rich
            audiobook platform.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
