import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClear = () => {
        // console.log("Clear was clicked " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Removed!", "success");
    }

    const handleCopy = () => {
        // console.log("Copy was clicked " + text);
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        // console.log("Extra Spaces was clicked " + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //   text = "new text";       // wrong way to change the state
    //   setText("new text");     // correct way to change the state

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>takes {0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    );
}
