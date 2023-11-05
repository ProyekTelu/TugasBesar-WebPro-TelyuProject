import React from 'react';

function CardListProject({ items, handleRequestForm }) {

    return (
        <>
            {items.map((data, index) => (
                <div
                    key={index}
                    className="my-8 bg-whiteAlternative rounded-xl shadow-md font-light transition-all duration-500 ease-out p-6 h-[196px] hover:h-[400px] group overflow-hidden"
                >
                    <h1 name={data.title} className="text-3xl font-bold text-primary">{data.title}</h1>
                    <hr className="my-4 rounded-full" />
                    <p>{data.description}</p>
                    <p className="mt-6 font-bold">Project Owner</p>
                    <p>{data.project_owner}</p>
                    <p className="mt-6 font-bold">Due Date</p>
                    <p>{data.due_project}</p>
                    <div className="flex justify-end">
                        <button
                            className="py-3 px-4 font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:scale-105 active:scale-100"
                            type='submit' onClick={()=>{handleRequestForm(data.title);}}
                        >
                            Send Join Request
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardListProject;
