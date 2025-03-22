"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50"
    >
      <div className="glass-panel mx-4 my-4 md:mx-8 px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
          Teckstak
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar; 