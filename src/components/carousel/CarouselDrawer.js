import React from "react";
import { Carousel } from "react-bootstrap";
import { BASE_URL } from "../../helper/Constants";
import "./Carousel.css";

function CarouselDrawer(props) {
  return (
    props.image ? <Carousel>
      {
        props.image.map((value) => (
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={`${BASE_URL.replace('/api','')}${value.link}`} alt="First slide" width="100px" height="200px" />
            </Carousel.Item>
        )) 
      }
    </Carousel>:<></>
  );
}

export default CarouselDrawer;
