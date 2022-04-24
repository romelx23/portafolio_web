import React, { useContext, useRef } from 'react'
import './Modal.scss'
import { ModalContext } from '../../../context/modal/ModalContext';

type Props = {
    children: JSX.Element,
};

export const Modal = ({ children }: Props) => {
    const {isOpen} = useContext(ModalContext)
    const modal = useRef<HTMLDivElement>(null)
    // const handleCLose = () => {
        // closeModal()
    // }
    return (
        <div className={`container__modal ${isOpen?'modal__visible':'modal__hidden'}`}>
            {children}
        </div>
    )
}
