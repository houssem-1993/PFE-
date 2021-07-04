const generateTemplate = (dataa) =>{
    const headingStyle = `
    color:red;
    font-size:100px;
    `
    return `<h1 style=${headingStyle}>contact</h1>
    <ul>
    <li>Name:${dataa.name}</li>
    <li>Company:${dataa.company}</li>
    <li>Email:${dataa.email}</li>
    <li>Phone:${dataa.phone}</li>
    </ul>
    <h1 style=${headingStyle}>Order Items</h1>
    <ul>   
        ${dataa.cart.cartItems.map((item,i)=>(
            `<li key=${i}>${item.name}:  ${item.price} x ${item.qty}</li>`))}
        <li>item:${dataa.cart.itemsPrice}</li>
        <li>shipping:${dataa.cart.shippingPrice}</li>
        <li>tax:${dataa.cart.taxPrice}</li>
        <li>total:${dataa.cart.totalPrice}
    </ul>`
}
export default generateTemplate