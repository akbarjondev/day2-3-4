import React, { useRef, useState, useEffect } from "react";
import styles from "./App.module.scss";

function App() {
  let counter = useRef(0); // bu yerda shuncha qiymatni o'zida umurbod saqlab turmoqda

  let mainRef = useRef(null); // bu yerda document.querySelector vazifasini bajarmoqda

  const usernameRef = useRef(null);
  const passRef = useRef(null);

  const [status, setStatus] = useState("on");

  const handleClick = () => {
    counter.current++;
    console.log(counter);
  };

  const changeStatus = () => {
    setStatus(status === "on" ? "off" : "on");
  };

  console.log("render");

  // useEffect(() => {
  //   console.log(mainRef);
  // }, []); // bu class componentdagi componentDidMount() ekvivalent

  const handleForm = (event) => {
    event.preventDefault();

    console.log(usernameRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <main ref={mainRef} className={styles.container}>
      <h3>App: {status}</h3>
      <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={changeStatus}>Re render me</button>
      </div>

      <form className={styles.form} onSubmit={handleForm}>
        <input ref={usernameRef} type={"text"} placeholder={"username"} />
        <input ref={passRef} type={"password"} placeholder={"password"} />
        <button>Submit</button>
      </form>
    </main>
  );
}

export default App;
