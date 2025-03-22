"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { WordRotate } from '@/components/magicui/word-rotate';

const About = () => {
  const subjects = ["SAT", "Java", "Math", "Science", "and More"];

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
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <Image
                  src="/campus.jpg"
                  alt="Campus"
                  fill
                  className="object-cover"
                  priority
                />
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
              <h4 className="text-xl font-semibold mb-4">We provide tutoring for:</h4>
              <div className="glass-panel p-3 px-4 text-center inline-flex justify-center items-center transition-all duration-500 ease-in-out min-w-[150px]">
                <div className="text-3xl md:text-4xl font-bold">
                  <WordRotate words={subjects} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 