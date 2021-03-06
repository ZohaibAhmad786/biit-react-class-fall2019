import React from "react";
import { getUser } from "../services/service";
import styles from "../styles/styles";

const BlogItem = props => {
  const { blog = {}, history = {} } = props || {};
  const user = getUser(blog.userId) || {};
  const { fullName = "Muhammad" } = user;
  return (
    <div style={styles.blogItemContainer}>
      <div style={styles.blogItemHeader}>
        <div style={styles.profilePicture}> {fullName[0]} </div>
        <div style={styles.profileName}>
          <b> {user.fullName} </b>
        </div>
      </div>
      <div style={styles.blogItemMainText}> {blog.text} </div>
      <div style={styles.blogItemFooter}>
        <div style={styles.blogItemTimestamp}>
          Posted on: {blog.timestamp}
        </div>
        <div style={styles.blogItemButtons}>
          <button style={styles.btnEdit} onClick={() => history.push("/e:" + blog.id)}> Edit </button>
          <button style={styles.btnDelete}> Delete </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
