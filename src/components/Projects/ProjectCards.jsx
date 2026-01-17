import React from 'react'

const ProjectCards = (props) => {
    return (
        <>
            <div className='w-1/2 group h-full relative rounded-none bg-green-200 hover:rounded-[60px] transition-all overflow-hidden'>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 group-hover:opacity-100  absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black/20'>
                    <h2 className='uppercase border-white border-4 rounded-[60px] text-6xl p-3'> view project</h2>
                </div>
            </div>

            <div className='w-1/2 group h-full relative rounded-none bg-green-200 hover:rounded-[60px] transition-all overflow-hidden'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 group-hover:opacity-100  absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black/20'>
                    <h2 className='uppercase border-white border-4 rounded-[60px] text-6xl py-2 px-6'> view project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCards