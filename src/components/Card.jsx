import React from 'react'

const Card = () => {
  return (
    <div className="flex flex-col rounded-xl border-4 border-base-200 max-w-[22rem] bg-base-200">
          <img src={daniel} alt="" className="aspect-square object-cover rounded-lg" />
          <div className="flex flex-col gap-4 p-4">
            <h6 className="text-2xl font-codec-bold">Daniel Kowalski</h6>
            <ul className="flex gap-4 flex-wrap max-w-full">
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Grafika</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Strona Internetowa</li>
              <li className="rounded-full px-4 py-[3px] bg-white text-black font-codec">Social Media</li>
            </ul>
            <div className="flex gap-4 justify-center">
              <a href="#kto">
                <FontAwesomeIcon icon={faLinkedin} className='text-white text-3xl hover:text-primary'/>
              </a>
              <a href="#kto">
                <FontAwesomeIcon icon={faGithub} className='text-white text-3xl hover:text-primary'/>
              </a>
              <a href="#kto">
                <FontAwesomeIcon icon={faSquareEnvelope} className='text-white text-3xl hover:text-primary'/>
              </a>
              <a href="#kto">
                <FontAwesomeIcon icon={faGlobe} className='text-white text-3xl hover:text-primary'/>
              </a>
            </div>
          </div>
        </div>
  )
}

export default Card
