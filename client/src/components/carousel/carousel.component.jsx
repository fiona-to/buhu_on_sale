import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import { Styled } from "./carousel.styles";

export const CarouselIntro = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Styled>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/giato/image/upload/v1578760898/carousel-1_xc11re.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Having somewhere to go is home</h3>
            <p>
              Having someone to love is family. And having both is a blessing
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/giato/image/upload/v1578760898/carousel-2_wujbic.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Life is beautiful!</h3>
            <p>The best way to pay for a lovely moment is to enjoy it</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/giato/image/upload/v1578760898/carousel-3_oo3zkm.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Albert Einstein</h3>
            <p>In the middle of every difficulty lies opportunity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Styled>
  );
};
