import styled from "styled-components";
import { motion } from "motion/react";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    margin-top: 40px;

    > div {
      padding: 0px 10px;
    }
  }

  .section-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 500px;
  height: 2px;
  background-color: #fcb746;
  align-self: center;
  justify-self: center;

  @media (max-width: 720px) {
    width: 300px;
  }
`;

export const ContainerSpace = styled.video`
  margin-top: 20px;
  display: flex;
  border-radius: 10px;
  height: 570px;
  width: auto;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  p {
    display: flex;
    text-align: justify;
    color: white;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 700;
    font-size: 20px;
    width: 100%;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  .photo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: auto;
    background-position: start;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 10px 5px 5px 2px rgba(0, 0, 0, 0.3);

    @media (max-width: 720px) {
      height: auto;
      width: 300px;
    }
  }

  .text {
    display: flex;
    width: 500px;
    padding: 0px 10px;
    text-align: justify;
    justify-content: center;
    flex-wrap: wrap;
    height: 70vh;
    overflow: auto;

    @media (max-width: 720px) {
      width: auto;
      p {
        margin-top: 10px;
        padding: 10px 10px;
      }

      h1 {
        text-align: start;
        font-size: 12px;
        padding: 10px 10px;
      }
    }

    p {
      font-size: 20px;
      font-family: "Inter", sans-serif;
    }

    h1 {
      font-size: 40px;
      color: black;
    }
  }
`;

export const ContainerGalery = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  .swiper,
  .swiper-slide {
    height: 100%;
  }
`;

export const ContainerFotos = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  .swiper,
  .swiper-slide {
    height: 100%;
  }
`;

export const Titulo = styled(motion.h1)`
  font-family: "DM Serif display", sans-serif;
  color: #fcb746;
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 40px;
  margin-top: 20px;

  @media (max-width: 720px) {
    font-size: 25px;
  }
`;
