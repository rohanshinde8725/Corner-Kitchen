import { motion } from "framer-motion";

const variants = {
  up: { opacity: 0, y: 80 },
  down: { opacity: 0, y: -80 },
  left: { opacity: 0, x: -80 },
  right: { opacity: 0, x: 80 },
  zoom: { opacity: 0, scale: 0.8 },
};

const FadeUp = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
}) => {
  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration, delay }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;