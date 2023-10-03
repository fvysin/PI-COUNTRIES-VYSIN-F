import style from '../Detail/Detail.module.css'
import { useParams } from "react-router-dom"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById, clear } from '../../Redux/actions';


const Detail=()=> {
  const {id} = useParams();
  // console.log("detail var id",id)
  
  const dispatch = useDispatch()

  const countryId = useSelector((state)=>state.countryId)
console.log('countryI',countryId)

  useEffect(()=>{
    dispatch(getCountryById(id))
    return() => {
			
			dispatch(clear());};
  }, [dispatch, id])



  return (
          <div className={style.main}>
            <h2>ID: {countryId.id}</h2>
            <h2>Nombre: {countryId.name}</h2>
            <img className={style.imagen} src={countryId.image} alt={countryId.name} />
            <h2>Continente: {countryId.continents}</h2>
            <h2>Capital: {countryId.capital}</h2>
            <h2>Subregión: {countryId.subregion}</h2>
            <h2>Área: {countryId.area}</h2>
            <h2>Población: {countryId.population}</h2>

   
          </div>
  )
}

export default Detail
