import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
const getData = async (slug) => {
  const res = await fetch("http://localhost:3000/api/featurepost", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Faild");
  }
  return res.json();
};

const Featured = async () => {
  const posts = await getData();
  const post = posts[0];
  if (!post) {
    return null;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, fellow here!</b> Discover these stories and creative ideas.
      </h1>
      <div className={styles.post}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src={post.img} alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          {/* <p className={styles.postDesc}>{post.desc}</p> */}
          <div
            className={styles.postDesc}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
          <Link
            href={`/posts/${post.slug}`}
            className={`${styles.categoryItem} ${styles[post.slug]}`}
            
          >
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
