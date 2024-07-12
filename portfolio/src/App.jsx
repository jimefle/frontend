
import './App.css'

function App() {


  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      </head>
      <body>
        <header>
          <a href="#proyectos" className='header-button'>Proyectos y cursos</a>
          <a href="#educacion" className='header-button'>Educación</a>
          <a href="#sobre" className='header-button'>Sobre mí</a>
          <a href="#contacto" className='header-button'>Contacto</a>
        </header>
        <main>
          <section className='hero'>
            <h1 className='welcome'>Hola! Soy Jimena</h1>
            <p className='welcome-info'>Soy estudiante de 5to año de <strong>Ingeniería en Sistemas de Información</strong>. Mi objetivo es seguir 
                aprendiendo y creciendo profesionalmente, por lo que estoy abierta a
                nuevos desafíos que me permitan aplicar mis conocimientos teóricos y prácticos y ampliar mis
                habilidades tanto técnicas como interpersonales.</p>
            <div className="buttons">
              <a href='mailto:flechaajimena@gmail.com' className='contact-button'>Contactame</a>
              <a className='contact-button'>Linkedin</a>
            </div>
          </section>

          <section>
            <div className='section-icon'>
              <i className="fa-solid fa-code"></i>
              <h2 id='proyectos'>Proyectos y cursos</h2>
            </div>
            <div className="proyect-section">
              
            </div>
          </section>

          <section>
            <div className='section-icon'>
              <i className="fa-solid fa-book"></i>
              <h2 id='educacion'>Educación</h2>
            </div>
            <h3>Ingeniería en Sistemas de Información | 2020</h3>
            <h4> Universidad Tecnológica Nacional - Facultad Regional Santa Fe</h4>
            <h3> Educación Secundaria | 2014 - 2019</h3>
            <h4> Colegio Plaza Mayor</h4>
            <h4> Bachillerato en economía y administración</h4>
            <h3>Idiomas</h3>
            <ul>
              <li> Inglés | Cambridge First Certificate (B2)</li>
              <li> Italiano | ADA (B1)</li>
            </ul>

  

          </section>

          <section>
          <div className='section-icon'>
              <i className="fa-solid fa-star"></i>
              <h2 id='sobre'>Sobre mí</h2>
            </div>
            <p>Es como un santuario (laico) erigido para honrar la memoria de un ateo irreductible. 
              Esa puede ser la sensación inicial que se experimente al ascender por la escalera de la Fundación José Saramago, e
              n cuyos escalones se pueden leer frases extraídas de los distintos libros que el prolífico novelista portugués escribió 
              a lo largo de una trayectoria creativa que, en 1998, desembocó en la obtención del Premio Nobel de Literatura.

              En el primer piso de esta institución de Lisboa, Portugal, se encuentra el acceso a la muestra permanente “Saramago: 
              la semilla y los frutos”, una travesía exhaustiva y cautivadora sobre la vida intelectual de uno de los grandes narradores europeos
              del siglo XX. Y el primer impacto en la retina del visitante es claramente del orden de las emociones: una gigantografía reproduce
              una foto del archivo familiar, datada en 1953, en la que un Saramago en la plenitud de su madurez posa, 
              en bicicleta, junto a su pequeña hija Violante.</p>
          </section>
        </main>
      </body>
      </html>
  )
}

export default App
