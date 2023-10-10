/* eslint-disable react-hooks/exhaustive-deps */
import style from '../Detail/Detail.module.css';
import NavBar from '../NavBar/NavBar';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById, clear } from '../../Redux/actions';

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
    <div className={style.container}>
      <NavBar/>

      <div className={style.main}>
      {countryId && countryId.map((country) => (
        <section key={country.id}>
        
          <h3 className={style.name}>{country.name}</h3>
         
          <h3>ID: {country.id}</h3>
          <img className={style.imagen} src={country.image} alt={country.name} />
          <h3>Continent: {country.continents}</h3>
          <h3>Capital: {country.capital}</h3>
          <h3>Subregion: {country.subregion}</h3>
          <h3>Area: {country.area}</h3>
          <h3>Population: {country.population}</h3>
          
          <h3 >Activities: </h3>
          <h3>
            {activities.map((activity, index) => (
              <span 
              key={index} 
              className={style.activity}>
              {activity.name}
           
            </span>
          ))}
          </h3>
        </section>
      ))}
      </div>
    </div>
  );
};

export default Detail;
