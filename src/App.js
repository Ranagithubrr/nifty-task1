import Homepage from "./pages/Homepage";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartContextProvider } from "./contexts/cartcontext";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
