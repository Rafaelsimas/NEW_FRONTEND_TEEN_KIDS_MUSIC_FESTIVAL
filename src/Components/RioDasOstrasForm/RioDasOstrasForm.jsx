import "./style.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function RioDasOstrasForm() {
  const [fullName, setFullName] = useState("")
  const [artisticName, setArtisticName] = useState("")
  const [tel, setTel] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState("")
  const [openModal, setOpenModal] = useState(0)
  const [message, setMessage] = useState("")

  const cancelRegister = () => {
    setFullName("")
    setArtisticName("")
    setTel("")
    setAddress("")
    setAge("")
    setMessage("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage("")

    try {
      const response = await fetch(
        "http://localhost:3335/api/candidatesRioDasOstras",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            artisticName,
            tel,
            address,
            age: Number(age),
          }),
        },
      )

      const data = await response.json()

      if (!response.ok) {
        // ❌ usuário já cadastrado ou outro erro
        setMessage(data.message)
        return
      }

      // ✅ sucesso
      setOpenModal(1)

      setFullName("")
      setArtisticName("")
      setTel("")
      setAddress("")
      setAge("")
    } catch (error) {
      setMessage("Erro ao cadastrar usuário")
    }
  }

  return (
    <div className="box-form">
      <div className="title-section">EDIÇÃO Rio das Ostras</div>

      {openModal === 0 ? (
        <form onSubmit={handleSubmit}>
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
            type="text"
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
            type="number"
            placeholder="IDADE"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          {/* 🔥 MENSAGEM SIMPLES */}
          {message && <div>{message}</div>}

          <div className="btn-form-action">
            <button type="submit" className="register">
              REALIZAR INSCRIÇÃO
            </button>

            <button type="button" onClick={cancelRegister} className="cancel">
              CANCELAR
            </button>

            <button type="button">
              <Link to="/inscrição">Voltar</Link>
            </button>
          </div>
        </form>
      ) : (
        <Modal fullName={fullName} />
      )}
    </div>
  )
}

function Modal(props) {
  const sendMsgWhatsapp = () => {
    const phone = 5521996119461

    const msgUser = `\n⚠️Olá, eu me chamo:⚠️\n
- ${props.fullName} 🎙️\n 
- Eu me inscrevi pelo site:\n 
- TEEN KIDS MUSIC FESTIVAL\n 
- E eu gostaria de realizar o pagamento da inscrição\n
- para a edição Rio das Ostras!\n
- VALOR DA INSCRIÇÃO R$50,00\n
`

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msgUser)}`
    window.open(url, "_blank")
  }

  return (
    <div className="containerLoading">
      <p>
        Olá: <strong>{props.fullName}</strong> <br />
        Você está a um passo de concluir sua inscrição
      </p>

      <button onClick={sendMsgWhatsapp}>
        Clique para finalizar sua inscrição!
      </button>

      <p>Valor R$50,00</p>
    </div>
  )
}
