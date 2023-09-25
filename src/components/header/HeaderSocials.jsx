import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ignacionpapadopulos/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="" target='_blank' rel='noreferrer'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials

//<a href="https://github.com/federey99" target='_blank' rel='noreferrer'><FaGithub/></a>