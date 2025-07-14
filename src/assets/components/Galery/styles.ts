import styled from "styled-components";

export const ContainerDepoiment = styled.div`
  margin-top: 20px;
  width: 500px;
  height: 300px;
  border: 1px solid var(--cor-primary);
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 20px 10px;
  justify-content: space-evenly;
  border-radius: 10px;

  @media (max-width: 720px) {
    width: 100%;
    height: auto;
  }

  > p {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    color: black;
    font-style: italic;
  }

  > h1 {
    font-family: "Playfair Display", sans-serif;
    font-size: 25px;
    color: var(--cor-primary);
    text-align: center;
  }
`;

export const SlideCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
