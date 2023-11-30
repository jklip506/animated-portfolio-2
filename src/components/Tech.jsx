import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Programming Languages & Frameworks Learning.</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>TECHNICAL EXPERIENCE.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <motion.div
            className="w-28 h-28 flex flex-col justify-center items-center"
            key={technology.name}
            whileHover={{ scale: 1.1 }}
            variants={fadeIn()}
          >
            <BallCanvas icon={technology.icon} />
            <div>{technology.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
