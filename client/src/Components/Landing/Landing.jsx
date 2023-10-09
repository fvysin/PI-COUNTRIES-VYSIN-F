import style from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing=()=> {
    return (
      <div className={style.landing}>
        
        <div className={style.container}>
        <div className={style.text}>
          <h2>WELCOME TO THE COUNTRY API</h2>
        </div>
        <Link to ="/home">
         <button className={style.button}>GO!</button>
        </Link>
        </div>


   
            

      </div>
    );
  }
  
  export default Landing;
