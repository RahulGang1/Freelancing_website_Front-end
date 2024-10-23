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

    const newReview = { user, message };

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
          }

          .header {
            text-align: center;
            margin-bottom: 20px;
          }

          .company-info {
            text-align: center;
            margin-bottom: 30px;
          }

          .reviews-section {
            display: flex;
            overflow-x: auto;
            margin-bottom: 30px;
          }

          .review-card {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            margin-right: 15px;
            min-width: 250px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
          }

          .form-submit {
            padding: 10px 20px;
            border: none;
            background-color: #28a745;
            color: white;
            border-radius: 4px;
            cursor: pointer;
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
        <p>Welcome to [Your Company Name]! Here’s what our customers have to say about us.</p>
      </div>

      {/* Scrollable Reviews Section */}
      <div className="reviews-section">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h3>{review.user}</h3>
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
