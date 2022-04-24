import { ModalState } from './ModalProvider';

type ModalActionType = 
| {type:'[Modal] - Modal Open'}
| {type:'[Modal] - Modal Close'}
| {type:'[Modal] - Modal Toggle', payload:boolean}

export const ModalReducer = (state:ModalState,action:ModalActionType):ModalState => { 
    switch (action.type) {
        case '[Modal] - Modal Open':
            return {
                ...state,
                isOpen:true
            };
        case '[Modal] - Modal Close':
            return {
                ...state,
                isOpen:false
            };
        case '[Modal] - Modal Toggle':
            return {
                ...state,
                isOpen:action.payload
            };

    
        default:
            return state;
    }
 }