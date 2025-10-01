import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Interface from './Interface';
import Cart from './Cart';
import Login from './Login';
import Product from './product';
import More from './more';
import Custom from './Customize';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Interface />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path ="/custom" element={<Custom />} />
                <Route path ="/more" element={<Product />} />
                <Route path = "/read" element={<More />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;