import React from "react";
import { BsFacebook, BsInstagram, BsTwitch, BsGithub } from "react-icons/bs";
import styles from "./style.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.logos}>
      <Link href="https://www.facebook.com/anudari.oyunbat.50/">
        {" "}
        <BsFacebook className={styles.logo1} />
      </Link>
      <Link href="https://www.instagram.com/anuka.o/">
        {" "}
        <BsInstagram className={styles.logo2} />
      </Link>
      <Link href="https://www.twitch.tv/alianurara">
        {" "}
        <BsTwitch className={styles.logo3} />{" "}
      </Link>
      <Link href="https://github.com/alianu23">
        {" "}
        <BsGithub className={styles.logo4} />{" "}
      </Link>
    </div>
  );
}

export default Footer;
