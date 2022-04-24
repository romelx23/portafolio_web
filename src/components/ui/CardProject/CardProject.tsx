import React, { FC, useContext } from "react";
import "./CardProject.scss";
import { ModalContext } from "../../../context/modal/ModalContext";
import { PortafolioContext } from "../../../context/portfolio/PortafolioContext";
import { motion } from "framer-motion";

interface Props {
  portafolio: {
    // id: number;
    // title: string;
    // image: string;
    id: number;
    name: string;
    description: string;
    url: string;
    photUrl: string[];
    repoUrl: string;
    technologies: string[];
  };
}
export const CardProject: FC<Props> = ({ portafolio }) => {
  const { photUrl: image, name: title } = portafolio;
  const { toggleModal } = useContext(ModalContext);
  const { selectProject } = useContext(PortafolioContext);
  const handleModal = () => {
    toggleModal(true);
    selectProject(portafolio);
  };
  const animation = {
    initial: {
      // opacity: 0
    },
    animate: {
      opacity: [0, 1],
      scale: [0.5, 1],
    },
  };
  return (
    <motion.div
      variants={animation}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="card__project">
        <h1 className="card__title">{title}</h1>
        <div className="card__project-image">
          <img
            className="card__image"
            src={image ? image[0] : "https://via.placeholder.com/300x200"}
            alt="project"
            width={367}
            height={186}
          />
        </div>
        <div className="card__description">
          <button onClick={handleModal}>
            Ver detalles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="card__icon"
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
          </button>
        </div>
      </div>
    </motion.div>
  );
};
