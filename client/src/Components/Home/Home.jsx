
import style from './Home.module.css'
// import About from '../About/About';
import Cards from "../Cards/Cards"
import NavBar from "../NavBar/NavBar";
import Pagination from '../Pagination/Pagination'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getAllActivities } from "../../Redux/actions";
import {
  orderByName,
  orderByPopulation,
  activityFilter,
  continentFilter,
} from '../../Redux/actions'

const Home = () => {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  const [pagina, setPagina] = useState(1);
  const porPag = 10;
  const maximo = Math.ceil(countries.length / porPag);

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());

    setPagina(1);
  }, [dispatch]);

 

  const paginacionInicio = (pagina - 1) * porPag;
  const paginacionFin = pagina * porPag;
  const paisesPaginados = countries.slice(paginacionInicio, paginacionFin);


  const handleFilterContinent = (e) => {
    if (e.target.value === "all") {
      dispatch(continentFilter(e.target.value));
    }
    if (
      e.target.value === "North America" ||
      e.target.value === "South America" ||
      e.target.value === "Europe" ||
      e.target.value === "Africa" ||
      e.target.value === "Asia" ||
      e.target.value === "Oceania" ||
      e.target.value === "Antarctica"
    ) {
      dispatch(continentFilter(e.target.value));
    }
   
  };


  const handleFilterActivity = (e) => {
    if (e.target.value === "activity") {
      dispatch(activityFilter(e.target.value));
    }
  };


  const handleOrderPopulation = (e) => {
    if (e.target.value === "pop") {
      dispatch(orderByPopulation(e.target.value));
    }
  };

  const handleOrderName = (e) => {
    if (e.target.value === "all") {
      dispatch(orderByName(e.target.value));
    }
    if (e.target.value === "asc") {
      dispatch(orderByName(e.target.value));
    }
    if (e.target.value === "desc") {
      dispatch(orderByName(e.target.value));
    }
    
  };
  
  return (
    
    <div className={style.container}>
      <NavBar setPagina={setPagina}/>
      
      <div className={style.divFilters}>
        <select
          onChange={handleOrderName}
          className={style.selectStyle}
        >
          <option value="order">--Order by Name--</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <select
          onChange={handleOrderPopulation}
          className={style.selectStyle}>
          <option value="order">--Order by Population--</option>
          <option value="pop">Population</option>
        </select>

        <select
          onChange={handleFilterContinent}
          className={style.selectStyle}
        >
          <option value="all">--Filter by Continent--</option>
          <option value="North America"> North America</option>
          <option value="South America"> South America</option>
          <option value="Europe"> Europe</option>
          <option value="Africa"> Africa</option>
          <option value="Asia"> Asia</option>
          <option value="Oceania"> Oceania</option>
          <option value="Antarctica"> Antarctica</option>
        </select>


        <select
          onChange={handleFilterActivity}
          className={style.selectStyle}
        >
          <option value="activity">--Filter by Activity</option>
          <option value="activity">Activity</option>
       
        </select>





      </div>
      <div className={style.containerSec}>

        <Cards countries={paisesPaginados} />
     
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>

    </div>
  );
}

export default Home;
