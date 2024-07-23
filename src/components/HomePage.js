import React from "react";
import './HomePage.css';
import special1Img from '../images/greek salad.jpg'
import special2Img from '../images/bruchetta.png'
import special3Img from '../images/lemon dessert.jpg'
import ratingStars from '../images/ratingStars.png'
import entrepreneur1 from '../images/Mario and Adrian A.jpg'
import entrepreneur2 from '../images/Mario and Adrian b.jpg'
import NavigateButton from "./NavigateButton";

const HomePage = () => {
  return (
    <main>
        <section className="specials">
          <div className="specials-header">
            <h2>This week's specials</h2>
            <NavigateButton to="/orderOnline" >Online Menu</NavigateButton>
          </div>
          <div className="specials-content">
            <div className="special">
              <img src={special1Img} alt="Greek salad image"/>
              <h5>Greek salad - $ 12.90</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h5>Order a delivery</h5>
            </div>
            <div className="special">
              <img src={special2Img} alt="Bruchetta image"/>
              <h5>Bruchetta - $ 6.90</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h5>Order a delivery</h5>
            </div>
            <div className="special">
              <img src={special3Img} alt="Lemon dessert image"/>
              <h5>Lemon Dessert - $ 5,00</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h5>Order a delivery</h5>
            </div>
          </div>
        </section>
        <section className="testimonials">
        <h2>Testimonials</h2>
          <div className="testimonials-content">
            <div className="testimonial">
            <h5>Rating</h5>
              <img src={ratingStars} alt="Rating stars image"/>
              <h5>Review</h5>
            </div>
            <div className="testimonial">
            <h5>Rating</h5>
              <img src={ratingStars} alt="Rating stars image"/>
              <h5>Review</h5>
            </div>
            <div className="testimonial">
            <h5>Rating</h5>
              <img src={ratingStars} alt="Rating stars image"/>
              <h5>Review</h5>
            </div>
            <div className="testimonial">
              <h5>Rating</h5>
              <img src={ratingStars} alt="Rating stars image"/>
              <h5>Review</h5>
            </div>
          </div>
        </section>
        <section className="entrepreneur">
        <div className="entrepreneur-text">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Welcome to our restaurant. We offer the best dishes in the city. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </div>
          <div className="entrepreneur-images">
            <img src={entrepreneur2} alt="Entrepreneurs image"/>
            <img src={entrepreneur1} alt="Entrepreneurs image"/>
          </div>
        </section>
    </main>
  );
}

export default HomePage;