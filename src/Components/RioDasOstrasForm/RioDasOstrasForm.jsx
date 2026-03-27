import "./style.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function RioDasOstrasForm() {
  // Ajustado para 'name' para bater com a API
  const [name, setName] = useState("")
  const [artisticName, setArtisticName] = useState("")
  const [tel, setTel] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState("")
  const [openModal, setOpenModal] = useState(0)
  const [message, setMessage] = useState("")

  const cancelRegister = () => {
    setName("")
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
        "https://new-register-api-festival-teen.vercel.app/api/candidates/register",
        {
          method: "POST", // Boa prática usar maiúsculo
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name, // Agora a chave bate com a API
            artisticName,
            tel,
            address,
            age: Number(age),
          }),
        },
      )

      const data = await response.json()

      if (!response.ok) {
        // Exibe a mensagem de erro vinda da API (ex: "Telefone já cadastrado")
        setMessage(data.message || "Erro ao realizar inscrição")
        return
      }

      // ✅ SUCESSO
      setOpenModal(1)

      // Limpamos os campos auxiliares, mas o 'name' será limpo apenas se
      // você não precisar mais dele no Modal.
      // Dica: Limpe apenas os outros para o Modal conseguir ler o props.name
      setArtisticName("")
      setTel("")
      setAddress("")
      setAge("")
    } catch (error) {
      setMessage("Erro de conexão com o servidor")
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
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="NOME ARTÍSTICO"
            required
            value={artisticName}
            onChange={(e) => setArtisticName(e.target.value)}
          />

          <input
            type="text"
            placeholder="TELEFONE"
            required
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />

          <input
            type="text"
            placeholder="ENDEREÇO"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="number"
            placeholder="IDADE"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          {message && (
            <div
              className="error-message"
              style={{ color: "red", marginBottom: "10px" }}
            >
              {message}
            </div>
          )}

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
        <Modal name={name} />
      )}
    </div>
  )
}

function Modal(props) {
  const sendMsgWhatsapp = () => {
    const phone = 5522992168804
    const msgUser = `
⚠️ Olá, eu me chamo: ⚠️
- ${props.name} 🎙️
- Eu me inscrevi pelo site:
- TEEN KIDS MUSIC FESTIVAL
- E eu gostaria de realizar o pagamento da inscrição
- para a edição Rio das Ostras!
- VALOR DA INSCRIÇÃO R$50,00
`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msgUser)}`
    window.open(url, "_blank")
  }

  return (
    <div className="containerLoading">
      <p>
        Olá: <strong>{props.name}</strong> <br />
        Você está a um passo de concluir sua inscrição!
      </p>

      <button onClick={sendMsgWhatsapp} className="btn-whatsapp">
        Clique para finalizar sua inscrição!
      </button>

      <p>Valor R$50,00</p>
    </div>
  )
}
