// import React,{useState} from 'react'
import React from 'react'


export default function About(props) {
    // const [style,setStyle]=useState({
      
    //   backgroundColor:"black",
    //   color:"white"
    // })

      
      
  return (
    
    <div className='component'  >
      <h1>About Us  </h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse"   data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum ..</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi earum, sint quidem modi in dolorum fuga quis optio ad sit maxime suscipit nam nesciunt ratione possimus eligendi nostrum, ea aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nesciunt excepturi! Nemo placeat minus asperiores architecto explicabo porro sit provident ipsa eveniet error hic sint est, molestias quasi accusantium voluptatum. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum ..</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi earum, sint quidem modi in dolorum fuga quis optio ad sit maxime suscipit nam nesciunt ratione possimus eligendi nostrum, ea aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nesciunt excepturi! Nemo placeat minus asperiores architecto explicabo porro sit provident ipsa eveniet error hic sint est, molestias quasi accusantium voluptatum. <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree"  className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum ..</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi earum, sint quidem modi in dolorum fuga quis optio ad sit maxime suscipit nam nesciunt ratione possimus eligendi nostrum, ea aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nesciunt excepturi! Nemo placeat minus asperiores architecto explicabo porro sit provident ipsa eveniet error hic sint est, molestias quasi accusantium voluptatum. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
   
   

    </div>
  )
}
