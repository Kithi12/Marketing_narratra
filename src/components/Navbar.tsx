import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Features",
      to: "/features",
    },
    {
      title: "FAQ",
      to: "/faq",
    },
    {
      title: "Contact",
      to: "/contact",
    },
    {
      title: "Get it Now",
      to: "/download",
      icon: <Download size={18} className="inline ml-1" />,
      isButton: true,
    },
  ];
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-[#F5F7FF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-white px-2.5 py-1 rounded-full text-lg font-medium group-hover:scale-105 transition-transform duration-300 group-hover:shadow-[0_0_15px_#3a5ef0]">
                {/* Desktop logo */}
                <img
                  src="./images/Logo/site_logo2.png"
                  alt="narratra."
                  className="w-40 h-15 object-contain hidden md:block"
                />
                {/* Mobile logo */}
                <img
                  src="images/Favicon/android-chrome-512x512.png"
                  alt="narratra."
                  className="w-20 h-12 object-contain md:hidden" // Adjust size as needed
                />
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative group ${
                  item.isButton
                    ? "bg-[#3a5ef0] text-white px-5 py-2 rounded-lg border border-[#2f4ce0] shadow-md transition-all duration-300 hover:bg-transparent hover:text-[#3a5ef0] hover:border-[#3a5ef0] hover:shadow-[0px_0px_15px_#e1e6fa] hover:scale-105"
                    : `text-gray-600 hover:text-[#3a5ef0] transition-colors duration-300 ${
                        isActive(item.to) &&
                        "text-[#3a5ef0] font-medium after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#3a5ef0] after:mt-0.5"
                      }`
                }`}
              >
                <span className="flex items-center">
                  {item.title}
                  {item.icon}
                </span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-2 ${
                    item.isButton
                      ? "bg-[#3a5ef0] text-white rounded-lg"
                      : "text-gray-600 hover:text-[#3a5ef0]"
                  } transition-colors duration-300`}
                >
                  {item.title}
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
