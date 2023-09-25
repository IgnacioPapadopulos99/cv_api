//Call To Action
import React from 'react'
import CV from '../../assets/CV Ignacio.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="CV_Ignacio" className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contacto</a>

    </div>
  )
}

export default CTA