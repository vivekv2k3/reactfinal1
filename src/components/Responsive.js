import React, { useState } from "react";
import "./Responsive.css";

function Responsive() {
  const [inputText, setInputText] = useState("");

  const calculateWordCount = () => {
    const words = inputText.split(/\s+/); // Split the input text by whitespace
    const filteredWords = words.filter((word) => word !== ""); // Remove empty strings
    return "Word Count: " + filteredWords.length;
  };

  return (
    <div className="main">
      <h1 className="text">Responsive Paragraph Word Counter</h1>
      <textarea
        className="textarea"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <p className="output" id="output">
        {calculateWordCount()}
      </p>
    </div>
  );
}

export default Responsive;
