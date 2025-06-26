'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-image.jpg"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        priority
      />

      {/* Overlay + Content */}
      <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-teal-400 leading-tight">
              Design with Purpose, Build with Vision.
            </h1>
            <p className="text-gray-300 mt-6 text-lg max-w-xl">
              We don&apos;t just design spaces—we shape experiences. Timeless architecture that tells your story.
            </p>
            <a
              href="/profile"
              className="inline-block mt-8 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded transition"
            >
              About Us
            </a>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Stay in the Loop
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white rounded font-medium transition"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-400 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
