import "./style.css"
import { Link } from "react-router-dom"
import { useState } from "react"
export default function TresRiosForm() {
  const [fullName, setFullName] = useState("")
  const [artisticName, setArtisticName] = useState("")
  const [tel, setTel] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState("")
  const [openModal, setOpenModal] = useState(0)

  const cancelRegister = () => {
    setFullName("")
    setArtisticName("")
    setTel("")
    setAddress("")
    setAge("")
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setOpenModal(1)
    Modal()

    fetch("https://api-teen-kids-music-otby.vercel.app/api/candidates", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, artisticName, tel, address, age }),
    }).then((response) => {
      console.log(response.ok)
    })
  }
  return (
    <div className="box-form">
      <div className="title-section">EDIÇÃO TRÊS RIOS</div>
      {openModal === 0 ? (
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
            <button>
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
    const phone = 5522992168804
    const msgUser = `\n⚠️Olá, eu me chamo:⚠️\n
  -${props.fullName}🎙️\n 
  -Eu me inscrevi pelo site:\n 
  -TEEN KIDS MUSIC FESTIVAL\n 
  -E eu gostaria de realizar o pagamento da inscrição\n
  -para a edição TRÊS RIOS!\n
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

      <button onClick={sendMsgWhatsapp}>Realizar pagamento da inscrição</button>
      <p>Valor R$50,00</p>
    </div>
  )
}
