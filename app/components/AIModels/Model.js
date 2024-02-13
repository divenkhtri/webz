// Modal.js

import React from 'react';

const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
