import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function ContactSection() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    vehicle: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ------------------------------
  // ⭐ AUTO-FILL TYRE NAME HERE
  // ------------------------------
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tyreFromURL = params.get("tyre");

    if (tyreFromURL) {
      setFormData(prev => ({
        ...prev,
        vehicle: tyreFromURL
      }));
    }
  }, [location]);
  // ------------------------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const web3formsData = {
        access_key: '8f3c7e2d-4b5a-4c9e-8f1a-2d3e4f5a6b7c',
        name: formData.name,
        email: 'chamathkadinusahani3@gmail.com',
        phone: formData.contact,
        subject: `New Tyre Inquiry from ${formData.name}`,
        message: `
Name: ${formData.name}
Contact Number: ${formData.contact}
Vehicle/Tyre Size: ${formData.vehicle || 'Not specified'}

Message:
${formData.message}
        `.trim(),
        from_name: 'The Tyre Station Website',
        replyto: formData.contact
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(web3formsData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');

        setTimeout(() => {
          setFormData({
            name: '',
            contact: '',
            vehicle: '',
            message: ''
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}Touch
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Send us your inquiry and we'll get back to you promptly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20">

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <SendIcon className="w-6 h-6 text-yellow-400" />
                  <span>Send Inquiry</span>
                </h3>

                {/* Success & Error */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center space-x-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <p className="text-green-400 font-semibold">
                      Inquiry sent successfully! We'll contact you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center space-x-3"
                  >
                    <AlertCircleIcon className="w-5 h-5 text-red-400" />
                    <p className="text-red-400 font-semibold">
                      Failed to send inquiry. Please try again or call us.
                    </p>
                  </motion.div>
                )}

                <div className="space-y-4">

                  {/* Name */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all disabled:opacity-50"
                      placeholder="+94 77 123 4567"
                    />
                  </div>

                  {/* Vehicle / Tyre Size */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Vehicle / Tyre Type
                    </label>
                    <input
                      type="text"
                      value={formData.vehicle}
                      onChange={(e) =>
                        setFormData({ ...formData, vehicle: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all disabled:opacity-50"
                      placeholder="e.g., 205/55 R16"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all resize-none disabled:opacity-50"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:shadow-[0_0_50px_rgba(255,215,0,1)] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <SendIcon className="w-5 h-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </motion.button>

                </div>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Right side - unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Hotline */}
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.02 }}
              className="block p-6 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-xl border border-yellow-400/50 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.6)]">
                  <PhoneIcon className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold mb-1">24/7 Hotline</p>
                  <p className="text-2xl font-bold text-white">+94 71 388 5885/+94 765 993 823</p>
                </div>
              </div>
            </motion.a>

            {/* Location & Hours */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 space-y-6">

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <p className="text-white/60">
                    278/2 Highlevel Road<br />Pannipitiya,<br />Sri Lanka ,10230 
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Opening Hours</h4>
                  <p className="text-white/60">
                    Mon - Fri: 8:30 AM - 5:30 PM<br />
                    Saturday: 8:30 AM - 1:30 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Map Placeholder */}
            {/* Google Map */}
<div className="relative h-64 rounded-2xl overflow-hidden border border-yellow-400/20">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6952194261798!2d79.95575759839475!3d6.843708800000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251709435de77%3A0xd8388600f217a04d!2sTHE%20TYRE%20STATION%20PVT%20LTD!5e0!3m2!1sen!2slk!4v1764571381348!5m2!1sen!2slk"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


          </motion.div>
        </div>

      </div>
    </section>
  );
}
