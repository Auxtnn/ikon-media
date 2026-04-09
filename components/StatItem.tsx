import { motion, Variants } from "framer-motion";
import { useCountUp } from "./Count";

type StatItemProps = {
  value: number;
  suffix: string;
  label: string;
  index: number;
  inView: boolean;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export const StatItem = ({
  value,
  suffix,
  label,
  index,
  inView,
}: StatItemProps) => {
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <p className="font-heading text-3xl sm:text-4xl font-bold text-[#000000] mb-1">
        {count}
        {suffix}
      </p>
      <p className="font-label text-[10px] sm:text-xs uppercase tracking-widest text-[#434842] font-bold">
        {label}
      </p>
    </motion.div>
  );
};
