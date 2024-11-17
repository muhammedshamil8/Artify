import { useState } from 'react'
import Image from '@/assets/images/page1.png'
import Card from '@/assets/images/Card.svg'

function App() {

  return (
    <>
      <div className='flex max-w-[600px] mx-auto justify-center flex-col'>
        <img src={Image} alt='page1' />
        <img src={Card} alt='card' />
      </div>
    </>
  )
}

export default App
