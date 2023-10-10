/* eslint-disable react/jsx-key */
/* eslint-disable no-restricted-globals */
import style from './Form.module.css'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {getAllCountries, postActivities} from '../../Redux/actions'
import validation from './validation'
import NavBar from '../NavBar/NavBar'
import image from '../Image/surf_-_36609(1080p).mp4'



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
        duration:"",
        difficulty:"", 
        season: "",  
        countries:[]
  
    })
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors]= useState({
        name:"",
        duration:"",
        difficulty:"", 
        season: "", 
        countries: [], 
     
      
    })
  

const handleChange=(event)=>{
  //se usa para acutalizar el estado local 'input'
  const nameProp = event.target.name; //es el nombre del input 'name, difficulty'
  const valueProp = event.target.value;//lo que escibo en la casilla ej 'florencia'
  // console.log('targetName', nameProp)
  // console.log('targetValue', valueProp)
  setInput({
    ...input,
    [nameProp]:valueProp
    //en la posicion event.target.name voy a guardar el value
  })

  const errors= validation ({
    ...input,
    [nameProp]:valueProp
  })

  setErrors(errors)
};


        
const handleSubmit = (event) => {
  event.preventDefault();
  if (
    !input.name ||
    errors.name ||

    !input.difficulty ||
    errors.difficulty ||

    !input.duration ||
    errors.duration ||

    !input.season ||
    errors.season ||

    !input.countries ||
    errors.countries
  ) {
    setErrors(validation(input));
  } else {
    dispatch(postActivities(input))
    
    alert("You have successfully created an activity");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  }
  // console.log('handlesubmit', handleSubmit)
};



const handleSelect =(event)=>{
  const nameProp = event.target.name;
  const valueProp = event.target.value;//lo que escibo en la casilla ej 

  if (nameProp==="countries"){
    if(input.countries.includes(valueProp))return
    setInput({
      ...input,
      [nameProp]:[...input[nameProp], valueProp]
    })
  }
}
   
const handleDelete =(event)=>{
 
  setInput({
    ...input,
    countries:input.countries.filter((count)=> count!==event.target.id)
    //el filter es para elimitar un pais seleccionado
    //en nameProp se actualiza la lista de paisess
    //actualiza la lista de países en el estado input excluyendo el país que fue clicado (cuyo ID corresponde a event.target.id). Esto se hace utilizando filter() para crear una nueva lista sin el país que se quiere eliminar y luego actualizando el estado del componente con esa nueva lista.
  })
}
          


    return(
      <div className={style.mainContainer}>
       

        <video autoPlay muted loop id="backgroundVideo" className={style.video}>
        <source src={image} type="video/mp4"/>
        </video>
        <NavBar/>
        <div className={style.container}>
         <form className={style.form} onSubmit={handleSubmit}> 
         <h1 className={style.titleForm}>CREATE ACTIVITY</h1>


            <div> 
                {/* {console.log('errores',errors)} */}
                {/* //HACER  ESTE CONSOLE.LOG PARA VER QUE APARECE EN LA CONSOLA DE LA WEB, SE PUEDE PONER 'const activities=[ "turismo, ganaderia"]', PARA PROBAR LAS ACTS SI NO LOS TENGO' */}
                {/* {console.log('nameError', errors.name)} */}
                <input
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  placeholder="Name"
                  //poner texto dentro del input
                  type="text" 
                  />
                {errors.name ? <p>{errors.name}</p> : null}
              
            </div >



            <div>
                <input
                  name="duration"
                  value={input.duration}
                  onChange={handleChange}
                  placeholder="Duration"
                  type="text" />
                {errors.duration ? <p>{errors.duration}</p> : null}
            </div>

            <div className={style.column}>
              <div className={style.div}>
                <label className={style.label}>Difficulty</label>
                <select
                  name="difficulty"
                  onChange={handleChange}
                  value={input.difficulty}
                  className={style.input}
                  >
                  <option value="">--Select Difficulty--</option>
                  <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                  <option value="2">⭐⭐ ☆ ☆ ☆</option>
                  <option value="3">⭐⭐⭐ ☆ ☆</option>
                  <option value="4">⭐⭐⭐⭐ ☆</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
              </div>
              {errors.difficulty ? <p>{errors.difficulty}</p> : null}
            </div>
              




  


        <div className={style.column}>
              <div className={style.div}>
                <label className={style.label}>Season</label>
                <select
                  name="season"
                  onChange={handleChange}
                  className={style.input}
                  value={input.season}
                >
                  <option value="">--Select Season--</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                </select>
              </div>
                {errors.season ? <p>{errors.season}</p> : null}
            </div> 
          
            

            <div>
           
            <br/>  
            <select
              name ="countries" 
              id="countries" 
              value={input.countries}
              onChange={handleSelect}  
              //maneja los cambios en el menú desplegable. Cuando el usuario selecciona un país, este país se agrega al estado input.countries
              >
              <option value=''>--Select Countries--</option>
                {allCountries?.map(countries => 
                <option key={countries.id} value={countries.name}>
                {countries.name}
              </option>
              )}
             </select>
             
             <div>
              {
              input.countries.map((coun)=> 
            <div>
           <label>{coun}</label> 
            <button 
              name='countries' 
              id={coun} 
              onClick={handleDelete}
              >X</button>
            </div>)
                }
              </div>
          </div>
        

            <div>
            <button  
            type="submit"
            onClick={handleSubmit}>
            CREATE ACTIVITY
            </button>
            
            </div>


        </form>
        </div>
        </div>
    )
}

export default Form