import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listNewsDetails,updateNews} from '../actions/newsActions'
import { NEWS_UPDATE_RESET } from '../constants/newsConstants'
import { set } from 'mongoose'

const NewsEditScreen = ({ match, history }) => {
    const newsId = match.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [txt, setTxt]= useState('')
    const [uploading, setUploading] = useState(false)



    const dispatch = useDispatch()

    const newsDetails = useSelector((state) => state.newsDetails)
    const { loading, error, news } = newsDetails

    const newsUpdate = useSelector((state) => state.newsUpdate)
    const { loading:loadingUpadate, error:errorUpdate, success:successUpdate} = newsUpdate


    useEffect(() => {
        if(successUpdate){
            dispatch({type:NEWS_UPDATE_RESET})
            history.push('/admin/newslist')
        }else{
            if (!news.name || news._id !== newsId) {
                dispatch(listNewsDetails(newsId))
            } else {
                setName(news.name)
                setImage(news.image)
                setDescription(news.description)
                setTxt(news.txt)
            }
        }
        
    }, [dispatch, newsId, news,successUpdate,history])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/api/upload', formData, config)
    
          setImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateNews({
            _id:newsId,
            name,
            image,
            description,
            txt

        }))
        
    }

    return (
      <>
            <Link to='/admin/newslist' className='btn btn-info my-3'>Go back</Link>
            <FormContainer>
                <h1 style={{color:'#800707'}}>Create or Edit News</h1>
                {loadingUpadate && <Loader/>}
                {errorUpdate &&<Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>
                            <Form.File id='image-file' label='Choose file' custom onChange={uploadFileHandler}>
                                {uploading && <Loader />}
                            </Form.File>
                           
                        </Form.Group> 
                        <Form.Group controlId='text'>
                            <Form.Label>description</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='text'>
                            <Form.Label>text</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter text'
                                value={txt}
                                onChange={(e) => setTxt(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        

                            <Button type='submit' variant='primary'>
                                Update
                            </Button>
        </Form>
      )}
      

        </FormContainer>
      </>
    )}
export default NewsEditScreen
