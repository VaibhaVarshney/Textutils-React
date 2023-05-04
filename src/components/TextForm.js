import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success")
          
    }

    const handleLowClick = ()=>{
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")
       
    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
     
    }

    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success")
   
    }

    // const handleExtraSpace=()=>{
    //     let newText=text.split([ ]);
    //     setText(newText.join[" "])

    // }
  
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState('');

   

  return (
    
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white'  : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='dark'? '#2c5a9e'  : 'white' , 
        color:props.mode==='dark'? 'white'  : 'black' }} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button> */}
        
        <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this  </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in the above textbox to preview it."}</p>

    </div>
        
    </div>
    </>
  )
}
 