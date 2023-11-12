import React, { useState } from 'react'
import logo from '../../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './hamburger.css'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('glowna')


  return (
    <nav className='flex justify-between items-center px-4 lg:px-8 py-4 bg-base-100 shadow-lg fixed w-full'>
      <div className="flex gap-8 items-center justify-center">
        <img src={logo} alt="Logo Oktech" className='w-24'/>
        <h2 className='text-4xl font-codec-bold text-white translate-y-2 hidden lg:block'>Bezpieczni W Teorii</h2>
      </div>


        <label className='flex z-50'>
          <input type="checkbox" id="check" onClick={(e) => {e.target.checked ? setVisible(true) : setVisible(false)}}/> 
          <span></span>
          <span></span>
          <span></span>
        </label>

      <div className={`absolute top-0 right-0 h-screen bg-base-200 z-20 origin-right transition-all duration-350 backdrop-brightness-90
        ${
          visible
          ? 'scale-x-1'
          : 'scale-x-0'
        }
      `}>

      <ul className='gap-8 pt-48 p-4 text-white text-start flex flex-col text-2xl font-codec-bold'>
        <li onClick={() => {setActive('glowna')}} className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
          ${
            active === 'glowna'
            ? 'border-l-2 border-gray-500'
            : ''
          }
        `}>
          <a href="#glowna">Strona Główna</a>
        </li>
        <li onClick={() => {setActive('projekt')}} className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
          ${
            active === 'projekt'
            ? 'border-l-2 border-gray-500'
            : ''
          }
        `}>
          <a href="#projekt">Co to za projekt</a>
        </li>
        <li onClick={() => {setActive('kto')}} className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
          ${
            active === 'kto'
            ? 'border-l-2 border-gray-500'
            : ''
          }
        `}>
          <a href="#kto">Kto za tym stoi</a>
        </li>
        <li onClick={() => {setActive('partner')}} className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
          ${
            active === 'partner'
            ? 'border-l-2 border-gray-500'
            : ''
          }
        `}>
          <a href="#partnerzy">Partnerzy</a>
        </li>
        <li>
          <ul className="flex justify-center items-center gap-8">
            <li>
              <a href="#glowna">
                <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl hover:text-primary'/>
              </a>
            </li>
            <li>
              <a href="#glowna">
                <FontAwesomeIcon icon={faInstagram} className='text-white text-3xl hover:text-primary'/>
              </a>
            </li>

          </ul>
        </li>
      </ul>
    </div>

    </nav>
  )
}

export default Navbar
