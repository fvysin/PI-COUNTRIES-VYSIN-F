/* eslint-disable no-case-declarations */
import {
    GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    GET_BY_ID,
    GET_BY_NAME,
    POST,
    // NEXT_PAGE,
    // PREV_PAGE,
    // NUMBER_PAGE,
    // PAGINATE,
    CLEAR,
    // FILTER
} from './actionsTypes'

let initialState={
    countries:[],
    countryCopy:[],
    activities:[],
    countryId:[],
    countryName:[],
    postActivity:[],
    currentPage:0,
    filteredCountries:[]
}




const  reducer=(state= initialState, action)=> {
  


  // const filteredCountries = [...state.filteredCountries].length > 0 ? state.cou : state.countryCopy;
      
  switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries:action.payload,
                countryCopy:action.payload,
                filteredCountries:action.payload
            }
            case GET_BY_ID:
                return {
                ...state, 
                  countryId: action.payload}
            
            case GET_BY_NAME:
                return {
                    ...state, 
                    countries:action.payload,
                    filteredCountries:action.payload
                  }
    
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
                    // return{
                    // ...state,
                    // activities:[...state.activities, action.payload]
                    // };
                    return {
                        ...state,
                        countries: [...state.countries].map((country) => {
                          if (country.id === action.payload.id) {
                            return {
                              ...country,
                              activities: [...country.activities, action.payload],
                            };
                          } else {
                            return country;
                          }
                        }),
                      };

            // case PAGINATE:
            //   // const next_page = state.currentPage + 1;
            //   // const prev_page = state.currentPage - 1;
            //   // const firstIndex = action.payload === "next" ? next_page * itemsPerPage : prev_page * itemsPerPage;
            //   // const lastIndex= firstIndex + itemsPerPage

            //   // if (action.payload === "next" && lastIndex >= state.filteredCountries.length) return state;
            //   // if (action.payload === "prev" && prev_page < 0) return state;
              
            //   // return {
            //   //     ...state,
            //   //     allCountries: state.filteredCountries.slice(firstIndex, itemsPerPage),
            //   //                                                 //0           10
            //   //     currentPage: action.payload === "next" ? next_page : prev_page,

            //   // };
            //   const itemsPerPage = 10;
            //   const next_page = state.currentPage + 1;
            //   const prev_page = state.currentPage - 1;
            //   const firstIndex = action.payload === "next" ? next_page * itemsPerPage : prev_page * itemsPerPage;
            //   const lastIndex = firstIndex + itemsPerPage;

            //   if (action.payload === "next" && lastIndex >= state.countryCopy.length) return state;
            //   if (action.payload === "prev" && prev_page < 0) return state;

            //   return {
            //       ...state,
            //       allCountries: state.countryCopy.slice(firstIndex, lastIndex),
            //       currentPage: action.payload === "next" ? next_page : prev_page,
            //   };


              


            default:
            return state
}    
}
export default reducer



