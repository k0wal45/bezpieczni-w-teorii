import plansza from '../assets/img/plansza.png'

import { InView } from "react-intersection-observer"
import { useDispatch } from "react-redux"
import {set} from '../slice'

import kyndryl from '../assets/img/kyndryl.webp'
import emag from '../assets/img/emag.webp'
import maliCzarodzieje from '../assets/img/czarodzieje.webp'

const Partnerzy = () => {
  const dispatch = useDispatch()

  return (
    <InView as='section' id='partnerzy' className='flex flex-col items-start justify-center p-4 my-24 gap-12' onChange={(inView) => {
      if (inView) {
        dispatch(set('partner'))
      }
    }}>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Partnerzy</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <img src={plansza} alt="Projekt realizowany w ramach olimpiady Zwolnieni z Teorii i programu Krok do przodu, którego partnerami są ING Bank Śląski i Fundacja ING Dzieciom " className='w-full lg:w-2/3 mx-auto rounded-lg'/>

      <ul className="w-full lg:max-w-2/3 flex flex-wrap items-center justify-center gap-8 mx-auto">
        <li>
          <img src={kyndryl} alt="kyndryl logo" className='max-h-32 object-contain'/>
        </li>
        <li>
          <img src={emag} alt="Emag logo" className='max-h-32 rounded-[1.5rem]'/>
        </li>
        <li>
          <img src={maliCzarodzieje} alt="Mali Czarodzieje logo" className='max-h-32 rounded-[1.5rem] object-contain'/>
        </li>
      </ul>
      
      <p className="text-xl font-codec-bold text-gray-400 text-center mx-auto">Zapraszamy do współpracy partnerów, którzy podzielają nasze zobowiązanie do kształcenia nowej generacji specjalistów w dziedzinie cyberbezpieczeństwa.</p>
      <p className="text-xl font-bold text-gray-400 text-center mx-auto">+48 508 374 625 / bezpieczniwteorii@gmail.com</p>

      
    </InView>
  )
}

export default Partnerzy
