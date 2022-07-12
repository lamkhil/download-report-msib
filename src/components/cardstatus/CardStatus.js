import React from "react";
import "./CardStatus.css";

function CardStatus(props) {
  const syleBackGround = props.statusIndex === 1? {} : props.statusIndex === 2? {} : {};
  return (
    <div className="shadow-sm box" style={
      props.statusIndex === 1? 
        {backgroundColor: 'red'} : 
      props.statusIndex === 2? 
        {backgroundColor: 'yellow'} : 
        {backgroundColor: 'green'}
    } >
      <p className="fw-normal fs-6 text-center">{props.status}</p>
    </div>
  );
}

export default CardStatus;
