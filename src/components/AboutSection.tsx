import { motion } from "framer-motion";
import { Book, Rocket, Star, Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Savinu Gunarathne",
    role: "Team Leader & ",
    image: "./images/savinu.jpg",
    bio: "Visionary leader with 10+ years in tech",
    social: {
      linkedin: "https://www.linkedin.com/in/savinu-gunaratne-a77015218/",
      github: "https://github.com/savinuonline",
    },
  },
  {
    name: "Kithmina Kaluarachchi",
    role: "Project Manager and Backend Developer",
    image: "./images/kithmina.jpg",
    bio: "Literature expert specializing in Sinhala classics",
    social: {
      linkedin: "www.linkedin.com/in/kithmina-k1000",
      github: "https://github.com/Kithi12",
    },
  },
  {
    name: "Senuth Damjaya",
    role: "Tech Lead",
    image: "./images/senuth.jpg",
    bio: "Full-stack developer with AI expertise",
    social: {
      linkedin: "https://www.linkedin.com/in/senuth-damjaya-464a50294/",
      github: "https://github.com/Senuu01",
    },
  },
  {
    name: "Mashinee Maleesha",
    role: "UX Designer",
    image: "./images/mashi.jpg",
    bio: "Creating intuitive user experiences",
    social: {
      linkedin: "https://www.linkedin.com/in/mashinee-maleesha-438961320/",
      github: "https://github.com/MashineeMaleesha",
    },
  },
  {
    name: "Shakeel Peterson",
    role: "Audio Engineer",
    image: "./images/shakeel.jpg",
    bio: "Expert in audio processing and quality",
    social: {
      linkedin: "https://www.linkedin.com/in/shakeel0825/",
      github: "https://github.com/ShakeelPeterson",
    },
  },
  {
    name: "Geilee Gehara",
    role: "Marketing Lead",
    image: "images/geilee.jpg",
    bio: "Digital marketing specialist",
    social: {
      linkedin: "https://www.linkedin.com/in/geilee-gehara-894698331/",
      github: "https://github.com/GeileeGehara",
    },
  },
];
const journeySteps = [
  {
    year: "2024 - September",
    title: "The Spark",
    icon: <Book className="text-[#3a5ef0]" size={32} />,
    description:
      "Born from a passion to preserve and share Sinhala literature, we envisioned a platform that would bridge the gap between traditional literature and modern technology.",
    achievements: [
      "Initial concept development",
      "Market research",
      "Team formation",
    ],
  },
  {
    year: "2024 - December",
    title: "The Journey Begins",
    icon: <Rocket className="text-[#3a5ef0]" size={32} />,
    description:
      "Development kicked off with a focus on creating the perfect listening experience. Our team worked tirelessly to build a platform that would do justice to these timeless works.",
    achievements: [
      "Platform development",
      "AI voice technology development",
      "Beta testing",
    ],
  },
  {
    year: "2025 - March",
    title: "Taking Flight",
    icon: <Star className="text-[#3a5ef0]" size={32} />,
    description:
      "Successfully launched with an overwhelming response from our community. Reached milestone after milestone, growing our library and user base.",
    achievements: ["Official launch", "100+ audiobooks", "Daily active users"],
  },
];
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
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
          <h2 className="text-3xl font-bold text-[#1E1F36] mb-6">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Narratra. was born from a passion to make Sinhala literature
            accessible to everyone. Our mission is to preserve and promote
            Sinhala literature through technology while making it convenient for
            modern audiences to enjoy these timeless works.
          </p>
        </motion.div>
        {/* Journey Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-[#1E1F36] mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#3a5ef0]/20 transform -translate-x-1/2" />
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.year}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`relative flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 w-8 h-8 bg-[#3a5ef0] rounded-full transform -translate-x-1/2"
                    whileHover={{
                      scale: 1.2,
                    }}
                  />
                  {/* Content */}
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-4 mb-4 justify-center">
                        {step.icon}
                        <div>
                          <div className="text-[#3a5ef0] font-bold text-xl">
                            {step.year}
                          </div>
                          <h4 className="text-[#1E1F36] font-semibold">
                            {step.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <Star size={12} className="text-[#3a5ef0]" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-[#1E1F36] mb-12">
            Meet Our Fantastic Team!!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
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
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-[30%_20%] w-full h-80 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-semibold text-[#1E1F36] group-hover:text-[#3a5ef0] transition-colors">
                      {member.name}
                    </h4>
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077b5] hover:text-[#3a5ef0] transition-colors duration-300"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-[#3a5ef0] transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-[#3a5ef0] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
