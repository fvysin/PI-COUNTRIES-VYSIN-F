// /* eslint-disable no-unused-vars */
// // import { useEffect, useState } from "react";
// // import Cards from "../Cards/Cards"
// // import { useDispatch} from 'react-redux'
// // import { useSelector } from 'react-redux';
// // import { getAllCountries, getAllActivities,  } from "../../Redux/actions";
// // import Pagination from '../Pagination/Pagination'

// // const Home=()=> {

// //   const countries= useSelector(state=>state.countries.sort((a, b) => {
// //     if (a.name < b.name) return -1;
// //     if (a.name > b.name) return 1;
// //     return 0;
// // }))

// //   const dispatch= useDispatch()
// //   // const [loading, setLoading]= useState(true)
// //   // const page= useSelector ((state)=>state.currentPage)
// //   // const numCountries=useSelector ((state)=>state.filteredCountries)
// //   // console.log('numcountries', numCountries)



// //   const [pagina, setPagina]= useState(1)
// //   const [porPag, setPorPagina]=useState(10)
// //   const maximo=countries.length /porPag

// //   // const maxPage=Math.ceil(numCountries.length / 10)
// //     // console.log('math', maxPage)
 
// //   useEffect(()=>{
// //     dispatch(getAllCountries())
// //     dispatch(getAllActivities())
    
// //     // setLoading(true)
// //     // setTimeout(()=> setLoading(false), 1000)

// //   // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [dispatch])


// //   return (
// //     <div className="video-background">
  
// //          <Pagination page={page} maxPage={maxPage} />
    
// //           <Cards countries={countries} />

   
         
// //       </div>
// //   )
// // }



// // export default Home





// import { useEffect, useState } from "react";
// import Cards from "../Cards/Cards"
// import { useDispatch} from 'react-redux'
// import { useSelector } from 'react-redux';
// import { getAllCountries, getAllActivities,  } from "../../Redux/actions";
// import Pagination from '../Pagination/Pagination'

// const Home=()=> {


//     const countries= useSelector(state=>state.countries)
// //       .sort((a, b) => {
// //     if (a.name < b.name) return -1;
// //     if (a.name > b.name) return 1;
// //     return 0;
// // }))

//   const dispatch= useDispatch()



// const [pagina, setPagina]= useState(1)
// const [porPag, setPorPagina]=useState(10)
// const maximo=countries.length /porPag



// useEffect(()=>{
//       dispatch(getAllCountries())
//       dispatch(getAllActivities())
//     }, [dispatch])


// return (
//   <div className="video-background">

//   {countries
//   .slice(pagina -1) * porPag (pagina-1)* porPag + porPag}
// <div>
//   <Pagination pagina ={pagina} setPagina={setPagina} maximo={maximo}/>
//   <Cards countries={countries} />

// </div>
// </div>
// )

// }


// export default Home



import  { useEffect, useState } from "react";
import Cards from "../Cards/Cards"
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getAllActivities } from "../../Redux/actions";
import Pagination from '../Pagination/Pagination';

const Home = () => {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  const [pagina, setPagina] = useState(1);
  const porPag = 10;
  const maximo = Math.ceil(countries.length / porPag);

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, [dispatch]);

  const paginacionInicio = (pagina - 1) * porPag;
  const paginacionFin = pagina * porPag;
  const paisesPaginados = countries.slice(paginacionInicio, paginacionFin);

  return (
    <div className="video-background">
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <div>
        <Cards countries={paisesPaginados} />
      </div>
    </div>
  );
}

export default Home;
