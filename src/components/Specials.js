import React from 'react';

const Specials = () => {
  const specials = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "Greek Salad"
    },
    {
      id: 2,
      title: "Bruchetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: "Bruchetta"
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "Lemon Dessert"
    }
  ];

  return (
    <section className="specials-section">
      <div className="container">
        <div className="specials-header">
          <h2 className="section-title">Specials</h2>
          <button className="online-menu-button">Online Menu</button>
        </div>
        <div className="specials-grid">
          {specials.map(special => (
            <div key={special.id} className="special-card">
              <div className="special-image">
                {special.image}
              </div>
              <div className="special-info">
                <div className="special-header">
                  <h3 className="special-title">{special.title}</h3>
                  <span className="special-price">{special.price}</span>
                </div>
                <p className="special-description">{special.description}</p>
                <button className="order-button">
                  Order a delivery →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;