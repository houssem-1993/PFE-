import React, { useEffect} from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button,Row,Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {listNews,deleteNews,createNews} from "../actions/newsActions";
import {NEWS_CREATE_RESET} from '../constants/newsConstants'
const ProductListScreen = ({history,match}) => {
  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.newsList);
  const { loading, error, news } = newsList;

  const newsDelete = useSelector((state) => state.newsDelete);
  const { loading:loadingDelete, error:errorDelete, success:successDelete } = newsDelete;

  const newsCreate = useSelector((state) => state.newsCreate);
  const { loading:loadingCreate, error:errorCreate,success:successCreate,news:createdNews } = newsCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  
  useEffect(() => {
    dispatch({type:NEWS_CREATE_RESET})
    if(!userInfo&&userInfo.isAdmin){
      history.push('/login')
    }
   if(successCreate){
      history.push(`/admin/news/${createdNews._id}/edit`)
   }else{
     dispatch(listNews())
   }
  }, [dispatch,history,userInfo,successDelete,successCreate,createdNews]);
  const deleteHandler= (id) => {
    if(window.confirm('are you sure?'))
    dispatch(deleteNews(id))
  };
  const createNewsHandler = () =>{
    dispatch(createNews())
  }

  return (
    <>
        <Row className='align-items-center'>
            <Col>
            <h1>NEWS</h1>
            </Col>
            <Col className='text-right'>
                <Button className='my-3' onClick={createNewsHandler}><i className='fas fa-plus'></i>Create News</Button>
            </Col>
        </Row>
        {loadingDelete&&<Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate&&<Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {news.map((neww) => (
              <tr key={neww._id}>
                <td>{neww._id}</td>
                <td>{neww.name}</td>
                <td>
                  {neww.description}
                </td>

                
                <td>
                  <LinkContainer to={`/admin/news/${neww._id}/edit`}>
                    <Button variant='info' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(neww._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
            </tbody>
        </Table>
      )}
    </>
  );
}

export default ProductListScreen;