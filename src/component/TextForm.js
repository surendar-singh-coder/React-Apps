import React ,{useState} from 'react';

export default function TextForm(props) {
  const [text,setText]=useState("");
  // setText("Enter Text Here ");
  const ucase=()=>
  {
        // let button=document.getElementById("text");
        // button.value=button.value.toUpperCase()   ;
        let value=text.toUpperCase();
        setText(value);
        console.log("hello"); 
        props.showalert("Converted to Upper Case ","success");
  }
  const lcase=()=>
    {
          // let button=document.getElementById("text");
          // button.value=button.value.toUpperCase()   ;
          let value=text.toLowerCase();
          setText(value);
          console.log("hello");
        props.showalert("Converted to Lower Case ","success");

    }
    const clear=()=>
    {
      setText("")
      props.showalert("Text CLeared ","success");

    }
    const handletext=()=>{
      let text=document.getElementById("text");
      text.select();
      document.getSelection().removeAllRanges();
      props.showalert("Text Copyed ","success");

      navigator.clipboard.writeText(text.value);
    }
  const change=(event)=>{
    console.log("chnage");
    setText(event.target.value )
  }
  return (
    <>
      <div className='container ' style={{color:props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <textarea name="textaraea" id="text" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white',border:props.mode==='light'?'solid 2px black':'solid 2px white'}} value={text} onChange={change} rows={10}  cols={140}></textarea>
        <br/>
        <button disabled={text.length===0} className="btn btn-primary my-1" id="btn" onClick={ucase}>Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" id="btn-1" onClick={lcase}>Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-1" id="btn" onClick={clear}>Clear Text</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" id="btn" onClick={handletext}>Copy Text</button>


        </div>
        <div className='container' style={{color:props.mode==="light"?"black":"white"}}>
          <h1>Text Summary</h1>
          <p>
            {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
          </p> 
        </div>
        <h2 style={{color:props.mode==="light"?"black":"white"}}>Preview</h2>
        <p style={{color:props.mode==="light"?"black":"white"}}>{text.length>0?text:"Nothing TO Preview."}</p> 
    </>
  )
}