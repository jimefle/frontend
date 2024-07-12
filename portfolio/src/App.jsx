
import './App.css'

function App() {


  return (
    <body>
      <header>
        <button className='header-button'>Experiencia</button>
        <button className='header-button'>Proyectos y becas</button>
        <button className='header-button'>Sobre mí</button>
        <button className='header-button'>Contacto</button>
      </header>
      <main>
        <section className='hero'>
          <img src="" alt="Foto de perfil" />
          <h1>Hola! Soy Jimena</h1>
          <p>Estudiante de 5to año de Ingeniería en Sistemas de Información.</p>
          <button className='contact-button'>Contactame</button>
          <button className='contact-button'>Linkedin</button>
        </section>

        <section>
          <h2>Experiencia laboral</h2>
        </section>

        <section>
          <h2>Proyectos y becas</h2>
        </section>

        <section>
          <h2>Sobre mí</h2>
        </section>
      </main>
    </body>
  )
}

export default App
