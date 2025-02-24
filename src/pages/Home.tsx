import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Headphones, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { AudioCard } from "../components/AudioCard";
import { Waves } from "../components/ui/waves-background";
export const Home = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Vast Library",
      description: "Access thousands of Sinhala books instantly",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Premium Audio",
      description: "High-quality narration and sound effects",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Personalized",
      description: "Get recommendations based on your interests",
    },
  ];
  const statistics = [
    {
      number: "50,000+",
      label: "Active Users",
    },
    {
      number: "100+",
      label: "Audio Books",
    },
    {
      number: "4.8/5",
      label: "User Feedback",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#F8F9FF] to-white overflow-hidden">
        {/* Background Blobs and Waves */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-[#3a5ef0]/5 rounded-full blur-3xl animate-blob top-1/4 -left-48"></div>
          <div className="absolute w-96 h-96 bg-[#5E3BEE]/5 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 -right-48"></div>
          <div className="absolute w-96 h-96 bg-[#3a5ef0]/5 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-1/4 left-1/2"></div>
        </div>
        <Waves
          lineColor="rgba(58, 94, 240, 0.07)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.005}
          waveAmpX={30}
          waveAmpY={15}
          xGap={20}
          yGap={40}
          className="absolute inset-0"
        />
        {/* Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
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
                duration: 0.8,
              }}
              className="lg:w-1/2 text-center lg:text-left -mt-20"
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
                Your Favorite Books with
                <span className="text-[#3a5ef0]"> Narratra.</span>
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
                className="text-xl text-gray-600 mb-8"
              >
                Experience Sinhala literature with humanlike expressive
                audiobooks.
                <p>
                  <strong> Listen anywhere, anytime.</strong>
                </p>
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
                  className="group bg-[#3a5ef0] text-white px-8 py-3 rounded-full border border-[#2f4ce0] shadow-md hover:shadow-[0px_0px_15px_#ece8fc] hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Download Now</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/features"
                  className="px-8 py-3 rounded-full text-[#3a5ef0] relative flex items-center justify-center transition-all duration-300 group"
                >
                  <span className="text-l">Learn More</span>
                  <ArrowRight className="ml-2 w-7 h-4 transition-transform transform group-hover:scale-150 group-hover:text-[#3a5ef0]" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="lg:w-1/2 flex justify-center mt-20"
            >
              <AudioCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FF]">
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
            <h2 className="text-3xl font-bold text-[#1E1F36] mb-4">
              Why we are the best?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Wait.. let me show you why we are the best!!
            </p>
            <Link
              to="/features"
              className="inline-flex items-center px-6 py-2 text-[#3a5ef0] hover:text-white border-2 border-[#3a5ef0] hover:bg-[#3a5ef0] rounded-full transition-all duration-300"
            >
              View All Features
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#3a5ef0]/5 border border-transparent hover:border-[#3a5ef0]/20"
              >
                <div className="text-[#3a5ef0] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1E1F36] mb-2 group-hover:text-[#3a5ef0] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#1E1F36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {statistics.map((stat, index) => (
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
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                className="text-white"
              >
                <div className="text-4xl font-bold text-[#3a5ef0] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#1E1F36] mb-6">
              Still not convinced?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Give us a go...We know you'll like it.It's <strong>free</strong>{" "}
              by the way
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of already satisfied users enjoying their favorite
              Sinhala books with{" "}
              <span className="text-[#3a5ef0]">Narratra.</span>
            </p>
            <Link
              to="/download"
              className="inline-flex items-center px-8 py-4 bg-[#3a5ef0] text-white rounded-full hover:bg-[#2f4ce0] transition-colors"
            >
              Fine.. I'll get it
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
