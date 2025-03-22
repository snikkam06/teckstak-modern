"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const universities = [
    { name: 'Purdue University' },
    { name: 'A&M University' },
    { name: 'UTSA' },
    { name: 'And more!' },
  ];

  return (
    <section id="about-us" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-panel p-1 rounded-2xl overflow-hidden">
              <div className="aspect-video relative bg-gradient-to-tr from-blue-600 to-emerald-600 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-medium">
                  Image Placeholder
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-white/80 mb-6">
              Teckstak is dedicated to providing high-quality tutoring services to help university 
              students excel in their academic pursuits. Our team of expert tutors specializes in 
              various subjects and is committed to helping students achieve their full potential.
            </p>
            <p className="text-white/80 mb-8">
              We work with students from prestigious universities around the world, providing 
              personalized tutoring sessions that cater to individual learning styles and needs.
            </p>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">We work with students from:</h4>
              <div className="grid grid-cols-2 gap-4">
                {universities.map((uni, index) => (
                  <motion.div
                    key={uni.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="glass-panel p-4 text-center"
                  >
                    {uni.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 