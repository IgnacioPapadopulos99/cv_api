import React from 'react'
import './about.css'
import ME from '../../assets/3.jpeg'
import {FaAward} from 'react-icons/fa'
import {BiMap} from 'react-icons/bi'
import {FaLanguage} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Mi Perfil Profesional</h5>
        <h2>Sobre Mi</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
            </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small style={{ display: 'block' }}>3+ Años</small>
              <small style={{ display: 'block' }}>Vivatia</small>
            </article>

            <article className="about__card">
              <BiMap className='about__icon'/>
              <h5>Localidad</h5>
              <small >Buenos Aires, Argentina</small>
            </article>

            <article className="about__card">
              <FaLanguage className='about__icon'/>
              <h5>Idiomas</h5>
              <small style={{ display: 'block' }}>Español - Nativo</small>
              <small style={{ display: 'block' }}>Inglés - Básico</small>
            </article>
          </div>

          <p>
            Actualmente me encuentro trabajando como Analista Programador Jr para la empresa Vivatia, prestando servicios al cliente
            Banco Galicia donde me encargo de la gestión de incidentes productivos, mediante el uso de tecnologías como SQL Server y
            Service Now para administrar los flujos de trabajo. <br></br>
            En mi tiempo libre disfruto de la lectura, del deporte y de continuar capacitándome para desarrollar mi potencial.
            Me considero un entusiasta del aprendizaje continuo. Aspiro a un puesto que me permita seguir creciendo y trabajar junto 
            a un equipo talentoso para abordar desafíos y avanzar en mi desarrollo profesional.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>

  )
}

export default About