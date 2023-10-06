/* eslint-disable react/prop-types */
import style from './Card.module.css'
import {Link} from 'react-router-dom'

const Card=({id, name, image, continents })=> {
    // console.log("Card var id",id)

 
  return (
    <div className={style.container}>
    <Link to={`/countries/`+ id} >
      <br></br>
    <h4 className={style.name}>{name}</h4>
    </Link>
    <img src={image} alt={""} className={style.image}/>
    <h4 className={style.continents} > Continent: {continents}  </h4>   
        </div>
        )
      }
      

export default Card
