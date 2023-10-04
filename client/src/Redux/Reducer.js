import {
    GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    GET_BY_ID,
    GET_BY_NAME,
    POST,
    // ORDER,
    CLEAR,
    // FILTER
} from './actionsTypes'

const initialState={
    countries:[],
    countryCopy:[],
    activities:[],
    countryId:[],
    countryName:[],
    postActivity:[]

}




const  reducer=(state= initialState, action)=> {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries:action.payload,
                countryCopy:action.payload
            }
            case GET_BY_ID:
                return {
                ...state, 
                  countryId: action.payload}
            
            case GET_BY_NAME:
                return {
                    ...state, 
                    countries:action.payload}
    
            case GET_ALL_ACTIVITIES:
                return{
                    ...state,
                    activities:action.payload
                     };
            case CLEAR:
            return {
                    ...state,
                    countryId: [],          
                };

            case POST:
                return{
                ...state,
                activities:[...state.activities, action.payload]
                };

            default:
            return {...state}    
    }




}
export default reducer



//escucha una action y cambia el initial state y devuelve un nuevo valor