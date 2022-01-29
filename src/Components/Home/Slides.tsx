import React from "react";
import { Carousel } from "react-bootstrap";
import Slide4 from '../../Asserts/Slide4.png'

function Slides() {

  const style ={
    height:"700px",
    width:"100%"
  }  


  return (
    <div className="">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            style={style}
            className="d-block w-100"
            src="https://www.worldatlas.com/r/w960-q80/upload/f4/e0/49/shutterstock-1665254809.png"
            alt="First slide"

          />
          <Carousel.Caption>
            <h3 className="text-dark" >World Map</h3>
            <p className="text-dark" >"The world is full of strange phenomena that cannot be explained by the laws of logic or science. Dennis Rodman is only one example.".</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={style}
            className="d-block w-100"
            src="https://www.90daykorean.com/wp-content/uploads/2020/07/Contine-nts-768x512.jpg.webp"
            alt="Second slide"
            
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={style}
            className="d-block w-100"
            src="https://tr-images.condecdn.net/image/b06yrdKjOXa/crop/2040/f/2021.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark" >Amazing Places Of Different Places</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={style}
            className="d-block w-100"
            src="https://www.renderhub.com/renderhub/textured-world-3d-wallpaper/textured-world-3d-wallpaper_1440x900.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-light" >Thought Of Albert Einstein</h3>
            <p>
            Look deep into nature, and then you will understand everything better.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={style}
            className="d-block w-100"
            src={Slide4}
            alt="Third slide"
          />
     
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slides;
