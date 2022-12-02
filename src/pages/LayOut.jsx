import React, { useState } from "react";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/Bs";
import { VscThreeBars } from "react-icons/vsc";
import { MdClose } from "react-icons/Md";
import { SiTiktok } from "react-icons/Si";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import footerImage from "../assets/images/footer-image.jpg";
import logo from "../assets/images/logo.png";
import logoFooter from "../assets/images/logoFooter.jpg";
const LayOut = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <>
      <StyledHeader>
        <div>
          <Link to="/">
            <img src={logo} alt="logo de empresa" />
          </Link>
        </div>
        <VscThreeBars
          className="burgerButton"
          onClick={() => setIsOpenNav(true)}
        />
        <StyleNav isOpenNav={isOpenNav}>
          {
            <MdClose
              className="exitButton"
              onClick={() => setIsOpenNav(false)}
            />
          }
          <ul>
            <li>
              <Link onClick={() => setIsOpenNav(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpenNav(false)} to="Agencia">
                Agencia
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpenNav(false)} to="History">
                Historias
              </Link>
            </li>
          </ul>
        </StyleNav>
      </StyledHeader>
      <Outlet />
      <StyleFooter>
        <StyleFooterLeft>
          <div>
            <img src={logoFooter} alt="logo de empresa" />
          </div>
          <div>
            <BsFacebook className="socialIcon" />
            <BsTwitter className="socialIcon" />
            <BsLinkedin className="socialIcon" />
            <BsPinterest className="socialIcon" />
            <BsInstagram className="socialIcon" />
            <BsGoogle className="socialIcon" />
            <SiTiktok className="socialIcon" />
          </div>
          <div>
            <i>Aviso Legal</i>
            <i>Política de Privacidad</i>
            <i>Política de Cookies</i>
          </div>
          <p>Copyright © 2021 CYMA COMUNICACIÓN Y MARKETING S.L</p>
        </StyleFooterLeft>
        <StyleFooterRight>
          <img src={footerImage} alt="" />
        </StyleFooterRight>
      </StyleFooter>
    </>
  );
};

export default LayOut;

// Estilos header

const StyledHeader = styled.header`
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primaryColor};

  & > div {
    width: 50%;
    max-width: 200px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .burgerButton {
    font-size: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.color.secondaryColor};

    @media screen and (min-width: 700px) {
      display: none;
    }
  }
`;

// Estilos Nav

const StyleNav = styled.nav`
  opacity: ${({ isOpenNav }) => (isOpenNav ? 1 : 0)};
  width: ${({ isOpenNav }) => (isOpenNav ? "100vw" : 0)};
  height: ${({ isOpenNav }) => (isOpenNav ? "100vh" : 0)};
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-content: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-style: italic;
  background-color: #6b6b6bce;
  transition: opacity linear 0.1s;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.color.secondaryColor};
    transition: all linear 0.2s;

    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.color.secondaryColor};
    }
  }
  .exitButton {
    position: absolute;
    top: 10%;
    right: 10%;
    color: ${({ theme }) => theme.color.secondaryColor};
    cursor: pointer;
  }

  @media screen and (min-width: 700px) {
    width: 50%;
    opacity: 1;
    position: relative;
    font-size: 1.3rem;

    ul {
      flex-direction: row;
      gap: 2rem;
    }

    .exitButton {
      display: none;
    }
  }
`;

// Estilos footer

const StyleFooter = styled.footer`
  padding: 1rem;
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: 70%;

  @media screen and (min-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyleFooterLeft = styled.div`
  display: flex;
  gap: 1.3rem;
  flex-direction: column;

  & > div:nth-child(1) {
    width: 30%;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  & > div:nth-child(2) {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    .socialIcon {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.color.secondaryColor};
    }
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const StyleFooterRight = styled.div`
  display: none;
  img {
    width: 100%;
  }

  @media screen and (min-width: 770px) {
    display: block;
  }
`;
