import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-[#1E1F36] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo & Description */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Link to="/" className="inline-block mb-4">
              <span className="inline-block bg-white px-4 py-2 rounded-lg text-lg font-medium group-hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#3a5ef0]">
                <img
                  src="./images/Logo/site_logo2.png"
                  alt="narratra."
                  className="w-40 h-15 object-contain"
                />
              </span>
            </Link>
            <p className="text-gray-400">
              Bringing Sinhala literature to life through immersive audio
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/5 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-[#3a5ef0]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: "About",
                  path: "/about",
                },
                {
                  name: "Features",
                  path: "/features",
                },
                {
                  name: "FAQ",
                  path: "/faq",
                },
                {
                  name: "Contact",
                  path: "/contact",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#3a5ef0] transition-colors duration-300 flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="md:w-1/5 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-[#3a5ef0]">Legal</h4>
            <ul className="space-y-3">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Copyright Notice",
                "Cookie Policy",
                "Licensing",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/legal/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-[#3a5ef0] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-[#3a5ef0]">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+94112345678"
                className="flex items-center text-gray-400 hover:text-[#3a5ef0] transition-colors duration-300"
              >
                <FiPhone size={16} className="mr-3 text-[#3a5ef0]" />
                +94 11 234 5678
              </a>
              <a
                href="mailto:contact@narratra.com"
                className="flex items-center text-gray-400 hover:text-[#3a5ef0] transition-colors duration-300"
              >
                <FiMail size={16} className="mr-3 text-[#3a5ef0]" />
                contact@narratra.com
              </a>
              <p className="flex items-center text-gray-400">
                <FiMapPin size={16} className="mr-3 text-[#3a5ef0]" />
                No.10, Liyanage Road, Dehiwala
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:w-1/5">
            <h4 className="text-lg font-semibold mb-4 text-[#3a5ef0]">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaFacebookF size={20} />,
                  url: "https://www.facebook.com/share/12CepxsiLyv/",
                },
                {
                  icon: <FaXTwitter size={20} />,
                  url: "https://twitter.com",
                },
                {
                  icon: <FaInstagram size={20} />,
                  url: "https://instagram.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3a5ef0]/10 p-3 rounded-full text-[#3a5ef0] hover:bg-[#3a5ef0] hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Narratra. Audio, All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
