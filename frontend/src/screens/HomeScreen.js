import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
// import news from '../news'
import News from '../components/News'
import HomeCarousel from '../components/HomeCarousel'
import {listProducts} from '../actions/productAction'
import{listNews} from '../actions/newsActions'
import axios from 'axios'



const HomeScreen = () => {


    // const [news,setNews] = useState([])
    // useEffect(() => {
    //     const fetechNews = async () => {
    //         const {data} = await axios.get('/api/news')

    //         setNews(data)
    //     } 
    //     fetechNews()
    // },[])


    const dispatch = useDispatch ()
    
    const productList = useSelector(state => state.productList)
    const { loading,error,products  } = productList
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
    
    const newsList = useSelector(state => state.newsList)
    const { loadin,erro,news  } = newsList
    useEffect(() => {
        dispatch(listNews())
    },[dispatch])
    
    
    
    return (
        <>  
        <HomeCarousel />
        <h1 style={{color:'#800707',paddingTop:'3vw',paddingBottom:'1vw'}}>Our news</h1>
        {loadin?<Loader />:erro? <Message variant='danger'>{erro}</Message>:
              <Row>
                {news.map(neww =>(
                    <Col key={neww._id} sm={12} md={6} lg={4} xl={3}>
                        <News neww={neww} />
                    </Col>
    ))}
            </Row>}
           <h1 style={{color:'#800707'}}>Our Products</h1>
           {loading? <Loader />:error?<Message variant='danger'>{error}</Message>:<Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
    ))}
            </Row>}
            
        </>
    )
}

export default HomeScreen
