import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Header from "./components/home/Header";
import ShoppingCartProvider from "./context/ShoppingCart.jsx";
import Footer from "./components/home/Footer.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import { About } from "./about/About.jsx";
import Login from "./components/login/Login.jsx";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
