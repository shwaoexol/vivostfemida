"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "ru",
    label: "RU",
  },
  {
    code: "uz",
    label: "UZ",
  },
  {
    code: "en",
    label: "EN",
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-md">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
            i18n.language === lang.code
              ? "bg-amber-300 text-[#0d2b66] shadow-md"
              : "text-white/80 hover:text-white"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}