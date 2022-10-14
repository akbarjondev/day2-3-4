import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("dark");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setCount(count + 1);
  };

  return (
    <div className={`container ${theme === "dark" ? "dark" : "light"}`}>
      <button onClick={() => handleClick()}>Theme</button>
      <h1>Salom barcha</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
        autem?
      </p>
      <div>Hozirgi tema: {theme}</div>
      <div>Sanoq: {count}</div>
    </div>
  );
}

export default Theme;

// class Theme extends React.Component {
//   state = {
//     theme: "dark",
//     count: 0,
//   };

//   hendleClick() {
//     this.setState({
//       theme: this.state.theme === "dark" ? "light" : "dark",
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     console.log("Theme render");

//     return (
//       <div
//         className={`container ${
//           this.state.theme === "dark" ? "dark" : "light"
//         }`}
//       >
//         <button onClick={() => this.hendleClick()}>Theme</button>
//         <h1>Salom barcha</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
//           autem?
//         </p>
//         <div>Hozirgi tema: {this.state.theme}</div>
//         <div>Sanoq: {this.state.count}</div>
//       </div>
//     );
//   }
// }
