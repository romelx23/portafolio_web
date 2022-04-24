import React, { useEffect, useState } from "react";
import "./Toast.scss";
interface Props {
  message: string;
  positionY?: string;
  color?: string;
}

export const Toast = ({ message, positionY, color }: Props) => {
  const [time, setTime] = useState(true);

  useEffect(() => {
    console.log(message);
    //   show during 3 seconds
    const timer = setInterval(() => {
      setTime(false);
    }, 3000);

    setTime(true);
    return () => {
      clearInterval(timer);
    };
  }, [message]);

  return (
    <>
      {time && (
        <div className={`${time ? "opacity" : "hidden"} content__toast`}>
          <div
            className="toast"
            style={{
              bottom: positionY ? positionY : "100px",
              background: color ? color : "#5e2cff",
            }}
          >
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};
