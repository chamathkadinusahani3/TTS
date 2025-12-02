import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, MessageCircleIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ttslogo.png';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tyres', path: '/tyres' },
    { name: 'Services', path: '/services' },
    { name: 'Brands', path: '/brands' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-yellow-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" onClick={handleLinkClick}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div>
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-tight">
                    The Tyre Station
                  </h1>
                  <p className="text-xs text-yellow-400">Pvt Ltd</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(item => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative group"
                  >
                    <span
                      className={`font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-yellow-400'
                          : 'text-white/80 hover:text-yellow-400'
                      }`}
                    >
                      {item.name}
                    </span>

                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 shadow-[0_0_10px_rgba(255,215,0,0.8)] ${
                        isActive(item.path)
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20 transition-all"
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="font-semibold">Hotline</span>
              </motion.a>

              <Link to="/contact" onClick={handleLinkClick}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(255,215,0,0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:shadow-[0_0_40px_rgba(255,215,0,0.8)] transition-all"
                >
                  <MessageCircleIcon className="w-4 h-4" />
                  <span>Inquiry</span>
                </motion.div>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center text-yellow-400"
              >
                <MenuIcon className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Mobile Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-yellow-400/20 z-[70] md:hidden overflow-y-auto"
            >
              <div className="p-6">

                {/* Close Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.6)]">
                      <span className="text-black font-bold text-lg">TS</span>
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white">
                        The Tyre Station
                      </h2>
                      <p className="text-xs text-yellow-400">Pvt Ltd</p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg bg-white/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400"
                  >
                    <XIcon className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="space-y-2 mb-8">
                  {navLinks.map((item, index) => (
                    <Link key={item.path} to={item.path} onClick={handleLinkClick}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative px-4 py-3 rounded-lg transition-all ${
                          isActive(item.path)
                            ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/50'
                            : 'bg-white/5 border border-transparent hover:border-yellow-400/30'
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            isActive(item.path) ? 'text-yellow-400' : 'text-white'
                          }`}
                        >
                          {item.name}
                        </span>

                        {isActive(item.path) && (
                          <motion.div
                            layoutId="mobile-active-indicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-yellow-400 rounded-r-full shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                          />
                        )}
                      </motion.div>
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="space-y-3">
                  <motion.a
                    href="tel:+1234567890"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 font-semibold"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Call Hotline</span>
                  </motion.a>

                  <Link to="/contact" onClick={handleLinkClick}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                    >
                      <MessageCircleIcon className="w-5 h-5" />
                      <span>Send Inquiry</span>
                    </motion.div>
                  </Link>
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-yellow-400/20"
                >
                  <p className="text-white/60 text-sm mb-3">Contact Us</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-white">+1 234 567 8900</p>
                    <p className="text-white/70">info@tyrestation.com</p>
                    <p className="text-white/70">Mon-Sat: 8AM - 8PM</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
