import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../imagenes/aiony-haust-3TLl_97HNJo-unsplash.jpg")} alt="Foto de Aiony" srcset="" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>Emms Bostian </strong>en Colombia
        </p>
        <p className="cargo-testimonio">
          
          Ingeniera de Software en <strong>Globant</strong>
        </p>
        <p className="texto-testimonio">
        "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        </p>
      </div>
    
    </div>
  );
}

export default Testimonio;