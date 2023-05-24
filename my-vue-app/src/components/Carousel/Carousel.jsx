import Carousel from 'react-bootstrap/Carousel';
import FlexComponent from '../Flex/FlexComponent';
import './Carousel.css'

function CarouselHome() {
  return (
    <FlexComponent clase="carousel">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-1 carouselImg"
          src="https://elaion.com.ar/assets/images/productos/Elaion_AURO_D2530.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carouselTitle'>Elaion Auro</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 carouselImg"
          src="https://elaion.com.ar/assets/images/productos/Elaion_F50_5W40.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='carouselTitle'>Elaion F50</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 carouselImg"
          src="https://elaion.com.ar/assets/images/productos/Elaion_F30.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='carouselTitle'>Elaion F30</h3>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </FlexComponent>
  );
}

export default CarouselHome;