import axios from 'axios'
import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    GET_BY_NAME,
    GET_ALL_ACTIVITIES,
    FILTER,
    // NEXT_PAGE,
    // PREV_PAGE,
    // NUMBER_PAGE,
    POST,
    CLEAR,
    // PAGINATE

} from './actionsTypes'


//payload: estás pasando esos datos al reducer para que pueda actualizar el estado de la aplicación con la nueva lista de países .LUGAR DONDE SE PONEN DATOS RELEVANTES PARA QUE SE PUEDA ACTUALIZAR EL ESTADO 
export const getAllCountries=()=>{
    return async function(dispatch){

        const apiData= await axios.get ("http://localhost:3001/countries")
        // console.log ('apidata actions', apiData)
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

export const getAllActivities = () => {
    return async function (dispatch){
        const apiData= await axios.get (`http://localhost:3001/activities`)
        const dataApi=apiData.data
        dispatch({
            type: GET_ALL_ACTIVITIES,
                 payload: dataApi
          })   
                     
     }}

export const postActivities = (input) => {
 return async function (dispatch){
        const apiData= await axios.post (`http://localhost:3001/activities`, input)
        const dataApi=apiData.data
        console.log('actions post ', dataApi)
        // console.log('apidata', apiData)
        dispatch({
            type: POST,
             payload: dataApi
            })   
    }     
    }
    

    export const clear=()=> {
        return function (dispatch) {
          dispatch({
            type: CLEAR,
          });
        };
      }

export const continentFilter=(order) =>{
    return function (dispatch) {
      dispatch({
        type: FILTER,
        payload: order,
      });
    };
  }



// export const paginate =(order)=>{
//     console.log('paginate', order)
//     return function (dispatch){
//         dispatch({
//             type:PAGINATE ,
//             payload:order
//         })

//     }
// }