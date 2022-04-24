import React, { FC } from "react";
import { motion } from "framer-motion";
interface Props {
  children: JSX.Element,
}

export const AnimationPage: FC<Props> = ({ children }) => {
    const animation={
        initial: {
            // y: 100,
            // x: 100,
            // opacity: .3,
        },
        animate: {
            // opacity: 1,
            // scale:[.5,1],
        },
        exit: {
            // opacity: 0,
            // y: -100,
            // x: 100,
        },
    }
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        duration: .5,
       }}
    >
      {children}
    </motion.div>
  );
};
