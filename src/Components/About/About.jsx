import "./style.css"
export default function About() {
  const cronogramaAlert = () => {
    alert("⚠️CRONOGRAMA ESTARÁ DISPONÍVEL EM BREVE!⚠️")
  }
  return (
    <section id="about">
      <div className="title-section">SOBRE NÓS</div>
      <div className="subtitle-section">HIATA & SANDRA</div>
      <p>
        O cantor e produtor Hiata Anderson, em suas apresentações nos bares,
        restaurantes e eventos da cidade, observou que muitas crianças e
        adolecentes tinham muito talento para cantar e após algumas experiências
        com festivais adultos, sentiu o quanto seria importantante proporcionar
        a esses talentos mirins, a oportunidade de se apresentarem em um palco
        acolhedor, acompanhados por bons músicos. Surgiu então a idéia do Kids
        Music Festival, que teve início no ano de 2019. Já com as idéias em
        mente convidou a também cantora e produtora Sandra Cesário (que esteve
        com ele nos festivais para adultos) e juntos formam hoja a HS Produtora,
        que além de festivais para crianças e adolencentes que acontecem uma vez
        ao ano, extendem seu trabalho para esse público, durante todo o ano, com
        a produção de shows e eventos. Em 2019 o evento aconteceu no extinto
        Restaurande Sal do Mar e todas as eliminatórias foram de casa lotada!
        Com a pandemia, em 2020 não foi possível a realização do Festival, mas a
        HS Produtora realizou um show com os participantes no Drive In em Rio
        das Ostras, onde todos assistiam dos seus carros, e as crianças sendo
        cuidadas com todas as medidas de segurança necessárias. O show foi um
        bálsamos para todos naquele momento de isolamento e tensão. Já em 2021,
        a realização do ano foi uma live no teatro Joel Barcellos, que também
        proporcionou a todos um momento de alegria e partilha! Em 2022 foi
        possível retornar com o festival, que foi realizado no Rodízio Rico, por
        2 anos consecutivos (2022/2023) e a cada edição o evento foi se tornando
        melhor, até que, para a edição de 2024, o festival recebeu o apoio de um
        vereador com uma Emenda Impositiva, juntamente com o apoio da FROC, que
        administrou essa verba. O festival passou então a chamar Teen Kids Music
        Festival, pela quantidade considerável de adolecentes participantes.
        Nesse ano de 2024 o envento foi intinerante, onde os talentos tiveram a
        oportunidade de se apresentarem em diferentes locais da cidade, oque a
        HS Produtora vê como um salto muito positivo para o Festival, pois
        muitos conherecam o trabalho feito E por ser um evento de iniciativa
        privada, sempre contou com o apoio de empresários e comerciantes locais.
        Os patrocinadores de 2024 pagaram os prêmios para os primeiros
        colocados. R$ 5000,00 (1° lugar categoria Teen) R$ 2000,00 (1° lugar
        categoria kids)
      </p>

      <div className="cronograma">
        <div>
          <div className="text-conograma">CRONOGRAMA DE APRESENTAÇÕES</div>
          <div className="text-detail">CRONOGRAMA DE APRESENTAÇÕES</div>
        </div>
        <button onClick={cronogramaAlert}>Acompanhe o cronograma</button>
      </div>
    </section>
  )
}
