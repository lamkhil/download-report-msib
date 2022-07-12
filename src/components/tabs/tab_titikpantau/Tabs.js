import React from "react";
import { Tabs, Tab, Nav } from "react-bootstrap";
import KuantitasTPView from "../../../modules/titik_pantau/view/tabs/KuantitasTPView";
import KualitasTPView from "../../../modules/titik_pantau/view/tabs/KualitasTPView";
import "./Tabs.css";

function ControlledTabs() {
  return (
    <div>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Kualitas">
          <KualitasTPView />
        </Tab>
        <Tab eventKey={2} title="Kuantitas">
          <KuantitasTPView />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabs;
