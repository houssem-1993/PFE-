import mongoose from 'mongoose'

const newsSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        txt:{
            type:String,
            required:true
        }
    },
)
const News =mongoose.model("News",newsSchema)

export default News