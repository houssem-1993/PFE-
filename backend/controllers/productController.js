import AsyncHandler from 'express-async-handler'
import Product from '../models/productModel.js '


// @desc fetech all the products
// @Route get/api/products
// @access Public

const getProducts = AsyncHandler( async(req,res) => {
    const keyword = req.query.keyword?{
        name:{
            $regex:req.query.keyword,
            $options:'i',
        },
    }:{}
    const products = await Product.find({...keyword})
    res.json(products)
})

// @desc fetech one product
// @Route get/api/products/:id
// @access Public
const getProductById = AsyncHandler( async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new Error ('Product not found')
    }
    
})
// @desc delete a product
// @Route delete/api/products/:id
// @access Private/admin
const deleteProduct = AsyncHandler( async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        await product.remove()
        res.json({message:'product removed'})
    } else{
        res.status(404)
        throw new Error ('Product not found')
    }
    
})

// @desc Create a product
// @Route Post/api/products
// @access Private/admin
const createProduct = AsyncHandler( async(req,res) => {
    const product = new Product({
        name:'Sample name',
        price:0,
        user:req.user._id,
        image:'/images/sample.jpg',
        category:'sample category',
        countInStock:0,
        numberReviews:0,
        description:'sample description '
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct )
})
// @desc Update a product
// @Route Put/api/products/:id
// @access Private/admin
const updateProduct = AsyncHandler( async(req,res) => {
    const {name,price,description,image,category,countInStock}=req.body
    
    const product = await Product.findById(req.params.id)
    
    if(product){
        product.name=name
        product.price=price
        product.description=description
        product.image=image
        product.category=category
        product.countInStock=countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct )
    }else{
        res.status(404)
        throw new Error('product not found ')
    }
    
    
})
export {
     getProducts,
     getProductById,
     deleteProduct,
     createProduct,
     updateProduct
}