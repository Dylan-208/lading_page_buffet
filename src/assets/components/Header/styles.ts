import styled from "styled-components";
import { motion } from "motion/react";

// cor primaria: #FCB746
export const ContainerNav = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #231f20;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.9);

  @media (max-width: 720px) {
    a {
      display: none;
    }
  }

  a {
    font-family: "DM Serif Display", sans-serif;
    font-size: 30px;
    color: white;
    text-decoration: none;
    transition: ease-in-out all 0.3s;
    &:hover {
      scale: 1.1;
      color: #fcb746;
      text-decoration: underline;
      text-underline-offset: 20px;
    }
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }

  img {
    width: auto;
    height: 100px;
  }
`;

export const PhotoFront = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 50px;
  color: white;
  height: 89vh;
  background-image: url("/public/image/fundo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 720px) {
    p {
      font-size: 30px;
      text-align: center;
    }
  }

  p {
    margin-top: 50px;
    font-family: "Playfair Display", sans-serif;
  }
`;

export const WhatsButton = styled(motion.div)`
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-image: url("https://cdn-icons-png.flaticon.com/512/5968/5968841.png");
  background-position: center;
  background-size: cover;
  border: none;
  transition: ease-in-out all 0.3s;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;
