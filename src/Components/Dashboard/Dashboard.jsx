import "./style.css"
export default function Dashboard() {
  return (
    <section id="dashboard">
      <div className="dash-menu-top">
        <div className="box-dash-menu">
          <div className="title">Teen Kids Music Festival</div>
          <div className="flex-exit">
            <ion-icon name="exit-outline"></ion-icon>
            <p>Voltar para a HOME</p>
          </div>
        </div>
      </div>

      <ul className="options-festival">
        <li>
          <div className="title-festival"> EDIÇÃO RIO DAS OSTRAS</div>
          <div className="date">
            Início: <strong>23/04/2026</strong>
          </div>
        </li>
        <li>
          <div className="title-festival">EDIÇÃO TRÊS RIOS</div>
          <div className="date">
            Início: <strong>23/04/2026</strong>
          </div>
        </li>
      </ul>
    </section>
  )
}
