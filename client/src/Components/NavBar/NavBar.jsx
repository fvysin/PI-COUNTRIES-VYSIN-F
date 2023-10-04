import style from './NavBar.module.css'
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className={style.container}>

        <Link to={'/Home'} className={style.ul}>Home</Link>
        <Link to ={"/form"} className={style.ul}>Form </Link>
      
        <form onChange
        // {handleChange}
        > 
        <input
          placeholder='Busqueda'
          type="search" />
        <button
          type='submit'
          className={style.btn}
          // onClick={handleSubmit} 
          >Buscar
        </button>
      </form>




    </div>
  )
}
