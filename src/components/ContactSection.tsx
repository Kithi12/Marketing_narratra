import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <section id="contact" className="py-20 bg-white">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-[#3a5ef0]/10"
          >
            <h3 className="text-xl font-semibold text-[#1E1F36] mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3a5ef0] focus:border-transparent transition-colors"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3a5ef0] focus:border-transparent transition-colors"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div>
                <textarea
                  {...register("message", {
                    required: true,
                  })}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3a5ef0] focus:border-transparent transition-colors"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#3a5ef0] text-white px-6 py-3 rounded-lg hover:bg-[#2f4ce0] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#3a5ef0]/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.34088613899115!2d79.85361047893493!3d6.899650709094597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259005994ae6f%3A0x79d8b73865f8778d!2sIIT%20City%20Office!5e0!3m2!1sen!2slk!4v1740326544755!5m2!1sen!2slk"
                width="100%"
                height="500"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            <div className="flex justify-center items-center space-x-6">
              <span>You can reach us also with:</span>
              <a
                href="https://www.facebook.com/share/12CepxsiLyv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a5ef0] hover:text-[#2f4ce0] transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a5ef0] hover:text-[#2f4ce0] transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a5ef0] hover:text-[#2f4ce0] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
