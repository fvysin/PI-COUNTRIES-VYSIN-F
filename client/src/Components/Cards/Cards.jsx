/* eslint-disable react/prop-types */
import style from './Cards.module.css'
import Card from '../Card/Card';

const Cards=({countries})=> {
  //recibe 'countries' que viene del Home
    return (
   <div className={style.container}>
      {countries?.map (user=>
        <Card 
            name={user.name}
            key={user.id}
            id={user.id}
            area={user.area}
            image={user.image}
            population={user.population}
            continents={user.continents}
            subregion={user.subregion}
            />
  )}
      </div>
)} 

export default Cards

