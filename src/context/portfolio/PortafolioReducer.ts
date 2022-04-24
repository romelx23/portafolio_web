import { PortafolioState, Portafolio } from './PortafolioProvider';

type PortafolioActionType = 
| {type:'[Portafolio] - Project Selected', payload:Portafolio}

export const PortafolioReducer = (state:PortafolioState,action:PortafolioActionType):PortafolioState => { 
    switch (action.type) {
        case '[Portafolio] - Project Selected':
            return {
                ...state,
                selectedProject: action.payload
            };
    
        default:
            return state;
    }
 }