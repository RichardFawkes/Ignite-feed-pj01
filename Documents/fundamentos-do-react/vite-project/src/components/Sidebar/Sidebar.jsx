import React from "react";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/RichardFawkes.png"
          alt=""
          srcset=""
        />
        <strong>Richard Geraldo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
