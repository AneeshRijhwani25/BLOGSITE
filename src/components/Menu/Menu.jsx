import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const getMostpopData = async () => {
  const res = await fetch("http://localhost:3000/api/mostpop", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Faild");
  }
  return res.json();
};
const getlatestData = async () => {
  const res = await fetch("http://localhost:3000/api/newupdates", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Faild");
  }
  return res.json();
};
const Menu = async () => {
  const mostpop = await getMostpopData();
  const newposts = await getlatestData();
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      {mostpop?.map((data) => (
        <div key={data.id}>
          <MenuPosts withImage={false} post={data}  />
        </div>
      ))}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>{"What's new"}</h2>
      <h1 className={styles.title}>You might like </h1>
      {newposts?.map((data) => (
        <div key={data.id}>
          <MenuPosts withImage={true} post={data} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
