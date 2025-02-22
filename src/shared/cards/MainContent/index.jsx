import React from 'react';

const MainContent = ({ id, image, title }) => {
  return (
    <div id={id} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} />
      <div className="p-4">
        {title && <h3>{title}</h3>}
      </div>
    </div>
  );
};

export default MainContent;