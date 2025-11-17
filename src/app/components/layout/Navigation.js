"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navigation.module.css";
import CakePopLogo from "../common/CakePopLogo";

const sections = [
  {
    id: "",
    label: (
      <CakePopLogo
        width={80}
        height={80}
        textColor="#365071"
        backgroundColor="#e56b6f"
      />
    ),
  },
  {
    id: "about-me",
    label: "About me",
    icon: <span className="material-symbols-outlined">person</span>,
  },
  {
    id: "products",
    label: "Products",
    icon: <span className="material-symbols-outlined">shopping_bag</span>,
  },
  {
    id: "product",
    label: "Product 2",
    icon: <span className="material-symbols-outlined">home</span>,
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: <span class="material-symbols-outlined">art_track</span>,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <span className="material-symbols-outlined">call</span>,
  },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
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
    <>
      <div className={styles.topNav}>
        <button
          className={styles.logoButton}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <CakePopLogo
            width={60}
            height={60}
            textColor="#365071"
            backgroundColor="#e56b6f"
          />
        </button>
      </div>
      <ul className={styles.navigation}>
        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={` ${styles.navButton} ${
              styles.activeSection === id ? styles.active : styles.inactive
            } ${id === "" ? styles.logoNavButton : ""}`}
          >
            <Link href={`/#${id}`}>{label}</Link>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <div className={styles.dropdownMenu}>
          {sections.slice(1).map(({ id, label, icon }) => (
            <Link
              key={id}
              href={`/#${id}`}
              className={`${styles.dropdownItem} ${
                activeSection === id ? styles.active : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
