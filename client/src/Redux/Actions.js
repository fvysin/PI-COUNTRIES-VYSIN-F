import axios from 'axios'
import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    GET_BY_NAME,
    GET_ALL_ACTIVITIES,
    FILTER,
    ORDER,
    POST,
    CLEAR
} from './actionsTypes'


//payload: estás pasando esos datos al reducer para que pueda actualizar el estado de la aplicación con la nueva lista de países .LUGAR DONDE SE PONEN DATOS RELEVANTES PARA QUE SE PUEDA ACTUALIZAR EL ESTADO 
export const getAllCountries=()=>{
    return async function(dispatch){

        const apiData= await axios.get ("http://localhost:3001/countries")
        console.log ('apidata actions', apiData)
        const dataApi= apiData.data
        dispatch({
            type: GET_ALL_COUNTRIES,
            payload: dataApi
        })
    }
}

export const getCountryById = (id) => {
    return async function (dispatch){
        try {
            // console.log("actions var id", id)
            const apiData= await axios.get (`http://localhost:3001/countries/${id}`)
            const dataApi=apiData.data
          return  dispatch({ 
                type: GET_BY_ID,
                payload: dataApi
            })   
        } catch (error) {
            console.log("No se ha encontrado el país")
            
        }}}

export const getCountryByName = (name) => {
    return async function (dispatch){
        const apiData= await axios.get (`http://localhost:3001/countries?name=${name}`)
        const dataApi=apiData.data
        dispatch({
            type: GET_BY_NAME,
            payload: dataApi
        })
    }}

export const getTemperaments = () => {
    return async function (dispatch){
        const apiData= await axios.get (`http://localhost:3001/activities`)
        const dataApi=apiData.data
        dispatch({
            type: GET_ALL_ACTIVITIES,
                 payload: dataApi
          })   
                     
     }}

export const postActivities = (actPosteo) => {
 return async function (dispatch){
        const apiData= await axios.post (`http://localhost:3001/activities`, actPosteo)
        const dataApi=apiData.data
        dispatch({
            type: POST,
             payload: dataApi
            })   
    }     
    }
    

export const clear = () => {
    return { 
        type: CLEAR, 
        }
};

export function continentFilter(order) {
    return function (dispatch) {
      dispatch({
        type: FILTER,
        payload: order,
      });
    };
  }

  export const order = (order) => {
    return { 
        type: ORDER, 
        payload: order }
};