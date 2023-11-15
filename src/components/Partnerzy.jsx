import ing from '../assets/img/ing.webp'

import { InView } from "react-intersection-observer"
import { useDispatch } from "react-redux"
import {set} from '../slice'

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

      <ul className="w-full lg:max-w-2/3 flex flex-wrap items-center justify-center gap-8 mx-auto">
        <li>
          <img src={ing} alt="ING logo" className='h-32'/>
        </li>
      </ul>
      
    </InView>
  )
}

export default Partnerzy
