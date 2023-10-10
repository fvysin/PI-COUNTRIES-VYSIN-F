/* eslint-disable react/prop-types */
import style from "../Pagination/Pagination.module.css";

const Pagination = ({ pagina, setPagina, maximo }) => {

  const handlePrevClick = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  }

  const handleNextClick = () => {
    if (pagina < maximo) {
      setPagina(pagina + 1);
    }
  }

  return (
    <div className={style.paginator}>
      <button className={style.button} name='prev' onClick={handlePrevClick}>Prev</button>
      <span className={style.text}>{pagina}/{maximo}</span>
      <button className={style.button} name='next' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Pagination;
