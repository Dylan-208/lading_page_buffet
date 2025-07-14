import styled from "styled-components";

export const CardPhoto = styled.div<{ $card: string }>`
  display: flex;
  height: 400px;
  width: 250px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  background-image: ${(props) => (props.$card ? `url(${props.$card})` : "")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
