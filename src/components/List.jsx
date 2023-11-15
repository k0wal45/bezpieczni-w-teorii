import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import photo from "../assets/img/list.webp"
import { faBug, faEarth, faFile, faGears } from "@fortawesome/free-solid-svg-icons"


const List = () => {
  return (
    <section className='flex flex-col items-start justify-center p-4 my-24'>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Kluczowe Aspekty Problemu</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 mt-16 bg-base-200 w-full lg:w-2/3 mx-auto p-8 rounded-xl shadow-xl">
      
        <h5 className="font-codec-bold text-4xl lg:text-6xl text-white">Bezpieczeństwo w Erze Cyfrowej</h5>

        <p className="text-xl font-codec text-jusstify lg:text-center lg:max-w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto veritatis tempora voluptate et reprehenderit facere nulla suscipit esse. Corrupti?</p>

        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-8 text-white">

          <ul className="list-disc flex flex-col gap-4 text-xl px-4">
            <li className="flex gap-4">
              <FontAwesomeIcon icon={faBug} className='text-primary text-3xl hover:text-primary'/>
              <div className="flex flex-col gap-4">
                <h6 className="text-2xl font-codec-bold">Wzrost Cyberataków</h6>
                <p className="font-codec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae aspernatur, maxime mollitia dolorem explicabo?</p>
              </div>
            </li>
            <li className="flex gap-4">
              <FontAwesomeIcon icon={faFile} className='text-primary text-3xl hover:text-primary'/>
              <div className="flex flex-col gap-4">
                <h6 className="text-2xl font-codec-bold">Utrata danych i prywatności.</h6>
                <p className="font-codec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae aspernatur, maxime mollitia dolorem explicabo?</p>
              </div>
            </li>
            <li className="flex gap-4">
              <FontAwesomeIcon icon={faEarth} className='text-primary text-3xl hover:text-primary'/>
              <div className="flex flex-col gap-4">
                <h6 className="text-2xl font-codec-bold">Wpływ na firmy i instytucje</h6>
                <p className="font-codec">Brak wysoko wykwalifikowanych specjalistów od cyberbezpieczeństwa wpływa na nie negatywnie.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <FontAwesomeIcon icon={faGears} className='text-primary text-3xl hover:text-primary'/>
              <div className="flex flex-col gap-4">
                <h6 className="text-2xl font-codec-bold">Wysoki popyt na specjalistów</h6>
                <p className="font-codec">W miarę jak rosną zagrożenia cybernetyczne, popyt na specjalistów od cyberbezpieczeństwa stale rośnie. Jednak brak wystarczającej liczby wykwalifikowanych ekspertów sprawia, że wiele firm i instytucji ma trudności z zabezpieczeniem swoich systemów przed atakami.</p>
              </div>
            </li>
          </ul>
        <img src={photo} alt="Cyber Security" className="w-full lg:max-w-[28vw] object-cover" />
        </div>
      </div>

    </section>
  )
}

export default List
