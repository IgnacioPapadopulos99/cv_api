import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Habilidades - Fortalezas</h5>
      <h2>Perfil Profesional</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Digitalizador</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gestión, administración y digitalización de documentos bancarios.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo de las aplicaciones de la empresa Vivatia, Thuban Software y Captika Software.</p>
            </li>
          </ul>
        </article>
        {/*FIN DE UI/UX*/}

        <article className="service">
          <div className="service__head">
            <h3>Soporte Técnico</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gestión de incidentes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing del sistema de la empresa.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Soporte de Software y Hardware a usuarios y clientes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Asesoramiento e implementación de recursos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Resolución de problemas.</p>
            </li>
          </ul>
        </article>
        {/*FIN DE DESARROLLO WEB*/} 

        <article className="service">
          <div className="service__head">
            <h3>Analista Programador Jr</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo de Java y SQL Server.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gestión de incidentes productivos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo de Service Now.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Uso de Metodologías Ágiles.</p>
            </li>
          </ul>
        </article>
        {/*FIN DE CREACIÓN DE CONTENIDO*/} 

      </div>
    </section>
  )
}

export default Services