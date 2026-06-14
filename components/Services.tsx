"use client"

import { motion } from "framer-motion";
import { 
    Scale,
    FileText,
    Building2,
    Globe, 
    Handshake,
    Shield
} from "lucide-react";
import { useTranslation } from "react-i18next";



export default function Services() {

    const { t } = useTranslation();

    const services = [
    { number: "01", icon: Scale,title: t("service_court_title"), description: t("service_court_desc"), tag: t("service_court_tag") },
    { number: "02", icon: FileText, title: t("service_contracts_title"), description: t("service_contracts_desc"), tag: t("service_contracts_tag") },
    { number: "03", icon: Building2, title: t("service_business_title"), description: t("service_business_desc"), tag: t("service_business_tag") },
    { number: "04", icon: Globe, title: t("service_international_title"), description: t("service_international_desc"), tag: t("service_international_tag") },
    { number: "05", icon: Handshake, title: t("service_mediation_title"), description: t("service_mediation_desc"), tag: t("service_mediation_tag") },
    { number: "06", icon: Shield, title: t("service_criminal_title"), description: t("service_criminal_desc"), tag: t("service_criminal_tag") }
]
    return (
        <div className="mt-10 max-w-7-xl px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}>
                 <span className="text-center text-2xl text-[#b04b8c]">
                    {t("services_label")}    
                </span>   
                <h2 className="mt-6 font-serif text-5xl text-white lg:text-7xl">
                    {t("services_title1")} 
                    <span className="ml-3 italic text-[#a8bcff]">
                        {t("services_title2")}
                    </span>
                </h2>
            </motion.div>
            <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.04, y: -12 }}
                            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500">
                            <div className="absolute left-8 top-6 text-6xl font-bold text-white/10">{service.number}</div>
                            <motion.div 
                                whileHover={{ rotate: 8, scale: 1.15 }}
                                className="relative mt-10">
                                    <Icon size={32} className="text-amber-300"/>
                                </motion.div>
                                <h3 className="mt-8 text-3xl font-serif text-white">{service.title}</h3>
                                <p className="mt-5 leading-8 text-white/75">{service.description}</p>
                                <div className="mt-8 inline-flex rounded-full border border-[#d05c90]/50 bg-[#d05c90]/10 px-4 py-2 text-sm text-[#ffc0da]">{service.tag}</div>
                                <div className="aboslute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent"/>
                            </motion.div>
                    )
                })}
            </div>
        </div>
    )
}