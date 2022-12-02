import React, { useState, useEffect } from "react";
import styled from "styled-components";
import heroVideo from "../assets/images/heroVideo.mp4";
import heroImage from "../assets/images/hero.png";
import CarrouselButtonFace from "../assets/images/Boton-Kit-Digital-cara.png";
import CarrouselButtonBack from "../assets/images/Boton-Kit-Digital-espalda.png";
import trabajos1 from "../assets/images/trabajos1.jpg";
import trabajos2 from "../assets/images/trabajos2.jpg";
import trabajos3 from "../assets/images/trabajos3.jpg";
import trabajos4 from "../assets/images/trabajos4.jpg";
import trabajos5 from "../assets/images/trabajos5.jpg";
import trabajos6 from "../assets/images/trabajos6.jpg";
import planificacion from "../assets/images/planificacion.png";
import creatividad from "../assets/images/creatividad.png";
import eventos from "../assets/images/eventos.png";
import mediosOffline from "../assets/images/medios-offline.png";
import mediosOnLine from "../assets/images/medios-online.png";
import produccion from "../assets/images/produccion.png";
import hagamosHistoria from "../assets/images/hagamoshistoria.png";
import compartimosHistorias from "../assets/images/compartimoshistorias.png";
import instaImage from "../assets/images/compartimoshistorias-imagen.png";
import Contact from "../components/Contact";

const ButtonImages = [CarrouselButtonBack, CarrouselButtonFace];
const workImage = [
  trabajos1,
  trabajos2,
  trabajos3,
  trabajos4,
  trabajos5,
  trabajos6,
];
const carrousel = [
  mediosOffline,
  produccion,
  creatividad,
  mediosOnLine,
  eventos,
];

const Home = () => {
  const [imageButtonToShow, setImageButtonToShow] = useState(0);
  const [imageCarrousel, setImageCarrousel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageButtonToShow((prev) =>
        prev === ButtonImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageCarrousel((prev) =>
        prev === carrousel.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StyleMain>
        <StyleHero>
          <div>
            <h3>
              AMAMOS LA PLAYA, PERO NUESTRA VERDADERA PASIÓN ES LA PUBLICIDAD
            </h3>
            <img src={heroImage} alt="servicios integrales" />
            <p>
              Somos una agencia de publicidad creativa de Alicante que reúne más
              de 20 años de experiencia ofreciendo servicios integrales de
              comunicación y marketing. Nuestros principales clientes son
              reconocidas empresas situadas en:
            </p>
            <strong>MADRID | VALENCIA | BARCELONA | MÁLAGA</strong>
            <p>… Y por supuesto, también en Alicante.</p>
            <p>Trabajamos a nivel nacional con todas ellas...</p>
            <StyleButtonCarrousel>
              <img
                src={ButtonImages[imageButtonToShow]}
                alt="Boton con imagenes"
              />
            </StyleButtonCarrousel>
          </div>
          <div>
            <video src={heroVideo} autoPlay loop muted></video>
          </div>
        </StyleHero>
        <StyleOurJobs>
          <div>
            <h2>NUESTROS TRABAJOS</h2>
            <p>Historias que funcionan</p>
          </div>
          <StyleJobCard>
            {workImage.map((img, ind) => {
              return (
                <div key={ind}>
                  <img src={img} alt="" />
                </div>
              );
            })}
          </StyleJobCard>
        </StyleOurJobs>
        <StyleAboutOurJob>
          <h2>
            IDEAMOS Y DIRIGIMOS CAMPAÑAS PUBLICITARIAS ADAPTÁNDOLAS A CULAQUIER
            MEDIO
          </h2>
          <img src={planificacion} alt="planificamos creamos y producimos" />
          <p>
            Gestionamos la compra de <strong>medios offline y online</strong>,
            hacemos crecer <strong>redes sociales</strong>, mejoramos
            posicionamiento <strong>SEO y SEM</strong>. Diseñamos{" "}
            <strong>páginas web</strong>, generamos<strong> contenidos</strong>{" "}
            en diversos formatos y para distintos soportes, y creamos
            <strong> audiovisuales</strong>. También instalamos cualquier tipo
            de <strong>soporte publicitario</strong> y{" "}
            <strong>organizamos eventos</strong>. Todo desde nuestros
            departamentos especializados coordinados con una dirección de
            campaña.
          </p>
          <div>
            <p>
              Esto nos ha hecho ser una{" "}
              <strong>agencia de publicidad especializada</strong>en sectores
              como:
            </p>
            <p>
              <span>
                <strong>
                  SECTOR INMOBILIARIO | CENTROS COMERCIALES | TURISMO |
                  CONCESIONARIOS | SECTOR SANITARIO
                </strong>
              </span>
            </p>
            <p>
              Somos una{" "}
              <strong>agencia creativa, atípica y multidiciplinar</strong>
            </p>
          </div>
        </StyleAboutOurJob>
        <StyleCarrouselImage>
          <div>
            <img src={carrousel[imageCarrousel]} alt="carrousel de imagenes" />
          </div>
        </StyleCarrouselImage>
        <StyleMakeHistory>
          <div>
            <h2>
              ¿SABIAS QUE DETRÁS DE UN BUEN PROYECTO, SIEMPRE HAY UNA BIENA
              HISTORIA?
            </h2>
            <img src={hagamosHistoria} alt="hagamos historia" />
            <p>
              Que cuenten todo lo que quieres <strong>comunicar</strong>.
            </p>
          </div>
          <button>Ver Historias</button>
        </StyleMakeHistory>
        <StyleShareHistory>
          <div>
            <h2>SOMOS UNA AGENCIA DE PUBLICIDAD QUE TIENE MUCHO QUE CONTAR</h2>
            <div>
              <img src={compartimosHistorias} alt="compartimos historias" />
            </div>
            <p>
              Pero lo eque más nos gusta es <strong>vivirlas</strong>. Contigo.
            </p>
          </div>
          <div>
            <img src={instaImage} alt="istagram post" />
          </div>
        </StyleShareHistory>
        <Contact />
      </StyleMain>
    </>
  );
};

export default Home;

const StyleMain = styled.main`
  margin: auto;
`;

const StyleHero = styled.section`
  position: relative;
  color: white;
  overflow: hidden;

  & > div:nth-child(1) {
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #0e0d0d7a;

    img {
      width: 100%;
    }

    p {
      line-height: 1.5rem;
    }
  }

  video {
    width: 100%;
    height: 800px;
    object-fit: cover;
  }
`;

const StyleButtonCarrousel = styled.div`
  margin: 0 auto;
  width: 40%;
  max-width: 200px;
`;

const StyleOurJobs = styled.section`
  padding: 4rem 0;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.secondaryColor};
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  & > div {
    margin-bottom: 4rem;
  }
`;

const StyleJobCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 100%;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyleAboutOurJob = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.secondaryColor};
  line-height: 1.3rem;

  img {
    width: 100%;
  }

  div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p:nth-child(2) {
      text-align: center;
    }
  }
`;

const StyleCarrouselImage = styled.section`
  padding: 1rem;
  height: 500px;
  display: grid;
  place-content: center;
  img {
    width: 100%;
  }
`;

const StyleMakeHistory = styled.section`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.secondaryColor};

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  img {
    width: 100%;
  }

  button {
    margin: 3rem 0 1rem 0;
  }
`;

const StyleShareHistory = styled.section`
  padding: 4rem 1rem;
  display: grid;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.color.secondaryColor};

    img {
      width: 100%;
    }
  }

  & > div:last-of-type {
    display: none;
  }

  @media screen and (min-width: 770px) {
    grid-template-columns: 65% auto;

    & > div:last-of-type {
      display: flex;
      justify-content: center;
      img {
        width: 60%;
      }
    }
  }
`;
