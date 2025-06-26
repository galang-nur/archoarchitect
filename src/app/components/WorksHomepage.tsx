"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {FaSuitcase } from "react-icons/fa"

export default function WorksHomepage() {
  return (
    <div className="relative bg-gray-900">
        <section className="px-4 py-16 mx-auto bg-gray-900 text-gray-100 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col w-full mb-12 lg:justify-between lg:flex-row">
            <motion.div
            className="flex items-center mb-8 group lg:max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <a href="/works" aria-label="Item" className="mr-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-900/20 text-teal-400">
                <FaSuitcase className="w-6 h-6" />
                </div>
            </a>
            <div>
                <h2 className="text-3xl font-bold leading-none sm:text-4xl">
                <span className="inline-block mb-2 text-white">Our Works</span>
                <div className="h-1 w-full bg-teal-400 origin-left transform scale-x-30 group-hover:scale-x-100 transition-transform duration-300"></div>
                </h2>
            </div>
            </motion.div>

            <p className="w-full text-gray-400 lg:text-sm lg:max-w-md">
            Here are several architectural projects that we have worked on with dedication and creativity. Each of our designs combines beautiful aesthetics with practical functionality.
            </p>
        </div>

        <div className="grid gap-10 mb-10 lg:grid-cols-3">
            {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
            >
                <Image
                width={1920}
                height={1080}
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-56 mb-4 rounded-lg shadow-lg shadow-black/40 md:h-64 xl:h-80"
                />
                <p className="mb-2 text-xl font-bold text-white">{project.title}</p>
                <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
            ))}
        </div>

        <div className="text-center mt-12">
            <Link
            href="/works"
            className="relative inline-block px-6 py-2 font-medium group border border-teal-400"
            >
            <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform scale-0 bg-teal-400 group-hover:scale-100 origin-left"></span>
            <span className="relative text-teal-400 group-hover:text-gray-900 text-sm transition-colors duration-300">
                See more
            </span>
            </Link>
        </div>
        </section>
    </div>
  )
}

const projects = [
  {
    title: "Mery Orion",
    description: "A futuristic residential complex characterized by sleek lines, large glass panels, and minimalist design.",
    image: "/project-1.jpg",
  },
  {
    title: "Weilberg Co.",
    description: "The Weilberg Co. headquarters stands as a testament to sustainable architecture.",
    image: "/project-2.jpg",
  },
  {
    title: "Hipsum Mansion",
    description: "The interior boasts high ceilings, chandeliers, and luxurious finishes.",
    image: "/project-3.jpg",
  },
  {
    title: "Curabitur Arcu",
    description: "Curabitur Arcu, a modern mansion, prioritizes functionality and comfort.",
    image: "/project-4.jpg",
  },
  {
    title: "Zen Garden",
    description: "Tranquil pathways lead to meditation pavilions, inviting visitors to find inner peace.",
    image: "/project-5.jpg",
  },
  {
    title: "Fujioka Hall",
    description: "Fujioka Hall pays homage to traditional Japanese architecture.",
    image: "/project-6.jpg",
  },
]
