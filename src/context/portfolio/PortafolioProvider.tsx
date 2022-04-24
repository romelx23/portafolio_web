import { FC, useReducer } from "react";
import { PortafolioContext, PortafolioReducer } from ".";

export interface Portafolio {
  id: number;
  name: string;
  description: string;
  url: string;
  photUrl: string[];
  repoUrl: string;
  technologies: string[];
}


export interface PortafolioState {
  selectedProject: Portafolio;
}

export const Portafolio_INITIAL_STATE: PortafolioState = {
  selectedProject: {
    id: 0,
    name: "",
    description: "",
    url: "",
    photUrl: [],
    repoUrl: "",
    technologies: [],
  },
};

export const PortafolioProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    PortafolioReducer,
    Portafolio_INITIAL_STATE
  );

  const selectProject = (project: Portafolio) => {
    dispatch({
      type: "[Portafolio] - Project Selected",
      payload: project,
    });
  };

  return (
    <PortafolioContext.Provider
      value={{
        ...state,
        selectProject
      }}
    >
      {children}
    </PortafolioContext.Provider>
  );
};
