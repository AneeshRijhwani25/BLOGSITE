import React from "react";
import Link from "next/link";
import styles from "./menuCategories.module.css";
const shuffleArray = (arrayOrObject) => {
  const values = Array.isArray(arrayOrObject)
    ? arrayOrObject
    : Object.values(arrayOrObject);

  const shuffledArray = [...values];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Faild");
  }

  const data = await res.json();
  const shuffledData = shuffleArray(data);

  return shuffledData;
};
const MenuCategories = async () => {
  const data = await getData();
  // console.log(data)
  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <div key={item.id}>
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.categoryItem} ${styles[item.slug]}`}
          >
            {item.slug}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;
