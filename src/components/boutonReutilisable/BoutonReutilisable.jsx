import React from 'react'

const BoutonReutilisable = ({ type = "button", className, children, onClick }) => (
  <button
    type={type}
    className={`py-2 px-4 rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BoutonReutilisable;
