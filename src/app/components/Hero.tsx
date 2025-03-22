"use client";

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import the Globe to avoid SSR issues with cobe
const GlobeAnimation = dynamic(() => import('./GlobeAnimation'), { ssr: false });

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center">
      <div className="section-container">
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
            className="relative"
          >
            <div className="relative flex items-center justify-center h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
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