import { Offcanvas } from "react-bootstrap";
import React from "react";
import "./Drawer.css";

function Drawer(props) {
  return (
    <div >
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Title>{props.data.title}</Offcanvas.Title>
        <Offcanvas.Body>
          {props.data.body}
          {props.view}
          {props.tab}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Drawer;
