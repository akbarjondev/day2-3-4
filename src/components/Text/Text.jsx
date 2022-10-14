import React from "react";
// import "./Text.css";
import styles from "./Text.module.scss";

function Text({ fontName, name, age, address, children, ...props }) {
  return (
    <div {...props} className={`${styles.text} ${styles[fontName]}`}>
      <div>
        Salom {name}, siz {age} yoshdasiz
      </div>

      {address && (
        <address>
          {address?.town}
          {address?.street && address?.town && ", "}
          {address?.street}
        </address>
      )}

      {children && <div>Bu children matn: {children}</div>}
    </div>
  );
}

export default Text;

// class Text extends React.Component {
//   render() {
//     console.log("Text render");
//     return <div className="container text">Salom Ali</div>;
//   }
// }
