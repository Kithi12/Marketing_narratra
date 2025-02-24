import { motion } from "framer-motion";
import {
  BookOpen,
  Headphones,
  Star,
  Clock,
  Bookmark,
  Download,
  Share2,
  Heart,
  Glasses,
  UserPlus,
  Check,
} from "lucide-react";
export const FeaturesPage = () => {
  const features = [
    {
      icon: <Headphones size={32} />,
      title: "AI-Generated Narration",
      description:
        "Listen to high quality human like voices narrating your favorite books with expressions like a human being.",
    },
    {
      icon: <UserPlus size={32} />,
      title: "Subscription Plans",
      description:
        "Subscription plans to suit all your needs, Whether you are a free to use customer or a customer who likes to pay more to get the more features.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Extensive Library",
      description:
        "We got access to thousands of Sinhala books across various genres and categories.",
    },
    {
      icon: <Star size={32} />,
      title: "Personalized Experience",
      description:
        "Get recommendations based on your reading history and preferences.",
    },
    {
      icon: <Clock size={32} />,
      title: "Sleep Timer",
      description:
        "Set custom timers to automatically pause playback when you want to rest. Whether it be at the end of a chapter or end of the day when you are going to sleep.",
    },
    {
      icon: <Bookmark size={32} />,
      title: "Smart Bookmarking",
      description:
        "Mark your favorite passages and easily pickup from where you last left off.",
    },
    {
      icon: <Download size={32} />,
      title: "Offline Listening",
      description:
        "Download your audiobooks and listen even without an internet connection. (*Premium subscription required)",
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Sharing",
      description:
        "Share your favorite books and passages with friends and family.",
    },
    {
      icon: <Heart size={32} />,
      title: "Curated Collections",
      description:
        "Discover hand-picked collections of books based on themes and genres.",
    },
    {
      icon: <Glasses size={32} />,
      title: "Personalized Recommendation",
      description:
        "Audiobooks will be recommended to you baased on your listening patterns and the preferences you selected when signing up for the platform.",
    },
  ];
  const pricingPlans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for casual listeners",
      features: [
        "Access to selected audiobooks",
        "Basic audio quality",
        "Ad-supported listening",
        "Mobile app access",
        "Basic recommendations",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: "499",
      description: "Most popular choice",
      features: [
        "Unlimited access to all audiobooks",
        "High-quality audio (320kbps)",
        "Ad-free experience",
        "Offline listening",
        "Advanced recommendations",
        "Multiple voice options",
        "Priority access to new releases",
      ],
      highlighted: true,
    },
    {
      name: "Family",
      price: "1299",
      description: "Best value for families",
      features: [
        "Everything in Premium",
        "Up to 6 family accounts",
        "Family dashboard",
        "Parental controls",
        "Shared playlists",
        "Family audiobook recommendations",
      ],
      highlighted: false,
    },
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
      <div className="bg-gradient-to-b from-[#F8F9FF] to-white py-12">
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
            <h3 className="text-l text-[#1E1F36] mb-4">
              So You're interested..huh!!
            </h3>
            <h1 className="text-4xl font-bold text-[#1E1F36] mb-4">
              Now let's see what makes{" "}
              <span className="text-[#3a5ef0]">Narratra.</span>{" "}
              <p>
                <span className="text-l font-bold">so special.</span>
              </p>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover all the powerful features that make Narratra the perfect
              companion for your audio journey.
            </p>
          </motion.div>
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
              delay: 0.2,
            }}
            className="bg-white rounded-2xl shadow-xl border border-[#3a5ef0]/10 p-8"
          >
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="group p-6 rounded-xl bg-[#F8F9FF] hover:bg-[#3a5ef0] transition-all duration-300 border border-[#3a5ef0]/10 hover:border-transparent"
                >
                  <div className="text-[#3a5ef0] group-hover:text-white transition-colors mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E1F36] group-hover:text-white transition-colors mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

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
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your listening needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-[#3a5ef0] text-white shadow-xl scale-105 border-2 border-[#3a5ef0]"
                    : "bg-white text-[#1E1F36] border border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3a5ef0] text-white px-4 py-1 rounded-full text-sm font-medium border-2 border-white">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3
                    className={`text-xl font-bold ${
                      plan.highlighted ? "text-white" : "text-[#1E1F36]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4 mb-2">
                    <span className="text-3xl font-bold">Rs.{plan.price}</span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 ${
                          plan.highlighted ? "text-white" : "text-[#3a5ef0]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-white text-[#3a5ef0] hover:bg-gray-50"
                      : "bg-[#3a5ef0] text-white hover:bg-[#2f4ce0]"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
