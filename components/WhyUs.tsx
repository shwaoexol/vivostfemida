"use client";

import { motion } from "framer-motion";
import { GraduationCap, Lock, Lightbulb, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";



export default function WhyUs() {
    const { t } = useTranslation();

    const advantages = [
    { icon: GraduationCap, text: t("why_professionalism_title"), description: t("why_professionalism_desc") },
    { icon: Lock, text: t("why_confidentiality_title"), description: t("why_confidentiality_desc") },
    { icon: Lightbulb, text: t("why_approach_title"), description: t("why_approach_desc") },
    { icon: TrendingUp, text: t("why_risks_title"), description: t("why_risks_desc") }
];

    return (
        <section>  
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mt-6 text-2xl text-[#b04b8c]">
                {t("why_label")}
                <h2 className="mt-6 font-serif text-5xl text-[#0d234d] lg:text-7xl">
                    {t("why_title1")}
                    <span className="ml-3 italic text-[#35569a]">{t("why_title2")}?</span>
                </h2>
            </motion.div>

            <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {advantages.map((item, index) => {  
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.text}  
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[32px] border border-[#edf8] bg-white p-8 shadow-sm transition-all">  
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="mx-auto flex h-24 items-center justify-center rounded-full bg-[#f5eef5]">
                                <Icon size={34} className="text-[#35569a]" />
                            </motion.div>
                            <h3 className="mt-8 text-center text-2xl font-semibold text-[#0d234d]">{item.text}</h3>  
                            <p className="mt-6 text-center leading-8 text-[#667085]">{item.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}