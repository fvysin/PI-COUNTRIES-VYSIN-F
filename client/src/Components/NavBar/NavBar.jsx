/* eslint-disable react/prop-types */
import style from './NavBar.module.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountryByName, getAllCountries } from '../../Redux/actions'

const NavBar=({setPagina}) =>{

  const dispatch= useDispatch()
  const [searchValue, setSearchValue]= useState("")

  const handleChange=(event)=>{
    event.preventDefault()
    setSearchValue(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchValue));

    setPagina(1);
    cleanForm(event.target);
  };


  const cleanForm = (target) => {
    //Para limpiar checkboxes
    target.reset()
    setSearchValue("")
  }
const handleHomeClick = () => {
  // Limpiar el término de búsqueda al hacer clic en "Home"
  setSearchValue("");
  dispatch(getAllCountries());

  setPagina(1);
};



  return (
    <div className={style.container}>
         <div className='nav-link-cont'>

        <Link to={'/Home'} className={style.ul} onClick={handleHomeClick}>Home </Link>
        <Link to ={"/form"} className={style.ul}>Form </Link>
         </div>
      
      <div>
        <form onSubmit={handleSubmit}> 
          <input
            placeholder='Search'
            type="search" 
            onChange={handleChange}
            value={searchValue}   
           />
           
            <button type='submit'className={style.btn} 
            >Buscar
          </button>
          
      </form>
        </div>




    </div>
  )
}


export default NavBar