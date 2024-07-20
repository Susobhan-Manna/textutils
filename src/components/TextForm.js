import React, { useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = ' ';
        setText(newText)
        props.showAlert("Clear the all text","success");
    }
    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value)
    }
const[text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode=== `dark`?`white`:`black`}}>
       
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                /*style={{backgroundcolor: props.mode=== `dark`?`grey`:`white`, color: props.mode=== `dark`?`white`:`black`}}*/ id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-4" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-outline-primary mx-4" onClick={handleLoClick}>Convert to Lower case</button>
            <button className="btn btn-outline-primary mx-4" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode=== `dark`?`white`:`black`}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes resd</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
