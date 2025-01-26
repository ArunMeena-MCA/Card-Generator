import React, { useState } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import { useForm } from 'react-hook-form';

function App() {
  let data = [];

  const [carData,setData] = useState(data)

  const handleClick = (changeIndex) => {
      setData((prev) => {
        return prev.filter((item,index) => {
          if(index !== changeIndex) return item
        })
      })
  }

  const {register,handleSubmit} = useForm()

  function handle(newdata){
    setData([...carData, {title: newdata.title, content: newdata.content, image: newdata.image}])
    // console.log(data)
  }
  
  return (
    <>
    <div className='w-full min-h-screen p-10 bg-zinc-800 flex flex-wrap gap-10'>
        {carData.map((item,index)=>(
          <Card key={index} index={index} handleClick={handleClick} info={item}/>
        ))}
        <div className='w-full mx-auto'>
          <Form register={register} handleSubmit={handleSubmit} handle={handle} />
        </div>
    </div>
    </>
  )
}

export default App