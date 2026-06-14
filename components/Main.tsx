"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";



export default function Main() {
  const { t } = useTranslation();
  return (
    /* БЕКГРАУНД: Тот самый оригинальный светлый градиент из первого макета */
    <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#0d2b66] via-[#274a91] to-[#4b6cb7] px-4 py-16 sm:px-8 md:px-16 lg:px-24">
      
      {/* Декоративное световое пятно за карточкой, чтобы добавить глубины */}
      <div className="absolute right-10 top-1/4 h-[350px] w-[350px] rounded-full bg-amber-300/10 blur-[100px] pointer-events-none hidden lg:block" />

      {/* Двухколоночная сетка */}
      <div className="relative z-10 grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
        
        {/* ЛЕВЫЙ БЛОК: Заголовки, слоган и кнопки (7 колонок) */}
        <div className="flex flex-col items-start text-left lg:col-span-7">
          
          {/* Декоративная линия и дата */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-amber-300" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-amber-200">
              {t("law_firm_founded")}
            </span>
          </div>

          {/* Главный заголовок VIVOST */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl font-light tracking-[0.08em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-none"
          >
            VIVOST
          </motion.h1>

          {/* Текстовый логотип FEMIDA с золотым контуром */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-2 font-serif text-5xl font-light tracking-[0.06em] text-amber-300 sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-none"
            style={{
              WebkitTextStroke: "1px rgba(252, 211, 77, 0.6)",
              textShadow: "0 0 25px rgba(252, 211, 77, 0.15)"
            }}
          >
            FEMIDA
          </motion.h2>

          {/* Яркая градиентная полоса-разделитель */}
          <div className="my-8 h-[2px] w-24 bg-gradient-to-r from-pink-500 via-amber-300 to-transparent" />

          {/* Текст описания */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-2 text-base tracking-wide text-white/90 sm:text-lg"
          >
            <p className="font-light">
              {t("about_subtitle")}
            </p>
            <p className="font-medium text-white">
              {t("about_tags")}
            </p>
          </motion.div>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:w-full sm:flex-row sm:items-center lg:w-auto"
          >
            <a
              href="#contact"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#cc4b7c] to-[#b33966] px-8 py-4 text-center font-medium text-white transition duration-300 hover:from-[#e05a8f] hover:to-[#c74475] shadow-[0_0_25px_rgba(204,75,124,0.4)] whitespace-nowrap uppercase tracking-wider text-xs"
            >
              {t("main_button")}
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-center text-xs font-medium uppercase tracking-wider text-white transition duration-300 hover:bg-white/10 whitespace-nowrap"
            >
              {t("services_title1")} {t("services_title2")}
            </a>
          </motion.div>
        </div>

       
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            
            className="w-full max-w-[400px] rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_20px_50px_rgba(13,43,102,0.2)] backdrop-blur-2xl"
          >
          
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 shadow-md">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                {t("VV")}
              </span>
            </div>

         
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-normal tracking-wide text-white">
                {t("lawyer_name1")}
              </h3>
              <p className="mt-1 text-[11px] font-medium tracking-[0.2em] uppercase text-amber-300">
                {t("lawyer_position")}
              </p>
            </div>

           
            <ul className="mb-8 space-y-4 text-sm font-light tracking-wide text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
                <span>{t("lawyer_achievement1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
                <span>{t("lawyer_achievement2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
                <span>{t("lawyer_achievement3")}</span>
              </li>
            </ul>

     
            <div className="rounded-xl border border-amber-300/30 bg-amber-300/5 p-4 text-center">
              <p className="text-xs font-medium tracking-wider text-amber-300 uppercase">
                ✦ {t("lawyer_achievement4")}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}