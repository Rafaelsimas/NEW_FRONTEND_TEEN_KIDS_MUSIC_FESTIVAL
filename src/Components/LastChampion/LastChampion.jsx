/* ================IMAGES CHAMPIONS===================== */
import champion1 from "../../assets/img/champion1.png"
import champion2 from "../../assets/img/champion2.png"
/* ================IMAGES CARD===================== */
import arrow from "../../assets/icons/arrow.png"
import star from "../../assets/icons/star.png"
import Vector from "../../assets/icons/Vector.png"
import "./style.css"
export default function LastChampion() {
  return (
    <section id="lastChampion">
      <ul className="box-details">
        <li>
          <img src={arrow} alt="" />
          <div className="text">
            Seu talento merece ser visto por todos que são apaixonados por arte.
          </div>
        </li>
        <li>
          <img src={star} alt="" />
          <div className="text">
            Construa o seu futuro musical em um ambiente focado no crescimento
          </div>
        </li>
        <li>
          <img src={Vector} alt="" />
          <div className="text">
            Participe de uma comunidade incrível onde todos correm na mesma
            direção
          </div>
        </li>
      </ul>

      <div className="title-section">CAMPEÕES DAS ÚLTIMAS EDIÇÕES</div>
      <div className="subtitle-section">Todas as categorias</div>

      <ul className="data-images-champions">
        <li>
          <img src={champion1} alt="" />
        </li>
        <li>
          <img src={champion2} alt="" />
        </li>
        <li>
          <img src={champion1} alt="" />
        </li>
        <li>
          <img src={champion1} alt="" />
        </li>
        <li>
          <img src={champion1} alt="" />
        </li>
      </ul>
    </section>
  )
}
