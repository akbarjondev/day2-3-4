import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { addCategory, getData } from "./../../api/api";
// import

function App() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const data = getData();
    data.then((res) => {
      setCategories(res.data);
    });
  }, [category]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    const data = addCategory(category);
    data.then(() => {
      setCategory("");
      setLoading(false);
    });
  };

  return (
    <main className={styles.container}>
      <h2>Star wars</h2>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          onChange={(event) => setCategory(event.target.value)}
          value={category}
          placeholder={"category name"}
        />
        <button type="submit">Submit</button>
      </form>
      <section>
        {categories &&
          categories.length > 0 &&
          categories.map((category) => (
            <div key={category.category_id}>{category.category_name}</div>
          ))}
      </section>
      {loading && <strong>bu yerda spinner bo'lishi mumkin edi</strong>}
    </main>
  );
}

export default App;
