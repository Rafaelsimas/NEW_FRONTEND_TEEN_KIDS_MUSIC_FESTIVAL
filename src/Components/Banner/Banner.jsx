/* ================IMAGES BANNER===================== */
import logoMainBanner from "../../assets/img/logoBanner.png"
import youtube from "../../assets/icons/yt.png"
import facebook from "../../assets/icons/fb.png"
import instagram from "../../assets/icons/ig.png"
import { Link } from "react-router-dom"
import "./style.css"
import Menu from "../Menu/Menu"
export default function Banner() {
  const goYouTube = () => {
    window.location.href = "https://www.youtube.com/@teenkidsmusicfestivalro"
  }
  return (
    <div className="banner">
      <Menu />

      <div className="box-banner">
        <div className="text">
          <button className="btn-info">VIVA ESSA EXPERIÊNCOIA</button>
          <div className="xl-text-banner">
            VOCÊ SONHA EM MOSTRAR SEU TALENTO PARA O MUNDO?
          </div>

          <div className="btn-box">
            <button className="btn-home-action btn-inscricao">
              <Link to="/inscrição">INSCREVA-SE</Link>
            </button>
            <button onClick={goYouTube} className="btn-home-action yt">
              Acesse nosso canal
            </button>
          </div>

          <p>@2026 Teen 1kids 1music - Todos os direitos reservados</p>
        </div>
        <div className="box-image">
          <img src={logoMainBanner} alt="" />
          <div className="box-social">
            <p>.</p>
            <div className="social-flex">
              <div className="msg">Acompanhe nossas redes sociais</div>
              <img src={youtube} className="social-icon" alt="" />
              <img src={facebook} className="social-icon" alt="" />
              <img src={instagram} className="social-icon" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
