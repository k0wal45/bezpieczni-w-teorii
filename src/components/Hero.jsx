import titleImg from "../assets/img/title.webp"
import { InView } from "react-intersection-observer"
import { useDispatch } from "react-redux"
import {set} from '../slice'

const Hero = () => {

  const dispatch = useDispatch()

  return (
    <InView as="section" id="glowna" className="flex flex-col lg:flex-row justify-center gap-4 items-center lg:px-48 min-h-screen max-w-screen pt-32 pb-12 lg:pb-0 bg-photo border-b-2 border-base-200 shadow-2xl" onChange={(inView) => {
      if (inView) {
        dispatch(set('glowna'))
      }
    }}>
      <div className="flex flex-col justify-center items-start lg:max-w-[40vw] lg:pt-4 p-4 gap-8">  
        <h1 className="text-4xl lg:text-6xl font-codec-bold  text-white">Świadomość i Specjaliści to klucz do bezpieczeństwa</h1>
        <p className="text-xl font-codec text-gray-300">Nasze szkolenia pozwolą naszym uczniom w codziennym korzystaniu z technologii</p>
      </div>
      <img src={titleImg} alt="Laptop Bezpiecznie" className="w-[80vw] lg:max-w-[40vw] lg:w-full"/>
    </InView>
  )
}

export default Hero
