import { useEffect } from "react";
export function useSmoothSectionScroll(navbarId = "main-navbar") {
  useEffect(() => {
    const handler = (e: any) => {
      let anchor = e.target as HTMLElement;
      while (anchor && anchor.tagName !== "A") {
        anchor = anchor.parentElement!;
      }
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const section = document.querySelector(href);
      const navbar = document.getElementById(navbarId);
      if (section) {
        e.preventDefault();
        const navbarHeight = navbar?.offsetHeight || 0;
        const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 6;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", handler);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener("click", handler);
      });
    };
  }, [navbarId]);
}
