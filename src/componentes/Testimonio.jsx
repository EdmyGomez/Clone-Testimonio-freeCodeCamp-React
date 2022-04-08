import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      {/* Crear imagenes sencillas con React */}
      {/* <img className="imagen-testimonio" src={require("../imagenes/aiony-haust-3TLl_97HNJo-unsplash.jpg")} alt="Foto de Aiony" srcset="" /> */}
      {/* Uso de Comillas invertidas para poder usar props en las imagenes */}

      <img
        className="img-fluid rounded img-responsive imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt={`Foto de ${props.nombre}`}
        srcset=""
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
