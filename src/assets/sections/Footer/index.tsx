import { FooterArea } from "./styled";

function Footer() {
  function OpenMap() {
    const url =
      "https://www.google.com/maps/place/R.+Virg%C3%ADlio+Bastos+dos+Santos,+63+-+Eng.+Luciano+Cavalcante,+Fortaleza+-+CE,+60810-420/data=!4m2!3m1!1s0x7c74f52cc188ae9:0x112ba9de0d97785b?sa=X&ved=1t:242&ictx=111";

    return window.open(url, "_blank");
  }

  return (
    <>
      <FooterArea>
        <div className="div-logo">
          <img
            className="logo"
            src="https://www.cgjardins.com.br/wp-content/uploads/2025/07/Asset-13000.svg"
            alt="Logomarca"
          />
        </div>
        <div className="fale-conosco">
          <h1>Fale Conosco</h1>
          <div className="infos">
            <img
              className="icone"
              src="https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-10/33/location-256.png"
            />
            <p>
              Rua Virgílio Bastos dos Santos, 63 - Luciano Cavalcante -
              Fortaleza/CE
            </p>
          </div>
          <div className="infos">
            <img
              className="icone"
              src="https://img.myloview.com.br/fotomurais/codigo-postal-cep-icone-de-vetor-log-de-endereco-400-142171063.jpg"
            />
            <p>CEP: 60810-420</p>
          </div>
          <div className="infos">
            <img
              className="icone"
              src="https://cdn-icons-png.flaticon.com/512/3735/3735286.png"
            />

            <p>Telefone: (85) 99633-8885</p>
          </div>
          <img
            className="map"
            src="/image/map.jpg"
            alt="Foto Localização mapa"
            onClick={() => OpenMap()}
          />
        </div>
        <div className="fale-conosco">
          <h1>Acesso Rápido</h1>
          <a className="acesso" href="#inicio">
            Início
          </a>
          <a className="acesso" href="#servicos">
            Serviços
          </a>
          <a className="acesso" href="#fotos">
            Fotos
          </a>
          <a className="acesso" href="#espaco">
            Espaço
          </a>
          <a className="acesso" href="#nos">
            Sobre nós
          </a>
          <a className="acesso" href="#depoimentos">
            Depoimentos
          </a>
          <div className="infos">
            <img
              className="icone-insta"
              src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
              onClick={() =>
                window.open("https://www.instagram.com/cgjardins/", "_blank")
              }
            />
            <p>CG Jardins</p>
          </div>
          <div className="infos">
            <img
              className="icone-insta"
              src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/casalgourmetfortal/",
                  "_blank"
                )
              }
            />
            <p>CG Catering</p>
          </div>
        </div>
      </FooterArea>
    </>
  );
}

export default Footer;
