import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Reviews = () => {
    const [reviews, setReviews] = useState([
        { _id: 1, name: "John Doe", review: "Excellent service! The team was very professional and delivered beyond my expectations.", rating: 5 },
        { _id: 2, name: "Jane Smith", review: "Great quality products. I'm a repeat customer and always satisfied with my purchases.", rating: 4 },
        { _id: 3, name: "Mike Johnson", review: "Prompt delivery and amazing customer support. Highly recommended!", rating: 5 }
    ]);
    const [newReview, setNewReview] = useState({
        name: '',
        review: '',
        rating: 5
    });

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/testimonials');
            if (response.data.length > 0) {
                setReviews(response.data);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/testimonials/create', newReview);
            setNewReview({ name: '', review: '', rating: 5 });
            fetchReviews(); // Refresh the reviews after adding a new one
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    className="text-3xl font-extrabold text-gray-900 text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Customer Reviews
                </motion.h2>
                <motion.p 
                    className="text-xl text-gray-600 text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    At [Your Company Name], we pride ourselves on delivering outstanding service and top-quality products. Our customers are at the heart of everything we do, and their feedback speaks volumes about our commitment to excellence. Below are some of the reviews from our satisfied customers:
                </motion.p>
                <motion.div 
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {reviews.map((review) => (
                        <motion.div 
                            key={review._id} 
                            className="bg-white overflow-hidden shadow rounded-lg"
                            variants={itemVariants}
                        >
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                                <div className="mt-2 max-w-xl text-sm text-gray-500">
                                    <p>{review.review}</p>
                                </div>
                                <div className="mt-3 text-sm">
                                    <span className="text-yellow-400">
                                        {"★".repeat(review.rating)}
                                    </span>
                                    <span className="text-gray-300">
                                        {"★".repeat(5 - review.rating)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="bg-white shadow rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Add Your Review</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newReview.name}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review</label>
                            <textarea
                                id="review"
                                name="review"
                                rows="3"
                                value={newReview.review}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                            <select
                                id="rating"
                                name="rating"
                                value={newReview.rating}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                                ))}
                            </select>
                        </div>
                        <motion.button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Review
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Reviews;






