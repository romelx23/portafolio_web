import { createContext } from 'react';
import { color_theme } from './UIProvider';

interface ContextProps{
    color:string;
    handleColor:(color: color_theme)=>void;
}

export const UIContext=createContext({} as ContextProps)