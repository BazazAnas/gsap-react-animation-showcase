import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Stair = (props) => {

  const stairParent = useRef(null)
  const appRef = useRef(null)


  const currentPath = useLocation().pathname;

  useGSAP(function () {


    const tl = gsap.timeline()
    tl.to(stairParent.current, {
      display: 'block'
    })
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.25
      }
    })
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.25
      }
    })
    tl.to(stairParent.current, {
      display: 'none'
    })
    tl.to('.stair', {
      y: '0%'
    })

    gsap.from(appRef.current, {
      opacity: 0,
      delay: 1.2,
      scale: 1.3,
    })

  }, [currentPath])


  return (
    <>
      <div ref={stairParent} className='h-screen w-full fixed top-0 z-10'>
        <div className='h-full w-full flex '>
          <div className="stair bg-black w-1/5 h-full"></div>
          <div className="stair bg-black w-1/5 h-full"></div>
          <div className="stair bg-black w-1/5 h-full"></div>
          <div className="stair bg-black w-1/5 h-full"></div>
          <div className="stair bg-black w-1/5 h-full"></div>
        </div>
      </div>
      <div ref={appRef}>
        {props.children}
      </div>
    </>
  )
}

export default Stair