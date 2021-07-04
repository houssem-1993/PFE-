import React from 'react'
import {Row,Col,Image,ListGroup,Card,Button, Form} from 'react-bootstrap'
const AboutusScreen = () => {
    return (
        <>
        
            <section class="about-container">
      
      <h2 style={{margin:' 2vw 36vw',padding:'0vw',color: '#800707',fontWeight:'bold',}}>About us</h2>
      <Row>
      <Col md={4}>
           <Image src="C:\Users\User\Desktop\dd69835a7fce748f12e1c6c9286ad017.jpg" style={{marginTop:"5vw",marginLeft:"5vw"}} alt='about us '/>
            </Col>
      <Col md={8}>
          <p style={{margin: "5vw 8vw 3vw 15vw"}}>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            
            </p>
      
      </Col>
       </Row>
       
  </section>
 
        </>
    )
}

export default AboutusScreen
