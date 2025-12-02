import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/ttslogo.png';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-yellow-400/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <img
                  src={logo}
                  alt="Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  The Tyre Station
                </h3>
                <p className="text-xs text-yellow-400">Pvt Ltd</p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for premium tyres and professional wheel
              services. Quality, performance, and safety in every mile.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-3">
              {[
                {
                  icon: FacebookIcon,
                  href: "https://www.facebook.com/TTSpvtLtd/"
                },
                {
                  icon: InstagramIcon,
                  href: "https://www.instagram.com/thetyrestation/"
                },
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/company/the-tyre-station-pvt-ltd"
                }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/50 flex items-center justify-center text-white/60 hover:text-yellow-400 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              Quick Links
              <span className="ml-3 flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Premium Tyres', path: '/tyres' },
                { name: 'Services', path: '/services' },
                { name: 'Brands', path: '/brands' },
                { name: 'Events', path: '/events' },
                { name: 'Contact Us', path: '/contact' }
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="group flex items-center text-white/60 hover:text-yellow-400 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50 group-hover:bg-yellow-400 mr-3 transition-colors" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              Our Services
              <span className="ml-3 flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent" />
            </h4>
            <ul className="space-y-3">
              {[
                'Wheel Alignment',
                'Wheel Balancing',
                'Tyre Installation',
                'Puncture Repair',
                'Tyre Consultation'
              ].map(service => (
                <li key={service}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="group flex items-center text-white/60 hover:text-yellow-400 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50 group-hover:bg-yellow-400 mr-3 transition-colors" />
                    {service}
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              Contact Us
              <span className="ml-3 flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent" />
            </h4>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="tel:+94713885885"
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-3 text-white/60 hover:text-yellow-400 transition-colors group"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white group-hover:text-yellow-400">
                      24/7 Hotline
                    </p>
                    <p>+94 71 388 5885 / +94 76 599 3823</p>
                  </div>
                </motion.a>
              </li>

              <li>
                <motion.a
                  href="mailto:info@thetyrestation.lk"
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-3 text-white/60 hover:text-yellow-400 transition-colors group"
                >
                  <MailIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white group-hover:text-yellow-400">
                      Email
                    </p>
                    <p>info@thetyrestation.lk</p>
                  </div>
                </motion.a>
              </li>

              <li>
                <div className="flex items-start space-x-3 text-white/60">
                  <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p>
                      278/2 Highlevel Road,
                      <br />
                      Pannipitiya,
                      <br />
                      Sri Lanka, 10230
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-yellow-400/20" />
          </div>
          <div className="relative flex justify-center">
            <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm"
          >
            © {currentYear} The Tyre Station Pvt Ltd. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-white/40 hover:text-yellow-400 text-sm transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
