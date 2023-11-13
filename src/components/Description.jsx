import photo from "../assets/img/description.webp"

const Description = () => {
  return (
    <section className='flex flex-col items-start justify-center p-4 my-24'>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Opis projektu</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 mt-16 bg-base-200 w-full lg:w-2/3 mx-auto p-8 rounded-xl shadow-xl">
        <div className="flex flex-col items-start justify-center gap-8 text-white">
          <h5 className="font-codec-bold text-4xl">Bezpieczeństwo w Erze Cyfrowej</h5>
          <p className='text-xl font-codec lg:max-w-[30vw] text-justify'>Brak świadomości o cyberbezpieczeństwie powoduje wzrost liczby cyberataków i utratę prywatności. Jednocześnie brakuje wykwalifikowanych specjalistów w tej dziedzinie, co wpływa negatywnie na firmy. Rosnący popyt na ekspertów od cyberbezpieczeństwa wymaga zwiększenia edukacji publicznej, zachęcania młodych ludzi do kariery w tej branży oraz inwestycji w szkolenia dla pracowników IT, aby poprawić ogólny poziom bezpieczeństwa w erze cyfrowej.</p>
        </div>
        <img src={photo} alt="" className="w-full lg:max-w-[30vw] rounded-xl" />
      </div>

    </section>
  )
}

export default Description
