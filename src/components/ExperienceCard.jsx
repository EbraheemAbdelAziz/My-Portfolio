import { VerticalTimeline , VerticaltimelineElement } from "react-vertical-timeline-component"

const ExperienceCard = ({experience}) => {
  return(
    <VerticaltimelineElement
      contantStyle={{background : "#1d1836" , color : "#fff"}}
      contantArrowStyle={{borderRight : "7px solid #232631"}}
      date={experience.date}
      iconStyle={{background:experience.iconBg }}
      icon={<div>
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
      </div>}
    >
      <div>
        <h3 className='text-white text-[24px] font-bo'>{experience.title}</h3>
      </div>
    </VerticaltimelineElement>
  )
}
export default ExperienceCard