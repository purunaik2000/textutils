import React, {useState} from 'react';

export default function TextBox(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  }


// Utility buttons
  const handleOnClickCo = () =>{
    var c = document.getElementById("myBox");
    c.select();
    navigator.clipboard.writeText(c.value);
    props.showAlert("Copied to clipboard!" , "success");
  }
  
  const handleOnClickUp = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!" , "success");
  }
  
  const handleOnClickLo = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!" , "success");
  }
  
  const handleOnClickRe = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are Removed!" , "success");
  }

  const handleOnClickCl = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("The textbox is now empty! Please write something.", "success")
  }


// Function to count number of words:

//  function x(){
//   let x = text.split(" ");
//   let n = x.length;
//   if(x[n-1]==="") n-=1;
//   return n;
//  }

 function x(){
  let n = text.length;
  let count = 0;
  for(let m=0;m<n;m++){
    if(text.charAt(m)!==" "){
      count++;
      while(m<n){
        if(text.charAt(m)===" ") break;
        m++;
      }
    }
  }
  return count;
 }

  const [text,setText] = useState("Enter text");
  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea name="myBox" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} rows="12" className="form-control"></textarea>
          </div>
      </div>
      <div className='btn-primary-container'>
        <button className="btn btn-primary mx-2" onClick={handleOnClickCo}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickUp}>Convert to UPPER case</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickLo}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickRe}>Remove extra space</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickCl}>Clear</button>
      </div>
      <div className='my-3'>
        <h1>Summary</h1>
        <p>{x()} words {text.length} characters. </p>
      </div>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  );
}
