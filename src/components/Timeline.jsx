import React from 'react'
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id='timeline'>
        <div className="timelineBox">
            {
                data.projects.map((item,index)=>(
                    <TimelineItem
                        heading={item.title}
                        text={item.date}
                        index={index}
                        key={item.title}
                    />
                ))
            }
        </div>     
    </div>
  )
}
// index hmesa 0 se start hota h 
const TimelineItem = ({item,index,heading,text})=>(
    <div className={`timelineItem ${index%2===0?"leftTimeline":"rightTimeline"}`}>
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
)

export default Timeline
