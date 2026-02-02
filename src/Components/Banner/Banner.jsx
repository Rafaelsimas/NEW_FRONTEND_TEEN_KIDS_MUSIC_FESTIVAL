/* ================IMAGES BANNER===================== */
import logoMainBanner from "../../assets/img/logoBanner.png"
import youtube from "../../assets/icons/yt.png"
import facebook from "../../assets/icons/fb.png"
import instagram from "../../assets/icons/ig.png"
import "./style.css"
import Menu from "../Menu/Menu"
export default function Banner() {
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
              INSCREVA-SE
            </button>
            <button className="btn-home-action yt">Acesse nosso canal</button>
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
