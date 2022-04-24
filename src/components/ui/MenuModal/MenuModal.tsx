import React from 'react'
import { Modal } from '../Modal/Modal';
import './MenuModal.scss'

export const MenuModal = () => {
  return (
    <Modal>
        <ul className='content__menu'>
            <li >
                <a href="#" data-text="&nbsp;Home">&nbsp;Home</a>
            </li>
            <li >
                <a href="#" data-text="&nbsp;Github">&nbsp;Github</a>
            </li>
            <li >
                <a href="#" data-text="&nbsp;LinkedIn">&nbsp;LinkedIn</a>
            </li>
            <li >
                <a href="#" data-text="&nbsp;Contactatame">&nbsp;Contactatame</a>
            </li>
        </ul>
    </Modal>
  )
}
