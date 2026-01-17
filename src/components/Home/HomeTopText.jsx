import React from 'react'
import Video from './video'

const HomeTopText = () => {
    return (
        <div className='font-[font2] pt-5 text-center'>
            <div className='text-[9.5vw] uppercase leading-[8vw]'>
                l'etincelle
            </div>
            <div className='text-[9.5vw] justify-center flex item-center uppercase leading-[8vw]'>
                qui
                <div className='h-[8vw] w-[16vw] overflow-hidden rounded-full '>
                    <Video />
                </div>
                genere
            </div>
            <div className='text-[9.5vw] uppercase leading-[8vw]'>
                la creative
            </div>
        </div>
    )
}

export default HomeTopText