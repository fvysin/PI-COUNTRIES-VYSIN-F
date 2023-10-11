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

            <h4>Activities: 
            {countryData[0].Activities.length > 0 ? (
              <ul>
                {countryData[0].Activities.map((activity, index) => (
                  <li key={index}>
                    <h5 className={style.p}>・Name: {activity.name}</h5>
                    <h5 className={style.p}>・Duration: {activity.duration} hrs.</h5>
                    <h5 className={style.p}>・Difficulty: {activity.difficulty}</h5>
                    <h5 className={style.p}>・Season: {activity.season}</h5>
                  </li>
                ))}
              </ul>
            ) : (
              <h4 className={style.p}>No activities.</h4>
            )}
          </h4>
          </section>
        )}
      </div>
    </div>
  );
};

export default Detail;
