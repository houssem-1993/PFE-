import mongoose from'mongoose';

const orderSchema=mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        orderItem:[{
            name:{type:String,required:true},
            quantity:{type:Number,required:true},
            image:{type:String,required:true},
            price:{type:Number,requied:true},
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product"
            }
        }],
        orderAdress:{
            adress:{type:String, required:true},
            city:{type:String, required:true},
            postalCode:{type:String, required:true},
            country:{type:String, required:true},
        },
        paymentResult:{
            status:{type:String},
            update_time:{type:String},
            email_adress:{type:String}
        },
        taxPrice:{
            type:Number,
            required:true,
            default:0.0
        },
        shippingPrice:{
            type:Number,
            required:true,
            default:0.0
        },
        totalPrice:{
            type:Number,
            required:true,
            default:0.0 
        }
    },
    {
    timestamps:true
    }
)
const Order = mongoose.model('Order',orderSchema)

export default Order