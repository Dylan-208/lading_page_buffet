import styled from "styled-components";

export const FooterArea = styled.footer`
  margin-top: 40px;
  display: flex;
  width: 100%;
  min-height: 500px;
  background-color: #231f20;
  flex-wrap: wrap;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);

  .div-logo {
    display: grid;
    flex: 1;
    flex-wrap: wrap;
    padding: 20px 0px;

    .logo {
      align-self: center;
      justify-self: center;
      display: flex;
      height: 150px;
    }
  }

  .fale-conosco {
    display: flex;
    flex: 1;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 60px;

    .infos {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  .icone {
    height: 30px;
    width: 30px;
  }

  .map {
    margin: 0 auto;
    width: 80%;
    height: auto;
    cursor: pointer;
    transition: ease-in-out all 0.2s;
    &:hover {
      border: 3px solid #fcb746;
    }
  }

  .icone-insta {
    margin-top: 10px;
    width: 50px;
    height: 50px;
    transition: ease-in-out all 0.2s;
    cursor: pointer;
    &:hover {
      scale: 1.2;
    }
  }

  h1 {
    text-decoration: underline;
    align-self: flex-start;
    font-family: "DM Serif Display", sans-serif;
    font-size: 30px;
    color: #fcb746;
  }

  p {
    font-size: 17px;
    font-family: "Inter", sans-serif;
    color: white;
  }

  .acesso {
    font-size: 20px;
    font-family: "Inter", sans-serif;
    color: white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      transition: ease-in-out all 0.3s;
      scale: 1.2;
      color: #fcb746;
      text-decoration: underline;
      text-underline-offset: 10px;
    }
  }
`;
