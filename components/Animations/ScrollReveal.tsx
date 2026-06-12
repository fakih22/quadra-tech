'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  id?: string;
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  id
}: ScrollRevealProps) {
  
  // Define animation variants based on direction
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: direction === 'none' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number], // Custom smooth ease
      }
    }
  };

  return (
    <motion.div
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
    >
      {children}
    </motion.div>
  );
}
