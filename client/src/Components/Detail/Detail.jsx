import style from '../Detail/Detail.module.css'
import { useParams } from "react-router-dom"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById, clear } from '../../Redux/actions';
import { Link } from 'react-router-dom';


const Detail=()=> {
  const {id} = useParams();
  // console.log("detail var id",id)
  
  const dispatch = useDispatch()

  const countryId = useSelector((state)=>state.countryId)
console.log('countryI',countryId)

  useEffect(()=>{
    dispatch(getCountryById(id))
    return() => {
			dispatch(clear());
    };
  }, [dispatch, id])

  
  
	return (
    
    <div className={style.main}>
         <div className={style.landing}>
        <Link to ="/Home">
        <button className={style.button}>BACK ⬅️ </button>
        </Link>
      </div>

		<h1 className={style.cardTitleCont}> DETAIL </h1>
    {countryId && countryId.map(countryId => (
  <section key={countryId.id} className={style.main}>
    <h2>ID: {countryId.id}</h2>
    <h2>Name: {countryId.name}</h2>
    <img className={style.imagen} src={countryId.image} alt={countryId.name} />
    <h2>Continent: {countryId.continents}</h2>
    <h2>Capital: {countryId.capital}</h2>
    <h2>Subregion: {countryId.subregion}</h2>
    <h2>Area: {countryId.area}</h2>
    <h2>Population: {countryId.population}</h2>
  </section>
))}
</div>
  )
}

export default Detail
