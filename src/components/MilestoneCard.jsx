import React from 'react'

const MilestoneCard = ({title, list}) => {
  return (
    <div className="flex flex-col p-4 rounded-lg gap-4 bg-base-200 w-full h-min">
      <h4 className="font-codec-bold text-xl">{title}</h4>
      <ul className="flex flex-col gap-4 px-2">
        {list.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default MilestoneCard
