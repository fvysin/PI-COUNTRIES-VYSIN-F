


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
  const countryData = useSelector((state) => state.countryId);

  useEffect(() => {
    dispatch(getCountryById(id));
    return () => {
      dispatch(clear());
    };
  }, [id]);

  return (
    <div className={style.container}>
      <NavBar/>

      <div className={style.main}>
        {countryData.length > 0 && (
          <section key={countryData[0].id}>
            <h3 className={style.name}>{countryData[0].name}</h3>
            <h3>ID: {countryData[0].id}</h3>
            <img className={style.imagen} src={countryData[0].image} alt={countryData[0].name} />
            <h4>Continent: {countryData[0].continents}</h4>
            <h4>Capital: {countryData[0].capital}</h4>
            <h4>Subregion: {countryData[0].subregion}</h4>
            <h4>Area: {countryData[0].area}</h4>
            <h4>Population: {countryData[0].population}</h4>

            <h4>Activities: </h4>
            {countryData[0].Activities.length > 0 ? (
              <ul>
                {countryData[0].Activities.map((activity, index) => (
                  <li key={index}>
                    <h5 className={style.h5}>{activity.name}</h5>
                    <p className={style.p}>Difficulty: {activity.difficulty}</p>
                    <p className={style.p}>Duration: {activity.duration} hrs.</p>
                    <p className={style.p}>Season: {activity.season}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={style.p}>No hay actividades turísticas disponibles.</p>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Detail;
