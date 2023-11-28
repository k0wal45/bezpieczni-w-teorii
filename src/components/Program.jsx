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
          text='Zorganizujemy kompleksowe szkolenia z zakresu cyberbezpieczeństwa dla uczniów ZSTiO nr 2, obejmujące zarówno podstawowe aspekty, jak i zaawansowane techniki ochrony przed cyberatakami.'
        />
        <ProgramCard
          title='Wykłady Specjalistów i Przedstawicieli Firm'
          img={faHandshake}
          text='Zapewnimy dostęp do wykładów prowadzonych przez doświadczonych specjalistów oraz przedstawicieli firm branżowych, umożliwiając uczestnikom pozyskanie aktualnej wiedzy i perspektywy z rynku pracy.'
        />
        <ProgramCard
          title='Zakup pomocy edukacyjnych Wirtualnej Rzeczywistości'
          img={faVrCardboard}
          text='Inwestujemy w narzędzia Wirtualnej Rzeczywistości (VR) w celu dostarczenia praktycznych doświadczeń oraz możliwości, skuteczniejszego przyswajania kluczowych koncepcji z obszaru cyberbezpieczeństwa. Dając również dostęp do tej technologii klasom Technik Programista'
        />
      </div>
      

    </InView>
  )
}

export default Program
