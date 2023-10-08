// /* eslint-disable react-hooks/exhaustive-deps */
// import style from '../Detail/Detail.module.css'
// import { useParams } from "react-router-dom"
// import { useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getCountryById, clear } from '../../Redux/actions';
// import { Link } from 'react-router-dom';


// const Detail=()=> {
//   const {id} = useParams();
//   // console.log("detail var id",id)
  
//   const dispatch = useDispatch()

//   const countryId = useSelector((state)=>state.countryId)
//   const activities= useSelector((state)=>state.activities)
// // console.log('countryI',countryId)

//   useEffect(()=>{
//     dispatch(getCountryById(id))
//     return() => {
// 			dispatch(clear());
//     };
//   }, [])

  
 
// 	return (
    
//     <div className={style.main}>
//          <div className={style.landing}>
//         <Link to ="/Home">
//         <button className={style.button}>BACK ⬅️ </button>
//         </Link>
//       </div>

// 		<h1 className={style.cardTitleCont}> DETAIL </h1>

//     {countryId && countryId.map((countryId) => (
//       <section key={countryId.id} className={style.main}>
//         <h2>ID: {countryId.id}</h2>
//         <h2>Name: {countryId.name}</h2>
//         <img className={style.imagen} src={countryId.image} alt={countryId.name} />
//         <h2>Continent: {countryId.continents}</h2>
//         <h2>Capital: {countryId.capital}</h2>
//         <h2>Subregion: {countryId.subregion}</h2>
//         <h2>Area: {countryId.area}</h2>
//         <h2>Population: {countryId.population}</h2>
        
//         <h2 >Activities: </h2>
//         {activities.activities?.map((activity, index)=> (
//           <span key={index} className={style.activity}>{activity.name}
//               </span> 
//         ))}

//    </section>
//      ))}
  
// </div>
//   )
// }

// export default Detail



/* eslint-disable react-hooks/exhaustive-deps */
import style from '../Detail/Detail.module.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById, clear } from '../../Redux/actions';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryId = useSelector((state) => state.countryId);
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getCountryById(id));
    return () => {
      dispatch(clear());
    };
  }, []);

  return (
    <div className={style.main}>
      <div className={style.landing}>
        <Link to="/Home">
          <button className={style.button}>BACK ⬅️ </button>
        </Link>
      </div>

      <h1 className={style.cardTitleCont}> DETAIL </h1>
      {countryId && countryId.map((country) => (
        <section key={country.id} className={style.main}>
          <h2>ID: {country.id}</h2>
          <h2>Name: {country.name}</h2>
          <img className={style.imagen} src={country.image} alt={country.name} />
          <h2>Continent: {country.continents}</h2>
          <h2>Capital: {country.capital}</h2>
          <h2>Subregion: {country.subregion}</h2>
          <h2>Area: {country.area}</h2>
          <h2>Population: {country.population}</h2>
          
          <h2 >Activities: </h2>
          <h2>
            {activities.map((activity, index) => (
              <span 
              key={index} 
              className={style.activity}>
              {activity.name}
              <br>
              </br>
            </span>
          ))}
          </h2>
        </section>
      ))}
    </div>
  );
};

export default Detail;
