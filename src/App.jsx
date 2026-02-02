import LandingPage from "./Components/LandingPage/LandingPage"
import Dashboard from "./Components/Dashboard/Dashboard"
import TresRiosForm from "./Components/TresRiosForm/TresRiosForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RioDasOstrasForm from "./Components/RioDasOstrasForm/RioDasOstrasForm"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/inscrição" exact element={<Dashboard />} />
          <Route path="/tresrios" exact element={<TresRiosForm />} />
          <Route path="/riodasostras" exact element={<RioDasOstrasForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
