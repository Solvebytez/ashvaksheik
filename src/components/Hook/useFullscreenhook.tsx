'use client'

import { useEffect, useState } from "react"

const useFullscreenhook = () => {

const [isOpen, setIsopen] = useState(false as boolean)

useEffect(()=>{
  const header = document.querySelector("header");
        if (header) {
            if (isOpen) {
                header.classList.add("none");
            } else {
                header.classList.remove("none");
            }
        }
},[isOpen])

const openModal=()=>{
    setIsopen(true)
}

const closeModal=()=>{
    setIsopen(false)
}

  return {isOpen,openModal,closeModal}
}

export default useFullscreenhook