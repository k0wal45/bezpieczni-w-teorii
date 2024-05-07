import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import daniel from '../assets/img/daniel.webp'
import artur from '../assets/img/artur.webp'
import krzysiu from '../assets/img/krzysiu.webp'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux'
import {set} from '../slice'

const Kto = () => {

  const dispatch = useDispatch()

  return (
    <InView as='section' id='kto' className='flex flex-col items-start justify-center p-4 my-24 gap-24' onChange={(inView) => {
      if (inView) {
        dispatch(set('kto'))
      }
    }}>

      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Kto za tym stoi</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-auto mx-auto w-3/4 ">
        {/* KARTA 1 */}
        < div className="flex flex-col rounded-xl border-4 border-base-200 max-w-[22rem] bg-base-200 flex-1">
          <img src={daniel} alt="Daniel Kowalski zdjęcie" className="aspect-square object-cover rounded-lg" />
          <div className="flex flex-col gap-4 p-4">
            <h6 className="text-2xl font-codec-bold">Daniel Kowalski</h6>
            <ul className="flex gap-4 flex-wrap max-w-full">
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Grafika</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Strona Internetowa</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Social Media</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Marketing</li>
            </ul>
            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/in/daniel-kowalski-com/" target='_blank' rel="noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} className='text-white text-3xl hover:text-primary'/>
              </a>
              <a href="https://github.com/k0wal45" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className='text-white text-3xl hover:text-primary'/>
              </a>
              <a href="mailto:d.kowal.com@gmail.com" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faSquareEnvelope} className='text-white text-3xl hover:text-primary'/>
              </a>
              <a href="https://daniel-kowalski.com" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGlobe} className='text-white text-3xl hover:text-primary'/>
              </a>
            </div>
          </div>
        </div>
        {/* KARTA 2 */}
        < div className="flex flex-col rounded-xl border-4 border-base-200 max-w-[22rem] bg-base-200 flex-1">
          <img src={artur} alt="Artur Rudzik Zdjęcie" className="aspect-square object-cover rounded-lg" />
          <div className="flex flex-col gap-4 p-4">
            <h6 className="text-2xl font-codec-bold">Artur Rudzik</h6>
            <ul className="flex gap-4 flex-wrap max-w-full">
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Pomysłodawca projektu</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Szkolenie</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Kontakt z firmami</li>
            </ul>
            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/in/artur-rudzik/" target='_blank' rel="noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} className='text-white text-3xl hover:text-primary'/>
              </a>

              <a href="mailto:artur_rudzik@o2.pl" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faSquareEnvelope} className='text-white text-3xl hover:text-primary'/>
              </a>

            </div>
          </div>
        </div>
        {/* KARTA 3 */}
        < div className="flex flex-col rounded-xl border-4 border-base-200 max-w-[22rem] bg-base-200 flex-1">
          <img src={krzysiu} alt="Krzysztof Machowski zdjęcie" className="aspect-square object-cover rounded-lg" />
          <div className="flex flex-col gap-4 p-4">
            <h6 className="text-2xl font-codec-bold">Krzysztof Machowski</h6>
            <ul className="flex gap-4 flex-wrap max-w-full">
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Wnioski</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Dokumentacja</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Statystyki</li>

            </ul>
            <div className="flex gap-4 justify-center">
            

              <a href="mailto:kmachowski04@gmail.com" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faSquareEnvelope} className='text-white text-3xl hover:text-primary'/>
              </a>

            </div>
          </div>
        </div>


      </div>

    </InView>
  )
}

export default Kto
