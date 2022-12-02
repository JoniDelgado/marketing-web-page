import React from "react";
import styled from "styled-components";
import mapa from "../assets/images/mapa.png";

const Contact = () => {
  return (
    <StyleContact>
      <h2>Contacto</h2>
      <div>
        <div>
          <StyledForm>
            <input type="text" placeholder="NOMBRE" />
            <input type="email" placeholder="EMAIL" />
            <input type="text" placeholder="TEL." />
            <input type="text" placeholder="EMPRESA" />
            <input type="text-area" placeholder="MENSAJE" />
            <div>
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy">
                HE LEÍDO Y ACEPTO <strong>LA POLÍTICA DE PRIVACIDAD</strong>
              </label>
            </div>
            <button>Enviar</button>
          </StyledForm>
          <p>
            CYMA COMUNICACIÓN Y MARKETING, S.L. con <strong>CIF:</strong>{" "}
            B54693544, como<strong>responsable</strong>del tratamiento y
            <strong>legitimado</strong>por su consentimiento tratará sus datos
            con la<strong>finalidad</strong>de gestionar el envío de información
            y prospección comercial y envío de boletines informativos.
            <strong>No cedemos</strong>la información a terceros salvo por
            imperativo legal. Tiene<strong>derecho</strong>a acceder,
            rectificar, oponerse y suprimir los datos, así como otros derechos,
            como se detalla en la segunda capa de información. Puede consultar
            <strong>información adicional</strong>y
            <strong>más detallada</strong>
            acerca dePolítica de privacidad y Protección de sus datos
            personales.
          </p>
          <p>Ver Politica de privacidad</p>
        </div>
        <img src={mapa} alt="" />
      </div>
      <div>
        <h3>EMAIL</h3>
        <p>info@grupocyma.es</p>
      </div>
      <div>
        <h3>HORARIO</h3>
        <p>Lunes - Jueves 09:00 - 10:00</p>
        <p>Viernes 08:00 - 15:00</p>
      </div>
    </StyleContact>
  );
};

export default Contact;

const StyleContact = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.secondaryColor};

  h2 {
    font-size: 3rem;
  }

  & > div:first-of-type {
    display: grid;

    p {
      font-size: 0.7rem;
      font-style: italic;
      font-weight: 400;
    }

    img {
      display: none;
      width: 90%;
      height: 80%;
      object-fit: cover;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media screen and (min-width: 770px) {
      grid-template-columns: repeat(2, 1fr);
      img {
        display: block;
      }
    }
  }
`;

const StyledForm = styled.form`
  margin: auto;
  width: 90%;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  background-color: white;

  input {
    padding: 1rem;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondaryColor};
    font-style: italic;
  }

  #privacy {
    margin-right: 0.5rem;
  }

  div {
    margin: 1rem 0 2rem 0;

    strong {
      text-decoration: underline;
    }
  }

  button {
    width: 50%;
    margin: auto;
  }
`;
