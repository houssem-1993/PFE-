import React,{useEffect} from 'react'
import {Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import SearchBox from '../components/SearchBox'
import {listProducts} from '../actions/productAction'

const ProductsScreen = ({match}) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()

    
    
    const productList = useSelector(state => state.productList)
    const { loading,error,products  } = productList
    useEffect(() => {
        dispatch(listProducts(keyword))
    },[dispatch,keyword])
    
    return (
        <div>
            <h1 style={{color:'#800707'}}>Our Products</h1>
            <Route render={({history})=><SearchBox history={history}/>}/>
           
           {loading? <Loader />:error?<Message variant='danger'>{error}</Message>:<Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
    ))}
            </Row>}
            
        </div>
    )
}

export default ProductsScreen
