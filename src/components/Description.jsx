import photo from "../assets/img/description.webp"
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux'
import {set} from '../slice'


const Description = () => {
  const dispatch = useDispatch()

  return (
    <InView as='section' className='flex flex-col items-start justify-center p-4 my-24' onChange={(inView) => {
      if (inView) {
        dispatch(set('projekt'))
      }
    }}>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Opis projektu</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 mt-16 bg-base-200 w-full lg:w-2/3 mx-auto p-8 rounded-xl shadow-xl">
        <div className="flex flex-col items-start justify-center gap-8 text-white">
          <h5 className="font-codec-bold text-4xl">Bezpieczeństwo w Erze Cyfrowej</h5>
          <p className='text-xl lg:max-w-[30vw] text-justify'>Nasz projekt to społeczna inicjatywa edukacyjna skierowana do uczniów oraz nauczycieli Zespołu Szkół Technicznych i Ogólnokształcących nr 2 w Katowicach, którzy chcą poszerzyć swoje umiejętności z zakresu cyberbezpieczeństwa. W ramach szkoleń oferujemy kompleksowy program, obejmujący tematykę ochrony przed cyberatakami, bezpiecznego korzystania z technologii, oraz praktyczne umiejętności z zakresu analizy zagrożeń.</p>
        </div>
        <img src={photo} alt="" className="w-full lg:max-w-[30vw] rounded-xl" />
      </div>

    </InView>
  )
}

export default Description
