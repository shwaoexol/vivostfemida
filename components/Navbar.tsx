"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";


export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      href: "#about",
      label: t("navbar_about"),
    },
    {
      href: "#services",
      label: t("navbar_services"),
    },
    {
      href: "#why",
      label: t("navbar_advantages"),
    },
    {
      href: "#contact",
      label: t("navbar_contacts"),
    }
    // {
    //   href:"/news",
    //   label: "Новости"
    // }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="fixed top-0 z-50 w-full border-b border-amber-300/20 bg-gradient-to-r from-[#0d2b66]/95 via-[#274a91]/95 to-[#4b6cb7]/95 backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <div>
          <h2 className="font-serif text-xl font-semibold tracking-[0.08em] text-white sm:text-2xl lg:text-3xl">
            VIVOST <span className="ml-2 text-amber-300">FEMIDA</span>
          </h2>

          <p className="text-[9px] uppercase tracking-[4px] text-amber-200/70 sm:text-[10px] lg:text-[11px] lg:tracking-[6px]">
            {t("lawFirm")}
          </p>
        </div>


        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 transition hover:text-amber-300"
            >
              {link.label}
            </Link>
          ))}

          <LanguageSwitcher />

          <a
            href="#contact"
            className="rounded-full border border-amber-300 px-5 py-2.5 text-sm text-amber-200 transition hover:bg-amber-300 hover:text-[#0d2b66]"
          >
            {t("navbar_consultation")}
          </a>
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#12326f] lg:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90"
                >
                  {link.label}
                </Link>
              ))}

              <LanguageSwitcher />

              <a
                href="#contact"
                className="rounded-full border border-amber-300 px-5 py-3 text-center text-amber-200"
              >
                {t("navbar_consultation")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}