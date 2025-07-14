import styled from "styled-components";
import { motion } from "motion/react";

export const ContainerCard = styled(motion.div)<{ $image: string }>`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: none;
  height: 400px;
  width: 380px;
  background-image: ${(props) => (props.$image ? `url(${props.$image})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  flex-grow: 1;

  @media (max-width: 720px) {
    height: 300px;
    width: 280px;
    flex-grow: 0;
  }

  p {
    display: flex;
    align-items: flex-end;
    color: white;
    font-family: "DM Serif Displat", sans-serif;
    font-weight: 700;
    font-size: 20px;
    justify-content: center;
    margin-bottom: 20px;
  }
`;
