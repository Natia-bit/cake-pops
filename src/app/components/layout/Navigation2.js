"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navigation2.module.css";
import CakePopLogo from "../common/CakePopLogo";

const sections = [
  { id: "Home", label: <CakePopLogo textColor="white"></CakePopLogo> },
  { id: "about-me", label: "About me" },
  { id: "products", label: "Products" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, offset: Math.abs(rect.top) };
      });

      const nearest = offsets.reduce((prev, curr) =>
        curr.offset < prev.offset ? curr : prev
      );
      setActiveSection(nearest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <ul className={styles.navigation}>
      {sections.map(({ id, label }) => (
        <li key={id} className={styles.navList}>
          <Link
            href={`/#${id}`}
            className={`${styles.navButton} ${
              activeSection === id ? styles.active : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
