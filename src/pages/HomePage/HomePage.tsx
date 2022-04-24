import React from "react";
import { Layout } from "../../components/Layouts";
import "./HomePage.scss";
import { CardProject } from "../../components/ui/CardProject/CardProject";
import { Modal } from "../../components/ui";
import { ModalDescription } from "../../components/ui/ModalDescription/ModalDescription";
import { data } from "../../data/portafolio.json";
import { CardSqueleton } from "../../components/ui/CardSqueleton/CardSqueleton";
import { AnimationPage } from "../../components/ui/AnimationPage/AnimationPage";
import { motion } from "framer-motion";
import { AnimateIcon } from "../../components/ui/AnimateIcon/AnimateIcon";
export const HomePage = () => {
  const container={
    initial:{
    },
    animate:{
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }
  return (
    <AnimationPage>
      <Layout>
        <h2 className="home__title decoration">Apartado de Proyectos</h2>
        <motion.div 
        variants={container}
        animate="animate"
        className="container__projects"
        >
          {/* <li>Proyectos</li>
        <li>animaciones</li>
        <li>repositorios</li> */}
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                  <CardProject key={item.id} portafolio={item} />
              );
            })
          ) : (
            <>
              <CardSqueleton />
              <CardSqueleton />
              <CardSqueleton />
            </>
          )}
        </motion.div>
        <div className="content__icon">
          <AnimateIcon/>
        </div>
      </Layout>
    </AnimationPage>
  );
};
