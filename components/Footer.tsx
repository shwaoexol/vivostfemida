"use client"

import { motion } from "framer-motion";
import { 
    Phone,
    Mail,
    Send,
    Camera
 } from "lucide-react";
import { useTranslation } from "react-i18next";
 
export default function Footer() {
    const { t } = useTranslation();

    const contacts = [
    {
        icon: Phone, 
        title: t("contact_phone"), 
        value: [
            "+998 90 921 63 05",
            "+998 90 818 63 05" 
        ]
    },
    { icon: Mail, title: "Email", value: ["vivostfemida@gmail.com"] },
    { icon: Send, title: "Telegram", value: ["@VIVOST_FEMIDA"] },
    { icon: Camera, title: "Instagram", value: ["@vivost_femida"] }
]

    return (
        <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-20 lg:grid-cols-2">
                {/* Левая колонка */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs uppercase tracking-[8px] text-pink-400">{t("contact_label")}и</span>
                    <h2 className="mt-6 font-serif text-6xl text-white">{t("contact_title")}</h2>
                    
                    <div className="mt-20 space-y-8">
                        {contacts.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <motion.div 
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-6 border-b border-white/10 pb-8"
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                                        <Icon size={24} className="text-pink-400"/>
                                    </div>
                                    
                                    <div>
                                        <p className="text-sm uppercase tracking-[4px] text-amber-300">{contact.title}</p>
                                        <div className="mt-2 space-y-1">
                                            {contact.value.map((line) => (
                                                <p key={line} className="text-2xl text-white">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Правая колонка */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
                >
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-500/40 blur-2xl"/>
                    <span className="text-xs uppercase tracking-[8px] text-pink-400">
                        ✦ {t("contact_consultation_label")}
                    </span>
                    <h3 className="mt-8 font-serif text-5xl leading-tight text-white">{t("contact_consultation_title")}</h3>
                    <p className="mt-8 text-lg leading-9 text-white/70">
                        {t("contact_consultation_text")}
                    </p>
                    
                    <div className="mt-12 space-y-4">
                        <a 
                            href="https://t.me/VIVOST_FEMIDA" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex justify-center rounded-full bg-pink-500 px-8 py-5 text-lg font-semibold uppercase tracking-[3px] text-white transition hover:scale-[1.02]"
                        >
                            {t("contact_telegram_button")}
                        </a>
                        <a 
                            href="mailto:vivostfemida@gmail.com" 
                            className="flex justify-center rounded-full border border-white/20 px-8 py-5 text-lg font-semibold uppercase tracking-[3px] text-white transition hover:bg-white/10"
                        >
                            {t("contact_email_button")}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}