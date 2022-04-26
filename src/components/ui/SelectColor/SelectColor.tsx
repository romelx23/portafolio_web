import React, { useContext, useRef } from "react";
import "./SelectColor.scss";
import { UIContext } from '../../../context/ui/UIContext';
import { color_theme } from '../../../context/ui/UIProvider';
export const SelectColor = () => {
  const {handleColor}=useContext(UIContext);

  const color = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    if (color.current) {
      color.current.classList.toggle("active");
    }
  };

  const handleSelect=(color:color_theme)=>{
    handleColor(color);
    // console.log(color);
  }

  return (
    <div className="select__bg">
      <button type="button" onClick={handleClick} className="btn__select" ref={color}>
        <svg
          className="select__bg-svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="select__bg__item" onClick={()=>handleSelect("theme__ligth")}></div>
      <div className="select__bg__item" onClick={()=>handleSelect("theme__dark")}></div>
      <div className="select__bg__item" onClick={()=>handleSelect("theme__purple")}></div>
      <div className="select__bg__item" onClick={()=>handleSelect("theme__blue")}></div>
      <div className="select__bg__item" onClick={()=>handleSelect("theme__red")}></div>
      <div className="select__bg__item" onClick={()=>handleSelect("theme__green")}></div>
      <div className="select__bg__item" onClick={()=>handleSelect("theme__yellow")}></div>
    </div>
  );
};
