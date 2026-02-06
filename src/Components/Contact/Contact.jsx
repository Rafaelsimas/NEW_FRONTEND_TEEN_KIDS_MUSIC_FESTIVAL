import "./style.css"
import tel from "../../assets/icons/Vector.png"
import mail from "../../assets/icons/mail 1.png"
export default function Contact() {
  const informationAboutFestival = () => {
    const phone = 5522999592198
    const msgUser = `\n⚠️Olá, vim pelo site do TEEN KIDS MUSIC\n
  -Eu gostaria de mais informações sobre o festival\n 
  `
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msgUser)}`
    window.open(url, "_blank")
  }
  return (
    <div className="contact">
      <div className="box-contact">
        <div className="contact-text-area">
          <div className="title-section">Entre em contato com a gente!</div>
          <div className="subtitle-section">
            Entre em contato com o Teen Kids Music, queremos tirar suas dúvidas,
            ouvir suas críticas e sugestões.
          </div>
          <button onClick={informationAboutFestival}>Entrar em contato</button>
        </div>
        <ul className="contact-active">
          <li>
            <img src={tel} alt="" />
            <div>22 99959-2198</div>
          </li>
          <li>
            <img src={mail} alt="" />
            <div>hsprodutora@gmail.com</div>
          </li>
        </ul>
      </div>
    </div>
  )
}
