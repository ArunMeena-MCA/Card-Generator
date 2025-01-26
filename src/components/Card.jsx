import React from 'react'

function Card({index,handleClick,info}) {
  const {title, content, image} = info;
  return (
      <div className='w-full h-56 md:w-60 md:h-60 bg-zinc-400 rounded-md overflow-hidden'>
          <div className='w-full h-24 bg-zinc-400 rounded-md'>
            <img className='w-full h-full object-cover' src={image} alt="IMAGE"/>
          </div>
          <div className='w-full h-24 px-1 md:mt-2 text-center'>
            <h2 className='text-md lg:text-xl font-semibold'>{title}</h2> 
            <p className='text-sm lg:text-md font-gilroy line-clamp-3'>{content}</p>
            <button onClick={()=>{handleClick(index)}} className='bg-blue-700 px-2 text-zinc-400 rounded-md font-semibold mt-4'>Remove</button>
          </div>
      </div>
  )
}

export default Card