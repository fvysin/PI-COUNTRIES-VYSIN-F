import style from './About.module.css'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
        <h2 className={style.main}>
            Hola, soy Florencia.
            ¡Esta es mi primer SPA!
           <br />
            <Link to="/Home">
          <button className={style.button}>Home</button>
        </Link>
        </h2>
        
    </div>
  )
}



