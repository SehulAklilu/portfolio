import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Souveniers from {' '} <span className='text-purple'>former employers</span>
        </h1>
        <div className='flex flex-col items-center'>
            <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center overflow-hidden relative'>
                <InfiniteMovingCards 
                    items={testimonials}
                    direction='right'
                    speed='slow'
                
                />
            </div>
        </div>

    </div>
  )
}

export default Clients