import React from 'react'

function Form({register,handleSubmit,handle}){
    return(
            <form className='lg:mx-20 gap-3 lg:flex grid flex-wrap justify-center item-center' onSubmit={handleSubmit(data=>handle(data))}>
                <input  {...register('title')} className='w-72 h-8  m-1 border-2 bg-black text-white lg:text-xl p-2 rounded-md' type='text' placeholder='title' value='BE 6E'/>
                <input {...register('content')} className='w-72 h-8  m-1 border-2 bg-black text-white lg:text-xl p-2 rounded-md' type='text' placeholder='content' value='The Mahindra BE 6 marks a major step for Mahindra in the world of born-electric vehicles. This new coupe-style SUV is built on Mahindras advanced INGLO platform, specifically designed for electric cars, combining the latest technology, strong performance, and high efficiency.'/>
                <input {...register('image')} className='w-72 h-8 m-1 border-2 bg-black text-white lg:text-xl p-2 rounded-md' type='text' placeholder='image url' value='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkeaKD0YjPOpB0cXx4KX6zlcdn5ERR1kOaA&s'/>
                <button className='px-2 h-10 bg-blue-700 text-zinc-400 rounded-md font-semibold' type='submit'>Submit</button>
            </form>
    )
}

export default Form;