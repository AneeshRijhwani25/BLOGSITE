import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
const Card = ({ item }) => {
  return (
    <div className={styles.container} >
      {item.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={item.img} alt="" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.dates}>
            {item.createdAt.substring(0, 10)} - {" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
