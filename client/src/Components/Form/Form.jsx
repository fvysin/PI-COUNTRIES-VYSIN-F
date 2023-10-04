/* eslint-disable no-restricted-globals */
import style from './Form.module.css'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {getAllCountries, postActivities} from '../../Redux/actions'
import validation from './validation'



const Form =()=>{
    
    const dispatch= useDispatch() 
    const allCountries= useSelector(state=>state.countries).sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
  });
  //PRA ORDENAR ORDEN ALFABETICO
        // console.log('all count form', allCountries)
        //busca el estado del reducer
        //OJOOOOOOOOOO

    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])
    // console.log('form', getAllCountries)
    

    const [input, setInput]= useState({
        //useState-> estado local para guardar el valor de cada input
        name:"",
        difficulty:"", 
        duration:"",
        season: "", 
        countries: "", 
        activities:[]
  
    })
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors]= useState({
        name:"",
        difficulty:"", 
        duration:"",
        season: "", 
        countries: "", 
        activities:[]
      
    })
  

const handleChange=(event)=>{
  //se usa para acutalizar el estado local 'input'
  const nameProp = event.target.name; //separo asi es mas simple
  const valueProp = event.target.value;
  setInput({
    ...input,
    [nameProp]:valueProp
  })

  validation ({
    ...input,
    [nameProp]:valueProp
  })

  setErrors(validation({
    ...input, 
    [nameProp]: valueProp 
  }))
};


        
const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(postActivities(input))
        alert ('You have successfully created an activity')
        setInput({
          name:"",
          difficulty:"", 
          duration:"",
          season: "", 
          countries: "", 
          activities:[]

            })
          }

   
          
    return(
        <div>
         <form className={style.main} onSubmit={handleSubmit}> 
         <h1 className={style.titleForm}>CREATE ACTIVITY</h1>
            <div> 
                {/* {console.log('errores',errors)} */}
                {/* //HACER  ESTE CONSOLE.LOG PARA VER QUE APARECE EN LA CONSOLA DE LA WEB, SE PUEDE PONER 'const activities=[ "turismo, ganaderia"]', PARA PROBAR LAS ACTS SI NO LOS TENGO' */}
                {/* {console.log('nameError', errors.name)} */}
                <input
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  //poner texto dentro del input
                  type="text" 
                />
                {errors.name ? <p>{errors.name}</p> : null}
              
            </div >


            <div>
                <input 
                  id= "difficulty"
                  name="difficulty"
                  value={input.difficulty}
                  onChange={handleChange}
                  placeholder="Difficulty"
                  type="text" /> 
                {/* // ESTA BUENO EN TPO NUMBER, ASI APARECE EL PIQUITO PARA SUBIR O BAJAR EL PASO */}
                {errors.difficulty ? <p>{errors.difficulty}</p> : null}
               
            </div>
            <div>
                <input
                  name="duration"
                  value={input.duration}
                  onChange={handleChange}
                  placeholder="Duration"
                  type="text" />
                {errors.duration ? <p>{errors.duration}</p> : null}
                {/* {console.log('formheightmax',errors.height_max)} */}

            </div>

            <div>
                <input 
                  id= "season"
                  name="season"
                  value={input.season}
                  onChange={handleChange}
                  placeholder="Season"
                  type="radio" />Summer
                  <br/>
                <input 
                  id= "season"
                  name="season"
                  value={input.season}
                  onChange={handleChange}
                  placeholder="Season"
                  type="radio" />Autumn
                  <br/>
                <input 
                  id= "season"
                  name="season"
                  value={input.season}
                  onChange={handleChange}
                  placeholder="Season"
                  type="radio" />Winter     
              <br/>
                <input 
                  id= "season"
                  name="season"
                  value={input.season}
                  onChange={handleChange}
                  placeholder="Season"
                  type="radio" />Spring
                {errors.season ? <p>{errors.season}</p> : null}
            </div>
            <br/>
            
            <div>
            <label> Countries </label>
            <br/>  
           
            <select
              onChange={handleChange}  
              name ="countries" 
              id="countries" 
              value={input.countries}
              multiple={true}
              type="text">
            {allCountries?.map(country => (
            <option key={country.id} value={country.name}>
             {country.name}
             </option>
            ))}
             </select>
          </div>
        

            <div>

                {/* // de esta forma inhabilito el boton...pongo todos los errores */}
            {errors.name  || errors.season || errors.duration? null: 
            <button  
            type="submit">
            CREATE ACTIVITY
            </button>
            }
                </div>


        </form>
        </div>
    )
}

export default Form