import React from 'react'

const PageButton = ({isClicked ,logo, content}) => {
    return (
        <>
            <div className={`flex gap-7 items-center my-4 px-4 py-2
            rounded-xl ease-in duration-100 text-lg
            ${isClicked ? "bg-primary py-3 font-bold text-white cursor-pointer " : 
            "hover:bg-grey hover:py-3 font-light cursor-pointer"}`}>
                <div className={`h-6 w-6 rounded-full ${isClicked?  "bg-white" : "bg-black"}`}>
                    {/* <img src={logo} alt='/png' className='bg-cover bg-center'/> */}
                </div>
                <p className=''>{content}</p>
            </div>
        </>
    )
}

export default PageButton