"use client";
import { useEffect } from "react";

export default function PageTitleChanger() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const originalTitle = document.title;

    const handleBlur = () => {
      document.title = "Geri dön 🙏";
    };

    const handleFocus = () => {
      document.title = originalTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}
