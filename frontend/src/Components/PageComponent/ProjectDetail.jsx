import React, { useState, useEffect } from "react";

function ProjectDetail() {

    const projectTitle = "EcoScape";
    const owner = "Reza Adhie Dharmawan";
    const groupLink = "https//www.grouplink.com";

  return (
    <div className="flex justify-center w-full">
        <div className='w-11/12 m-2 flex justify-center relative'>
            <div className='w-full h-full'>
                <div className="w-full relative shadow-lg lg:flex-row p-5 my-4 rounded-lg justify-center h-full overflow-y-auto max-h-[75vh]">
                    <h1 className="text-left text-secondary text-xl sm:text-2xl md:text-4xl font-bold">
                    {projectTitle}
                    </h1>
                    <h1 className='border-b-2 border-b-slate-950 my-5 mb-8'> </h1>

                    <h1 className='text-left text-xl mb-4 font-bold'>
                        Description
                    </h1>
                    <p>
                        EcoScape is an ambitious environmental conservation project aimed at preserving and restoring natural ecosystems in urban areas. We believe that by creating green spaces and planting native trees and flowers, we can improve air quality, provide habitat for wildlife, and enhance the overall quality of life for local communities. Our mission is to transform concrete jungles into thriving urban oases, where both people and nature can coexist harmoniously. Join us in the journey to create a greener, healthier, and more sustainable future.
                    </p>

                    <h1 className='text-left text-xl mb-4 mt-4 font-bold'>
                        Owner
                    </h1>
                    <p>
                        {owner}
                    </p>

                    <h1 className='text-left text-xl mb-4 mt-4 font-bold'>
                        Group Link
                    </h1>
                    <p>
                        {groupLink}
                    </p>

                    <h1 className='text-left text-xl mb-4 mt-4 font-bold'>
                        Member
                    </h1>
                    <table className='table-auto border-collapse border border-slate-500'>
                        <thead>
                            <th>Name</th>
                            <th>NIM</th>
                            <th>Generation</th>
                            <th>Major</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Reza Adhie Dharmawan</td>
                                <td>13022213016</td>
                                <td>2021</td>
                                <td>Software Engineering</td>
                            </tr>
                            <tr>
                                <td>Reza Adhie Dharmawan</td>
                                <td>13022213016</td>
                                <td>2021</td>
                                <td>Software Engineering</td>
                            </tr>
                            <tr>
                                <td>Reza Adhie Dharmawan</td>
                                <td>13022213016</td>
                                <td>2021</td>
                                <td>Software Engineering</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
        
    </div>
   
  )
}

export default ProjectDetail