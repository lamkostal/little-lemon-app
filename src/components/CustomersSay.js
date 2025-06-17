import React from 'react';

const CustomersSay = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Really enjoyed the atmosphere and the food was absolutely amazing. The service was excellent too!",
      customerName: "Sarah M.",
      avatar: "SM"
    },
    {
      id: 2,
      rating: 5,
      text: "Little Lemon has become our go-to place for special occasions. The quality is consistently outstanding.",
      customerName: "John D.",
      avatar: "JD"
    },
    {
      id: 3,
      rating: 4,
      text: "Great food, friendly staff, and a wonderful dining experience. Highly recommend the Greek salad!",
      customerName: "Maria L.",
      avatar: "ML"
    },
    {
      id: 4,
      rating: 5,
      text: "The ambiance is perfect for a romantic dinner. The lemon dessert is to die for!",
      customerName: "Alex R.",
      avatar: "AR"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="star">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section className="customers-section">
      <div className="container">
        <h2 className="customers-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="customer-info">
                <div className="customer-avatar">
                  {testimonial.avatar}
                </div>
                <span className="customer-name">{testimonial.customerName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;