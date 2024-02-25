import { InView } from "react-intersection-observer"
import { useDispatch } from "react-redux"
import { set } from "../slice"


const Fundraising = () => {

  const dispatch = useDispatch()

  return (
    <InView as='section' id='founding' className='flex flex-col items-start justify-center py-12 gap-12 bg-base-200' onChange={(inView) => {
      if (inView) {
        dispatch(set('founding'))
      }
    }}>
      <div className="flex flex-col ml-[10vw] gap-2 p-4">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Zbiórka Funduszy</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

    <div className="w-full bg-base-200 py-12 flex flex-col lg:flex-row justify-center items-center gap-12 p-4">
    <div className="relative w-full max-w-[30rem] h-[500px] overflow-hidden">
      <iframe title="zbiorka" className="absolute top-0 left-p bottom-0 right-0 w-full h-full" src="https://zrzutka.pl/fsewtx/widget/13" frameborder="0" scrolling="no"></iframe>
      </div> 
      <div className="lg:max-w-[33%] flex flex-col gap-4">
        <h5 className="text-3xl lg:text-5xl font-codec-bold text-white">Pomóż nam zebrać fundusze na edukacje w naszej szkole</h5>
        <p className="text-xl">Chcemy zapewnić naszym uczniom unikalne doświadczenia edukacyjne poprzez zakup okularów wirtualnej rzeczywistości (VR). Te innowacyjne narzędzia umożliwią przekazywanie wiedzy z zakresu cyberbezpieczeństwa w fascynujący sposób. Wspierając naszą zbiórkę, pomagasz nam nie tylko zdobyć okulary VR, ale również otrzymać oprogramowanie do nauki jako wyjątkowy prezent od naszego partnera. Dajmy razem szansę na rozwój i lepsze zrozumienie dzisiejszych wyzwań cyfrowego świata!</p>
        <a href="https://zrzutka.pl/fsewtx" className="btn btn-primary text-white text-xl">Wspomóż naszą zbiórkę</a>
      </div>
    </div>


    </InView>
  )
}

export default Fundraising
