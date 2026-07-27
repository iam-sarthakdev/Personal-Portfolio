import React, { useState } from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { FaLinkedinIn, FaGithub, FaCode, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.8rem,10vw,140px)] leading-none tracking-tight mb-16">
            Get In Touch
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <FadeIn delay={0.1} y={30}>
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold text-2xl mb-3">Let&apos;s build something great together.</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  I&apos;m currently open to Software Engineering roles, Backend System Design opportunities, and algorithm-heavy projects.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 uppercase tracking-widest block">Email</span>
                    <a href="mailto:work.sarthak17@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                      work.sarthak17@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 uppercase tracking-widest block">Location</span>
                    <span className="text-white font-medium">Delhi NCR, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-xs text-white/50 uppercase tracking-widest block mb-4">Connect On Socials</span>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sarthak-kanoi/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href="https://github.com/iam-sarthakdev"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://codeforces.com/profile/Sarthak1712"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all"
                  >
                    <FaCode size={20} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Interactive Form */}
          <FadeIn delay={0.2} y={30}>
            <form onSubmit={handleSubmit} className="bg-[#121212] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
              <div>
                <label className="text-xs text-white/60 uppercase tracking-wider block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-white/60 uppercase tracking-wider block mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-white/60 uppercase tracking-wider block mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Sarthak, let's talk about..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02] active:scale-98"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  {submitted ? "Message Sent! 🎉" : "Send Message"}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>

        {/* Footer Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-white/40 uppercase tracking-widest flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Sarthak Kanoi &bull; Software Engineer</span>
          <span>Designed with High-Craft Precision &bull; React & Tailwind</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
