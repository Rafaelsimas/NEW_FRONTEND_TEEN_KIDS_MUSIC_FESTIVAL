import "./style.css"
import { Link } from "react-router-dom"
export default function Dashboard() {
  return (
    <section id="dashboard">
      <div className="dash-menu-top">
        <div className="box-dash-menu">
          <div className="title">Teen Kids Music Festival</div>
          <div className="flex-exit">
            <Link to="/">
              <ion-icon name="exit-outline"></ion-icon>
              <p>Voltar para a HOME</p>
            </Link>
          </div>
        </div>
      </div>

      <ul className="options-festival">
        <Link to="/riodasostras">
          <li>
            <div className="title-festival"> EDIÇÃO RIO DAS OSTRAS</div>
            <div className="date">
              Início: <strong>EM BREVE</strong>
            </div>
          </li>
        </Link>
        <Link to="/tresrios">
          <li>
            <div className="title-festival">EDIÇÃO TRÊS RIOS</div>
            <div className="date">
              Início: <strong>EM BREVE</strong>
            </div>
          </li>
        </Link>
      </ul>
    </section>
  )
}
