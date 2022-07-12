import React from "react";
import { BiExpand } from "react-icons/bi";
import { Container, Button, Link } from "react-floating-action-button";
import "./FloatExpand.css";

function FloatExpand(props) {
  
  return (
    <Container className="con">
      <Button tooltip="Data Kualitas Air" rotate={true} onClick={props.detail} styles={{ backgroundColor: "#03486f" }}>
        <i className="d-flex justify-content-center" style={{ color: "#fefefe" }}>
          {<BiExpand style={{ width: "20x", height: "20px"}}/>}
        </i>
      </Button>
    </Container>
  );
}

export default FloatExpand;
