import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted To Upper Case", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted To Lower Case", "success");

  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");

  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");

  };

  const removeExtraSpaces = () => {
   setText(text.replace(/\s+/g, " "));
   props.showAlert("Extra Space is Removed", "success");
  
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
            style={{ backgroundColor: props.mode === 'dark' ? '#0c0c6c' : 'white',
                      color: props.mode === 'dark' ? 'white' : 'black'}}
            // style={{ backgroundColor: props.selectedColor || (props.mode === 'dark' ? 'blue' : props.backgroundColor) }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
          Clear Text
        </button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={copyText}>
          Copy Text
        </button>
      </div>
      <div className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h1>your Text Summary</h1>
        <p>
            {text.split(/\s+/).filter((salma) => salma.trim() !== "").length} words and{" "}
            {text.replace(/\s+/g, "").length} characters
      </p>
        <p>{0.008 * text.split(" ").filter((salma)=> {return salma.length!==0}).length} Minutes to read Completely</p>
        <h2>Preveiw</h2>
        <p>{text.length>0?text:"Nothing To Preveiw"}</p>
      </div>
    </>
  );
}