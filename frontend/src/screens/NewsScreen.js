import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image} from 'react-bootstrap'
import axios from 'axios'

const NewsScreen = ({match}) => {
    const [neww,setNews] = useState ({})

    useEffect(() => {
        const fetechNews = async () => {
            const {data} = await axios.get(`/api/news/${match.params.id}`)

            setNews(data)
        }   
        fetechNews()
    },[match])
    return (
        <>
          <Link className='btn btn my-3' to='/' style={{backgroundColor:'#21386f',color:'whitesmoke'}}>
        Go back
        </Link>  
        <Row>
            <Col md={6}>
            <Image src={neww.image} alt={neww.name} style={{width:'20rem',height:'20rem',marginLeft:'5rem'}} />
            </Col>
            <Col md={6}>
            <h1>{neww.name}</h1>
            <p>{neww.txt},</p>
            </Col>
        </Row>
        </>
    )
}

export default NewsScreen
