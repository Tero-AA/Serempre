import React from 'react';
import styles from "../../../styles/Home.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>To do list</div>
        <div>
          {
            // fecha dinamica
            new Date().toString().substring(0, 11)
          }
        </div>
      </div>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png"
        ></img>
      </div>
    </div>
  );
}

export default Header;