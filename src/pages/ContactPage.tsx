import { motion } from "framer-motion";
import { ContactSection } from "../components/ContactSection";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
export const ContactPage = () => {
  const businessHours = [
    {
      day: "Monday - Friday",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      day: "Saturday",
      hours: "10:00 AM - 4:00 PM",
    },
    {
      day: "Sunday",
      hours: "Closed",
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
      className="pt-32 min-h-screen bg-[#F5F7FF]"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-[#3a5ef0]/10 rounded-full blur-3xl animate-blob top-1/4 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[#5E3BEE]/10 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 -right-48"></div>
        <div className="absolute w-96 h-96 bg-[#3a5ef0]/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-1/4 left-1/2"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{
              y: -20,
            }}
            animate={{
              y: 0,
            }}
            className="text-4xl font-bold text-[#1E1F36] text-center mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the following
            channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#1E1F36] mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:contact@narratra.com"
                  className="flex items-center space-x-4 text-gray-600 hover:text-[#3a5ef0] transition-colors"
                >
                  <Mail className="text-[#3a5ef0]" />
                  <span>contact@narratra.com</span>
                </a>
                <a
                  href="tel:+94112345678"
                  className="flex items-center space-x-4 text-gray-600 hover:text-[#3a5ef0] transition-colors"
                >
                  <Phone className="text-[#3a5ef0]" />
                  <span>+94 71 118 7267</span>
                </a>
                <div className="flex items-center space-x-4 text-gray-600">
                  <MapPin className="text-[#3a5ef0]" />
                  <span>No.10, Liyanage Road, Dehiwala</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#1E1F36] mb-6 flex items-center">
                <Clock className="mr-2 text-[#3a5ef0]" />
                Business Hours
              </h2>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-600"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bg-white py-20">
          <ContactSection />
        </div>
      </div>
    </motion.div>
  );
};
