import React, { useState } from 'react'
import { Col, Container, Row ,Image, Button } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const Week = () => {
    const [show, setShow] = useState(false);
  return (
   <section id="mus" className='my-3'>
    <div className='text-center my-5 py-3'>
        <h2 className=' text-primary display-5'><i class="bi bi-search-heart"></i> Pick of the week!</h2>


    </div>
    <Container>
        <Row className='align-items-center'>
            <Col md={7}>
                <Image
                    src={require ('../assets/center.jpeg')}fluid={true} alt='pizza'>
                </Image>

            </Col>

            <Col md={5}>
                <div>

                    <h2 className='h1'>Double cheese fajita</h2>
                    <p  className='lead text-muted'>If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. </p>
                    <Button onClick={()=>setShow(true)}><i class="bi bi-basket" ></i>Buy now</Button>
                </div>
            
            </Col>
        </Row>
        <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
          <Toast onClose={() =>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Add!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>item added to card.</Toast.Body>
          </Toast>
        </ToastContainer>
    </Container>
   </section>
  )
}

export default Week