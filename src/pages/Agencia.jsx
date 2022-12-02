import React from "react";
import styled from "styled-components";
import twenty from "../assets/images/20anos.png";
import publicidad from "../assets/images/20anospublicidad.png";
import arte from "../assets/images/arte.png";
import publicidadExterior from "../assets/images/publicidadexterior.png";
import marketingOnline from "../assets/images/marketingonline.png";
import alien from "../assets/images/alien.png";
import loQueNecesitas from "../assets/images/todoloquenecesitas.png";
import Contact from "../components/Contact";

const Agencia = () => {
  return (
    <StyleAgencyContainer>
      <Style20years>
        <div>
          <img src={twenty} alt="20 años" />
        </div>
        <h2>AGENCIA DE PUBLICIDAD EN ALICANTE</h2>
        <div>
          <img src={publicidad} alt="" />
        </div>
        <p>
          Somos Grupo Cyma, una;
          <strong>empresa de publicidad en Alicante un tanto atípica. </strong>
          Contamos con veinte años de experiencia en ofrecer
          <strong>servicios integrales de publicidad</strong>.
        </p>

        <p>
          ¿Integrales? Sí. Esto quiere decir que, en materia de comunicación y
          marketing somos capaces de gestionarlo <strong>TODO</strong>.
        </p>
      </Style20years>
      <AboutAgency>
        <div>
          <h2>AGENCIA DE PUBLICIDAD 360 EN ALICANTE</h2>
          <h3>Todo para posicionar tu marca</h3>
        </div>
        <p>
          Desde planificar, desarrollar y ejecutar campañas de medios online u
          offline para vender
          <strong>activos inmobiliarios por toda España</strong>, hasta atender
          el amplio abanico de necesidades diarias de comunicación de un centro
          comercial:<strong>creatividad, producción, medios</strong>…
        </p>
        <AgencyCardContainer>
          <AgencyCards>
            <img src={arte} alt="creatividad" />
            <strong>CRATIVIDAD</strong>
            <p>
              <b>Construimos tu marca, diseñamos tu imagen corporativa</b>,
              desarrollamos contenidos para tu público, generamos notoriedad y
              branding… En definitiva, conseguimos que el mundo sepa lo que
              haces.
            </p>
          </AgencyCards>
          <AgencyCards>
            <img src={publicidadExterior} alt="publicidad exterior" />
            <strong>PUBLICIDAD EXTERIOR</strong>
            <p>
              <b>Muéstrate a lo grande</b>, tu empresa en ubicaciones de gran
              impacto, elegidas estratégicamente para ti, que funcionan las 24
              horas del día. Publicidad Offline, impactante y asequible.
            </p>
          </AgencyCards>
          <AgencyCards>
            <img src={marketingOnline} alt="marketing online" />
            <strong>MARKETING ONLINE</strong>
            <p>
              Diseñamos estrategias de marketing digital efectivas para que
              llegues a tu audiencia con un<b>mensaje diferenciado</b>y alcances
              tus objetivos en ventas o reconocimiento de marca.
            </p>
          </AgencyCards>
        </AgencyCardContainer>
        <div>
          <button>¿A qué esperas? llámanos</button>
        </div>
        <p>
          Todos nuestros departamentos están perfectamente integrados para
          ofrecerte los mejores servicios de un modo:
        </p>
        <h3>
          ÁGIL | COHERENTE | MULTIDISCIPLINAR | PROFESIONAL | EFICAZ |
          PERSONALIZADO
        </h3>
        <p>
          Nos gustan los retos y disfrutamos consiguiendo resultados que parecen
          imposibles. ¿Tu marca como protagonista de una historia? ¿
          <strong>La ciudad empapelada con tus productos</strong>? ¿Tus
          promociones en boca de todos? ¿Conseguir algo complicado en poco
          tiempo? Somos la agencia de publicidad y comunicación en Alicante que
          buscas. <strong>Esto es lo que mejor se nos da.</strong> Y lo que más
          nos inspira es ver a nuestros clientes <strong>CRECER</strong>.
        </p>
        <StyleServicesSection>
          <img src={alien} alt="" />
          <div>
            <h2>SERIVICIOS INTEGRALES DE PUBLICIDAD EN ALICANTE</h2>
            <img src={loQueNecesitas} alt="todo lo que necesitas" />
            <h3>
              MEDIOS ONLINE / OFFLINE | PRODUCCIÓN | CREATIVIDAD | MARKETING
              ONLINE | EVENTOS
            </h3>
            <p>
              Combinamos a la perfección nuestros
              <strong>más de 20 años de experiencia en el sector</strong>con el
              conocimiento de tu negocio para definir y conectar cada aspecto de
              tu marca y desarrollar una experiencia inolvidable.
            </p>
            <p>
              Nos definimos por tener una forma de trabajo abierta y altamente
              interactiva: tenemos una cultura de colaboración,
              <strong>de trabajo eficaz y de rápida respuesta.</strong>
              Gestionamos planes de medios, diseñamos estrategias publicitarias
              y proyectos, organizamos eventos y ponemos en marcha todo tipo de
              acciones promocionales. Creamos:
            </p>
            <h3>
              HISTORIAS TANGIBLES | HISTORIAS TRANSFORMADORAS | HISTORIAS QUE
              INSPIRAN.
            </h3>
            <p>
              Creamos historias que obtienen grandes resultados al alinear los
              objetivos comerciales B2B y B2C con las necesidades del mercado.
            </p>
            <p>
              Nacimos del deseo de nuestros clientes por tener a su disposición
              un equipo cualificado cargado de
              <strong>
                ideas frescas para ejecutar las estrategias y experiencias más
                creativas.
              </strong>
              Nos rodeamos de talento y curiosidad con un equipo senior formado
              por planners, creativos, estrategas, diseñadores, programadores y
              producers.
            </p>
            <p>
              Entre todos creamos una sola familia de habilidades
              multidisciplinares con el único fin de satisfacer las necesidades
              de todos nuestros clientes. Para esto,
              <strong>
                te acompañaremos en todo momento durante el proceso de
                construcción de tu marca y su línea comunicación.
              </strong>
            </p>
          </div>
        </StyleServicesSection>
        <StyleIframe>
          <iframe
            src="https://www.youtube.com/embed/cTLnlYsLPIs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </StyleIframe>
      </AboutAgency>
      <Contact />
    </StyleAgencyContainer>
  );
};

export default Agencia;

const StyleAgencyContainer = styled.main`
  img {
    width: 100%;
  }

  iframe {
    width: 100%;
  }
`;

const Style20years = styled.section`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.primaryColor};

  & > div:first-of-type {
    align-self: flex-end;
    width: 25%;
  }

  img {
    width: 100%;
  }
`;

const AboutAgency = styled.section`
  padding: 4rem 1rem;

  & > div:first-child {
    margin: 2rem 0;
    text-align: center;
    h2 {
      font-size: 1.8rem;
      font-weight: 800;
      color: ${({ theme }) => theme.color.secondaryColor};
    }
  }

  p {
    margin: 2.5rem 0;
  }
`;

const AgencyCardContainer = styled.div`
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
  }
`;

const StyleServicesSection = styled.div`
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 40% auto;
  }
`;

const AgencyCards = styled.div`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    align-self: center;
    width: 50%;
  }

  strong {
    background-color: ${({ theme }) => theme.color.primaryColor};
    font-size: 1.6rem;
    align-self: flex-start;
  }

  p {
    margin: 0;
  }
`;

const StyleIframe = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }
`;
