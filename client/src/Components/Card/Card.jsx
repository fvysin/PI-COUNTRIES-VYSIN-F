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

    {/* {activities?.length > 0 && (
      <h3>Activities:</h3>
      )}
    <div className={style["grid-container"]}>
      {activities?.map((activity, index) => (
        <span key={index} className={style.activity}>
          {activity}
        </span>  
      ))}
    </div> */}
        </div>
        )
      }
      

export default Card
