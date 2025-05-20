"use client";
import { useTranslation } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as "en" | "de")}
      className="border rounded px-2 py-1 text-sm bg-screen"
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
