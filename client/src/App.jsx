import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Detail from './Components/Detail/Detail'
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'



const  App= ()=> {


  return (
      <div>
      
      <Routes>
          <Route  exact path="/" element={<Landing/>} />
          <Route  path= "/home" element={<Home/>} />
          <Route exact path= "/countries/:id" element={<Detail/>} />
          <Route  path= "/form" element={<Form/>} />
          <Route path="/about" element={<About/>}/>
          
      </Routes>
       
      </div>



  )
}

export default App
