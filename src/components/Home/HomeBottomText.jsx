import React from 'react'
import { Link } from "react-router-dom";

const HomeBottomText = () => {
    return (
        <div className='font-[font2] flex item-center justify-center gap-2'>
            <div className='border-2 border-white rounded-full px-8 mb-2 uppercase hover:border-green-300 hover:text-green-300'>
                <Link className='text-[4vw]' to='/Projects' >Projects</Link>
            </div>
            <div className='border-2 border-white rounded-full px-8 mb-2 uppercase hover:border-green-300 hover:text-green-300'>
                <Link className='text-[4vw]' to='/Agence'>Agence</Link>
            </div>
        </div>
    )
}

export default HomeBottomText