import React from "react";
import styled from "styled-components";
import hombre from "../assets/images/hombre.png";
import dracula from "../assets/images/dracula.png";
import mujer from "../assets/images/mujerconcopa.png";
import naming from "../assets/images/naming.png";
import queTeRecuerden from "../assets/images/queterecuerden.png";
import arteCiencia from "../assets/images/arteyciencia.png";
import uri from "../assets/images/uri.png";
import saberQueHaces from "../assets/images/saberquehaces.png";
import indio from "../assets/images/indio.png";
import tuLenguaje from "../assets/images/tulenguaje.png";
import Contact from "../components/Contact";

const History = () => {
  return (
    <StyleHistoryWrapper>
      <StyleTellYourStory>
        <div>
          <img src={hombre} alt="cara de hombre" />
        </div>
        <div>
          <h2>
            <span>¿CONTAMOS TU HISTORIA?</span>
          </h2>
          <h2>
            YA LO DIJO EL GRAN LEONARDO (EL GENIO RENACENTISTA, NO LA TORUGA
            NINJA)
          </h2>
          <img src={arteCiencia} alt="" />
          <p>
            El gran <strong>Da Vinci</strong> estaba convencido de que en la
            naturaleza todo tiene una parte de{" "}
            <strong>locura e inspiración</strong> y otra de{" "}
            <strong>tecnología y leyes físicas</strong>. El inventor y artista
            defendió que la innovación siempre debe aunar genio e ingenio.
            Nosotros aplicamos esta idea en cada campaña publicitaria, porque
            <strong> a ver quien le discute a Leo…</strong>
          </p>
          <p>
            ¿Buscas <strong>creatividad y también resultados</strong>? UNIMOS EL
            ARTE Y LA CIENCIA PARA TU PROYECTO. CONTAMOS TU HISTORIA
          </p>
        </div>
      </StyleTellYourStory>
      <StyleNamingSection>
        <div>
          <img src={dracula} alt="dracula" />
        </div>
        <div>
          <h2>
            PARA DAR UN BUEN MORDISCO EN LA HISTORIA, NO BASTA CON TENER
            COLMILLOS.
          </h2>
          <h2>¿CONTAMOS TU HISTORIA?</h2>
          <img src={naming} alt="necesitar un buen naming" />
          <p>
            Vlad III de Valaquia, conocido internacionalmente como el{" "}
            <strong>Conde Drácula</strong>, acabó heredando el sobrenombre de su
            padre, Vlad II Dracul. Porque seamos sinceros, su nombre,{" "}
            <strong>tenía mucho más flow</strong>. Si quieres hincarle el diente
            al mercado,<strong> el nombre de tu marca importa</strong>.
          </p>
          <p>
            Y en eso, <strong>nosotros somos expertos</strong>. QUE TU NAMING
            HABLE POR TI.
          </p>
        </div>
      </StyleNamingSection>
      <StyleMakeRememberSection>
        <div>
          <img src={mujer} alt="rafaella" />
        </div>
        <div>
          <h2>
            SI UN ICONO ES MEMORABLE, FUNCIONA. ASÍ QUE... HOLA BRIEFING, HOLA
            RESULTADOS
          </h2>
          <h2>¡HOLA RAFFAELLA!</h2>
          <img src={queTeRecuerden} alt="hagamos que te recuerden" />
          <p>
            ¿Quien no ha cogido alguna vez el teléfono contestando efusivamente
            con un «¿Diga Melón?»? O mejor aún, con un
            <strong> ¡Hola Raffaella! </strong>Nuestro subconsciente almacena
            alrededor de 2,5 petabytes de información, algo así como{" "}
            <strong>300 millones de horas de televisión</strong>. Así que, entre
            tanto dato y estímulo, que tu cerebro sea selectivo recordando algo
            ingenioso, o que simplemente, te de buen rollo, dependerá del{" "}
            <strong>impacto positivo</strong> que tuvo sobre ti.
          </p>
          <p>
            <strong>Háblanos de tu proyecto</strong> y lo analizamos. NOS
            ENCARGAREMOS DE QUE TE RECUERDEN.
          </p>
        </div>
      </StyleMakeRememberSection>
      <UriGelerSection>
        <div>
          <img src={uri} alt="uri" />
        </div>
        <div>
          <h2>
            URI GELLER ES UN CRACK, PERO CON UNA BUENA CAMPAÑA INTERGRAL, NO
            CABRÍA NINGUNA DUDA
          </h2>
          <img src={saberQueHaces} alt="que sepan lo que haces" />
          <p>
            El programa secreto <strong>Stargate</strong>, desclasificado en
            2017, contiene experimentos para la Agencia Central de Inteligencia
            de los EEUU. Cuando estos se hicieron públicos, revelaron que{" "}
            <strong>Uri Geller</strong> participó experimentando con la
            percepción extrasensorial y los poderes psíquicos. Fue capaz de
            dibujar y replicar imágenes presentes en una habitación contigua,
            demostrando ‘su capacidad de percepción de manera convincente e
            inequívoca’.
            <strong>Si haces algo bien, no lo mantengas en secreto.</strong>
          </p>
          <p>
            <strong>Pregúntanos</strong>. Contamos tu historia. QUEREMOS QUE
            SEPAN LO BIEN QUE LO HACES.
          </p>
        </div>
      </UriGelerSection>
      <YourLanguageSection>
        <div>
          <img src={indio} alt="indio" />
        </div>
        <div>
          <h2>
            MENSAJE ARAPAHOE LLEGAR MUY LEJOS. COMUNICAR, NO VENDER HUMO. TÚ,
            SER ARAPAHOE
          </h2>
          <img src={tuLenguaje} alt="hablamos tu lenguaje" />
          <p>
            <strong>Arapahoes, Cheyenes, Comanches</strong>… todos unidos por
            una característica. ¿La Gran Llanura? ¿La Reserva de Oklahoma? No.
            Por la <strong>necesidad de comunicación</strong> y un problema que
            solucionar: ser emisores y llegar a los receptores sin perder la
            señal. Generación tras generación, poblado tras poblado, el arte de
            comunicar siempre estuvo unido al lenguaje y, sobre todo, al{" "}
            <strong>medio</strong>. Por eso, las señales de humo no fueronotr a
            cosa que una gran <strong>solución pensada en equipo</strong>.
          </p>
          <p>
            Porque sea cual sea tu público,{" "}
            <strong>encontramos el medio</strong>.
            <strong>HABLAMOS EL LENGUAJE DE TU TRIBU.</strong>
          </p>
        </div>
      </YourLanguageSection>
      <Contact />
    </StyleHistoryWrapper>
  );
};

export default History;

const StyleHistoryWrapper = styled.main`
  img {
    width: 100%;
  }
`;

const StyleTellYourStory = styled.section`
  padding: 4rem 1rem;

  div:nth-child(1) {
    margin: auto;
    width: 50%;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  span {
    background-color: ${({ theme }) => theme.color.primaryColor};
  }

  @media screen and (min-width: 770px) {
    display: flex;

    div:nth-child(1) {
      width: 80%;
    }
  }
`;

const StyleNamingSection = styled(StyleTellYourStory)`
  background-color: ${({ theme }) => theme.color.primaryColor};

  @media screen and (min-width: 770px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const StyleMakeRememberSection = styled(StyleTellYourStory)``;

const UriGelerSection = styled(StyleNamingSection)``;

const YourLanguageSection = styled(StyleTellYourStory)``;
