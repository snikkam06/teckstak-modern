"use client";

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Meteors } from '@/components/magicui/meteors';

// Dynamically import the Globe to avoid SSR issues with cobe
const GlobeAnimation = dynamic(() => import('./GlobeAnimation'), { ssr: false });

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      <div className="absolute inset-20 overflow-hidden">
        <Meteors 
          number={20} 
          minDuration={50}
          maxDuration={150}
          angle={215}
          className="opacity-60"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
                Professional Tutoring
              </span>{' '}
              for Students
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              We provide expert tutoring services to help students excel in their studies
              and achieve academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium py-3 px-6 rounded-lg text-center"
              >
                Get Started
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel py-3 px-6 rounded-lg text-center"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px]">
              {/* Larger glowing background, shifted right */}
              <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full filter blur-3xl"></div>
              
              {/* Larger globe, shifted right */}
              <div className="absolute top-[27%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] md:max-w-[450px] aspect-square">
                <GlobeAnimation />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 