import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalComponent.css';

const ModalComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='s-button' onClick={toggleModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>X</button>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-content">{content}</p>
            <button className="close-button" onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

ModalComponent.defaultProps = {
  title: 'Diplomado USIP - React',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export default ModalComponent;
