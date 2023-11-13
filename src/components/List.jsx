import photo from "../assets/img/list.webp"


const List = () => {
  return (
    <section className='flex flex-col items-start justify-center p-4 my-24'>
      <div className="flex flex-col ml-[10vw] gap-2">
        <h3 className="text-4xl lg:text-6xl font-codec-bold text-white">Kluczowe Aspekty Problemu</h3>
        <div className="w-3/5 border-2 border-white"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-8 mt-16 bg-base-200 w-full lg:w-2/3 mx-auto p-8 rounded-xl shadow-xl">
        <div className="flex flex-col items-start justify-center gap-8 text-white lg:max-w-[30vw]">
          <h5 className="font-codec-bold text-4xl">Bezpieczeństwo w Erze Cyfrowej</h5>
          <ul className="list-disc flex flex-col gap-4 text-xl px-4 ">
            <li>Wzrost cyberataków.</li>
            <li>Utrata danych i prywatności.</li>
            <li>Wpływ na firmy i instytucje - Brak wysoko wykwalifikowanych specjalistów od cyberbezpieczeństwa wpływa na nie negatywnie.</li>
            <li>Wysoki popyt na specjalistów - W miarę jak rosną zagrożenia cybernetyczne, popyt na specjalistów od cyberbezpieczeństwa stale rośnie.</li>
          </ul>
        </div>
        <img src={photo} alt="" className="w-full lg:max-w-[30vw] rounded-xl object-cover" />
      </div>

    </section>
  )
}

export default List
