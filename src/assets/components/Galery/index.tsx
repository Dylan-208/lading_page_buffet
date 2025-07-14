import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { ContainerDepoiment, SlideCenter } from "./styles";
import { useEffect, useState } from "react";

const depoiments = [
  {
    nome: "Ana e Mateus",
    corpo:
      "Essa foi a melhor festa de casamento que poderíamos ter imaginado. Muito obrigado pelo excelente momento!",
  },
  {
    nome: "Fernanda Costa",
    corpo:
      "O ambiente é simplesmente deslumbrante! Cada detalhe foi pensado com carinho. Superou todas as nossas expectativas.",
  },
  {
    nome: "Carlos e Juliana",
    corpo:
      "Uma noite inesquecível! Do buffet impecável à iluminação encantadora, tudo estava perfeito.",
  },
  {
    nome: "Eduarda Martins",
    corpo:
      "O salão é lindo, climatizado e muito confortável. Todos os convidados elogiaram a comida e o atendimento.",
  },
  {
    nome: "Rafael e Luiza",
    corpo:
      "Casar no CG Jardins foi a melhor escolha que fizemos. Nos sentimos acolhidos do início ao fim!",
  },
  {
    nome: "Marcelo Almeida",
    corpo:
      "Já participei de muitos eventos, mas nenhum com essa qualidade e sofisticação. Nota mil!",
  },
  {
    nome: "João e Clara",
    corpo:
      "Tivemos um jantar incrível sob as estrelas no jardim externo. Um clima mágico e muito romântico!",
  },
  {
    nome: "Isabela Torres",
    corpo:
      "A decoração estava impecável e o buffet é de uma delicadeza única. Parabéns pela excelência!",
  },
  {
    nome: "Thiago e Patrícia",
    corpo:
      "Foi como viver um sonho! A equipe é atenciosa, os pratos deliciosos e o espaço maravilhoso.",
  },
  {
    nome: "Beatriz Lima",
    corpo:
      "Se pudesse dar mais de 5 estrelas, eu daria! Cada minuto no CG Jardins foi memorável.",
  },
];

function GaleryDepoiments() {
  const [slidesNumber, setSlidesNumber] = useState(3);

  function WidhtView() {
    if (window.innerWidth < 720) {
      setSlidesNumber(1);
    } else {
      setSlidesNumber(3);
    }
  }

  useEffect(() => {
    WidhtView();

    window.addEventListener("resize", WidhtView);

    return () => {
      window.removeEventListener("resize", WidhtView);
    };
  }, []);
  return (
    <Swiper
      observer={true}
      observeParents={true}
      slidesPerView={slidesNumber}
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={true}
      loop={true}
    >
      {depoiments.map((item, index) => (
        <SwiperSlide key={index}>
          <SlideCenter>
            <ContainerDepoiment>
              <p>{item.corpo}</p>
              <h1>{item.nome}</h1>
            </ContainerDepoiment>
          </SlideCenter>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GaleryDepoiments;
