import React from "react";
import {Dropdown} from "react-bootstrap";

function DropDownParameter() {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="none" id="dropdown-parameter" className="border p-2">
        Indeks Parameter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">TSS</Dropdown.Item>
        <Dropdown.Item href="#/action-2">COD</Dropdown.Item>
        <Dropdown.Item href="#/action-3">BOD</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownParameter;
