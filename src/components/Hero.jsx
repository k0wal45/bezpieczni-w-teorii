import titleImg from "../assets/img/title.webp"

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-4 items-center lg:px-48 min-h-screen max-w-screen pt-32 pb-12 lg:pb-0 bg-photo border-b-2 border-base-200 shadow-2xl">
      <div className="flex flex-col justify-center items-start lg:max-w-[40vw] lg:pt-4 p-4 gap-8">  
        <h1 className="text-7xl font-codec-bold  text-white">Lorem ipsum dolor sit amet.</h1>
        <p className="text-xl font-codec text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum rerum aspernatur dicta animi eligendi fugit saepe quaerat veritatis ullam.</p>
      </div>
      <img src={titleImg} alt="" className="w-[80vw] lg:max-w-[40vw] lg:w-full"/>
    </section>
  )
}

export default Hero
