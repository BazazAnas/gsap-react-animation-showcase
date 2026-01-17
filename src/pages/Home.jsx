import React from 'react'
import Video from '../components/Home/Video'
import HomeTopText from '../components/Home/HomeTopText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='w-screen h-screen fixed'>
            <Video />
        </div>
        <div className='w-screen h-screen relative flex flex-col justify-between'>
            <HomeTopText />
            <HomeBottomText />
        </div>
    </div>
  )
} 

export default Home