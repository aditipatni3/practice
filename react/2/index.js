import React from "react";
import ReactDOM from "react-dom";

const img="https://picsum.photos/200/300"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>

    <img
      src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg"
      alt="burger"
    />
    <img
      src="https://everylittlecrumb.com/wp-content/uploads/pinksaucepasta2-1024x1536.jpg"
      alt="pink sauce pasta"
    />
    <img src="https://images6.alphacoders.com/698/698287.jpg" alt="pizza" />


    <br/>
    <img src={img} alt="weird"/>
    <img src={img +"?grayscale"} alt="gray"/>
    

  </div>,
  document.getElementById("root")
);