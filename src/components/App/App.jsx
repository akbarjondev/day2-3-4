import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Text from "../Text/Text";
import data from "./../../data/data";
import Single from "../Single/Single";

function App() {
  const [news, setNews] = useState(data);
  const [theme, setTheme] = useState("world");

  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    setNews(data.filter((item) => item.category === theme));
  }, [theme]);

  useEffect(() => {
    // bu componentDidMount ga teng
    console.log("bu bir marotaba ishlaydi");
  }, []);

  useEffect(() => {
    // bu har safar state update bo'lganda ishlaydi (componentDidMount va componentDidUpdate ning qo'shilmasi)
    console.log("bu har safar ishlaydi");
  });

  useEffect(() => {
    console.log("bu bir narsa");
    if (singleData) {
      return () => {
        console.log("single uchib ketdi");
      };
    }
  }, [singleData]);

  const handleClick = (topic) => {
    setTheme(topic);
    setSingleData(null);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={() => handleClick("world")}>Global</button>
          <button onClick={() => handleClick("local")}>Local</button>
          <button onClick={() => handleClick("sport")}>Global</button>
        </div>
        {singleData ? (
          <Single data={singleData} />
        ) : (
          <Text setOneNews={setSingleData} news={news} />
        )}
      </div>
    </div>
  );
}

export default App;
