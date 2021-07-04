
import axios from 'axios'
import React,{useState}from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const ContactScreen = () => {

    const[name,setName] = useState('')
    const[company,setCompany] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[message,setMessage] = useState('')
    const[sent,setSent]=useState(false)
   
const formSubmit =(e) => {
    (e).preventDefault()

    let data={
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    }
    axios.post('/api/forma',data).then(res=>{
       setSent(true)
       resetForm()
    }).catch(()=> {
        console.log('message not sent')
    })
}
const resetForm =()=> {
    setName('')
    setCompany('')
    setEmail('')
    setPhone('')
    setMessage('')


    setTimeout(()=>(
        setSent(false)
    ),3000)
}


    return (
        <>
        <h1 style={{color:'#800707',marginLeft:'33vw'}}>Contact us</h1>
      <FormContainer>
      <Form onSubmit={formSubmit}>
      <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='company'>
                            <Form.Label>company name</Form.Label>
                            <Form.Control
                                type='company name'
                                placeholder='Enter company name'
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='phone'>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type='phone number'
                                placeholder='Enter your Phone number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email area'>
                            <Form.Label>message</Form.Label>
                            <Form.Control as='textarea' style={{height:'16vw'}}
                                type='email'
                                placeholder='write your e-mail'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></Form.Control>
                            <Button type="submit" className="btn btn-submit" style={{marginTop:'1vw',borderRadius:'0.5vw'}}>Submit</Button>
                        </Form.Group>
</Form>
                        </FormContainer>
        </>
    )}
    

export default ContactScreen
