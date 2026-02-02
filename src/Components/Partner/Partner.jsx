/* ================IMAGES PARTNER===================== */
import partner1 from "../../assets/partnerLogo/partner1.png"
import partner2 from "../../assets/partnerLogo/partner2.png"
import partner3 from "../../assets/partnerLogo/partner3.png"
import partner4 from "../../assets/partnerLogo/partner4.png"
import partner5 from "../../assets/partnerLogo/partner5.png"
import partner6 from "../../assets/partnerLogo/partner6.png"
import partner7 from "../../assets/partnerLogo/partner7.png"
import partner8 from "../../assets/partnerLogo/partner8.png"
import partner9 from "../../assets/partnerLogo/partner9.png"
import partner10 from "../../assets/partnerLogo/partner10.png"
import partner11 from "../../assets/partnerLogo/partner11.png"
import partner12 from "../../assets/partnerLogo/partner12.png"
import partner13 from "../../assets/partnerLogo/partner13.png"
import partner14 from "../../assets/partnerLogo/partner14.png"
import partner15 from "../../assets/partnerLogo/partner15.png"
import "./style.css"
export default function Partner() {
  const dataImages = [
    {
      image: partner1,
    },
    {
      image: partner2,
    },
    {
      image: partner3,
    },
    {
      image: partner4,
    },
    {
      image: partner5,
    },
    {
      image: partner6,
    },
    {
      image: partner7,
    },
    {
      image: partner8,
    },
    {
      image: partner9,
    },
    {
      image: partner10,
    },
    {
      image: partner11,
    },
    {
      image: partner12,
    },
    {
      image: partner13,
    },
    {
      image: partner14,
    },
    {
      image: partner15,
    },
  ]
  return (
    <section id="partner">
      <div className="title-section">NOSSOS PARCEIROS E PATROCINADORES</div>

      <ul className="partnerLogo">
        {dataImages.map((image) => (
          <li>
            <img src={image.image} alt="" />
          </li>
        ))}
      </ul>
    </section>
  )
}
