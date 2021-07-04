import bcrypt from 'bcryptjs'
const users =[
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'houssem',
        email:'houssem@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'rihen',
        email:'rihen@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    }
]

export default users