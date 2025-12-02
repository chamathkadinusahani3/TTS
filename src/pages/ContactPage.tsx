import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../components/ContactSection';
export function ContactPage() {
  return <div className="min-h-screen bg-black pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div animate={{
          opacity: [0.1, 0.2, 0.1]
        }} transition={{
          duration: 5,
          repeat: Infinity
        }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30 mb-8">
            <span className="text-yellow-400 font-semibold text-sm">
              We're Here to Help
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Touch
            </span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-xl text-white/70 max-w-3xl mx-auto">
            Have questions about our tyres or services? Send us a message and
            our team will get back to you promptly.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ContactSection />
    </div>;
}