import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted To Upper Case", "danger");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted To Lower Case", "danger");

  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "danger");

  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");

  };



  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  
  return (
    <>
      <div className={`text-${props.mode === 'dark'?'light':'dark'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            // style={{backgroundColor: props.mode === 'dark'?'blue':'white'}}
            style={{ backgroundColor: props.mode === 'dark' ? 'blue' : 'white' }}
            // style={{ backgroundColor: props.selectedColor || (props.mode === 'dark' ? 'blue' : props.backgroundColor) }}
            // value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Test
        </button>
        <button className='btn btn-primary mx-1' onClick={copyText}>
          Copy Text
        </button>
      </div>
      <div className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h1>your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read Completely</p>
        <h2>Preveiw</h2>
        <p>{text.length>0?text:"Enter something to Preveiw"}</p>
      </div>
    </>
  );
}