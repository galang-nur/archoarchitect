// app/components/StatsSection.jsx
'use client';

import { motion } from 'framer-motion';
import { FaAward, FaGlobe, FaLeaf, FaBuilding, FaUsers, FaUserTie } from 'react-icons/fa';
import Link from 'next/link';

const StatsSection = () => {
  // Animasi untuk container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };



  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView="show"
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6"
            animate={{ 
              boxShadow: ['0 0 0 0 rgba(45, 212, 191, 0.1)', '0 0 0 10px rgba(45, 212, 191, 0)', '0 0 0 0 rgba(45, 212, 191, 0)'],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 3
            }}
          >
            <span className="h-2 w-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-teal-400">Trusted Worldwide</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building <span className="text-teal-400">Tomorrow&apos;s</span> Landscapes
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Architecture transcends mere structures—it&apos;s the art of integrating spaces into the fabric of human experience. We&apos;re pioneering sustainable solutions that redefine how we design, construct, and inhabit our environments.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Projects Card */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:shadow-teal-500/10 transition-all"
            
            whileHover="hover"
            
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">
                <FaBuilding className="text-3xl text-teal-400" />
              </div>
              
              <motion.div 
                className="text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                600+
              </motion.div>
              
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Completed Projects</h3>
              
              <motion.div 
                className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mb-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="h-full bg-teal-500" style={{ width: '100%' }}></div>
              </motion.div>
              
              <p className="text-gray-400 text-center">
                From skyscrapers to sustainable homes, our portfolio spans diverse architectural challenges.
              </p>
            </div>
          </motion.div>
          
          {/* Clients Card */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:shadow-teal-500/10 transition-all"
            whileHover="hover"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">
                <FaUsers className="text-3xl text-teal-400" />
              </div>
              
              <motion.div 
                className="text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                240+
              </motion.div>
              
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Global Clients</h3>
              
              <motion.div 
                className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mb-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <div className="h-full bg-teal-500" style={{ width: '100%' }}></div>
              </motion.div>
              
              <p className="text-gray-400 text-center">
                Serving clients across 5 continents with tailored architectural solutions.
              </p>
            </div>
          </motion.div>
          
          {/* Team Card */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:shadow-teal-500/10 transition-all"
            whileHover="hover"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">
                <FaUserTie className="text-3xl text-teal-400" />
              </div>
              
              <motion.div 
                className="text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                186
              </motion.div>
              
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Expert Team</h3>
              
              <motion.div 
                className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mb-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                <div className="h-full bg-teal-500" style={{ width: '100%' }}></div>
              </motion.div>
              
              <p className="text-gray-400 text-center">
                Award-winning architects, designers, and engineers collaborating worldwide.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <Link href="/works" className="cursor-pointer">
            <motion.button 
              className="cursor-pointer px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900 font-bold text-lg transition-all group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Portfolio
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </motion.button>
          </Link>
          
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center">
              <FaAward className="text-teal-400 mr-2 text-xl" />
              <span>5x Award Winning</span>
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-teal-400 mr-2 text-xl" />
              <span>International Presence</span>
            </div>
            <div className="flex items-center">
              <FaLeaf className="text-teal-400 mr-2 text-xl" />
              <span>Sustainable Designs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;