import { createContext } from 'react';
import { Portafolio } from '.';

interface ContextProps{
        selectedProject:Portafolio;
        selectProject:(project:Portafolio)=>void;
}

export const PortafolioContext=createContext({} as ContextProps)