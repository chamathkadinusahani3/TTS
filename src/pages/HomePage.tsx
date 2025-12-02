import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HomePage() {
  return <div className="min-h-screen bg-black">
      <HeroSection />

      {/* Quick Links Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Explore Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {' '}
                Services
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[{
            title: 'Premium Tyres',
            path: '/tyres',
            description: 'Browse our collection'
          }, {
            title: 'Services',
            path: '/services',
            description: 'Expert care'
          }, {
            title: 'Brands',
            path: '/brands',
            description: 'Trusted partners'
          }, {
            title: 'Events',
            path: '/events',
            description: 'Latest promotions'
          }, {
            title: 'Contact',
            path: '/contact',
            description: 'Get in touch'
          }].map((item, index) => <motion.div key={item.path} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Link to={item.path}>
                  <motion.div whileHover={{
                y: -8,
                scale: 1.02
              }} className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all h-full">
                    <motion.div initial={{
                  opacity: 0
                }} whileHover={{
                  opacity: 0.3
                }} className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl" />

                    <h3 className="relative text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="relative text-white/60 mb-4">
                      {item.description}
                    </p>

                    <div className="relative flex items-center text-yellow-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn more</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
}