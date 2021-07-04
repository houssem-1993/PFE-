import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer} from './reducers/productReducers'
import { cartReducer} from './reducers/cartReducers'
import {newsListReducer,newsDetailsReducer,newsDeleteReducer,newsCreateReducer,newsUpdateReducer} from './reducers/newsReducers'
import {userLoginReducer,userRegisterReducer, userDetailsReducer, userUpdateProfileReducer,userListReducer, userDeleteReducer,userUpdateReducer} from './reducers/userReducers'


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    cart:cartReducer,
    newsList:newsListReducer,
    newsDetails:newsDetailsReducer,
    newsDelete:newsDeleteReducer,
    newsCreate:newsCreateReducer,
    newsUpdate:newsUpdateReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,

})

const cartItemFromStorage = localStorage.getItem('cartItem')? JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')? JSON.parse(localStorage.getItem('shippingAddress')):{}

const initialState = {
    cart:{cartItems:cartItemFromStorage,shippingAddressFromStorage:shippingAddressFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware=[thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store