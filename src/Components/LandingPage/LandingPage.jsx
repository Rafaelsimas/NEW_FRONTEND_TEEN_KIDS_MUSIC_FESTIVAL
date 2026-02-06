/* ===================COMPONENTS====================== */
import Banner from "../../Components/Banner/Banner"
import About from "../../Components/About/About"
import LastChampion from "../../Components/LastChampion/LastChampion"
import Partner from "../../Components/Partner/Partner"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function LandingPage() {
  return (
    <>
      <Banner />
      <About />
      <LastChampion />
      <Partner />
      <Contact />
      <Footer />
    </>
  )
}
