import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/educacion/descarga.jpeg'
import Certificado_Secundario from '../../assets/educacion/descarga.jpeg'
import IMG2 from '../../assets/educacion/CCNA.png'
import Certificado_CCNA from '../../assets/educacion/CCNA.pdf'
import IMG3 from '../../assets/educacion/FirstCertificate.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi conocimiento</h5>
      <h2>Educación y Certificados</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>Lorem ipsum</h3>
          <h5>Lorem ipsum.</h5>
          <h5>Lorem ipsum.</h5>
          <div className='portfolio__item-cta'>
          <a href={IMG1} download="certificado_Secundario" className='btn'>Descargar</a>
          <a href={IMG1} className='btn btn-primary' target='_blank' rel='noreferrer'>Ver</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>Lorem ipsum</h3>
          <h5>Lorem ipsum</h5>
          <div className='portfolio__item-cta'>
          <a href={IMG1} download="certificado_CCNA" className='btn'>Descargar</a>
          <a href={IMG1} className='btn btn-primary' target='_blank' rel='noreferrer'>Ver</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>Lorem ipsum</h3>
          <h5>Lorem ipsum</h5>
          <div className='portfolio__item-cta'>
          <a href={IMG1} download="First_certificate" className='btn'>Descargar</a>
          <a href={IMG1} className='btn btn-primary' target='_blank' rel='noreferrer'>Ver</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio