/* eslint-disable no-case-declarations */
import {
    GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    GET_BY_ID,
    GET_BY_NAME,
    POST,
    FILTER_COUNTRY_BY_CONTINENT,
    FILTER_COUNTRY_BY_ACTIVITY,
    CLEAR,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    // FILTER,
    // UPDATE_ACTIVITY
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

         case FILTER_COUNTRY_BY_ACTIVITY:
          const filteredActivity= state.countryCopy.filter((country)=>country.activities.length>0)
          ///countryCopy
          return { 
             ...state,
              countries: [...filteredActivity],          
               };

        case FILTER_COUNTRY_BY_CONTINENT:
          const filteredContinent= state.countryCopy.filter((country)=>country.continents===action.payload)
              return { 
                    ...state,
                     countries: action.payload === "all" ? state.countryCopy:[...filteredContinent],          
                  } ;


          case ORDER_BY_NAME:
            const orderedByName = [...state.countries].sort((a, b) => {
              if (action.payload === "asc") {
                return a.name.localeCompare(b.name);
              } else {
                return b.name.localeCompare(a.name);
              }
            })
                return {
                  ...state,
                  countries: action.payload==="all" ? state.countryCopy: [...orderedByName],
                };
            

          case ORDER_BY_POPULATION:
            const orderByPopulation = [...state.countries].sort((a, b) => {
              if (action.payload === "asc") {
                return a.population - b.population;
              } else {
                return b.population - a.population;
              }
            });
            return {
              ...state,
              countries: action.payload==="all" ? state.countryCopy:[...orderByPopulation]
            };
           
            // case UPDATE_ACTIVITY:
            //   return {
            //       ...state,
            //       activities: state.activities.map(activity => activity.id === action.payload.id ? action.payload : activity),
            //       isLoading: false,
            //   }
            

            default:
            return state
}    
}
export default reducer



