"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollY, [0, 300], [100, 0]);
  const y2 = useTransform(scrollY, [0, 300], [50, 0]);
  const y3 = useTransform(scrollY, [0, 300], [0, 0]);
  const y4 = useTransform(scrollY, [0, 300], [50, 0]);
  const y5 = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <Section id="hero" className="min-h-[100vh] w-full overflow-hidden">
      <main className="mx-auto pt-16 sm:pt-24 md:pt-32 text-center relative px-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 4.5, height: "80vh" }}
            animate={{ scale: 1, height: "10vh" }}
            transition={{
              scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
            }}
            className="mb-16 relative z-20"
            style={{ transformOrigin: "top" }}
          >
            <div className="bg-primary text-white text-xl font-bold p-4 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md">
              <Icons.logo className="w-auto h-[40px]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute inset-0 top-20 z-10"
          >
            {siteConfig.name}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
            className="text-5xl font-bold mb-4 tracking-tighter"
          >
            {siteConfig.description}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
            className="max-w-2xl mx-auto text-xl mb-4 font-medium text-balance"
          >
            Award-Winning Multi-Business Leader | CEO of D'Organica Garden Shoppee | MD of Jaishuk & Skanda Expertise LLP
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: easeInOutCubic }}
            className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-center"
          >
            <div className="p-4">
              <div className="text-3xl font-bold text-primary">2000+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Garden Projects</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary">Top 150</div>
              <div className="text-sm text-muted-foreground">SME Globally</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary">25+ Years</div>
              <div className="text-sm text-muted-foreground">Excellence</div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none">
          <motion.img
            src="/jayashri.jpg"
            alt="Jayashri Krishnan"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 object-cover rounded-2xl"
          />
          <motion.img
            src="/jayashri-2.jpg"
            alt="Jayashri Krishnan"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y2 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 object-cover rounded-2xl"
          />
          <motion.img
            src="/jayashri-3.jpg"
            alt="Jayashri Krishnan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ y: y3 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 object-cover rounded-2xl"
          />
          <motion.img
            src="/during-session.jpg"
            alt="Training Session"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y4 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 object-cover rounded-2xl"
          />
          <motion.img
            src="/during-session-1.jpg"
            alt="Training Session"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y5 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 object-cover rounded-2xl"
          />
        </div>
      </main>
    </Section>
  );
}
