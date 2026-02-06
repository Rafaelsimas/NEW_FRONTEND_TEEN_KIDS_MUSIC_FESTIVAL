import "./style.css"
import { Link } from "react-router-dom"
import { useState } from "react"
export default function Menu() {
  const [opencloseMenu, setOpenCloseMenu] = useState(0)

  function openDrawer() {
    setOpenCloseMenu(1)
  }

  function closeDrawer() {
    setOpenCloseMenu(0)
  }
  return (
    <>
      <header>
        <nav>
          <a href="#" className="titleTop">
            Teen Kids Music Festival
          </a>
          <ul className="linkPageFlex">
            <li>HOME</li>
            <li onClick={VerGaleria}>NOSSA GALERIA</li>
            <li onClick={VerBanda}>
              BANDA <span>2026</span>
            </li>
            <li className="active">
              <Link to="/inscrição">INSCREVA-SE</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="menu-mobile">
        <div className="box-moile">
          <div className="title-mobile-top">Teen Kids Music Festival</div>
          <ion-icon onClick={openDrawer} name="menu-outline"></ion-icon>
        </div>
      </div>
      <ul
        className={
          opencloseMenu === 0
            ? "box-drawer-mobile display-hidden"
            : "box-drawer-mobile"
        }
      >
        <li>HOME</li>
        <li onClick={VerGaleria}>NOSSA GALERIA</li>
        <li onClick={VerBanda}>
          BANDA <span>2026</span>
        </li>
        <li className="active">
          <Link to="/inscrição">INSCREVA-SE</Link>
        </li>
        <li onClick={closeDrawer}>x</li>
      </ul>
    </>
  )
}

function VerGaleria() {
  alert("Em breve você poderá visualizar nossa galeria!❤️")
}
function VerBanda() {
  alert("⚠️Em breve você conhecerá a banda da edição 2026!⚠️")
}
