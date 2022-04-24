import React, { useRef } from 'react'
import './ToggleButton.scss';
interface Props{
    openModal:()=>void
}
export const ToggleButton = () => {
// {openModal}:Props
const active = useRef<HTMLDivElement>(null)
const handleActive=()=>{
    if(active.current){
        active.current.classList.toggle('active')
    }
    // openModal()
}
  return (
    <div onClick={handleActive} ref={active} className='toggle'>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}
