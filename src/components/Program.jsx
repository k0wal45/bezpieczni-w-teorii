import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux'
import {set} from '../slice'
import ProgramCard from './ProgramCard';
import { faHandshake, faShieldHalved, faVrCardboard } from '@fortawesome/free-solid-svg-icons';


const Program = () => {
  const dispatch = useDispatch()

  return (
    <InView as='section' className='flex flex-col items-start justify-center p-4 my-24 gap-8 z-20' id="program" onChange={(inView) => {
      if (inView) {
        dispatch(set('program'))
      }
    }}>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Program projektu</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mx-auto lg:w-3/4 z-10">
        <ProgramCard
          title='Szkolenia Cyberbezpieczeństwa'
          img={faShieldHalved}
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit natus accusantium rem sunt obcaecati in maxime eius consequatur, quo excepturi.'
        />
        <ProgramCard
          title='Wykłady Specjalistów i Przedstawicieli Firm'
          img={faHandshake}
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit natus accusantium rem sunt obcaecati in maxime eius consequatur, quo excepturi.'
        />
        <ProgramCard
          title='Zakup pomocy edukacyjnych Wirtualnej Rzeczywistości'
          img={faVrCardboard}
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit natus accusantium rem sunt obcaecati in maxime eius consequatur, quo excepturi.'
        />
      </div>
      

    </InView>
  )
}

export default Program
