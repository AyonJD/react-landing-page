import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='features' element={<Features></Features>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
