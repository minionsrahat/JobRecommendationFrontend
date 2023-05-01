import React from 'react';
import Subtitle from '../Typography/Subtitle';


function CommonTitleCard({title, children, topMargin, TopSideButtons}){
    return(
        <div className={"card w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")}>

          {/* Title for Card */}
            <Subtitle styleClass={"text-center"}>
              {title}
            </Subtitle>   
            <div className="divider mt-2"></div> 
            {/** Card Body */}
            <div className='h-full w-full pb-6 bg-base-100'>
                {children}
            </div>
        </div>
        
    )
}


export default CommonTitleCard;