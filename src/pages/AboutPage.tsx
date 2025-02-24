import { motion } from "framer-motion";
import { AboutSection } from "../components/AboutSection";
import { Book, Headphones, Users, Globe, Award, Heart } from "lucide-react";

export const AboutPage = () => {
  const backgroundIcons = [
    <Book size={24} />,
    <Headphones size={24} />,
    <Users size={24} />,
    <Globe size={24} />,
    <Award size={24} />,
    <Heart size={24} />,
  ];
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
      <div className="relative bg-gradient-to-b from-[#F5F7FF] to-white py-16 overflow-hidden">
        {backgroundIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-[#3a5ef0]/10"
            initial={{
              x: index % 2 === 0 ? -100 : 100,
              y: Math.random() * 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: [0, 20, 0],
              opacity: 0.5,
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: index * 0.5,
            }}
            style={{
              left: `${(index * 20) % 100}%`,
              top: `${Math.random() * 80}%`,
            }}
          >
            {icon}
          </motion.div>
        ))}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              y: -20,
            }}
            animate={{
              y: 0,
            }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl font-bold mb-6"
              initial={{
                scale: 0.9,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              About <span className="text-[#3a5ef0]">Narratra.</span>
            </motion.h1>
            <motion.div
              className="bg-white p-8 rounded-[2rem] shadow-lg border border-[#3a5ef0]/10"
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Welcome to Narratra, where technology meets tradition to create
                something extraordinary. Our journey began with a simple yet
                powerful vision: to make Sinhala literature available to
                everyone and more fun to interact with. Welcome to the future of
                audiobook listening!{" "}
                <p>
                  Our platform is dedicated to bringing you immersive,
                  AI-generated audiobooks with expressive Sinhala voice
                  narration. Whether you're on the go or at home, our app
                  transforms novels and fiction stories into captivating audio
                  experiences, powered by cutting-edge AI technology.
                </p>
                accessible to everyone, everywhere.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AboutSection />
    </motion.div>
  );
};
