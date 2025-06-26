'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mery Orion',
    description:
      'A futuristic residential complex characterized by sleek lines, large glass panels, and minimalist design.',
    image: '/project-1.jpg',
  },
  {
    title: 'Weilberg Co.',
    description:
      'The Weilberg Co. headquarters stands as a testament to sustainable architecture.',
    image: '/project-2.jpg',
  },
  {
    title: 'Hipsum Mansion',
    description:
      'The interior boasts high ceilings, chandeliers, and luxurious finishes.',
    image: '/project-3.jpg',
  },
  {
    title: 'Curabitur Arcu',
    description:
      'Curabitur Arcu, a modern mansion, prioritizes functionality and comfort.',
    image: '/project-4.jpg',
  },
  {
    title: 'Zen Garden',
    description:
      'Tranquil pathways lead to meditation pavilions, inviting visitors to find inner peace.',
    image: '/project-5.jpg',
  },
  {
    title: 'Fujioka Hall',
    description: 'Fujioka Hall pays homage to traditional Japanese architecture.',
    image: '/project-6.jpg',
  },
];

export default function WorksPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-teal-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Highlighted Works
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-600/30 transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-teal-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
