import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Card,Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listProductDetails} from '../actions/productAction'

const ProductScreen = ({history,match}) => {
    const [qty,setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails
    useEffect(() => {
       dispatch(listProductDetails(match.params.id)) 
    },[dispatch,match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    
    return (
        <>
        <Link className='btn btn my-3' to='/' style={{backgroundColor:'#21386f',color:'whitesmoke'}}>
        Go back
        </Link>
        {loading ? <Loader />:error? <Message variant='danger'>{error}</Message>:(
            <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} style={{width:'30rem',height:'30rem',}} />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                     <h1 style={{color:'#800707'}}>{product.name}</h1>   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                     price:{product.price} Dt   
                    </ListGroup.Item>
                    <ListGroup.Item>
                     description:{product.description}
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <strong>{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Status
                            </Col>
                            <Col>
                            {product.countInStock >0 ? 'In Stock': 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                        {product.countInStock > 0 &&(
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                        { [...Array(product.countInStock).keys()].map((x) =>(
                                          <option key={x+1} value={x+1}>
                                              { x + 1}
                                          </option>
                                       ))}
                                    </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}  


                    <ListGroup.Item>
                        <Button onClick={addToCartHandler} className='btn' type='button' style={{backgroundColor:'#800707',color:'whitesmoke'}} disabled={product.countInStock < 1}>
                            Add to cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </Col>
        </Row>
        )}
        
        </>
     )
}

export default ProductScreen
