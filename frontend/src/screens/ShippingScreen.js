import React, { useState,useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'

const ShippingScreen = ({history}) => {

  const cart = useSelector((state) => state.cart)
  const {shippingAddress} = cart

  const [address,setAddress]= useState('')
  const [city,setCity]=useState('')
  const [postalCode,setPostalCode]=useState('')
  const [country,setCountry]=useState('')
  React.useEffect(() => {
    setAddress(shippingAddress?.address)
    setCity(shippingAddress?.city)
    setPostalCode(shippingAddress?.postalCode)
    setCountry(shippingAddress?.country)
  },[shippingAddress])
const dispatch = useDispatch()

  const submitHandler=(e)=> {
    e.preventDefault()
   dispatch(saveShippingAddress({address,city,postalCode,country}))
   history.push('/placeorder')
  }

  return <FormContainer>
    <h1>Shipping</h1>
    <Form onSubmit={submitHandler}>
    <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></Form.Control>
    </Form.Group>
    <Form.Group controlId='city'>
          <Form.Label>city</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></Form.Control>
    </Form.Group>
    <Form.Group controlId='postalCode'>
          <Form.Label>Postal cCde</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Postal Code'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></Form.Control>
    </Form.Group>
    <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></Form.Control>
    </Form.Group>
    <Button type='submit' variant='primary'>Continue</Button>
    </Form>
  </FormContainer>
}

export default ShippingScreen

