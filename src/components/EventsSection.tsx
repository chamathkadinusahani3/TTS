import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, TagIcon, ArrowRightIcon, ClockIcon } from 'lucide-react';
const events = [{
  id: 1,
  title: 'Summer Tyre Sale',
  category: 'Promotion',
  date: '2024-06-15',
  endDate: '2024-07-15',
  time: 'All Day',
  description: 'Get up to 30% off on premium summer tyres from leading brands. Limited stock available.',
  image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  featured: true
}, {
  id: 2,
  title: 'Michelin Product Launch',
  category: 'Launch',
  date: '2024-06-20',
  time: '10:00 AM',
  description: 'Be the first to experience the new Michelin Pilot Sport 5 series. Test drives available.',
  image: 'https://images.unsplash.com/photo-1606016159991-7f3c0bb7d42f?w=800&q=80',
  featured: true
}, {
  id: 3,
  title: 'Tyre Maintenance Workshop',
  category: 'Workshop',
  date: '2024-06-25',
  time: '2:00 PM - 5:00 PM',
  description: 'Free workshop on tyre care, pressure monitoring, and extending tyre life. Expert tips included.',
  image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  featured: false
}, {
  id: 4,
  title: 'Buy 3 Get 1 Free',
  category: 'Promotion',
  date: '2024-07-01',
  endDate: '2024-07-31',
  time: 'All Day',
  description: 'Special offer on selected tyre brands. Purchase 3 tyres and get the 4th absolutely free.',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  featured: false
}, {
  id: 5,
  title: 'Performance Tyre Showcase',
  category: 'Launch',
  date: '2024-07-10',
  time: '11:00 AM',
  description: 'Discover the latest high-performance tyres from Pirelli, Continental, and Bridgestone.',
  image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
  featured: false
}, {
  id: 6,
  title: 'Wheel Alignment Clinic',
  category: 'Workshop',
  date: '2024-07-18',
  time: '9:00 AM - 12:00 PM',
  description: 'Learn about proper wheel alignment and its impact on tyre wear. Free alignment check included.',
  image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  featured: false
}];
const categories = ['All', 'Promotion', 'Launch', 'Workshop'];
const categoryColors = {
  Promotion: 'from-yellow-400 to-yellow-600',
  Launch: 'from-blue-400 to-blue-600',
  Workshop: 'from-green-400 to-green-600'
};
export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredEvents = selectedCategory === 'All' ? events : events.filter(event => event.category === selectedCategory);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  return <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div animate={{
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 6,
        repeat: Infinity
      }} className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

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
      }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Upcoming
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Events
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Stay updated with our latest promotions, product launches, and
            educational workshops
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => <motion.button key={category} onClick={() => setSelectedCategory(category)} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className={`px-6 py-2.5 rounded-full font-semibold transition-all ${selectedCategory === category ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-[0_0_20px_rgba(255,215,0,0.5)]' : 'bg-white/5 backdrop-blur-sm border border-yellow-400/20 text-white/70 hover:border-yellow-400/50 hover:text-yellow-400'}`}>
              {category}
            </motion.button>)}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => <motion.div key={event.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -8
        }} className="group relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div whileHover={{
                scale: 1.1
              }} transition={{
                duration: 0.6
              }} className="absolute inset-0">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[event.category as keyof typeof categoryColors]} text-white text-xs font-bold shadow-lg`}>
                      {event.category}
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-black/80 backdrop-blur-sm border border-yellow-400/30">
                    <div className="flex items-center space-x-2 text-yellow-400">
                      <CalendarIcon className="w-4 h-4" />
                      <span className="text-sm font-bold">
                        {formatDate(event.date)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-white/60 text-sm mb-3">
                    <ClockIcon className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {event.endDate && <div className="flex items-center space-x-2 text-yellow-400 text-sm mb-4">
                      <TagIcon className="w-4 h-4" />
                      <span>Valid until {formatDate(event.endDate)}</span>
                    </div>}

                  {/* CTA Button */}
                  <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all">
                    <span>
                      {event.category === 'Workshop' ? 'Register Now' : 'Learn More'}
                    </span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Featured Glow */}
                {event.featured && <motion.div animate={{
              opacity: [0.2, 0.4, 0.2]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }} className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl pointer-events-none" />}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}