import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateScroll = ({ children, animationVariants, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the element comes into view
    threshold: 0.1, // Percentage of visibility required to trigger the animation
    delay: 100, // Debounce delay to prevent excessive re-renders
  });

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateScroll;
