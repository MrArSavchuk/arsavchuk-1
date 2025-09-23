import { useState, useEffect, useCallback } from "react";

export function useNavMenu(breakpoint = 760) {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = useCallback(() => setMenuOpen(false), []);
  const toggle = useCallback(() => setMenuOpen((v) => !v), []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > breakpoint) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, close]);

  return { menuOpen, toggle, close };
}
