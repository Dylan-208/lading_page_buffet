import { ContainerNav, PhotoFront, WhatsButton } from "./styles";
import { motion } from "motion/react";

function Header() {
  const urlWhats =
    "https://api.whatsapp.com/send/?phone=5585996338885&text=Envie+esta+mensagem+para+iniciar+seu+atendimento...&type=phone_number&app_absent=0";
  return (
    <>
      <ContainerNav>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ visualDuration: 1, type: "spring", stiffness: 20 }}
          id="inicio"
        >
          <a>Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#fotos">Fotos</a>
          <img src="/image/logo_cg.jpg" alt="logo do buffet" />
          <a href="#espaco">Espaço</a>
          <a href="#nos">Sobre nós</a>
          <a href="#depoimentos">Depoimentos</a>
        </motion.nav>
      </ContainerNav>
      <PhotoFront>
        <motion.p
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 20,
              delay: 1,
            },
          }}
        >
          Onde a experiência gastronômica se une à
        </motion.p>
        <motion.p
          style={{ fontFamily: "Great Vibes, sanserif", fontSize: "100px" }}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 20,
              delay: 1,
            },
          }}
        >
          Celebração
        </motion.p>
      </PhotoFront>
      <WhatsButton
        onClick={() => window.open(urlWhats, "_blank")}
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 2, duration: 1.5 } }}
      ></WhatsButton>
    </>
  );
}

export default Header;
