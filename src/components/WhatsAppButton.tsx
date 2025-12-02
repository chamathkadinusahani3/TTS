import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
export function WhatsAppButton() {
  return <motion.a href="https://wa.me/94713885885" target="_blank" rel="noopener noreferrer" initial={{
    scale: 0
  }} animate={{
    scale: 1
  }} transition={{
    delay: 1,
    type: 'spring'
  }} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }} className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all group">
      <MessageCircleIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />

      {/* Pulse Animation */}
      <motion.div animate={{
      scale: [1, 1.3, 1],
      opacity: [0.5, 0, 0.5]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }} className="absolute inset-0 rounded-full bg-green-400" />
    </motion.a>;
}