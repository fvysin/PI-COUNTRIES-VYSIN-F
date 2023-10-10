import style from './About.module.css'
import NavBar from "../NavBar/NavBar";

export default function About() {
  return (
    <div className={style.container}>
      <NavBar/>
        <div className={style.main}>
          <p className={style.text}>
            Hola, soy Florencia.
          </p>
            <p className={style.text2}>
            ¡Esta es mi primer SPA!
          </p>

        </div>
        
    </div>
  )
}



