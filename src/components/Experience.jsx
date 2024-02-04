import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css"

import { styles } from '../styles'
import { experiences , certificates} from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({certificate})=>(
    <VerticalTimelineElement
      contentStyle={{background : "#1d1836" , color : "#fff"}}
      contentArrowStyle={{borderRight : "7px solid #232631"}}
      date={certificate.date}
      iconStyle={{background:certificate.iconBg }}
      icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={certificate.icon} alt={certificate.company_name} className='w-[60%] h-[60%] object-contain'/>
      </div>}
    >
      <div>
        <h3 className='text-white text-[24px] font-bo'>{certificate.title}</h3>
        <p className=' text-secondary text-[16px] font-semibold' style={{margin:0}}>{certificate.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {certificate.skills.map((point,index)=>(
          <li key={`skill-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )


const Experience = () => {
  return (
    <>
    <motion.div
      variants={textVariant()}
    >
      <p className={styles.sectionSubText}>What I have earned</p>
      <h2 className={styles.sectionHeadText}>Certifications.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {
          certificates.map((certificate, index) => (
            <ExperienceCard key={index} certificate={certificate}/>
          ))
        }
      </VerticalTimeline>
    </div>
    </>
  ) 
}

export default SectionWrapper(Experience ,"work")