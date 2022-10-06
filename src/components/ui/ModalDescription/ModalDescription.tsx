import React, { useContext, useRef, useState } from "react";
import "./ModalDescription.scss";
import { ModalContext } from "../../../context/modal/ModalContext";
import { PortafolioContext } from "../../../context/portfolio/PortafolioContext";
import { Chips } from "../Chip/Chips";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import "swiper/css";
import { ImageCard } from "../ImageCard/ImageCard";

export const ModalDescription = () => {
  const { toggleModal } = useContext(ModalContext);
  const { selectedProject } = useContext(PortafolioContext);
  const {
    name,
    description,
    photUrl: image,
    repoUrl,
    url,
    technologies,
  } = selectedProject;
  return (
    <div className="modal__description">
      <button
        className="btn__description"
        onClick={() => {
          toggleModal(false);
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h1 className="modal__title">{name}</h1>
      <p>{description}</p>
      <p>Tecnologías</p>
      <div className="modal__technologies">
        {technologies.map((tecnology) => (
          <Chips key={tecnology} chip={tecnology} />
        ))}
      </div>
      <Swiper
        className="modal__slider"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        //  slidesPerView={2}
        breakpoints={{
          // when window width is >= 640px
          640: {
            // width: 640,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 1,
          },
          1024: {
            // width: 1024,
            slidesPerView: 2,
          },
        }}
      >
        {image ? (
          image.map((img) => (
            <SwiperSlide key={img}
              className="modal__slide"
            >
              <ImageCard url={img} />
            </SwiperSlide>
          ))
        ) : (
          <img
            src="https://pbs.twimg.com/media/FQTTT-AXMAc8_q0?format=jpg&name=large"
            alt="modal__project"
            className="modal__img"
          />
        )}
      </Swiper>
      {/* <AnimatePresence >
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <img
              src={selectedId}
              alt="modal__project"
              className="modal__img"
            />
          </motion.div>
        )}
      </AnimatePresence> */}
      <div className="content__buttons">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn__repo"
        >
          Ver Repositorio
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn__repo"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};
