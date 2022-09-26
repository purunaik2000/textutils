import React, {useState} from 'react';

export default function About(props) {
    const [feedback, setfeedback] = useState("");

    const handleOnChange = (event) =>{
        setfeedback(event.target.value);
    }

    const handleOnClick = () =>{
        setfeedback("");
        props.showAlert("Thanks for your feedback." , "success");
    }
  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>About App</h1>
      <p>This is a text utils app which is very useful to manupulate the text according to you. You can easily enter your text and manupulate without any adertizement.</p>

      <h1>About Creator</h1>
      <p>This app is created by Purushottam Naik.</p>
      <p>We you want to Create such apps do contact on details below.</p>
      <p>Put your feedback below for improvement of this app. Your feedback can help and motivate us to improve this app.</p>

      <h1>Feedback</h1>
      <p>Type your suggestion here...</p>
      <textarea className='form-control' value={feedback} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
      <button className='btn btn-primary my-3' onClick={handleOnClick}>Submit</button>
    </div>
  );
}
