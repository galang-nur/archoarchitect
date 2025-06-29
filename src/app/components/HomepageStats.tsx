'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaProjectDiagram, FaUsers, FaHardHat } from "react-icons/fa";

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600; // total ms
    const increment = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
    </span>
  );
};

export default function StatsSection() {
  const stats = [
    {
      title: 'Total Projects',
      value: 600,
      suffix: '+',
      icon: <FaProjectDiagram className="w-12 h-12" />,
    },
    {
      title: 'Total Clients',
      value: 240,
      suffix: '+',
      icon: <FaUsers className="w-12 h-12" />,
    },
    {
      title: 'Reliable Workers',
      value: 186,
      suffix: '',
      icon: <FaHardHat className="w-12 h-12" />,
    },
  ];

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Trusted by Various Business Fields</h2>
          <p className="mt-4 text-gray-400 sm:text-xl">
            Architecture is not just the design of buildings — it’s the way that buildings fit into
            the broader context of their inhabitants’ lives. We are committed to improving the way we
            build, operate, and use buildings.
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-xl bg-gray-800 px-6 py-10 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-teal-400 mb-4">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-teal-400">
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </div>
                <div className="mt-2 text-lg font-medium text-gray-400">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
