import React from "react";
import { Tabs, Tab, Nav } from "react-bootstrap";
import "./Style.css";
import Laporan_Kualitas from "../../../modules/laporan/view/tabs/Laporan_Kualitas";
import Laporan_Kuantitas from "../../../modules/laporan/view/tabs/Laporan_Kuantitas";
import { BiAbacus } from "react-icons/bi";

function ControlledTabsLaporan() {
  return (
    <div >
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Kualitas">
            <Laporan_Kualitas />
          </Tab>
          <Tab eventKey={2} title="Kuantitas">
            <Laporan_Kuantitas />
          </Tab>
        </Tabs>
      </div>
     
  );
}

export default ControlledTabsLaporan;
