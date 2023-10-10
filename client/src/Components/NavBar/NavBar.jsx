/* eslint-disable react/prop-types */
import style from './NavBar.module.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountryByName, getAllCountries } from '../../Redux/actions'
import logo from "../Image/COUNTRIES (1).png"

const NavBar=({setPagina}) =>{

  const dispatch= useDispatch()
  const [searchValue, setSearchValue]= useState("")

  const handleChange=(event)=>{
    event.preventDefault()
    setSearchValue(event.target.value)
  }


  const handleSubmit =async (event) => {
    event.preventDefault();
    try{

      await dispatch(getCountryByName(searchValue));
    
    }catch(error){
      alert('Error, no country found');
    }
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
        <div >
            <Link to={"/home"}><img src={logo} alt="Logo" className={style.logo}/></Link>
        </div>

  <div className={style.navLink}>
    <Link to={'/Home'} className={style.navItem} onClick={handleHomeClick}>HOME </Link>
    <Link to={"/form"} className={style.navItem}>FORM </Link>
    <Link to={"/about"} className={style.navItem}>ABOUT</Link>
  </div>

  <div className={style.searchContainer}>
    <form onSubmit={handleSubmit} className={style.searchForm}>
      <input
        placeholder='Search a country'
        type="search"
        onChange={handleChange}
        value={searchValue}
        className={style.search}
      />
      <button type='submit' className={style.searchButton}>🔍</button>
    </form>
  </div>

</div>

  );
}


export default NavBar