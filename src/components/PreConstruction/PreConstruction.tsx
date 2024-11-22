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
      { projectName: "ARBOR WEST", builder: "CAIVAN", occupancy: "2025", type: "Detached and Towns", location: "BRAMPTON" },
      { projectName: "BINBROOK HOMES", builder: "Cachet Homes", occupancy: "2025", type: "DETACHED HOMES", location: "BINBROOK" },
      { projectName: "Duo Condos", builder: "BIXEN DEVELOPMENTS INC.", occupancy: "2025", type: "Condos", location: "BRAMPTON" },
      { projectName: "TRUSSLER WEST", builder: "FUSION HOMES", occupancy: "2025", type: "DETACHED HOMES", location: "KITCHENER" },
      { projectName: "WESTWOOD VILLAGE", builder: "Huron Creek Developments", occupancy: "8 months from the time of purchase", type: "Townhomes and Detached", location: "CAMBRIDGE" },
      { projectName: "BLVD Q", builder: "MATTAMY HOMES", occupancy: "2026", type: "CONDOS", location: "ETOBICOKE" },
      { projectName: "ARCADIA DISTRICT", builder: "ELLIS DON", occupancy: "2027", type: "CONDOS", location: "ETOBICOKE" },
      { projectName: "75 JAMES", builder: "HIGHRISE GROUP", occupancy: "Winter/Spring 2026", type: "Condos", location: "HAMILTON" },
      { projectName: "VIVA TOWNHOMES", builder: "POLOCORP", occupancy: "2025", type: "TOWNHOMES", location: "KITCHENER" },
      { projectName: "HYG.GE", builder: "FERNBROOK HOMES", occupancy: "2025", type: "TOWNHOMES", location: "LINDSAY" },
      { projectName: "HAWTHRONE PHASE 2 & 3", builder: "MATTAMY HOMES", occupancy: "2023", type: "Townhomes & Single Car Detached / Double Car Detached", location: "MILTON" },
      { projectName: "THOMPSON TOWERS 2", builder: "GREENPARK", occupancy: "2026", type: "CONDOS", location: "MILTON" },
      { projectName: "VIC TOWNS", builder: "SOLOTEX GROUP", occupancy: "2024", type: "TOWNHOMES", location: "NORTH YORK" },
      { projectName: "NAVA OAKVILLE", builder: "DIGREEN HOMES", occupancy: "late 2024/2025", type: "Urban, Terrace and Traditional Towns", location: "OAKVILLE" },
      { projectName: "POST CONDOS", builder: "Greenpark Group", occupancy: "2025", type: "CONDOS", location: "OAKVILLE" },
      { projectName: "EAST PRESERVE", builder: "RAMINGTON HOMES", occupancy: "2025", type: "TOWNHOMES", location: "OAKVILLE" },
      { projectName: "WATERIDGE VILLAGE 2", builder: "MATTAMY HOMES", occupancy: "2024", type: "TOWNHOMES", location: "OTTAWA" },
      { projectName: "Scenic Ridge Phase 3", builder: "live communities", occupancy: "2025", type: "SINGLE FAMILY HOMES", location: "Paris" },
      { projectName: "VU POINT", builder: "MY TRIBUTE", occupancy: "2028", type: "CONDOS", location: "PICKERING" },
      { projectName: "LEGACY HILLS", builder: "GREENPARK GROUP", occupancy: "TBA", type: "DETACHED", location: "RICHMOND HILL" },
      { projectName: "THE MAIN TOWER 2", builder: "Marlin Spring", occupancy: "2026", type: "Condos", location: "TORONTO" },
      { projectName: "WESTBEND", builder: "MATTAMY HOMES", occupancy: "2025", type: "CONDOS", location: "TORONTO" },
      { projectName: "8 CUMBERLAND", builder: "GREAT GULF", occupancy: "2023", type: "CONDOS", location: "TORONTO" },
      { projectName: "CASTLEMORE CROSSINGS", builder: "Royalpine Home", occupancy: "Q1 2028", type: "DETACHED", location: "VAUGHAN" },
      { projectName: "EMPIRE CANAL", builder: "EMPIRE COMMUNITIES", occupancy: "2024", type: "Detached", location: "WELLAND" },
      { projectName: "ELECTRIC GRAND TOWNS", builder: "LIV Communities", occupancy: "2026", type: "TOWNHOMES", location: "BRANTFORD" },
      { projectName: "KNIGHTSRIDGE", builder: "RIDGEVIEW HOMES", occupancy: "2026", type: "TOWNHOMES", location: "STRATFORD" },
      { projectName: "TRUSSLER WEST PHASE II", builder: "ACTIVA", occupancy: "2025", type: "DETACHED", location: "KITCHNER" },
      { projectName: "THE PRESERVE", builder: "remingtonhomes", occupancy: "2025", type: "TOWNHOMES", location: "OAKVILLE" },
      { projectName: "THOMPSON TOWERS 2", builder: "sienna", occupancy: "June 2026", type: "condo towers", location: "MILTON" },
      { projectName: "SWEETBRIAR", builder: "coscorp", occupancy: "2025", type: "DETACHED HOMES AND TOWNS", location: "MILTON" },
      { projectName: "THE SOCIAL", builder: "ferNBROOK HOMES", occupancy: "fall 2025", type: "urban towns", location: "CALEDON" },
      { projectName: "ARCADIA DISTRICT", builder: "ellisdon", occupancy: "Q2 2027", type: "condo towers", location: "ETOBICOKE" },
      { projectName: "WALLACETON phase 2 &3", builder: "FUSION HOMES", occupancy: "move in ready - 2025", type: "stacked townhomes", location: "KITCHNER" },
      { projectName: "BINBROOK", builder: "cachet", occupancy: "summer 2025", type: "detached", location: "HAMILTON" },
      { projectName: "AMIRA", builder: "treasurehill", occupancy: "2025", type: "detached / estate homes", location: "BRAMPTON" },
      { projectName: "JUNIPER GATE", builder: "remingtonhomes", occupancy: "2026", type: "townhomes and bungalows", location: "GEORGETOWN" },
      { projectName: "AVON PARKS", builder: "Cachet", occupancy: "2025", type: "DETACHED HOMES AND TOWNS", location: "STRATFORD" },
      { projectName: "Q TOWERS", builder: "LIFETIME DEVELOPMENTS", occupancy: "2029", type: "condos", location: "TORONTO" },
      { projectName: "LUMA", builder: "live communities", occupancy: "2026", type: "urban towns", location: "WATERDOWN" },
      { projectName: "BIRCHLEY PARK", builder: "baker", occupancy: "2026", type: "condos", location: "SCARBOROUGH" },
      { projectName: "THE WILLOWS", builder: "MARLIN Spring", occupancy: "2025", type: "TOWNS, SEMIS, DETACHED HOMES", location: "EAST OSHAWA" },
      { projectName: "ELLIS LANE", builder: "MATTAMY HOMES", occupancy: "2026", type: "DETACHED HOMES AND TOWNS", location: "CALEDON" },
      { projectName: "SXSW", builder: "PRIMONT", occupancy: "2026", type: "CONDOS", location: "WOODBRIDGE" },
      { projectName: "BROOKLIN TOWNS", builder: "MADISON GROUP", occupancy: "2025", type: "TOWNHOMES", location: "WHITBY" },
      { projectName: "SIMCOE WOODS", builder: "Rosehaven", occupancy: "2027", type: "DETACHED HOMES AND TOWNS", location: "INNISFIL" },
      { projectName: "REBECCA", builder: "ROSEhaven", occupancy: "2026", type: "CONDOS", location: "HAMILTON" },
      { projectName: "CLIFFSIDE", builder: "LCH development", occupancy: "2027", type: "condos", location: "SCARBOROUGH" },
      { projectName: "ENCORE AT BRAVO", builder: "menkes", occupancy: "2029", type: "condos", location: "VAUGHAN" },
      { projectName: "UPPER CALEDON EAST", builder: "Regal Crest Homes", occupancy: "2025", type: "DETACHED HOMES AND TOWNS", location: "CALEDON" },
      { projectName: "BRIDGEHOUSE", builder: "brightwater", occupancy: "2027", type: "condos", location: "MISSISSAUGA" },
      { projectName: "QUI MODERN TOWNS", builder: "leblanc", occupancy: "2025", type: "TOWNHOMES", location: "MARKHAM" },
      { projectName: "THE CASTLEMILE", builder: "ARISTA, DECO, OPUS", occupancy: "2025/2026", type: "DETACHED HOMES AND TOWNS", location: "BRAMPTON" },
      { projectName: "PIONEER PARK TOWNS", builder: "tofino builder", occupancy: "2025", type: "TOWNHOMES", location: "KITCHNER" },
      { projectName: "MOUNT HOPE", builder: "cachet", occupancy: "2025", type: "2,3 storey towns and 2 cargarage towns", location: "HAMILTON" },
      { projectName: "WILDFLOWER CROSSINGS", builder: "mattamy", occupancy: "2025", type: "DETACHED HOMES AND TOWNS", location: "KITCHNER" },
      { projectName: "BROOKFIELD", builder: "brookfieldresidentialon", occupancy: "fall 2024", type: "DETACHED", location: "BAXTER" },
      { projectName: "UNIONVILLE", builder: "fieldgate homes", occupancy: "2025", type: "DETACHED HOMES AND TOWNS", location: "MARKHAM" },
      { projectName: "EAST PRESERVE", builder: "REMINGTON HOMES", occupancy: "Fall 2025", type: "Detached Homes and Towns", location: "OAKVILLE" },
  { projectName: "BURNET RISE & ROSE", builder: "RISE & ROSE", occupancy: "2025", type: "Condos", location: "RICHMOND HILL" },
  { projectName: "OLIVE RESIDENCES", builder: "BAKER", occupancy: "2025", type: "Condos", location: "NORTH YORK" },
  { projectName: "THE BIRCHES", builder: "GRANITE HOMES", occupancy: "Within 120 Days", type: "Stacked Townhomes", location: "CAMBRIDGE" },
  { projectName: "NATURES GRAND", builder: "LIV COMMUNITIES", occupancy: "Summer 2026", type: "Detached Singles and Towns", location: "BRANTFORD" },
  { projectName: "THE 9HUNDRED", builder: "HARHAY DEVELOPMENTS", occupancy: "2027", type: "Condos", location: "ETOBICOKE" },
  { projectName: "OAKBROOK", builder: "CRYSTAL & FERNBROOK HOMES", occupancy: "2026", type: "Townhomes", location: "OAKVILLE" },
  { projectName: "TYANDAGA", builder: "NATIONAL HOMES", occupancy: "2024", type: "Detached Singles and Towns", location: "BURLINGTON" },
  { projectName: "DUO CONDOS", builder: "NATIONAL AND BRIXEN", occupancy: "2025", type: "Condos", location: "BRAMPTON" },
  { projectName: "BROOKLIN TOWNS", builder: "ZANCOR HOMES", occupancy: "2026", type: "Detached", location: "WHITBY" },
  { projectName: "NORTHSHORE", builder: "NATIONAL HOMES", occupancy: "2025", type: "Condos", location: "BURLINGTON" },
  { projectName: "SHEPPARD", builder: "NATIONAL HOMES", occupancy: "2027", type: "Condos", location: "SCARBOROUGH" },
  { projectName: "PARK & MAIN", builder: "MINTO COMMUNITIES", occupancy: "2025", type: "Townhomes", location: "UNIONVILLE" },
  { projectName: "CLAREHAVEN ESTATES", builder: "GERMANIUM", occupancy: "Winter 2025 - Fall 2026", type: "Bungalows and 2 Storey Detached", location: "PICKERING" },
  { projectName: "VICINITY WEST", builder: "MATTAMY HOMES", occupancy: "2026", type: "Detached Singles and Towns", location: "BARRIE" },
  { projectName: "LSQ 2 CONDOS", builder: "ALMAADEV", occupancy: "2028", type: "Condos", location: "NORTH YORK" },
  { projectName: "1515", builder: "SEVOY", occupancy: "2028", type: "Condos", location: "PICKERING WAY" },
  { projectName: "MAYFIELD COLLECTION", builder: "ROSEHAVEN", occupancy: "2025", type: "Detached Homes", location: "CALEDON" },
  { projectName: "IVYLEA TOWNS", builder: "MARLIN SPRING", occupancy: "2025-2026", type: "Townhomes", location: "RICHMOND HILL" },
  { projectName: "KIPLING STATION", builder: "CENTRE COURT", occupancy: "2026", type: "Condos", location: "ETOBICOKE" },
  { projectName: "VIOLETTE", builder: "TRUMAN HOMES", occupancy: "2029", type: "Condos", location: "CALGARY" },
  { projectName: "YONGE CITY SQUARE", builder: "GUPTA GROUP", occupancy: "2028", type: "Condos", location: "NORTH YORK" },
  { projectName: "MILE & CREEK", builder: "MATTAMY", occupancy: "2025-2026", type: "Mid-Rise Condos", location: "MILTON" },
  { projectName: "WESTWOOD VILLAGE PHASE 2", builder: "RIDGEVIEW HOMES", occupancy: "2025", type: "Detached Singles and Towns", location: "CAMBRIDGE" },
  { projectName: "MILTON VILLAGE", builder: "GREAT GULF", occupancy: "Spring/Fall 2025", type: "Detached Homes", location: "MILTON" },
  { projectName: "UPPER JOSHUA CREEK", builder: "MATTAMY", occupancy: "2025", type: "Townhomes and Detached", location: "OAKVILLE" },
  { projectName: "DUNCAN HILLS", builder: "ARKFIELD", occupancy: "2026", type: "Semi and Detached", location: "RICHMOND HILL" },
  { projectName: "M6 M CITY", builder: "URBAN CAPITAL", occupancy: "Early 2029", type: "Condos", location: "MISSISSAUGA" },
  { projectName: "SIXTEEN MILE CREEK", builder: "FIELDGATE HOMES", occupancy: "2025", type: "Detached Homes", location: "MILTON" },
  { projectName: "BLUFFERS PARK RESIDENCES", builder: "BAKER", occupancy: "2027", type: "Condos", location: "SCARBOROUGH" },
  { projectName: "TERRA", builder: "GREAT GULF", occupancy: "2025", type: "Detached Homes", location: "BARRIE" },
  { projectName: "THE 9NINE", builder: "MATTAMY", occupancy: "2025", type: "Condos", location: "MISSISSAUGA" },
      ];



  return (
   <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-white dark:text-white">
        <thead className="text-xs text-white-700 uppercase  dark:text-white bg-white bg-opacity-[.1]">
          <tr>
            <th scope="col" className="px-6 py-6">PROJECT NAME</th>
            <th scope="col" className="px-6 py-6">OCCUPANCY</th>
            <th scope="col" className="px-6 py-6">Type</th>
            <th scope="col" className="px-6 py-6">Location</th>
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
                {project.projectName}
              </th>
              <td className="px-6 py-4">{project.occupancy}</td>
              <td className="px-6 py-4">{project.type}</td>
              <td className="px-6 py-4">{project.location}</td>
              <td className="px-6 py-4">
                <button type="button" onClick={()=>{
                    setSelectProject(project.projectName)
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