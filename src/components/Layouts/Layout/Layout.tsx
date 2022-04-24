import React, { FC } from "react";
import { BottomBar } from "../../ui/BottomBar/BottomBar";
import { Navbar } from "../../ui/Navbar/Navbar";
import { Helmet } from "react-helmet";
import "./Layout.scss";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  image?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title, image }) => {
  return (
    <div className="app">
      <Helmet>
        <title>{title || "Portafolio Web"}</title>
        <meta name="author" content="Romel Alexis" />
        <meta
          name="description"
          content={`Información sobre mi Portafolio de proyectos`}
        />
        <meta name="keywords" content={`portafolio, proyectos, react, angular, node`} />

        <meta property="og:title" content={`Información sobre mi portafolio`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        {/* Para twitter */}
        <meta property="og:image" 
        content="https://res.cloudinary.com/react-romel/image/upload/c_scale,w_300/v1650774517/portfolio/portafolio__portada_eimwco.png " />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Portafolio de Romel Alexis"
        />
        <meta
          name="twitter:title"
          content="Portafolio de Romel Alexis"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/react-romel/image/upload/c_scale,w_300/v1650774517/portfolio/portafolio__portada_eimwco.png"
        />
        {/* Para Whatsapp */}
        <meta
          property="og:image"
          content="https://res.cloudinary.com/react-romel/image/upload/c_scale,w_300/v1650774517/portfolio/portafolio__portada_eimwco.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/react-romel/image/upload/c_scale,w_300/v1650774517/portfolio/portafolio__portada_eimwco.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="152" />
      </Helmet>
      <Navbar />
      <div className="container">{children}</div>
      <BottomBar />
    </div>
  );
};
