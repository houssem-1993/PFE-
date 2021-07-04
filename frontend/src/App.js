import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AboutusScreen from "./screens/AboutusScreen";
import NewsScreen from "./screens/NewsScreen";
import CartScreen from "./screens/CartScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NewsListScreen from "./screens/NewsListScreen";
import NewsEditScreen from "./screens/NewsEditScreen";
import ContactScreen from "./screens/ContactScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import AlertComponent from "./components/AlertComponent";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <AlertComponent />
      <Router>
        <Header />
        <main className="py-3" style={{ minHeight: "80vh" }}>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/search/:keyword" component={ProductsScreen} exact />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/news/:id" component={NewsScreen} exact />
            <Route path="/admin/newslist" component={NewsListScreen} />
            <Route path="/admin/news/:id/edit" component={NewsEditScreen} />
            <Route path="/about" component={AboutusScreen} exact />
            <Route path="/contact" component={ContactScreen} exact />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route path="/admin/productlist" component={ProductListScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/ourproducts" component={ProductsScreen} exact />
            <Route path="/profile" component={ProfileScreen} exact />
            <Route path="/placeorder" component={PlaceOrderScreen} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
