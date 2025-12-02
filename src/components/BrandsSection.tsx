import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
const brands = [{
  name: 'Kinto',
  url: 'https://kinto-tyres.lk/'
}, {
  name: 'Kapsen',
  url: 'https://www.facebook.com/p/Kapsen-Tyres-Sri-Lanka-100067097928973/'
}, {
  name: 'Tracmax',
  url: 'https://www.facebook.com/p/Tracmax-Sri-Lanka-100089991192907/'
}, {
  name: 'Eagle Pro',
  url: 'https://www.eagleprotools.com/'
}, {
  name: 'Landspider',
  url: 'https://landspidertire.com/landspider/index.html'
}, {
  name: 'Yokohama',
  url: 'https://www.yokohamatire.com/'
}, {
  name: 'Hauvrex',
  url: 'http://www.hauvrex.com/'
}];
export function BrandsSection() {
  return <section id="brands" className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Trusted
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Brands
            </span>
          </h2>
          <p className="text-xl text-white/60">
            Premium tyres from world-leading manufacturers
          </p>
        </motion.div>

        {/* Scrolling Brand Strip */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div animate={{
            x: [0, -1920]
          }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }} className="flex space-x-16">
              {/* First Set */}
              {brands.map((brand, index) => <motion.a key={`${brand.name}-1-${index}`} href={brand.url} target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1
            }} className="group flex-shrink-0">
                  <div className="relative px-12 py-8 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                    <motion.div initial={{
                  opacity: 0
                }} whileHover={{
                  opacity: 0.2
                }} className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl blur-xl" />
                    <div className="relative flex items-center space-x-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors whitespace-nowrap">
                        {brand.name}
                      </h3>
                      <ExternalLinkIcon className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Glowing Underline */}
                    <motion.div initial={{
                  width: 0
                }} whileHover={{
                  width: '100%'
                }} className="absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                  </div>
                </motion.a>)}
              {/* Second Set (Duplicate for seamless loop) */}
              {brands.map((brand, index) => <motion.a key={`${brand.name}-2-${index}`} href={brand.url} target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1
            }} className="group flex-shrink-0">
                  <div className="relative px-12 py-8 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                    <motion.div initial={{
                  opacity: 0
                }} whileHover={{
                  opacity: 0.2
                }} className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl blur-xl" />
                    <div className="relative flex items-center space-x-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors whitespace-nowrap">
                        {brand.name}
                      </h3>
                      <ExternalLinkIcon className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <motion.div initial={{
                  width: 0
                }} whileHover={{
                  width: '100%'
                }} className="absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                  </div>
                </motion.a>)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}