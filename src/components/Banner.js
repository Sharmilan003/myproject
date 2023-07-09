import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row} from 'react-bootstrap'


const Banner = () => {
  return (
  <Container >
    <Row className='justify-content-center align-items-center'>
        <Col lg={8}>

  <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require ('../assets/one.jpeg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Margherita</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require ('../assets/two.jpeg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>chees piza</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require ('../assets/three.jpeg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>pepporoni</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </Col>
    </Row>

<div className='text-center'>
    <h2 className='display-5 mt-3'>Pizza for every occation!</h2>
    <p className='lead text-muted'>Pizza Block is a small pizza shop founded in 2014 by Elisha Block and based in Riverdale, NY. Pizza Block takes the task of producing high-quality pizza seriously; our unique recipe makes our pizza one of a kind.</p>
 </div>
  </Container>
  )
}

export default Banner