import React, { FC } from "react";
import { BottomBar } from "../../ui/BottomBar/BottomBar";
import { Navbar } from "../../ui/Navbar/Navbar";
// import { Helmet } from "react-helmet";
import "./Layout.scss";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  image?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title, image }) => {
  return (
    <div className="app">
      {/* <Helmet>
        
      </Helmet> */}
      <Navbar />
      <div className="container">{children}</div>
      <BottomBar />
    </div>
  );
};
