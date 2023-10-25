import React from 'react'

const PageButton = ({isClicked, isExpand ,logo, content}) => {

    return (
        <>
            <div className={`${isExpand ? 
            "flex rounded-xl my-1 px-4 py-2" 
            : 
            " inline-block my-1 rounded-xl py-2 px-3"}  
            gap-7 items-center  ease-in duration-100 text-sm
            ${isClicked ? 
            "bg-primary py-3 font-bold text-white cursor-pointer " 
            : 
            "hover:bg-grey hover:py-3 font-light cursor-pointer"}`}>
                <div className={`h-4 w-4 rounded-full ${isClicked?  "bg-white" : "bg-black"}`}>
                    <img src={logo} alt="" className='bg-cover bg-center'/>
                </div>
                <p className={`duration-0 ease-in  ${isExpand ? "block" : "hidden"}`}>{content}</p>
            </div>
        </>
    )
}

export default PageButton