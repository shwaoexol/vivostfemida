"use client";

import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Building2,
  Globe,
  Handshake,
  Shield,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      number: "01",
      icon: Scale,
      title: t("service_court_title"),
      description: t("service_court_desc"),
      tag: t("service_court_tag"),
    },
    {
      number: "02",
      icon: FileText,
      title: t("service_contracts_title"),
      description: t("service_contracts_desc"),
      tag: t("service_contracts_tag"),
    },
    {
      number: "03",
      icon: Building2,
      title: t("service_business_title"),
      description: t("service_business_desc"),
      tag: t("service_business_tag"),
    },
    {
      number: "04",
      icon: Globe,
      title: t("service_international_title"),
      description: t("service_international_desc"),
      tag: t("service_international_tag"),
    },
    {
      number: "05",
      icon: Handshake,
      title: t("service_mediation_title"),
      description: t("service_mediation_desc"),
      tag: t("service_mediation_tag"),
    },
    {
      number: "06",
      icon: Shield,
      title: t("service_criminal_title"),
      description: t("service_criminal_desc"),
      tag: t("service_criminal_tag"),
    },
  ];

  return (
    <section id="services" className="bg-[#0d2b66] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.35em] text-[#cc4b7c]">
            {t("services_label")}
          </span>
          
          <h2 className="mt-6 font-serif text-4xl text-white sm:text-5xl lg:text-7xl">
            {t("services_title1")}
            <span className="ml-3 italic text-[#a8bcff]">
              {t("services_title2")}
            </span>
          </h2>
        </motion.div>

        
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  scale: 1.03,
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl sm:p-8"
              >
                
                <div className="absolute left-6 top-4 text-5xl font-bold text-white/10 sm:text-6xl select-none">
                  {service.number}
                </div>

             
                <div className="relative mt-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={32} className="text-amber-300" />
                </div>

                <h3 className="mt-8 font-serif text-2xl text-white sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-white/75 sm:leading-8">
                  {service.description}
                </p>

                
                <div className="mt-8 inline-flex rounded-full border border-[#d05c90]/50 bg-[#d05c90]/10 px-4 py-2 text-sm text-[#ffc0da]">
                  {service.tag}
                </div>

                
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}