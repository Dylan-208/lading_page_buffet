import Card from "../../components/Card";
import GaleryDepoiments from "../../components/Galery";
import GaleryPhotos from "../../components/GaleryPhotos";
import video from "/video/espaco.mp4";

import {
  ContainerAbout,
  ContainerFotos,
  ContainerGalery,
  ContainerSpace,
  Line,
  Main,
  Titulo,
} from "./styles";

function About() {
  const serviceList = [
    { titulo: "Casamento", url: "/image/casamento.jpg" },
    { titulo: "Debutante", url: "/image/debutante.jpg" },
    { titulo: "Aniversários", url: "/image/aniversario.jpg" },
    { titulo: "Corporativo", url: "/image/corporativo.jpg" },
    { titulo: "Catering", url: "/image/catering.jpg" },
    { titulo: "Bodas", url: "/image/bodas.jpg" },
  ];
  return (
    <>
      <Main>
        <section id="servicos">
          <Line />
          <Titulo
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1.2,
              transition: { duration: 1 },
            }}
            viewport={{ amount: 1, once: true }}
          >
            NOSSOS SERVIÇOS
          </Titulo>
          <div className="section-content">
            <Card serviceList={serviceList} />
          </div>
        </section>

        <section id="fotos">
          <Line />
          <Titulo
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1.2,
              transition: { duration: 1 },
            }}
            viewport={{ amount: 1, once: true }}
          >
            Fotos
          </Titulo>
          <ContainerFotos>
            <GaleryPhotos />
          </ContainerFotos>
        </section>

        <section id="espaco">
          <Line />
          <Titulo
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1.2,
              transition: { duration: 1 },
            }}
            viewport={{ amount: 1, once: true }}
          >
            CONHEÇA NOSSO ESPAÇO
          </Titulo>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 10px",
                flexWrap: "wrap",
                width: "500px",
                justifyContent: "space-evenly",
              }}
            >
              <h1
                style={{
                  fontFamily: "Great Vibes",
                  color: "black",
                  fontSize: "50px",
                  textAlign: "justify",
                }}
              >
                Buffet é apenas o começo — o que entregamos é emoção.
              </h1>
              <p
                style={{
                  fontFamily: "Player Display, sanserif",
                  fontSize: "25px",
                  textAlign: "justify",
                }}
              >
                Mais do que um espaço para eventos, oferecemos um cenário onde
                natureza e sofisticação se encontram em perfeita harmonia. Um
                salão climatizado para o conforto dos seus convidados, e uma
                iluminação especial que transforma cada detalhe em pura emoção.
                Tudo pensado para tornar o seu dia único, memorável e
                verdadeiramente encantador."
              </p>
            </div>
            <ContainerSpace src={video} autoPlay loop muted />
          </div>
        </section>

        <section id="nos">
          <Line />
          <Titulo
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1.2,
              transition: { duration: 1 },
            }}
            viewport={{ amount: 1, once: true }}
          >
            SOBRE NÓS
          </Titulo>
          <ContainerAbout>
            <div className="text">
              <h1>Transformamos eventos em experiências inesquecíveis.</h1>
              <p>
                Desde 2016, os chefs Inácio e Thatyane Bruno — à frente do Casal
                Gourmet — dedicam-se a transformar ocasiões especiais em
                experiências marcantes por meio da alta gastronomia. Com um
                histórico de qualidade, requinte e atenção aos detalhes, o casal
                inaugura uma nova fase com o CG Jardins: um espaço exclusivo,
                pensado para receber eventos dos mais variados estilos, unindo
                sofisticação, sabor e hospitalidade. Cada celebração é conduzida
                com paixão e comprometimento, reafirmando o propósito de
                encantar através da arte de bem servir.
              </p>
            </div>
            <img src="/image/casal.jpg" className="photo" />
          </ContainerAbout>
        </section>

        <section id="depoimentos">
          <Line />
          <Titulo
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1.2,
              transition: { duration: 1 },
            }}
            viewport={{ amount: 1, once: true }}
          >
            DEPOIMENTOS
          </Titulo>
          <ContainerGalery>
            <GaleryDepoiments />
          </ContainerGalery>
        </section>
      </Main>
    </>
  );
}

export default About;
