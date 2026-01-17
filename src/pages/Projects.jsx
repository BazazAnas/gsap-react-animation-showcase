import { useGSAP } from '@gsap/react'
import ProjectCards from '../components/Projects/ProjectCards'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

   const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.from('.cards',{
      height:'40px',
      stagger:{
        amount:0.4,
      },
      scrollTrigger:{
        trigger:'.parentCards',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })


  return (
    <div className='p-6'>

      <div className='w-screen'>
        <h2 className='text-[9vw] uppercase pt-[45vh] text-black'>PROJECTS</h2>
      </div>

      <div className='-mt-10 parentCards'>
       {projects.map(function(elem){
        return <div className='cards flex gap-3 mb-3 w-full h-[600px]'>
         <ProjectCards image1={elem.image1} image2={elem.image2} />
         </div>
       })}
      </div>

    </div>
  )
}

export default Projects