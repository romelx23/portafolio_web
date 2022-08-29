import React from "react";
import { Layout } from "../../components/Layouts/Layout/Layout";
import "./AboutPage.scss";
import romel from "../../assets/romel.png";
import { AnimationPage } from "../../components/ui/AnimationPage/AnimationPage";
export const AboutPage = () => {
  return (
    <AnimationPage>
      <Layout>
        <div className="container-about">
          <h1 className="subtitle decoration">Romel Alexis Carrasco Mallma</h1>
          <div className="box">
            <img
              style={{ width: "160px", height: "160px" }}
              src={romel}
              alt="avatar"
              className="avatar"
            />
          </div>
          <p className="title">Descarga mi cv :</p>
          <a
            className="link__download"
            target="_blank"
            href="https://drive.google.com/file/d/13bccdwXKg0Jnw9ZSC5nhvn_zYZ026kKn/view?usp=sharing"
          >
            Descargar
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
          <div className="content">
            <p className="title">Sigueme en Github :</p>
            <a
              className="link__download"
              href="https://github.com/romelx23"
              target="_blank"
            >
              Seguir
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>

            </a>
          </div>
          <h2 className="subtitle">Tecnologías</h2>
          <h3 className="subtitle2">Frontend</h3>
          <ul className="about__list">
            <li className="bar">
              <div className="bar__title">
                <h4>Html</h4>
                <h4>70%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650552380/icons/html_xlrrnd.svg"
                  alt="html"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#ff8d1b", width: "70%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Css</h4>
                <h4>80%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650552380/icons/css_vyxoba.svg"
                  alt="css"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#0091d5", width: "80%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Sass</h4>
                <h4>60%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073101/icons/bxl-sass.svg_exe0m6.svg"
                  alt="sass"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#ce5895", width: "60%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Js</h4>
                <h4>60%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-javascript.svg_pvsdls.svg"
                  alt="js"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#ffe524", width: "60%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Ts</h4>
                <h4>30%</h4>
                <img
                  className="bar__img"
                  style={{ width: "50px", height: "50px" }}
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073676/icons/typescriptlang-icon_nezdps.svg"
                  alt="js"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#2474ff", width: "60%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>React</h4>
                <h4>60%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-react.svg_elk3df.svg"
                  alt="react"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#0047d5", width: "60%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Vue</h4>
                <h4>30%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073101/icons/bxl-vuejs.svg_nqh4he.svg"
                  alt="vue"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#158140", width: "30%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Angular</h4>
                <h4>30%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073100/icons/bxl-angular.svg_zsubye.svg"
                  alt="angular"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#d52b00", width: "30%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Tailwind</h4>
                <h4>50%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073101/icons/bxl-tailwind-css.svg_c3xrtv.svg"
                  alt="tailwind"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#259fd7", width: "50%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Firebase</h4>
                <h4>20%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-firebase.svg_no1luz.svg"
                  alt=""
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#fff025", width: "20%" }}
                ></div>
              </div>
            </li>
          </ul>
          <h3 className="subtitle2">Backend</h3>
          <ul className="about__list">
            <li className="bar">
              <div className="bar__title">
                <h4>Node</h4>
                <h4>40%</h4>
                <img
                  className="bar__img"
                  src="https://res.cloudinary.com/react-romel/image/upload/v1650073099/icons/bxl-nodejs.svg_i6gtn9.svg"
                  alt="node"
                />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#24924a", width: "40%" }}
                ></div>
              </div>
            </li>
            <li className="bar">
              <div className="bar__title">
                <h4>Laravel</h4>
                <h4>25%</h4>
                <img src="" alt="" />
              </div>
              <div className="bar__content">
                <div
                  className="bar__percent"
                  data-color="#ffffff"
                  style={{ background: "#d52405", width: "25%" }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </Layout>
    </AnimationPage>
  );
};
