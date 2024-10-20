import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons'; 
import './home.css';

function Home() {
  useEffect(() => {
    const textElements = document.querySelectorAll('.fade-in');
    textElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
      element.classList.add('animate');
    });
  }, []);

  return (
    <div className="home-container">
      <section className="home-section">
        <div className="content-wrapper">
          <h1 className="main-title fade-in">
            COMPLETE ONLINE BUSINESS SOLUTIONS
          </h1>
          <p className="main-description fade-in">
            
          </p>
          <button className="cta-button fade-in">
            <FontAwesomeIcon icon={faRocket} /> Get Started
          </button>
        </div>
      </section>

      <div className="image-content">
        <div className="text-block">
          <h1 className="text-title">Our Process</h1>
          <p className="main-description ">
            We create custom, user-friendly websites tailored to your business needs. 
            Whether you’re a startup or an established business, our process includes 
            understanding your vision, designing a unique structure, developing a 
            responsive website, and providing ongoing management.
          </p>
        </div>
        <div className="image-block">
          <img className="image" src="https://media.istockphoto.com/id/2159742374/photo/manager-use-laptop-displayed-data-analysis-while-brainstorming-idea-tracery.jpg?s=612x612&w=0&k=20&c=zyczpyt0JRULZbrhp9_wFR44wjEDBShVcWiwjOYuqs0=" alt="Working together" />
        </div>
      </div>

      <hr className="divider" />

      <div className="image-gallery">
        <img className="gallery-image" src="https://media.istockphoto.com/id/2040726025/photo/asian-graphic-designer-working-in-office-designing-logo-artist-creative-designer-illustrator.jpg?s=612x612&w=0&k=20&c=ximvSDWd61WHpJdA14dPDygaDXtBYUkVTfY4b_ok_Ps=" alt="Designer working" />
        <img className="gallery-image" src="https://media.istockphoto.com/id/1455943803/photo/project-manager-having-a-chat-with-the-team.jpg?s=612x612&w=0&k=20&c=tZn2PSYu80_J2YUwngg30ftA0hd-jhGm4frG5nHZlVo=" alt="Strategy meeting" />
        <img className="gallery-image" src="https://media.istockphoto.com/id/928414276/photo/two-freelancer-men-looking-at-color-swatches-at-laptop-at-desk.jpg?s=612x612&w=0&k=20&c=nHO0WvmnNF5OjXeEfAWby8aA9CbbjR4mVhHlUyGD8G0=" alt="Freelancers discussing" />
        <img className="gallery-image" src="https://media.istockphoto.com/id/669887538/photo/colleagues-using-tablet-pc-in-textile-factory.jpg?s=612x612&w=0&k=20&c=dsJt2E34DcDMn6C2CpVTTCOymq7_WecrOrDwceqJ9j0=" alt="Colleagues in a factory" />
        <img className="gallery-image" src="https://media.istockphoto.com/id/813525644/photo/businessman-working-on-laptop-with-icons.jpg?s=612x612&w=0&k=20&c=IaeTx0lBmeWlHnelG15wx1abhbjs1ZMRzinJ4rsNj2I=" alt="Businessman working" />
      </div>
    </div>
  );
}

export default Home;
