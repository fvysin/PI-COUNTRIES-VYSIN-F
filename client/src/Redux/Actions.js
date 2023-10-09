import axios from 'axios'
import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    GET_BY_NAME,
    GET_ALL_ACTIVITIES,
    FILTER_COUNTRY_BY_ACTIVITY,
    FILTER_COUNTRY_BY_CONTINENT,
    POST,
    CLEAR,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    SEARCH_ID_KEEP
    // UPDATE_ACTIVITY

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
            alert("No se ha encontrado el país")
            
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
        // console.log('actions post ', dataApi)
        // console.log('apidata', apiData)
        dispatch({
            type: POST,
             payload: dataApi
            })   
    }     
    }
    
    // export const updateActivity = (payload) => {
    //     return async (dispatch) => {
         
    
    //             const { data } = await axios.put(`http://localhost:3001/activities${payload.id}`, payload);
    //             dispatch({
    //                 type: UPDATE_ACTIVITY,
    //                 payload: data
    //             })
    
    //         }
    //     }
    
    export const clear=()=> {
        return function (dispatch) {
          dispatch({
            type: CLEAR,
          });
        };
      }

export const continentFilter=(continent) =>{
    return function (dispatch) {
      dispatch({
        type: FILTER_COUNTRY_BY_CONTINENT,
        payload: continent,
      });
    };
  }

  
  export const activityFilter=(activity) =>{
      return function (dispatch) {
        dispatch({
          type: FILTER_COUNTRY_BY_ACTIVITY,
          payload: activity,
        });
      };
    }


export const orderByName=(name)=>{
    return function (dispatch){
        dispatch({
            type: ORDER_BY_NAME,
            payload:name,
        })
    }
}
export const orderByPopulation=(population)=>{
    return function (dispatch){
        dispatch({
            type: ORDER_BY_POPULATION,
            payload:population,
        })
    }
}

export const searchIdKeep = (query, results) => {
    return {
      type: SEARCH_ID_KEEP,
      payload: query, results
    };
  };