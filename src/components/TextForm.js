import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert(" Comverted to uppercase!", "success");
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert(" Comverted to lowercase!", "success");

    }

    const handleClearClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newtext = "";
        setText(newtext)
        props.showalert(" Text has been cleared", "success");

    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showalert(" Copy to clipbord!", "success");

    }

    const handleExtrasSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" ")); 
        props.showalert(" Extraspaces has been removed", "success");

    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    // text = "new text"  //wrong way to the change the state
    // setText = "new text" //Correct way to change the state

    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleExtrasSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} charracters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Enter something in the textbox above to Preview"}</p>
        </div>
        </>
    )
}