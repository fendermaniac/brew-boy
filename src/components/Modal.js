import React from 'react';
import './Modal.css';

const Modal = ({visible, toggleModal}) => {
    return ( 
    <dialog 
      open
      id="modal"
      className="modal"
    //   style={{
    //     transform: visible ? 'translateY(0vh)' : 'translateY(-100vh)',
    //     opacity: visible ? '1' : '0'
    // }}
    >
        <p>Register</p>
        <button onClick={toggleModal}>Exit Modal</button>
      </dialog> 
    
    );
}
 
export default Modal;