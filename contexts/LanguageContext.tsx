"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ja" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ja: string, en: string) => string; // 便利ツール: 日英を自動で出し分ける関数
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja");

  // 言語に応じてテキストを返すヘルパー関数
  const t = (ja: string, en: string) => {
    return language === "ja" ? ja : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// どこからでも簡単に言語情報を呼び出せるフック
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}