import React, { FC, useEffect, useState } from "react";
import "./Chips.scss";
import icon from "../../../assets/icons/icon-close.svg";
interface Props {
  chip: string;
}
interface Tech {
  name: string;
  url: string;
  background: string;
}

export const Chips: FC<Props> = ({ chip }) => {
  const [select, setSelect] = useState<Tech[]>([]);
  const technologies: Tech[] = [
    {
      name: "React",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-react.svg_elk3df.svg",
      background: "#40cdf4",
    },
    {
      name: "Redux",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-redux.svg_glb4mx.svg",
      background: "#8966fe",
    },
    {
      name: "TypeScript",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073676/icons/typescriptlang-icon_nezdps.svg",
      background: "#1996e9",
    },
    {
      name: "Sass",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073101/icons/bxl-sass.svg_exe0m6.svg",
      background: "#e572ac",
    },
    {
      name: "Node.js",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-nodejs.svg_i6gtn9.svg",
      background: "#5da34c",
    },
    {
      name: "firebase",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-firebase.svg_no1luz.svg",
      background: "#e1cc29",
    },
    {
      name: "Tailwind",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073101/icons/bxl-tailwind-css.svg_c3xrtv.svg",
      background: "#32a9dc",
    },
    {
      name: "Angular",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073100/icons/bxl-angular.svg_zsubye.svg",
      background: "#dd0031",
    },
    {
      name: "JavaScript",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-javascript.svg_pvsdls.svg",
      background: "#dac318",
    },
    {
      name: "Context API",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-react.svg_elk3df.svg",
      background: "#2385f5",
    },
    {
      name: "Vue",
      url: "https://res.cloudinary.com/react-romel/image/upload/v1650073101/icons/bxl-vuejs.svg_nqh4he.svg",
      background: "#4fc08d"
    }
  ];

  const handleBackground = (chip: string) => {
    switch (chip) {
      case "React":
        return {
          background: "#61dafb",
        };
      case "typeScript":
        return {
          background: "#007acc",
        };
      case "JavaScript":
        return {
          background: "#e1cc29",
        };
      case "Sass":
        return {
          background: "#c13584",
        };
      case "Context API":
        return {
          background: "#f7801e",
        };
      case "Redux":
        return {
          background: "#7247b5",
        };
      case "Node":
        return {
          background: "#13b667",
        };
      case "firebase":
        return {
          background: "#e1cc29",
        };
      case "Tailwind":
        return {
          background: "#38bdf8",
        };
      case "Angular":
        return {
          background: "#e04e39",
        };

      default:
        return {
          background: "#61dafb",
        };
    }
  };

  useEffect(() => {
    setSelect(technologies.filter((tech) => tech.name === chip));
  }, []);

  return (
    <>
      {
        select.map((tech) => (
          <div className="chip" key={tech.name} style={{ background: tech.background }}>
            <img src={tech.url} alt={tech.name}
              className="chip-icon"
            />
            <span>{tech.name}</span>
          </div>
        ))
      }
    </>
  );
};
