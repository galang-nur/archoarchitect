'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 1000;
    const increment = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span className="text-5xl font-bold text-white mb-4" ref={ref}>{count.toLocaleString()}+</span>;
};

export default AnimatedCounter;
