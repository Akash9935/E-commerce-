import React from "react";
import styles from "./footer.module.css";

 
const Footer = () => (
    <footer className={styles.footer}>
        <p>This is react sticky footer!!</p>
        <a href="https://www.facebook.com/" className={styles.link} target="_blank" >Facebook</a>
        <a href="https://github.com/Akash9935" className={styles.link} target="_blank" >GitHub</a>
    </footer>
);
 
export default Footer