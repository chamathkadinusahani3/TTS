import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ZapIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Light Rays */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30 mb-8"
        >
          <ZapIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 font-semibold text-sm">
            Premium Performance Tyres
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
        >
          Premium Tyres for
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
            Power, Grip & Control
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl sm:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light"
        >
          Drive safer, stronger, smarter with premium tyres engineered for
          performance
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* View Tyres */}
<Link to="/tyres">
  <motion.div
    whileHover={{
      scale: 1.05,
      boxShadow: '0 0 40px rgba(255,215,0,0.8)',
    }}
    whileTap={{ scale: 0.95 }}
    className="group px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 
               text-black font-bold text-lg shadow-[0_0_30px_rgba(255,215,0,0.6)] 
               hover:shadow-[0_0_50px_rgba(255,215,0,1)] transition-all 
               flex items-center space-x-2 cursor-pointer"
  >
    <span>View Tyres</span>
    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </motion.div>
</Link>


          {/* Send Inquiry → Contact Page */}
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-yellow-400/50 text-yellow-400 font-bold text-lg hover:bg-yellow-400/20 transition-all cursor-pointer"
            >
              Send Inquiry
            </motion.div>
          </Link>
        </motion.div>

        {/* Tyre Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-20 relative"
        >
          <motion.div
            animate={{ rotateY: [0, 10, 0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative w-64 h-64 mx-auto"
            style={{ perspective: 1000 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1606016159991-7f3c0bb7d42f?w=400&q=80"
              alt="Premium Tyre"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.5,
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-yellow-400/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
