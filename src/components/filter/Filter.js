import React from "react";
import { Button } from "react-bootstrap";
import { BiFilterAlt } from "react-icons/bi";
import "./Filter.css"

function Filter() {
  return (
    <div container>
        <Button className="p-3 ms-4 text-black shadow-sm" style={{backgroundColor : "#fefefe", border : "none"}}>         
        <tr>
            <td><BiFilterAlt /></td>

            <td className = "ps-2">Filter</td>
        </tr>
        </Button>
    </div>
  );
}

export default Filter;
