import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch reviews from the API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://freelancing-website-eta.vercel.app/api/testimonials');
        setReviews(response.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews.');
      }
    };
    fetchReviews();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors

    // Create a new review object including the user name and ID
    const newReview = {
      user: "67194bbc02b070361d2111d5", // User ID
      name: user, // User name from input
      message,
    };

    try {
      await axios.post('https://freelancing-website-eta.vercel.app/api/testimonials/create', newReview);
      setReviews([...reviews, newReview]); // Update reviews dynamically
      setUser('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Failed to submit review.');
    }

    setLoading(false);
  };

  return (
    <div className="reviews-page">
      <style>
        {`
          .reviews-page {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            font-family: 'Arial', sans-serif;
            background-color: #f0f4f8;
            color: #333;
          }

          .header {
            text-align: center;
            margin-bottom: 20px;
            color: #2c3e50;
          }

          .company-info {
            text-align: center;
            margin-bottom: 30px;
            font-size: 1.2em;
          }

          .reviews-section {
            display: flex; /* Use flexbox for horizontal layout */
            overflow-x: auto; /* Enable horizontal scrolling */
            margin-bottom: 30px;
            padding: 10px;
            gap: 20px; /* Space between the cards */
          }

          .review-card {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            min-width: 300px; /* Ensure each card has a minimum width */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
          }

          .review-card:hover {
            transform: translateY(-5px);
          }

          .review-card h3 {
            margin: 0 0 10px;
            font-size: 1.5em;
            color: #2980b9;
          }

          .review-card p {
            font-size: 1em;
            line-height: 1.6;
          }

          .review-form {
            text-align: center;
            margin-top: 20px;
          }

          .form-input {
            display: block;
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 4px;
            border: 1px solid #ccc;
            transition: border-color 0.3s;
          }

          .form-input:focus {
            border-color: #2980b9;
            outline: none;
          }

          .form-submit {
            padding: 10px 20px;
            border: none;
            background-color: #27ae60;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .form-submit:hover {
            background-color: #219653;
          }

          .form-submit:disabled {
            background-color: #94d3a2;
            cursor: not-allowed;
          }

          .error-message {
            color: red;
            margin-top: 10px;
          }
        `}
      </style>

      {/* Header Section */}
      <div className="header">
        <h1>Customer Reviews</h1>
      </div>

      {/* Company Info Section */}
      <div className="company-info">
        <p>Welcome to collaboratex ! Here’s what our customers have to say about us.</p>
      </div>

      {/* Scrollable Reviews Section */}
      <div className="reviews-section">
        {reviews.length > 0 ? (
          reviews.slice(0, 6).map((review, index) => ( // Limit to 6 reviews (2 rows)
            <div className="review-card" key={index}>
              <h3>{review.name || 'Anonymous'}</h3> {/* Display user name or 'Anonymous' */}
              <p>{review.message}</p>
            </div>
          ))
        ) : (
          <p>No reviews available yet.</p>
        )}
      </div>

      {/* Review Submission Form */}
      <div className="review-form">
        <h2>Submit Your Review</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <textarea
            className="form-input"
            placeholder="Your Review"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
