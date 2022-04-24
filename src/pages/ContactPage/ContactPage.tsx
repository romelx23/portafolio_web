import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.scss";
import { Layout } from "../../components/Layouts";
import { CopyCard } from "../../components/ui/CopyCard/CopyCard";
import { useForm } from "../../hooks/useForm";
export const ContactPage = () => {
  const [touch, setTouch] = useState(false);
  const link = useRef<HTMLAnchorElement>(null);
  const { values, handleInputChange } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;

  const contactArray = [
    {
      title: "Número de contacto",
      value: "934529954",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="list__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Correo electrónico",
      value: "romelx23@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="list__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Dirección",
      value: "Lima, Perú",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="list__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    if (values.name.trim() === "") {
      return;
    }
    if (values.email.trim() === "") {
      return;
    }
    if (values.message.trim() === "") {
      return;
    }
    link.current?.click();
  };

  return (
    <Layout>
      <div className="list__contact">
        {contactArray.map((contact) => (
          <CopyCard key={contact.title} informartion={contact} />
        ))}
        {/* <CopyCard /> */}
      </div>
      <div className="contact__form__content">
        <h1>Enviame un Mensaje</h1>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input">
            <label htmlFor="name">Nombre</label>
            <div className="content__input">
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                onBlur={() => setTouch(true)}
              />
              {name === "" && touch && <p className="error">El nombre es requerido</p>}
            </div>
          </div>
          <div className="form__input">
            <label htmlFor="email">Correo electrónico</label>
            <div className="content__input">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
                onBlur={() => setTouch(true)}
              />

              {email === "" && touch && <p className="error">El email es requerido</p>}
            </div>
          </div>
          <div className="form__input">
            <label htmlFor="message">Mensaje</label>
            <div className="content__input">
              <textarea
                id="message"
                name="message"
                onChange={handleInputChange}
                onBlur={() => setTouch(true)}
              />

              {message === "" && touch &&  (
                <p className="error">El mensaje es requerido</p>
              )}
            </div>
          </div>
          <button type="submit" onClick={()=>setTouch(true)}>Enviar</button>
        </form>
      </div>
      <a
        ref={link}
        className="link__contact"
        href={`mailto:romelx23@gmail.com?cc=${values.email}&subject=${values.name}&body=${values.message}`}
      >
        Email-Link
      </a>
    </Layout>
  );
};
