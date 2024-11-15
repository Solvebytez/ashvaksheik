'use client'
import { useState } from "react";
import useFullscreenhook from "../Hook/useFullscreenhook";
import FullScreenModal from "../Global/Modal";

import PreConstructionModal from "../PreConstructionModal";


type PreContructionProps = {
    project_name: string;
    occupancy: string;
    type: string;
    location: string;
}

const PreConstruction = () => {
    const [selectProject,setSelectProject] = useState<string>('');
    const { closeModal, isOpen, openModal } = useFullscreenhook();
    
    const preProject:PreContructionProps[] = [
        { project_name: 'BINBROOK HOMES', occupancy: '2025', type: 'DETACHED HOMES', location: 'BINBROOK' },
        { project_name: 'TRUSSLER WEST', occupancy: '2025', type: 'DETACHED HOMES', location: 'KITCHENER' },
        { project_name: 'BLVD Q', occupancy: '2026', type: 'CONDOS', location: 'ETOBICOKE' },
        { project_name: '75 JAMES', occupancy: 'Winter/Spring 2026', type: 'CONDOS', location: 'HAMILTON' },   
      ];



  return (
   <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-white dark:text-white">
        <thead className="text-xs text-white-700 uppercase  dark:text-white bg-white bg-opacity-[.1]">
          <tr>
            <th scope="col" className="px-6 py-6">PROJECT NAME</th>
            <th scope="col" className="px-6 py-6">OCCUPANCY</th>
            <th scope="col" className="px-6 py-6">Category</th>
            <th scope="col" className="px-6 py-6">Price</th>
            <th scope="col" className="px-6 py-6">Interested</th>
          </tr>
        </thead>
        <tbody>
          {preProject.map((project, index) => (
            <tr
              key={index}
              className=" border-b border-white border-opacity-[.1]"
            >
              <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                {project.project_name}
              </th>
              <td className="px-6 py-4">{project.occupancy}</td>
              <td className="px-6 py-4">{project.type}</td>
              <td className="px-6 py-4">{project.location}</td>
              <td className="px-6 py-4">
                <button type="button" onClick={()=>{
                    setSelectProject(project.project_name)
                    openModal()
                }} className="font-medium bg-white text-black py-2 px-2 border hover:text-white hover:bg-black">Interested?</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <FullScreenModal
        isOpen={isOpen}
        closeModal={closeModal}
        bgImage="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
       <PreConstructionModal prijectName={selectProject}/>
      </FullScreenModal>
    </div>
  )
}

export default PreConstruction