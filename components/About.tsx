"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    BookOpen,
    Scale,
    Globe,
} from "lucide-react";
import { useTranslation } from "react-i18next";



export default function About() {
  const { t } = useTranslation();

  const achievements = [
    {
    icon: GraduationCap,
    text: t("lawyer_achievement1"),
    },
    {
    icon: BookOpen,
    text: t("lawyer_achievement2"),
    },
    {
    icon: Scale,
    text: t("lawyer_achievement3"),
    },
    {
    icon: Globe,
    text: t("lawyer_achievement4"),
    },
];

const stats = [
    {
    value: "6+",
    label: t("about_experience"),
    },
    {
    value: "10+",
    label: t("about_areas"),
    },
    {
    value: "2024",
    label: t("about_foundation"),
    },
    {
    value: "100%",
    label: t("about_confidentiality"),
    },
];

    return ( 
    <section id="about" className="bg-[#f8f5f2] py-32"> 
        <div className="mx-auto max-w-7xl px-6 lg:px-8"> <div className="grid items-center gap-20 lg:grid-cols-2">
{/* Левая колонка */}
         <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        > 
        <span className="text-xs uppercase tracking-[6px] text-[#b04b8c]">{t("about_label")}</span>
        <h2 className="mt-4 font-serif text-5xl leading-tight text-slate-800 lg:text-6xl">
          {t("about_title1")}
          <span className="block italic text-[#3f57a5]">{t("about_title2")}</span>
        </h2>

        <p className="mt-8 leading-8 text-[#667085]">
          {t("about_description1")}
        </p>

        <p className="mt-6 leading-8 text-[#667085]">
          {t("about_description2")}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#35569a]">
                {item.value}
              </div>

              <div className="mt-2 text-sm text-slate-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Правая колонка */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[32px] bg-[#20196d] p-10 text-white shadow-2xl">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white/5" />

        <h3 className="font-serif text-3xl">
          {t("lawyer_name")}
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[4px] text-[#d9b56b]">
          {t("lawyer_position")}
        </p>

        <div className="mt-10 space-y-5">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                  <Icon
                    size={18}
                    className="text-amber-300"
                  />
                </div>

                <span className="text-sm text-white/90">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div
          className="mt-10 rounded-full border border-[#d9b56b] px-6 py-3 text-sm font-medium text-[#d9b56b] transition hover:bg-[#d9b56b] hover:text-[#20196d]">
          {t("outsourcing_support")}
        </div>
      </motion.div>
    </div>
  </div>
</section>
);
}
