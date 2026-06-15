"use client";

import { motion } from "framer-motion";
import { GraduationCap, Lock, Lightbulb, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyUs() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: GraduationCap,
      title: t("why_professionalism_title"),
      description: t("why_professionalism_desc"),
    },
    {
      icon: Lock,
      title: t("why_confidentiality_title"),
      description: t("why_confidentiality_desc"),
    },
    {
      icon: Lightbulb,
      title: t("why_approach_title"),
      description: t("why_approach_desc"),
    },
    {
      icon: TrendingUp,
      title: t("why_risks_title"),
      description: t("why_risks_desc"),
    },
  ];

  return (
    <section id="why" className="bg-[#0d2b66] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
         
          <span className="text-sm font-medium uppercase tracking-[0.35em] text-[#cc4b7c]">
            {t("why_label")}
          </span>

          
          <h2 className="mt-6 font-serif text-4xl font-light tracking-wide text-white sm:text-5xl lg:text-6xl">
            {t("why_title1")}{" "}
            <span className="italic text-white/50">
              {t("why_title2")}?
            </span>
          </h2>
        </motion.div>

        {/* Advantages Grid */}
        <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-[32px] bg-white p-6 shadow-xl transition-all duration-300 sm:p-8"
              >
                
                <div className="mx-auto flex h-16 w-full max-w-[180px] items-center justify-center rounded-full bg-[#f4eef4] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={26} className="text-[#35569a]" />
                </div>

                
                <h3 className="mt-8 text-center text-lg font-bold tracking-wide text-[#0d234d]">
                  {item.title}
                </h3>

                
                <p className="mt-4 text-center text-xs font-light leading-6 text-[#4a5568] opacity-90">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}