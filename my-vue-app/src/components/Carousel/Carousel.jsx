import Carousel from 'react-bootstrap/Carousel';
import FlexComponent from '../Flex/FlexComponent';

function CarouselFadeExample() {
  return (
    <FlexComponent>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-1"
          src="https://http2.mlstatic.com/D_NQ_NP_2X_868790-MLA51575349818_092022-F.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1"
          src="https://http2.mlstatic.com/D_NQ_NP_2X_682837-MLA50724004542_072022-F.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1"
          src="https://http2.mlstatic.com/D_NQ_NP_2X_679161-MLA50724004539_072022-F.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </FlexComponent>
  );
}

export default CarouselFadeExample;