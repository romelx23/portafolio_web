import { FC, useReducer } from 'react'
import { UIContext, UIReducer } from '.'

export type color_theme= 'theme__dark' | 'theme__ligth' | 'theme__purple' | 'theme__blue' | 'theme__green' | 'theme__red' | 'theme__yellow'

export interface UIState {
  color: color_theme
}

export const UI_INITIAL_STATE: UIState = {
  color: localStorage.getItem('color') as color_theme || 'theme__ligth'
}

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

  const handleColor = (color: color_theme) => {
    //   set color in local storage
    localStorage.setItem('color', color)
    dispatch({ type: "[UI] - Set-Color", payload: color })
    }

  return (
    <UIContext.Provider
      value={{
        ...state,
        handleColor
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
