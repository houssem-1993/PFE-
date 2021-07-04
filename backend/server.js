import path from 'path'
import express, { response } from 'express'
import dotenv from'dotenv'
import colors from 'colors'
import nodemailer from 'nodemailer'
import {notFound,errorHandler} from './middleWares/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import newsRoutes from './routes/newsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import generateTemplate from './utils/mailTemplate.js'



dotenv.config({path:'backend/.env'})
connectDB()
const app = express()

app.use(express.json()) 

app.get('/',(req,res) => {
    res.send('API is running...')
})
app.use('/api/products',productRoutes)
app.use('/api/news',newsRoutes)
app.use('/api/users',userRoutes)
app.use('/api/upload',uploadRoutes)

app.post('/api/forma',(req,res)=>{
    let data=req.body
    let smptTransport=nodemailer.createTransport({
        service:'gmail',
        port:465,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD,

        }
    })
    let mailOption={
        from:data.email,
        to:process.env.EMAIL,
        subject:`Message from ${data.name}`,
        html:`<h1>information</h1>
        <ul>
        <li>Name:${data.name}</li>
        <li>Company:${data.company}</li>
        <li>Email:${data.email}</li>
        <li>Phone:${data.phone}</li>
        </ul>

        <h1>Message</h1>
        <p>${data.message}</p>
        `
    }

    smptTransport.sendMail(mailOption,(error,response)=>{
        if(error){
            res.send(error)
        }else{
            res.send('success')
            console.log(
                'success'
            )
        }
    })
    smptTransport.close()
})
app.post('/api/order',(req,res) => {
    let dataa=req.body
    let smptTransport=nodemailer.createTransport({
        service:'gmail',
        port:465,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD,

        }
    })
    let mailOption={
        form:dataa.email,
        to:process.env.EMAIL,
        subject:`Message from ${dataa.name}`,
        html:generateTemplate(dataa)
    }
            
    smptTransport.sendMail(mailOption,(error,response)=>{
        if(error){
            res.send(error)
        }else{
            res.send('success')
            console.log(
                'success'
            )
        }
    })
    smptTransport.close()
})

const __dirname=path.resolve()

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server is running in ${process.env.NODE_ENV} mode on ${PORT}.`))