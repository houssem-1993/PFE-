import AsyncHandler from 'express-async-handler'
import News from '../models/newsModel.js '

// @desc fetech all the news
// @Route get/api/news
// @access Public

const getNews = AsyncHandler( async(req,res) => {
    const news = await News.find({})
    res.json(news)
})


// @desc fetech one news
// @Route get/api/news/:id
// @access Public
const getNewsById = AsyncHandler( async(req,res) => {
    const neww = await News.findById(req.params.id)
    if(neww){
        res.json(neww)
    } else{
        res.status(404)
        throw new Error ('News not found')
    }
    
})
// @desc delete a news
// @Route delete/api/news/:id
// @access Private/admin
const deleteNews = AsyncHandler( async(req,res) => {
    const newws = await News .findById(req.params.id)
    if(newws){
        await newws.remove()
        res.json({message:'News removed'})
    } else{
        res.status(404)
        throw new Error ('News not found')
    }
    
})
// @desc Create a news
// @Route Post/api/news
// @access Private/admin
const createNews = AsyncHandler( async(req,res) => {
    const neww = new News({
        name:'Sample name',
        image:'/images/sample.jpg',
        description:'sample description ',
        txt:'sample text'
    })
    const createdNews = await neww.save()
    res.status(201).json(createdNews)
})

// @desc Update a news
// @Route Put/api/news/:id
// @access Private/admin
const updateNews = AsyncHandler( async(req,res) => {
    const {name,image,description,txt}=req.body
    
    const neww = await News.findById(req.params.id)
    
    if(neww){
        neww.name=name
        neww.image=image
        neww.description=description
        neww.txt=txt
        

    const updatedNews = await neww.save()
    res.json(updatedNews)
    }else{
        res.status(404)
        throw new Error('News not found ')
    }
})
export {getNews,getNewsById,deleteNews,createNews,updateNews}