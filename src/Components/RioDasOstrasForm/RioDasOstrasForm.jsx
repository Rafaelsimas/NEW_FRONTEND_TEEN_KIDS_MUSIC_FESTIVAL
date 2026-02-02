import "./style.css"
import { Link } from "react-router-dom"
import { useState } from "react"
export default function RioDasOstrasForm() {
  const [fullName, setFullName] = useState("")
  const [artisticName, setArtisticName] = useState("")
  const [tel, setTel] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState("")

  const cancelRegister = () => {
    setFullName("")
    setArtisticName("")
    setTel("")
    setAddress("")
    setAge("")
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("https://api-teen-kids-music-otby.vercel.app/api/candidates", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, artisticName, tel, address, age }),
    }).then((response) => {
      /* setOpenModal(response.ok) */
    })
  }
  return (
    <div className="box-form">
      <div className="title-section">EDIÇÃO Rio das Ostras</div>

      <form>
        <input
          type="text"
          placeholder="NOME COMPLETO"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="NOME ARTÍSTICO"
          value={artisticName}
          onChange={(e) => setArtisticName(e.target.value)}
        />
        <input
          type="number"
          placeholder="TELEFONE"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />

        <input
          type="text"
          placeholder="ENDEREÇO"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="IDADE"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <div className="btn-form-action">
          <button onClick={handleSubmit} className="register">
            REALIZAR INSCRIÇÃO
          </button>
          <button onClick={cancelRegister} className="cancel">
            CANCELAR
          </button>
          <Link to="/inscrição">Voltar</Link>
        </div>
      </form>
    </div>
  )
}
