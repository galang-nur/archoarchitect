'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DescriptionProfile() {
  return (
    <section className="bg-gradient-to-t from-gray-900 to-gray-950 text-zinc-100">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 gap-8">
                {/* Gambar */}
                <motion.div
                className="relative z-10 lg:py-16"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                <div className="relative h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden">
                    <Image
                    alt="Modern architecture"
                    src="/lance-anderson-QdAAasrZhdk-unsplash.jpg"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                    width={4000}
                    height={4000}
                    priority
                    />
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-brightness-75" />
                </div>
                </motion.div>

                {/* Konten */}
                <motion.div
                className="relative flex items-center bg-gray-800 rounded-lg shadow-xl"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.4 }}
                >
                <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-400">
                    A Legacy of Innovation and Excellence
                    </h2>

                    <p className="mt-4 text-zinc-300 leading-relaxed">
                    Since its inception in 2006, Archo Architecture has been at the forefront of the
                    architectural landscape, shaping skylines and inspiring communities worldwide.
                    </p>

                    <Link
                    href="/"
                    className="mt-8 inline-block rounded border border-teal-500 bg-teal-500 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                    Get in Touch
                    </Link>
                </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
