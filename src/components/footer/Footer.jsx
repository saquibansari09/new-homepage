import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>
          © Copyright <span>Akeshya</span>. All Rights Reserved
        </p>
      </div>
      <div className={styles.right}>
        <nav>
          <ul>
            <li>
              <Link href="https://akeshya.com/Terms%20and%20conditions.pdf">
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link href="https://akeshya.com/Refund%20policy.pdf">
                Refund policy
              </Link>
            </li>
            <li>
              <Link href="https://akeshya.com/Privacy%20policy.pdf">
                Privacy policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
