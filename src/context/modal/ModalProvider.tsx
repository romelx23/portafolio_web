import { FC, useReducer } from "react";
import { ModalContext, ModalReducer } from ".";

export interface ModalState {
  isOpen: boolean;
}

export const Modal_INITIAL_STATE: ModalState = {
  isOpen: false,
};

export const ModalProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, Modal_INITIAL_STATE);

  const toggleModal = (isOpen: boolean) => {
    dispatch({
      type: "[Modal] - Modal Toggle",
      payload: isOpen,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        ...state,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
