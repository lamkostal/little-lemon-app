import React from 'react';

const Chicago = () => {
  return (
    <section className="chicago-section">
      <div className="container">
        <div className="chicago-content">
          <div className="chicago-text">
            <h1>Little Lemon</h1>
            <h2 className="chicago-subtitle">Chicago</h2>
            <p className="chicago-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="reserve-button">Reserve a Table</button>
          </div>
          <div className="chicago-image">
            Restaurant Image Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chicago;