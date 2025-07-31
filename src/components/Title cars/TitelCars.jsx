import React from "react";
import "./TitleCars.css";
import cards_data from "../../assets/cards/Cards_data";
function TitelCars() {
  return (
    <div className="title-cars">
     <h2>Popular on Netflix </h2>
     <div className="card-list">
    {
      (cards_data).map((cards_data,index)=>{
        return <div className="card" key={index}>
          <img src={card.image} alt="" srcset="" />
          <p>card.name</p>

        </div>
      })}
    

  
     </div>
    </div>
  );
}   
export default TitelCars;