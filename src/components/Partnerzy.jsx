import ing from '../assets/img/ing.webp'
import lunaris from '../assets/img/lunaris.webp'
import emag from '../assets/img/emag.webp'

const Partnerzy = () => {
  return (
    <section className='flex flex-col items-start justify-center p-4 my-24 gap-12'>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Partnerzy</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <ul className="w-full lg:max-w-2/3 flex flex-wrap items-center justify-center gap-8 mx-auto">
        <li>
          <img src={ing} alt="ING logo" className='h-32'/>
        </li>

        <li>
          <img src={emag} alt="EMAG Logo" className='h-24'/>
        </li>
        
        <li>
          <img src={lunaris} alt="Luanris Web Logo" className='h-32'/>
        </li>

      </ul>
      
    </section>
  )
}

export default Partnerzy
