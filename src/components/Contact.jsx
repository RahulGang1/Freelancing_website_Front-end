import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faComment, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        communication: 'Email',
    });
    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmailAndData = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submission starts
        console.log('Sending email and data...'); // Debugging: Confirm submission is triggered

        // Create a message string
        const message = `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
            Preferred Communication: ${formData.communication}
        `;

        try {
            // Send email via EmailJS
            await emailjs.send('service_2qbzlpe', 'template_fn215cg', {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: message,
            }, 'bYpSZnLeLdqUqtKnj');

            // Send data to the API
            const response = await fetch('https://freelancing-website-eta.vercel.app/contact/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            // Check if the API request was successful
            if (!response.ok) {
                throw new Error('Failed to send data to the API');
            }

            console.log('Data successfully sent to the API');
            toast.success('Email and data successfully sent!');
            form.current.reset(); // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                communication: 'Email',
            });
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send email or data: ' + error.message);
        } finally {
            setLoading(false); // Reset loading state when finished
        }
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4">
                    {/* Left Section: Image and Contact Info */}
                    <div className="lg:mb-0 mb-10">
                        <div className="group w-full h-full">
                            <div className="relative h-[600px]">
                                <img
                                    src="https://pagedone.io/asset/uploads/1696488602.png"
                                    alt="Contact Us section"
                                    className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
                                />
                                <h1 className="font-manrope text-white text-4xl font-bold absolute top-11 left-11">
                                    Contact us
                                </h1>
                                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                    <div className="bg-white rounded-lg p-6">
                                        <div className="flex items-center mb-6">
                                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                            <h5 className="text-black text-base ml-5">
                                                +91 7068623477
                                            </h5>
                                        </div>
                                        <div className="flex items-center mb-6">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                            <h5 className="text-black text-base ml-5">
                                                collaboratex7@gmail.com
                                            </h5>
                                        </div>
                                        <div className="flex items-center mb-6">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                            <h5 className="text-black text-base ml-5">
                                                KANPUR (up)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="bg-white p-4 lg:p-6 lg:rounded-r-2xl rounded-2xl shadow-lg">
                        <form
                            ref={form}
                            onSubmit={sendEmailAndData}
                            className="grid grid-cols-1 gap-y-4"
                        >
                            <h1 className="font-bold text-2xl mb-4">GET IN TOUCH</h1>

                            <label>
                                <span className="text-base font-medium text-gray-700 flex items-center">
                                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                                    Full Name
                                </span>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-gray-50"
                                    required
                                />
                            </label>

                            <label>
                                <span className="text-base font-medium text-gray-700 flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                    Email Address
                                </span>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-gray-50"
                                    required
                                />
                            </label>

                            <label>
                                <span className="text-base font-medium text-gray-700 flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                    Phone
                                </span>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-gray-50"
                                    required
                                />
                            </label>

                            <label>
                                <span className="text-base font-medium text-gray-700 flex items-center">
                                    <FontAwesomeIcon icon={faComment} className="mr-2" />
                                    Message
                                </span>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    rows="5"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-gray-50"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-transform transform duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 active:scale-95 focus:outline-none"
                            >
                                {loading ? (
                                    <span>Sending...</span> // Show "Sending..." when loading
                                ) : (
                                    <span>Send Message</span>
                                )}
                            </button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
