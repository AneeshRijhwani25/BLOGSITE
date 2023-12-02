import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="VIT Blog" width={50} height={50} />
          <h1 className={styles.logoText}>VIT</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id maxime
          possimus, minima neque officia, rerum fugiat cum perspiciatis,
          perferendis alias distinctio a pariatur doloremque vel? Temporibus
          iusto similique sint iste.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">HomePage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Culture</Link>
            <Link href="/">Travel</Link>
            <Link href="/">Food</Link>
            <Link href="/">Coding</Link>
        </div>
        <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Linkedln</Link>
            <Link href="/">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
