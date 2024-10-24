import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactPage.css'; // Ensure you have this CSS file for styles

const ContactPage = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State to handle errors

    // Fetch contacts from the API
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://freelancing-website-eta.vercel.app/contact/getcontact');
                console.log('API Response:', response.data); // Log the response data

                // If the API returns a single contact, wrap it in an array
                // Uncomment the next line if the response is a single object
                // setContacts([response.data]);
                
                // If the API returns an array, set it directly
                setContacts(response.data); // Adjust this line based on your API response structure

                setLoading(false);
            } catch (error) {
                console.error('Error fetching contacts:', error);
                setError('Failed to fetch contacts.'); // Set error message
                setLoading(false);
            }
        };
        fetchContacts();
    }, []);

    // Delete a contact
    const deleteContact = async (id) => {
        try {
            await axios.delete(`https://freelancing-website-eta.vercel.app/contact/delete/${id}`);
            setContacts(contacts.filter(contact => contact._id !== id));
            alert('Contact deleted successfully!'); // Alert message after successful deletion
        } catch (error) {
            console.error('Error deleting contact:', error);
            alert('Failed to delete the contact.'); // Alert message for failure
        }
    };

    return (
        <div className="contact-page">
            <h1 className="contact-page__title">Contact List</h1>
            {loading ? (
                <p className="contact-page__loading">Loading...</p>
            ) : error ? (
                <p className="contact-page__error">{error}</p>
            ) : (
                contacts.map(contact => (
                    <div className="contact-card" key={contact._id}>
                        <h2 className="contact-card__name">{contact.name}</h2>
                        <p className="contact-card__email">Email: {contact.email}</p>
                        <p className="contact-card__phone">Phone: {contact.phone}</p>
                        <p className="contact-card__message">Message: {contact.message}</p>
                        <p className="contact-card__date">Created At: {new Date(contact.createdAt).toLocaleString()}</p>
                        <button
                            className="contact-card__delete-button"
                            onClick={() => deleteContact(contact._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default ContactPage;
