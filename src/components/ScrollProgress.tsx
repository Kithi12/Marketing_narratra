import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="scroll-progress-container">
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </div>
  );
};
