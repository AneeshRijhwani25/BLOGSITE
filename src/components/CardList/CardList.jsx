import React from "react";

import styles from "./cardlist.module.css";
import Card from "../cards/Card";
import Pagination from "../pagination/Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Faild");
  }
  return res.json();
};
const Cardlist = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  // console.log(posts)
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          {posts?.map((data) => (
            <div key={data.id}>
              <Card item={data}  />
            </div>
          ))}
        </div>
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default Cardlist;
