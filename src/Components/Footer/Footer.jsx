import "./style.css"
import instagram from "../../assets/icons/instagram 1 (1).png"
import facebook from "../../assets/icons/facebook 1 (1).png"
import youtube from "../../assets/icons/youtube 1 (1).png"
export default function Footer() {
  return (
    <footer>
      <div className="box-footer">
        <div className="title-footer">Teen Kids Music Festival</div>
        <ul className="social-footer">
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={youtube} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  )
}
