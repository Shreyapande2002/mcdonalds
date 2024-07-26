import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Orders from './Pages/Orders';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Discovery from './Pages/Discovery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';



function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/discovery" element={<Discovery />} />
                </Routes>
    <Footer />
        
            </BrowserRouter>
        </div>
    );
}

export default App;