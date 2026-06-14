"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";



export default function Navbar() {
    const { t } = useTranslation();
    return (
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{type: "spring", stiffness: 300 }}
            className="fixed top-0 z-50 w-full border-b border-amber-300/20 bg-gradient-to-r from-[#0d2b66]/95 via-[#274a91]/95 to-[#4b6cb7]/95 backdrop-blur-md shadow-lg"
            >
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
            <div>
                <h2 className="font-serif text-3xl font-semibold tracking-[0.08em] text-white">
                    VIVOST
                    <span className="ml-2 text-amber-300">FEMIDA</span>
                </h2>
                <p className="text-[11px] uppercase tracking-[6px] text-amber-200/70">
                    {t("lawFirm")}
                </p>
                </div>
                <div className="hidden items-center gap-10 md:flex">
                    <a
                        href="#about"
                        className="text-white/80 transition hover:text-amber-300"
                    >
                        {t("navbar_about")}
                    </a>
                    <a
                        href="#services"
                        className="text-white/80 transition hover:text-amber-300"
                    >
                        {t("navbar_services")}
                    </a>

                    <a
                        href="#why"
                        className="text-white/80 transition hover:text-amber-300"
                    >
                        {t("navbar_advantages")}
                    </a>

                    <a
                        href="#contact"
                        className="text-white/80 transition hover:text-amber-300"
                    >
                        {t("navbar_contacts")}
                    </a>
                    <LanguageSwitcher/>
                    <a
                        href="#contact"
                        className="rounded-full border border-amber-300 px-6 py-3 text-amber-200 transition hover:bg-amber-300 hover:text-[#0d2b66]">
                        {t("navbar_consultation")}
                    </a>
                </div>
            </div>
        </motion.nav>
);
}
