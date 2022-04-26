import { UIState, color_theme } from './UIProvider';

type UIActionType = 
| {type:'[UI] - Set-Color', payload:color_theme}

export const UIReducer = (state:UIState,action:UIActionType):UIState => { 
    switch (action.type) {
        case '[UI] - Set-Color':
            return {
                ...state,
                color:action.payload
            };
    
        default:
            return state;
    }
 }