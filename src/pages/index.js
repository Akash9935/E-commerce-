import React, { useState } from "react";
import Card from "../component/Card";

// import Footer from "./component/Footer";
// import Header from "./component/Headers";
// import { data } from "./productData";
import {data} from "../productData"
import styles from "../styles/Home.module.css"


const App = () => {
  const [item, setItem] = useState(data);

  return (
    <>
      {/* <div className={styles.home}>
            <a href="#home" >Home</a>
            <a href="#news" >News</a>
            <a href="#contact">Contact</a>
            <a href="#about" >About</a>
      </div> */}
      {/* <Header /> */}
      {/* <h1 className={styles.hi}>My Ecommerce</h1> */}
      <div className={styles.container}>
        {item.map((el, i) => {
          return <Card data={el} />;
        })}
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default App;
