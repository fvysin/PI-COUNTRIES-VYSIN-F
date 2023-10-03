import { useEffect } from "react";
import Cards from "../Cards/Cards"
import { useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { getAllCountries } from "../../Redux/actions";

const Home=()=> {

  const countries= useSelector(state=>state.countries)

  const dispatch= useDispatch()
  
  useEffect(()=>{
    dispatch(getAllCountries())
  }, [dispatch])

  return (
    <div className="video-background">
  
      <Cards countries ={countries}/>
      {/* Cards le está proporcionando datos a través de la prop countries, permitiendo que el componente Cards utilice esos datos en su interior para renderizar elementos específicos en la interfaz de usuario. */}
      </div>
  )
}



export default Home