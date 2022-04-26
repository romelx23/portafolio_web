import React, { FC, useContext } from "react";
import { BottomBar } from "../../ui/BottomBar/BottomBar";
import { Navbar } from "../../ui/Navbar/Navbar";
// import { Helmet } from "react-helmet";
import "./Layout.scss";
import { Modal } from '../../ui/Modal/Modal';
import { ModalDescription } from '../../ui/ModalDescription/ModalDescription';
import { UIContext } from '../../../context/ui/UIContext';
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  image?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title, image }) => {
  const {color}=useContext(UIContext);
  return (
    <div className={`app ${color}`}>
      <Navbar />
      <div className="container">{children}</div>
      <BottomBar />
      <Modal>
        <ModalDescription />
      </Modal>
    </div>
  );
};
