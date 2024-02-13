import React from "react";
import styles from "./options.module.css";

function Option_bar(props) {
  const { selection, setSelection } = props;

  const questions = ["character", "movie", "book"];

  let options = questions.map((question, index) => (
    <button
      key={index}
      className={`${question === selection ? styles.selected : styles.button}`}
      onClick={setSelection(question)}
    >
      {question}
    </button>
  ));

  return (
    <>
      <div>{options}</div>
    </>
  );
}

export default Option_bar;
