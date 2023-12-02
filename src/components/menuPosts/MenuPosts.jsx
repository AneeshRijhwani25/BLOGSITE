import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage, post }) => {
  return (
    <div className={styles.items} >
      <Link href="/" className={styles.item}>
        {withImage && post.img && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src={post.img} alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles[post.catSlug]}`}>
            {post.catSlug}
          </span>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <div className={styles.detail}>
            <span className={styles.username}>{post.user.name}</span>
            <span className={styles.date}>
              {" "}
              - {post.createdAt.substring(0, 10)}
            </span>
          </div>
        </div>
      </Link>
      {/* <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 11.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 11.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 11.11.2023</span>
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default MenuPosts;
