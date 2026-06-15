"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-r from-[#0d2b66] via-[#274a91] to-[#4b6cb7] px-4 pt-32 pb-20 sm:px-6 lg:px-8"
    >
      <div className="absolute right-0 top-1/4 hidden h-[350px] w-[350px] rounded-full bg-amber-300/10 blur-[120px] lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-12 lg:gap-10">
        
        <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-amber-300" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200 sm:text-[11px] sm:tracking-[0.3em]">
              {t("law_firm_founded")}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl font-light leading-none tracking-[0.08em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]"
          >
            VIVOST
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-2 font-serif text-4xl font-light leading-none tracking-[0.06em] text-amber-300 sm:text-5xl md:text-6xl lg:text-[6.5rem]"
            style={{
              WebkitTextStroke: "1px rgba(252, 211, 77, 0.6)",
              textShadow: "0 0 25px rgba(252, 211, 77, 0.15)",
            }}
          >
            FEMIDA
          </motion.h2>

          <div className="my-8 h-[2px] w-24 bg-gradient-to-r from-pink-500 via-amber-300 to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="max-w-xl space-y-3 text-white/90"
          >
            <p className="text-base font-light sm:text-lg">
              {t("about_subtitle")}
            </p>
            <p className="text-base font-medium text-white sm:text-lg">
              {t("about_tags")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="w-full rounded-full bg-gradient-to-r from-[#cc4b7c] to-[#b33966] px-8 py-4 text-center text-xs font-medium uppercase tracking-wider text-white shadow-[0_0_25px_rgba(204,75,124,0.4)] transition hover:from-[#e05a8f] hover:to-[#c74475] sm:w-auto"
            >
              {t("main_button")}
            </a>

            <a
              href="#services"
              className="w-full rounded-full border border-white/30 bg-white/5 px-8 py-4 text-center text-xs font-medium uppercase tracking-wider text-white transition hover:bg-white/10 sm:w-auto"
            >
              {t("services_title1")} {t("services_title2")}
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="mx-auto w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_20px_50px_rgba(13,43,102,0.25)] backdrop-blur-2xl sm:p-8"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400">
              <span className="font-serif text-2xl font-bold text-white">
                VV
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-serif text-2xl text-white">
                {t("lawyer_name1")}
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-amber-300">
                {t("lawyer_position")}
              </p>
            </div>

            <ul className="mb-8 space-y-4 text-sm text-white/90">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span>{t("lawyer_achievement1")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span>{t("lawyer_achievement2")}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span>{t("lawyer_achievement3")}</span>
              </li>
            </ul>

            <div className="rounded-xl border border-amber-300/30 bg-amber-300/5 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-amber-300">
                ✦ {t("lawyer_achievement4")}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}