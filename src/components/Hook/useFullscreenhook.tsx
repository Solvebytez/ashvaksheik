'use client'

import { useCallback, useEffect, useState } from "react"

const useFullscreenhook = () => {

const [isOpen, setIsopen] = useState(false as boolean)

useEffect(()=>{
  const header = document.querySelector("header");
        if (header) {
            header.classList.toggle("invisible", isOpen);
            header.classList.toggle("pointer-events-none", isOpen);
        }
},[isOpen])

const openModal = useCallback(() => {
    setIsopen(true)
}, [])

const closeModal = useCallback(() => {
    setIsopen(false)
}, [])

  return {isOpen,openModal,closeModal}
}

export default useFullscreenhook