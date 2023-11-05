import React from 'react'
import * as reactIconsBs from "react-icons/bs";

const PageButton = ({isClicked, isExpand ,logo, content}) => {

    const IconComponent = reactIconsBs[logo]

    return (
        <>
            <div className={`flex rounded-xl my-1 px-4 py-2 ${isExpand ? ""
            : " md:inline-block my-1 rounded-xl py-2 px-3"}  
            gap-7 items-center  ease-in duration-150 text-sm
            ${isClicked ? 
            "bg-primary py-3 font-bold text-white cursor-pointer " 
            : 
            "hover:bg-grey hover:py-3 font-light cursor-pointer"}`}>
                <div className={`h-4 w-4`}>
                    {IconComponent && <IconComponent />}
                </div>
                <p className={`duration-0 ease-in ${isExpand ? "block" : "md:hidden"}`}>{content}</p>
            </div>
            
        </>
    )
}

export default PageButton