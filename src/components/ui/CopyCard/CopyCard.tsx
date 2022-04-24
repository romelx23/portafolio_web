import React, { FC, useRef, useState } from "react";
import "./CopyCard.scss";
interface Props {
  // children: React.ReactNode
  informartion: {
    title: string;
    value: string;
    icon: JSX.Element;
  };
}
export const CopyCard: FC<Props> = ({ informartion }) => {
  const [copy, setCopy] = useState(false);
  const { title, value, icon } = informartion;
  const text = useRef<HTMLInputElement>(null);
  // if exist in the clipboard change icon to check
  const handleCopy = () => {
    if (!text.current) return;
    navigator.clipboard.writeText(text.current.value);
    // console.log(text.current.value);
    setCopy(true);
  };
  return (
    <div className="list__item">
      <p className="list__label">{title}:</p>
      <div className="list__content">
        {icon}
        <input
          ref={text}
          disabled
          type="text"
          value={value}
          onChange={() => {}}
        />
        <button className="btn__clipboard" onClick={handleCopy}>
          {copy ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          )}
          {copy ? <p className="text__success">Copiado</p> : <p>Copiar</p>}
        </button>
      </div>
    </div>
  );
};
