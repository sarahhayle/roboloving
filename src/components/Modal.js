import React from 'react';
import './Modal.css';

const Modal = ({ visible, toggle }) => {
  if (!visible) {
    return null
  }

  return (
    <div className='centered tc bg-light-green dib br3 pa3 shadow-5'>
      <h2>Are you a robot?</h2>
      <button
        className='pa3 ba b--green bg-lightest-blue br3'
        onClick={() => toggle()}>
          Yes, find me the 1!
      </button>
      <button 
        className='pa3 ba b--green bg-lightest-blue br3'
        onClick={() => window.location.href='https://mitpress.mit.edu/books/robot-rights'}>
          No I'm human, please escort me away
      </button>
    </div>
  )
}

export default Modal;