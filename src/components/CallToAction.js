import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Little Lemon</h2>
            <p>
              Experience the authentic flavors of the Mediterranean in the heart of Chicago. 
              Our family recipes have been passed down through generations, bringing you 
              the most delicious and fresh ingredients in every dish.
            </p>
            <button className="cta-button">Make a Reservation</button>
          </div>
          <div className="cta-image">
            Restaurant Interior
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;