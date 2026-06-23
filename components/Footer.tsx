"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Send,
  Camera,
  Megaphone,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: Phone,
      title: t("contact_phone"),
      value: ["+998 90 921 63 05", "+998 90 818 63 05"],
      links: ["tel:+998909216305", "tel:+998908186305"],
    },
    {
      icon: Mail,
      title: t("contact_email"),
      value: ["vivostfemida@gmail.com"],
      links: ["mailto:vivostfemida@gmail.com"],
    },
    {
      icon: Send,
      title: t("contact_telegram"),
      value: ["@VIVOST_FEMIDA"],
      links: ["https://t.me/VIVOST_FEMIDA"],
    },
    {
      icon: Megaphone,
      title: t("contact_channel"),
      value: ["@VivostFemida"],
      links: ["https://t.me/VivostFemida_law"],
    },
    {
      icon: Camera,
      title: t("contact_instagram"),
      value: ["@vivost_femida"],
      links: ["https://instagram.com/vivost_femida"],
    },
  ];

  return (
    <section id="contact" className="relative w-full py-20 bg-[#0d2b66]"> 
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2">

          {/* Контакты */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-[#cc4b7c]">
              {t("contact_label")}
            </span>

            <h2 className="mt-6 font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
              {t("contact_title")}
            </h2>

            <div className="mt-12 space-y-6 sm:mt-16">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 border-b border-white/10 pb-6"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <Icon
                        size={22}
                        className="text-[#cc4b7c]"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
                        {contact.title}
                      </p>

                      <div className="mt-2 space-y-1">
                        {contact.value.map((line, idx) => (
                          <a
                            key={idx}
                            href={contact.links[idx]}
                            target={
                              contact.links[idx].startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              contact.links[idx].startsWith("http")
                                ? "noreferrer"
                                : undefined
                            }
                            className="block text-lg text-white transition-colors hover:text-amber-200 sm:text-xl"
                          >
                            {line}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 lg:p-12"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-500/40 blur-2xl" />

            <span className="text-xs uppercase tracking-[0.35em] text-pink-400">
              ✦ {t("contact_consultation_label")}
            </span>

            <h3 className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {t("contact_consultation_title")}
            </h3>

            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              {t("contact_consultation_text")}
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://t.me/VIVOST_FEMIDA"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center rounded-full bg-gradient-to-r from-[#cc4b7c] to-[#b33966] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(204,75,124,0.3)] transition duration-300 hover:scale-[1.02]"
              >
                {t("contact_telegram_button")}
              </a>

              <a
                href="https://t.me/VivostFemida_law"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center rounded-full border border-pink-400/30 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-pink-300 transition duration-300 hover:bg-pink-500/10"
              >
                {t("contact_channel_button")}
              </a>

              <a
                href="mailto:vivostfemida@gmail.com"
                className="flex justify-center rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white/10"
              >
                {t("contact_email_button")}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}