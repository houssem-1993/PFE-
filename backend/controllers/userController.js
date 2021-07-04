import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js '


// @desc auth user & get token
// @Route Post/api/user/login
// @access Public

const authUser = asyncHandler( async(req,res) => {
    const {email,password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('invalid email or password')
    }
})
// @desc Register a new user
// @Route Post/api/users
// @access Public

const registerUser = asyncHandler( async(req,res) => {
    const {name,email,password} = req.body

    const userExists = await User.findOne({email})

   if(userExists){
       res.status(400)
        throw new Error('user already exists')
   }
   const user = await User.create({
        name,
        email,
        password
   })
   if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)  
        })
   }else{
       res.status(400)
       throw new Error('invalid user data')
   }
})
// @desc user Profile
// @Route GET/api/user/prfile
// @access Private

const getUserProfile = asyncHandler( async(req,res) => {
   
   const user= await User.findById(req.user._id)
   if (user) {
       res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
       })
   }

   else{
       res.status(404)
        
       throw new Error('user not found')
   }
})
// @desc update user Profile
// @Route PUT/api/user/prfile
// @access Private

const updateUserProfile = asyncHandler (async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})
// @desc    Delete  user
// @route   Delete /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const users = await User.find({})
  const user = await User.findById(req.params.id)

  if(user){
    await user.remove()
    res.json({message:'User removed'})
  }else{
    res.status(404)
    throw new Error('User not found')
  }
  res.json(users)
})
// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if(user){
    res.json(user)
  }else{
    res.status(400)
    throw new Error('user not found')
  }
  res.json(users)
})


// @desc update user
// @Route PUT/api/users/:id
// @access Private/Admin

const updateUser = asyncHandler (async (req, res) => {
   const user = await User.findById(req.params.id)
 
   if (user) {
     user.name = req.body.name || user.name
     user.email = req.body.email || user.email
     user.isAdmin = req.body.isAdmin || user.isAdmin
     const updatedUser = await user.save()
 
     res.json({
       _id: updatedUser._id,
       name: updatedUser.name,
       email: updatedUser.email,
       isAdmin: updatedUser.isAdmin,
       
     })
   } else {
     res.status(404)
     throw new Error('User not found')
   }
 })
 

export {authUser,registerUser,getUserProfile,updateUserProfile,getUsers,deleteUser,getUserById,updateUser}