import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux'
import {set} from '../slice'
import MilestoneCard from './MilestoneCard';


const Milestones = () => {
  const dispatch = useDispatch()

  return (
    <InView as='section' className='flex flex-col items-start justify-center p-4 my-24 gap-8' id="kamienmilowy" onChange={(inView) => {
      if (inView) {
        dispatch(set('mila'))
      }
    }}>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Progres projektu</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <div className="flex lg:flex-col w-full">
        <ul class="steps steps-vertical lg:steps-horizontal mx-auto w-min lg:w-full z-20">
          <li class="step step-primary"></li>
          <li class="step step-primary"></li>
          <li class="step step-primary"></li>
          <li class="step step-primary"></li>
          <li class="step"></li>
        </ul>

        <div className="grid grid-rows-5 lg:grid-rows-1 lg:grid-cols-5 w-full gap-8">
          <MilestoneCard 
            title='Uzgodnienie Terminu Szkoleń'
            list={['Określenie daty rozpoczęcia projektu poprzez uzgodnienie terminu pierwszego szkolenia.','Zorganizowanie spotkania w celu ustalenia dogodnych dat dla uczestników.']}
          />
          <MilestoneCard 
            title='Rozpoczęcie Współpracy z Partnerami'
            list={['Nawiązanie współpracy z partnerami, takimi jak szkoły, instytucje edukacyjne czy eksperci ds. cyberbezpieczeństwa.','Podpisanie umów i ustalenie roli partnerów w projekcie.']}
          />
          
          <MilestoneCard 
            title='Zaplanowanie Treści Szkoleń'
            list={['Opracowanie planu szkoleń, obejmującego kluczowe tematy z zakresu cyberbezpieczeństwa.','Ustalenie formy przekazu informacji, materiałów dydaktycznych i interaktywnych elementów szkoleń.']}
          />
          <MilestoneCard 
            title='Realizacja Szkoleń'
            list={['Przeprowadzenie planowanych szkoleń zgodnie z ustalonymi terminami i treściami.','Monitorowanie i ewaluacja procesu szkoleniowego, zbieranie opinii uczestników oraz dostosowywanie programu, jeśli to konieczne.']}
          />
          <MilestoneCard 
            title='Pozyskanie Środków na Realizację Projektu'
            list={['Opracowanie planu pozyskania środków finansowych na realizację szkoleń.','Wyszukiwanie grantów, sponsorów lub innych źródeł finansowania.']}
          />
        </div>
      </div>
 

    </InView>
  )
}

export default Milestones
