import { motion } from "framer-motion";

const Card = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileInView="hover"
      viewport={{
        margin: "0px 0px -400px 0px",
      }}
      className="max-w-[72rem] bg-transparent overflow-hidden cursor-pointer group relative"
    >
      <div className="p-4 px-8 relative z-20 h-full text-background group-hover:text-white transition-colors duration-500 flex flex-col justify-end">
        <div className="relative flex flex-col h-full justify-between">
          <h4 className="border-b-4 border-primary" aria-label={heading}>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p className="text-shadow text-sm font-medium text-background/60 md:text-xl lg:text-2xl mt-6">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] sm:h-[42px] lg:h-[52px] font-semibold text-2xl sm:text-4xl lg:text-5xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-56%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span className="text-shadow-sm">{letter}</span>
        <span className="text-shadow-sm">{letter}</span>
      </motion.span>
    </div>
  );
};

export default Card;
