'use client'

import { useState } from "react"

const useFullscreenhook = () => {

const [isOpen, setIsopen] = useState(false as boolean)

const openModal=()=>{
    setIsopen(true)
}

const closeModal=()=>{
    setIsopen(false)
}

  return {isOpen,openModal,closeModal}
}

export default useFullscreenhook