import { ExtraInfoContainer, ExtraInfoSpan } from "./ComponentsStyle";

const ExtraInfo = () => {
  return (
    <>
      <div className="homePageExtraInfoCont">
        <ExtraInfoContainer>
          <ExtraInfoSpan href="/app">
            <span className="info-span">
              <img
                alt="Devolución icon"
                className="info-image"
                src="https://static.dafiti.com.ar/cms/DEVOLUCION-22-10-19.png"
              />
            </span>
            <hr />
            <span className="info-text">
              <b>CAMBIO Y DEVOLUCIÓN</b>
              <br />
              GRATIS, A TODO EL PAÍS
            </span>
          </ExtraInfoSpan>

          <ExtraInfoSpan href="/app">
            <span className="info-span">
              <img
                alt="Envío icon"
                className="info-image"
                src="https://cdn.dynamicyield.com/api/8767611/images/1767bb4411226__MARCAS.png"
              />
            </span>
            <hr />
            <span className="info-text">
              <b>MÁS DE 500 MARCAS</b>
              <br />
              LOCALES E INTERNACIONALES
            </span>
          </ExtraInfoSpan>

          <ExtraInfoSpan href="/app">
            <span className="info-span">
              <img
                alt="Envío icon"
                className="info-image"
                src="https://cdn.dynamicyield.com/api/8767611/images/16b02a87cb6f__FINANACIAMIENTO.png"
              />
            </span>
            <hr />
            <span className="info-text">
              <b>MULTIPLES FORMAS DE PAGO</b>
              <br />
              TARJETAS, EFECTIVO, MERCADOPAGO
            </span>
          </ExtraInfoSpan>

          <ExtraInfoSpan href="/app">
            <span className="info-span">
              <img
                alt="Envío icon"
                className="info-image"
                src="https://cdn.dynamicyield.com/api/8767611/images/f94d780b5cae__FORMASPAGO.png "
              />
            </span>
            <hr />
            <span className="info-text">
              <b>FINANCIACIÓN</b>
              <br />3 Y 6 CUOTAS SIN INTERES
            </span>
          </ExtraInfoSpan>
        </ExtraInfoContainer>
      </div>
    </>
  );
};

export default ExtraInfo;
