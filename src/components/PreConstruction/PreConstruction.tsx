'use client'
import { useState } from "react";
import useFullscreenhook from "../Hook/useFullscreenhook";
import FullScreenModal from "../Global/Modal";

import PreConstructionModal from "../PreConstructionModal";


type PreContructionProps = {
  projectName: string;
  builder?:string;
    occupancy: string;
    type: string;
    location: string;
}

const PreConstruction = () => {
    const [selectProject,setSelectProject] = useState<string>('');
    const { closeModal, isOpen, openModal } = useFullscreenhook();
    
    const preProject:PreContructionProps[] = [
      { projectName: "AMIRA", builder: "Treasure Hill", occupancy: "2025", type: "Detached / Estate Homes", location: "BRAMPTON" },
      { projectName: "ARBOR WEST", builder: "Caivan", occupancy: "2025", type: "Detached and Towns", location: "BRAMPTON" },
      { projectName: "THE CASTLEMILE", builder: "Arista, Deco, Opus", occupancy: "2025/2026", type: "Detached Homes and Towns", location: "BRAMPTON" },
      { projectName: "DUO CONDOS", builder: "National Homes & Brixen", occupancy: "2025", type: "Condos", location: "BRAMPTON" },
      { projectName: "ELLIS LANE", builder: "Mattamy Homes", occupancy: "2026", type: "Detached Homes and Towns", location: "CALEDON" },
      { projectName: "MAYFIELD COLLECTION", builder: "Rosehaven", occupancy: "2025", type: "Detached Homes", location: "CALEDON" },
      { projectName: "THE SOCIAL", builder: "Fernbrook Homes", occupancy: "Fall 2025", type: "Urban Towns", location: "CALEDON" },
      { projectName: "UPPER CALEDON EAST", builder: "Regal Crest Homes", occupancy: "2025", type: "Detached Homes and Towns", location: "CALEDON" },
      { projectName: "BRIDGEHOUSE", builder: "Brightwater", occupancy: "2027", type: "Condos", location: "MISSISSAUGA" },
      { projectName: "M6 M CITY", builder: "Urban Capital", occupancy: "Early 2029", type: "Condos", location: "MISSISSAUGA" },
      { projectName: "THE 9NINE", builder: "Mattamy Homes", occupancy: "2025", type: "Condos", location: "MISSISSAUGA" },
      { projectName: "JUNIPER GATE", builder: "Remington Homes", occupancy: "2026", type: "Townhomes and Bungalows", location: "GEORGETOWN" },
      { projectName: "EAST PRESERVE", builder: "Remington Homes", occupancy: "Fall 2025", type: "Detached Homes and Towns", location: "OAKVILLE" },
      { projectName: "NAVA OAKVILLE", builder: "DiGreen Homes", occupancy: "2025", type: "Urban, Terrace and Traditional Towns", location: "OAKVILLE" },
      { projectName: "OAKBROOK", builder: "Crystal & Fernbrook Homes", occupancy: "2026", type: "Townhomes", location: "OAKVILLE" },
      { projectName: "POST CONDOS", builder: "Greenpark Group", occupancy: "2025", type: "Condos", location: "OAKVILLE" },
      { projectName: "UPPER JOSHUA CREEK", builder: "Mattamy Homes", occupancy: "2025", type: "Townhomes and Detached", location: "OAKVILLE" },
      { projectName: "MILE & CREEK", builder: "Mattamy Homes", occupancy: "2026", type: "Mid-Rise Condos", location: "MILTON" },
      { projectName: "MILTON VILLAGE", builder: "Great Gulf", occupancy: "2025", type: "Detached Homes", location: "MILTON" },
      { projectName: "SIXTEEN MILE CREEK", builder: "Fieldgate Homes", occupancy: "2025", type: "Detached Homes", location: "MILTON" },
      { projectName: "SWEETBRIAR", builder: "Coscorp", occupancy: "2025", type: "Detached Homes and Towns", location: "MILTON" },
      { projectName: "THOMPSON TOWERS 2", builder: "Greenpark Group", occupancy: "2026", type: "Condos", location: "MILTON" },
      { projectName: "NORTHSHORE", builder: "National Homes", occupancy: "2025", type: "Condos", location: "BURLINGTON" },
      { projectName: "LUMA", builder: "Liv Communities", occupancy: "2026", type: "Urban Towns", location: "WATERDOWN" },
      { projectName: "75 JAMES", builder: "Highrise Group", occupancy: "Winter/Spring 2026", type: "Condos", location: "HAMILTON" },
      { projectName: "MOUNT HOPE", builder: "Cachet Homes", occupancy: "2025", type: "Townhomes", location: "HAMILTON" },
      { projectName: "REBECCA", builder: "Rosehaven", occupancy: "2026", type: "Condos", location: "HAMILTON" },
      { projectName: "BINBROOK HOMES", builder: "Cachet Homes", occupancy: "Summer 2025", type: "Detached Homes", location: "BINBROOK" },
      { projectName: "ELECTRIC GRAND TOWNS", builder: "Liv Communities", occupancy: "2026", type: "Townhomes", location: "BRANTFORD" },
      { projectName: "NATURES GRAND", builder: "Liv Communities", occupancy: "Summer 2026", type: "Detached Singles and Towns", location: "BRANTFORD" },
      { projectName: "ARCADIA DISTRICT", builder: "EllisDon", occupancy: "Q2 2027", type: "Condos", location: "ETOBICOKE" },
      { projectName: "BLVD Q", builder: "Mattamy Homes", occupancy: "2026", type: "Condos", location: "ETOBICOKE" },
      { projectName: "KIPLING STATION", builder: "CentreCourt", occupancy: "2026", type: "Condos", location: "ETOBICOKE" },
      { projectName: "THE 9HUNDRED", builder: "Harhay Developments", occupancy: "2027", type: "Condos", location: "ETOBICOKE" },
      { projectName: "WESTBEND", builder: "Mattamy Homes", occupancy: "2025", type: "Condos", location: "TORONTO" },
      { projectName: "THE MAIN TOWER 2", builder: "Marlin Spring", occupancy: "2026", type: "Condos", location: "TORONTO" },
      { projectName: "Q TOWERS", builder: "Lifetime Developments", occupancy: "2029", type: "Condos", location: "TORONTO" },
      { projectName: "OLIVE RESIDENCES", builder: "Baker Real Estate", occupancy: "2025", type: "Condos", location: "NORTH YORK" },
      { projectName: "LSQ 2 CONDOS", builder: "Almadev", occupancy: "2028", type: "Condos", location: "NORTH YORK" },
      { projectName: "YONGE CITY SQUARE", builder: "Gupta Group", occupancy: "2028", type: "Condos", location: "NORTH YORK" },
      { projectName: "BIRCHLEY PARK", builder: "Baker Real Estate", occupancy: "2026", type: "Condos", location: "SCARBOROUGH" },
      { projectName: "BLUFFERS PARK RESIDENCES", builder: "Baker Real Estate", occupancy: "2027", type: "Condos", location: "SCARBOROUGH" },
      { projectName: "CLIFFSIDE", builder: "LCH Development", occupancy: "2027", type: "Condos", location: "SCARBOROUGH" },
      { projectName: "SHEPPARD", builder: "National Homes", occupancy: "2027", type: "Condos", location: "SCARBOROUGH" },
      { projectName: "SXSW", builder: "Primont", occupancy: "2026", type: "Condos", location: "WOODBRIDGE" },
      { projectName: "CASTLEMORE CROSSINGS", builder: "Royalpine Homes", occupancy: "Q1 2028", type: "Detached", location: "VAUGHAN" },
      { projectName: "ENCORE AT BRAVO", builder: "Menkes", occupancy: "2029", type: "Condos", location: "VAUGHAN" },
      { projectName: "BURNET RISE & ROSE", builder: "Rise Developments", occupancy: "2025", type: "Condos", location: "RICHMOND HILL" },
      { projectName: "DUNCAN HILLS", builder: "Arkfield", occupancy: "2026", type: "Semi and Detached", location: "RICHMOND HILL" },
      { projectName: "IVYLEA TOWNS", builder: "Marlin Spring", occupancy: "2025-2026", type: "Townhomes", location: "RICHMOND HILL" },
      { projectName: "LEGACY HILLS", builder: "Greenpark Group", occupancy: "TBA", type: "Detached", location: "RICHMOND HILL" },
      { projectName: "PARK & MAIN", builder: "Minto Communities", occupancy: "2025", type: "Townhomes", location: "UNIONVILLE" },
      { projectName: "QUI MODERN TOWNS", builder: "LeBlanc", occupancy: "2025", type: "Townhomes", location: "MARKHAM" },
      { projectName: "UNIONVILLE", builder: "Fieldgate Homes", occupancy: "2025", type: "Detached Homes and Towns", location: "MARKHAM" },
      { projectName: "VU POINT", builder: "Tribute Communities", occupancy: "2028", type: "Condos", location: "PICKERING" },
      { projectName: "CLAREHAVEN ESTATES", builder: "Germanium", occupancy: "2025-2026", type: "Bungalows and 2 Storey Detached", location: "PICKERING" },
      { projectName: "BROOKLIN TOWNS", builder: "Madison Group", occupancy: "2025", type: "Townhomes", location: "WHITBY" },
      { projectName: "THE WILLOWS", builder: "Marlin Spring", occupancy: "2025", type: "Towns, Semis, Detached Homes", location: "EAST OSHAWA" },
      { projectName: "VICINITY WEST", builder: "Mattamy Homes", occupancy: "2026", type: "Detached Singles and Towns", location: "BARRIE" },
      { projectName: "SIMCOE WOODS", builder: "Rosehaven", occupancy: "2027", type: "Detached Homes and Towns", location: "INNISFIL" },
      { projectName: "TRUSSLER WEST", builder: "Fusion Homes", occupancy: "2025", type: "Detached Homes", location: "KITCHENER" },
      { projectName: "TRUSSLER WEST PHASE II", builder: "Activa", occupancy: "2025", type: "Detached", location: "KITCHENER" },
      { projectName: "VIVA TOWNHOMES", builder: "Polocorp", occupancy: "2025", type: "Townhomes", location: "KITCHENER" },
      { projectName: "WALLACETON PHASE 2 & 3", builder: "Fusion Homes", occupancy: "2025", type: "Stacked Townhomes", location: "KITCHENER" },
      { projectName: "WILDFLOWER CROSSINGS", builder: "Mattamy Homes", occupancy: "2025", type: "Detached Homes and Towns", location: "KITCHENER" },
      { projectName: "PIONEER PARK TOWNS", builder: "Tofino", occupancy: "2025", type: "Townhomes", location: "KITCHENER" },
      { projectName: "WESTWOOD VILLAGE PHASE 2", builder: "Ridgeview Homes", occupancy: "2025", type: "Detached Singles and Towns", location: "CAMBRIDGE" },
      { projectName: "KNIGHTSRIDGE", builder: "Ridgeview Homes", occupancy: "2026", type: "Townhomes", location: "STRATFORD" },
      { projectName: "AVON PARKS", builder: "Cachet Homes", occupancy: "2025", type: "Detached Homes and Towns", location: "STRATFORD" },
      { projectName: "HYG.GE", builder: "Fernbrook Homes", occupancy: "2025", type: "Townhomes", location: "LINDSAY" },
    ];

  return (
   <div className="relative pb-8">
      <div className="md:hidden space-y-4">
        {preProject.map((project, index) => (
          <div
            key={`${project.projectName}-${index}`}
            className="border border-white/15 p-4 space-y-2"
          >
            <h3 className="font-tenor_Sans tracking-[1.5px] uppercase text-lg">{project.projectName}</h3>
            <p className="text-sm text-white/70">{project.location} · {project.type}</p>
            <p className="text-sm">Occupancy: {project.occupancy}</p>
            <button type="button" onClick={()=>{
                    setSelectProject(project.projectName)
                    openModal()
                }} className="font-medium bg-white text-black py-2 px-4 border hover:text-white hover:bg-black mt-2">Interested?</button>
          </div>
        ))}
      </div>
      <div className="relative overflow-x-auto hidden md:block">
      <table className="w-full text-sm text-left text-white dark:text-white">
        <thead className="text-xs text-white-700 uppercase  dark:text-white bg-white bg-opacity-[.1]">
          <tr>
            <th scope="col" className="px-4 lg:px-6 py-6">PROJECT NAME</th>
            <th scope="col" className="px-4 lg:px-6 py-6">OCCUPANCY</th>
            <th scope="col" className="px-4 lg:px-6 py-6">Type</th>
            <th scope="col" className="px-4 lg:px-6 py-6">Location</th>
            <th scope="col" className="px-4 lg:px-6 py-6">Interested</th>
          </tr>
        </thead>
        <tbody>
          {preProject.map((project, index) => (
            <tr
              key={index}
              className=" border-b border-white border-opacity-[.1]"
            >
              <th scope="row" className="px-4 lg:px-6 py-4 font-medium text-white">
                {project.projectName}
              </th>
              <td className="px-4 lg:px-6 py-4">{project.occupancy}</td>
              <td className="px-4 lg:px-6 py-4">{project.type}</td>
              <td className="px-4 lg:px-6 py-4">{project.location}</td>
              <td className="px-4 lg:px-6 py-4">
                <button type="button" onClick={()=>{
                    setSelectProject(project.projectName)
                    openModal()
                }} className="font-medium bg-white text-black py-2 px-2 border hover:text-white hover:bg-black">Interested?</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
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