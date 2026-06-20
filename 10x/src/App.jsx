
import './App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Register from './pages/Userregister'
import Login from './pages/Login'
import Products from './pages/Products'
import Deals from './pages/Deals'
import Productview from './pages/Productview';

function App() {

  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} />

<Route path="/register" element={<Register/>} />
<Route path = '/login' element={<Login/>} />
<Route path='/products' element={<Products/>} />
<Route path='/deals' element={<Deals/>} />
<Route path='/view' element={<Productview/>}/>
    </Routes>
    </>
  )
}

export default App
