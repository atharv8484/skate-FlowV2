/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  Zap,
  CheckCircle2
} from "lucide-react";

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-12">
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-lime-400 font-bold tracking-widest uppercase text-sm block mb-2"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold text-white"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-lime-400 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Zap className="text-lime-400 group-hover:scale-110 transition-transform" size={28} fill="currentColor" />
          <span className="font-black text-2xl uppercase tracking-tighter italic">Skate Flow</span>
        </div>
        <div className="hidden md:flex gap-10 font-bold uppercase text-[10px] tracking-[0.2em] text-neutral-400">
          <a href="#programs" className="hover:text-lime-400 transition-colors">Programs</a>
          <a href="#details" className="hover:text-lime-400 transition-colors">Schedule</a>
          <a href="#instructors" className="hover:text-lime-400 transition-colors">Instructors</a>
          <a href="#safety" className="hover:text-lime-400 transition-colors">Safety</a>
        </div>
        <button
          onClick={scrollToContact}
          className="bg-lime-400 text-black px-6 py-2.5 font-black uppercase text-xs hover:bg-white transition-colors"
        >
          Join Academy
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="bg-lime-400/10 text-lime-400 border border-lime-400/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
              Admissions Open for May Batch
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight uppercase mb-8">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Flow</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-md leading-relaxed">
              Professional training in wave board control and balancing for young spirits. Limited to 5 students per batch.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-black text-lg px-8 py-4 font-black uppercase hover:bg-lime-400 transition-all flex items-center gap-3 group"
            >
              Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:-ml-12"
          >
            <div className="absolute -inset-4 bg-lime-400/10 blur-3xl rounded-full"></div>
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1000&auto=format&fit=crop"
                alt="Skateboard Detail"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <span className="text-lime-400 font-black text-3xl italic uppercase tracking-tighter">Ride the street</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Programs & Pricing */}
      <section id="programs" className="py-24 bg-neutral-900/50 border-y border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader title="Our Programs" subtitle="Training Path" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-neutral-900 border border-white/10 p-10 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 blur-3xl"></div>
              <div className="bg-lime-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-lime-400/20">
                <Zap className="text-lime-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Wave Board Mastery</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Focus on board control, dynamic balancing, and sharp turns. Specifically designed for mastering movement in tighter city areas.
              </p>
              <div className="text-4xl font-black text-white">₹ 1,000 <span className="text-base text-neutral-500 font-medium tracking-normal">/ Month</span></div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-neutral-900 border border-white/10 p-10 rounded-2xl relative overflow-hidden"
            >
              <div className="bg-blue-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-blue-400/20">
                <Users className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Gear Focus</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Have your own specific type of skates? Bring them in. We provide specialized guidance tailored to your chosen equipment.
              </p>
              <div className="text-4xl font-black text-white">₹ 1,000 <span className="text-base text-neutral-500 font-medium tracking-normal">/ Month</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details (Schedule + Loc + Requirements) */}
      <section id="details" className="py-24 max-w-7xl mx-auto px-6 md:px-12 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-neutral-900 rounded-2xl border border-white/10">
              <Calendar className="text-lime-400 mb-4" size={32} />
              <h4 className="text-lg font-bold mb-1 uppercase tracking-wider">Start Date</h4>
              <p className="text-3xl font-black">MAY 11, 2026</p>
            </div>
            <div className="p-8 bg-neutral-900 rounded-2xl border border-white/10">
              <Clock className="text-lime-400 mb-4" size={32} />
              <h4 className="text-lg font-bold mb-1 uppercase tracking-wider">Timing</h4>
              <p className="text-3xl font-black">8:00 - 9:00 PM</p>
            </div>
            <div className="p-8 bg-neutral-900 rounded-2xl border border-white/10">
              <MapPin className="text-lime-400 mb-4" size={32} />
              <h4 className="text-lg font-bold mb-1 uppercase tracking-wider">Place</h4>
              <p className="text-3xl font-black">Jagdamba Chowk Nutan Nagar </p>
            </div>
            <div className="p-8 bg-lime-400 text-black rounded-2xl">
              <Users className="mb-4" size={32} />
              <h4 className="text-lg font-black mb-1 uppercase tracking-wider">Batch Size</h4>
              <p className="text-3xl font-black uppercase">Max 5 Students</p>
              <p className="mt-2 font-bold text-black/60 italic text-sm">Ages under 13 only</p>
            </div>
          </div>
          <div className="bg-neutral-900 border border-white/10 p-10 rounded-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Why Small Batches?</h3>
            <div className="space-y-4">
              {[
                "Personalized coaching",
                "Higher safety focus",
                "Faster skill acquisition",
                "Direct instructor feedback"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-lime-400" />
                  <span className="text-neutral-300 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-24 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm block mb-4">Security Policy</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-8 italic">Your Child's Safety <br /> Is Our Ground Rule</h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-6">
              We maintain a zero-compromise safety environment. Every session is supervised by trained instructors focusing both on skill and situational awareness.
            </p>
            <p className="text-lg font-bold text-black/80 flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" />
              100% Supervised & Safe Training Environment
            </p>
          </div>
        </div>
      </section>

      {/* Instructors */}
      {/* Instructors */}
      <section id="instructors" className="py-24 max-w-7xl mx-auto px-6 md:px-12 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-lime-400 font-bold tracking-widest uppercase text-xs block mb-2">Team leaders</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">The Mentors</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl group flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-lime-400/20 mb-6 group-hover:border-lime-400 transition-colors">
              <img
                src="/atharv.jpg"
                alt="Atharv Mahajan"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">Atharv Mahajan</h3>
            {/* <p className="text-neutral-500 text-xs font-bold uppercase mt-1">Lead Instructor</p> */}
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl group flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-blue-400/20 mb-6 group-hover:border-blue-400 transition-colors">
              <img
                src="/manoj.jpg"
                alt="Manoj Mahajan"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">Manoj Mahajan</h3>
            {/* <p className="text-neutral-500 text-xs font-bold uppercase mt-1">Technical Head</p> */}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-32 bg-neutral-900 border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader title="Join the Flow" subtitle="Contact Information" />
              <p className="text-xl text-neutral-400 mb-12">
                Enrollment is first-come, first-served. Reach out to secure one of the 5 available spots for the upcoming May batch.
              </p>
              <div className="space-y-8">
                <a href="tel:+91920149747" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lime-400 transition-colors">
                    <Phone className="text-white group-hover:text-black transition-colors" size={24} />
                  </div>
                  <span className="text-2xl md:text-3xl font-black tracking-tight">+91 920149747</span>
                </a>
                <a href="mailto:official.atharvmahajan8004@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lime-400 transition-colors">
                    <Mail className="text-white group-hover:text-black transition-colors" size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-black tracking-tight break-all">official.atharvmahajan8004@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1544933863-482c39c104a2?q=80&w=800&auto=format&fit=crop"
                alt="Skate Action"
                className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                <span className="text-lime-400 font-black text-6xl md:text-8xl opacity-10 rotate-12">SKATE</span>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
            <span className="font-black italic uppercase text-lg tracking-tighter">Skate Flow Academy</span>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Crafted for the future of urban skating</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
