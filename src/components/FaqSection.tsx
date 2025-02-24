import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question: "How do I get started with Narratra.?",
    answer:
      "Download the app from your device's app store, create a free account, and start exploring our vast collection of Sinhala audiobooks. New users get a 30-day free trial of our premium features.",
  },
  {
    question: "Is there a free version of Narratra.",
    answer:
      "Yes! we offer a free version where you can listen to selected audiobooks with occasional ads. You can upgrade to premium for an ad-free ",
  },
  {
    question: "What's included in the premium subscription?",
    answer:
      "Premium subscribers get unlimited access to our entire library, offline listening, high-quality audio, no advertisements, and exclusive content. They also get early access to new releases.",
  },
  {
    question: "Can I download audiobooks for offline listening?",
    answer:
      "Yes, premium users can download any audiobook for offline listening. This feature is perfect for when you're traveling or in areas with limited internet connectivity.",
  },
  {
    question: "Does the app support background playback?",
    answer:
      "Yes, you can listen to audiobooks while using other apps or even when your screen is off, making it perfect for multitasking.If you have a premium membership",
  },
  {
    question: "How is the audio quality?",
    answer:
      "We provide high-quality audio (320kbps) for all our content. Our AI narration technology and professional voice artists ensure clear, natural-sounding narration.",
  },
  {
    question: "Can I request a specific audiobook to be added?",
    answer:
      "Yes! If there's a Sinhala book you'd love to hear in audio format, you can submit a request through our app or website, and we'll do our best to add it.",
  },
  {
    question: "How often is new content added?",
    answer:
      "We add new audiobooks weekly, including both classic literature and contemporary works. Our team works with publishers and authors to bring you the latest Sinhala books in audio format.",
  },
  {
    question: "What devices can I use to listen?",
    answer:
      "Our app is available on iOS and Android devices. You can also access your audiobooks through our web player on any desktop or laptop computer.",
  },
  {
    question: "Can I share my account with family members?",
    answer:
      "We offer family plans that allow up to 6 family members to share a premium subscription, each with their own personal profile and preferences.",
  },
  {
    question:
      "What happens to my downloaded books if I cancel my subscription?",
    answer:
      "Downloaded books are available only while your subscription is active. Once you cancel, you'll lose access to downloaded content at the end of your billing period.",
  },
  {
    question: "Is there a desktop version available?",
    answer:
      "No.Currently we only support mobile devices.But we hope to add desktop support soon",
  },
  {
    question: "Do you offer student discounts?",
    answer:
      "Yes, we offer special discounts for students with valid student ID. Contact our support team for more information.",
  },
];
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F7FF] to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: index * 0.1,
                },
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3a5ef0]/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-semibold text-[#1E1F36] text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                  }}
                >
                  <ChevronDown className="text-[#3a5ef0] w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          type: "spring",
                          damping: 20,
                          stiffness: 100,
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          type: "spring",
                          damping: 20,
                          stiffness: 200,
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      },
                    }}
                    className="overflow-hidden bg-[#F5F7FF]"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
