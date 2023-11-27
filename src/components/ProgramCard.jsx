import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProgramCard = ({title, img, text}) => {
  return (
    <div className="card bg-base-200 shadow-xl flex-1 group hover:scale-[1.1] duration-200 transition-all hover:bg-base-100 border-2 border-base-200 z-10">
      <figure className="px-10 pt-10">
        <FontAwesomeIcon icon={img} className='text-8xl group-hover:text-primary transition-color duration-200'/>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-codec-bold text-2xl">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ProgramCard
