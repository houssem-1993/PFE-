import React from 'react'
import {Link} from "react-router-dom"
import {Card} from 'react-bootstrap'


const Product = ({neww}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/news/${neww._id}`}>
                <Card.Img src={neww.image} variant='top' />
            </Link>
        <Card.Body>
            <Link to={`/news/${neww._id}`}>
                <Card.Title as='div'><h3>{neww.name}</h3></Card.Title>
            </Link> 
        </Card.Body>
            
        </Card>
    )
}

export default Product
