import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Option_bar from "./Option_bar";
import useFetchData from "../hooks/useFetchData";
import Movies from "./Movies";
import Books from "./Books";
import Character from "./Character";
import "bootstrap/dist/css/bootstrap.css";

function Dashboard() {
  const [selection, setSelection] = useState("character");
  const [data, loading, error] = useFetchData(selection);
  const [text, setText] = useState("");
  const loader = <div className={styles.loader}>Loading...</div>;

  function onClickHandler(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const dataRender = {
    character: <Character data={data} search={text} />,
    book: <Books data={data} search={text} />,
    movie: <Movies data={data} search={text} />,
  };

  return (
    <div className={styles.dashboard}>
      <div>
        <h1 style={{ marginTop: "300px" }}>LORD OF THE RINGS INFO</h1>
        <Option_bar selection={selection} setSelection={onClickHandler} />
        {selection !== "book" && (
          <input
            className={styles.input}
            type={text}
            value={text} // Bind the value of the textbox to the 'text' state
            onChange={handleInputChange} // Event handler to update the state when the textbox value changes
            placeholder="Search"
          />
        )}
        {loading && loader}
        {data && !loading ? dataRender[selection] : ""}
        {selection === "book" && <div style={{ marginTop: "40px" }} />}
      </div>
    </div>
  );
}

export default Dashboard;
