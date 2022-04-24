import React from "react";
import { Layout } from "../../components/Layouts/Layout/Layout";
import "./AboutPage.scss";
import romel from "../../assets/romel.png";
import { AnimationPage } from "../../components/ui/AnimationPage/AnimationPage";
export const AboutPage = () => {
  return (
    <AnimationPage>
      <Layout>
        <h1 className="subtitle decoration">Romel Alexis Carrasco Mallma</h1>
        <div className="box">
          <img
            style={{ width: "160px", height: "160px" }}
            src={romel}
            alt="avatar"
            className="avatar"
          />
          <div className="content">
            <p>Sigueme en Github</p>
            <a
              className="btn__avatar"
              href="https://github.com/romelx23"
              target="_blank"
            >
              follow
            </a>
          </div>
        </div>
        <p>Descarga mi cv</p>
        <a
          className="link__download"
          target="_blank"
          href="https://drive.google.com/file/d/13bccdwXKg0Jnw9ZSC5nhvn_zYZ026kKn/view?usp=sharing" 
        >
          download cv
        </a>
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
      </Layout>
    </AnimationPage>
  );
};
