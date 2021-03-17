import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Col, Container, Image, Button, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Footer.css"


const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} size='3x' className='pagee' />
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size='3x' className='pagee' />
  const instagram = <FontAwesomeIcon icon={faInstagram} size='3x' className='pagee' />
  const twitter = <FontAwesomeIcon icon={faTwitter} size='3x' className='pagee' />
  

  return (
    <div className='bg-footer text-light' expand='lg'>
      <Container>
      <Row className='pt-5'>
          

        <Col expand='lg'> 
              <p className='followus'>Follow Me On</p>
              <Button variant="link" href="https://web.facebook.com/bromo.y.wibowo">{facebook}</Button>
              <Button variant="link" href="https://www.instagram.com/bromowi/">{instagram}</Button>
              <Button variant="link" href="https://twitter.com/bromowi">{twitter}</Button>
              <Button variant="link" href="https://www.linkedin.com/in/bromo-yudo-wibowo-2a7110174/"> {linkedin}</Button>
              <p className='followus'>Copyright © 2021 Bromo Yudo Wibowo.  All Rights Reserved</p>
        </Col>     
        </Row> 
      </Container>
    </div>
  )
}

export default Footer