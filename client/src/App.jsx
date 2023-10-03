import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Detail from './Components/Detail/Detail'
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'
import Landing from './Components/Landing/Landing'
import NavBar from './Components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'

const  App= ()=> {


  const {pathname} = useLocation()
  return (
      <div>
         {pathname !== '/' && <NavBar/>}
      <Routes>
          <Route  path="/" element={<Landing/>} />
          <Route  path= "/home" element={<Home/>} />
          <Route  path= "/countries/:id" element={<Detail/>} />
          <Route  path= "/form" element={<Form/>} />
      </Routes>
       
      </div>



  )
}

export default App
