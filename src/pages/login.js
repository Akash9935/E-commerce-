// import styles from "../styles/login.module.css"
import styles from "../styles/login.module.css";
import { useEffect, useRef, useState } from "react";


export default function Login() {
  const usernameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit");
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className={styles.App}>
    
      <form onSubmit={handleSubmit} className={styles.form__container}>
        <div className={styles.form__controls}>
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.form__controls}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.form__controls}>
          <button className={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
