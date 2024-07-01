"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Services",
    url: "/services",
  },
  {
    id: 5,
    title: "Contact us",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <Link href="/" className={styles.logo}>
          AKESHYA
        </Link>
      </div>

      <div className={styles.hamburger} onClick={handleModalToggle}>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </div>

      <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ""}`}>
        <div className={styles.close} onClick={handleModalToggle}>
          &times;
        </div>
        <div className={styles.modalLinks}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${styles.link} ${
                pathname === link.url ? styles.activeLink : ""
              } ${link.title === "Contact us" ? styles.contactButton : ""}`}
              onClick={handleModalToggle}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${styles.link} ${
              pathname === link.url ? styles.activeLink : ""
            } ${link.title === "Contact us" ? styles.contactButton : ""}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
