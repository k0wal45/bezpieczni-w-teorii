import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './hamburger.css'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const position = useSelector((state) => state.counter.value)

  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(position)

  useEffect(() => {
    setActive(position)
  }, [position])


  return (
    <nav className='flex justify-between items-center px-4 lg:px-8 py-4 bg-base-100 shadow-lg fixed w-full max-w-screen'>
      <div className="flex gap-8 items-center justify-center">
        <img src={logo} alt="Logo Bezpieczni W Teorii" className='w-24'/>
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
        <a href="#glowna">
          <li className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
            ${
              active === 'glowna'
              ? 'border-l-2 border-gray-500'
              : ''
            }
          `}>
            Strona Główna
          </li>
        </a>
        <a href="#projekt">
          <li className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
            ${
              active === 'projekt'
              ? 'border-l-2 border-gray-500'
              : ''
            }
          `}>
          Co to za projekt
          </li>
        </a>
        <a href="#kto">
          <li className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
            ${
              active === 'kto'
              ? 'border-l-2 border-gray-500'
              : ''
            }
          `}>
          Kto za tym stoi
          </li>
        </a>
        <a href="#partnerzy">
          <li className={`py-2 px-4 pr-8 border-b-2 border-base-100 hover:text-primary rounded-bl-xl
            ${
              active === 'partner'
              ? 'border-l-2 border-gray-500'
              : ''
            }
          `}>
          Partnerzy
          </li>
        </a>
        <li>
          <ul className="flex justify-center items-center gap-8">
            <li>
              <a href="#glowna" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl hover:text-primary'/>
              </a>
            </li>
            <li>
              <a href="#glowna" target='_blank' rel="noreferrer">
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
