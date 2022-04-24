import { createContext } from 'react';

interface ContextProps{
        isOpen:boolean;
        toggleModal:(isOpen:boolean)=>void;
}

export const ModalContext=createContext({} as ContextProps)