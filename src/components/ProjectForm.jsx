import React, { useState } from 'react';
import axios from 'axios';
import './ProjectForm.css';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectTitle: '',
        projectType: '',
        projectDescription: '',
        budget: '',
        deadline: '',
        additionalNotes: '',
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://freelancing-website-eta.vercel.app/api/projects/submit', formData);
            console.log('Project submitted:', response.data);
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting project:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className='movement-slider'>

            <h1 className="section-title">Our Services</h1>
            </div>
            <div className="services-section">
                {/* Web Development Card */}
                <div className="service-card">
                    <img className="service-image" src="https://media.istockphoto.com/id/1409790673/photo/programmer-writing-codes-on-computer-at-table.jpg?s=612x612&w=0&k=20&c=8Xn3fM4zReMRGTu43yv26FFoVqBjvQJDKLFHNgrP42Y=" alt="Web Development" />
                    <div className="service-info">
                        <h1>WEBSITE CREATION & DEVELOPMENT</h1>
                        <p>We create custom, user-friendly websites tailored to your business needs. Whether you're a startup or an established business, our process includes understanding your vision, designing a unique structure, developing a responsive website, and providing ongoing management.</p>
                    </div>
                </div>

                {/* Logo Design Card */}
                <div className="service-card">
                    <div className="service-info">
                        <h1>LOGO DESIGN</h1>
                        <p>We design unique and memorable logos that align with your brand identity. Our creative process ensures that your logo stands out and resonates with your target audience.</p>
                    </div>
                    {/* <img className="" alt="Logo Design" /> */}
                    <img className="service-image" src="https://media.istockphoto.com/id/2040726025/photo/asian-graphic-designer-working-in-office-designing-logo-artist-creative-designer-illustrator.jpg?s=612x612&w=0&k=20&c=ximvSDWd61WHpJdA14dPDygaDXtBYUkVTfY4b_ok_Ps=" alt="" />
                </div>

                {/* Banner and Poster Designing Card */}
                <div className="service-card">
                    <img className="service-image" src="https://media.istockphoto.com/id/1446220268/photo/young-woman-getting-delivery-while-working-in-the-office.jpg?s=612x612&w=0&k=20&c=wPgKKD7HZSq4noJwx4lNdO74KfyUgk8BnFjvhIRQ1z8=" alt="Banner Designing" />
                    <div className="service-info">
                        <h1>BANNER AND POSTER DESIGNING</h1>
                        <p>We offer high-end banner and poster designs for large-scale promotions or events. Our designs ensure your message stands out and engages your audience effectively.</p>
                    </div>
                </div>

                {/* Test Paper Creation Card */}
                <div className="service-card">
                    <div className="service-info">
                        <h1>TEST PAPER CREATION FOR COACHING CENTERS</h1>
                        <p>We help educational institutions by creating custom test papers that meet their unique requirements, ensuring they are both professional and easy to use for teachers and students.</p>
                    </div>
                    <img className="service-image" src="https://media.istockphoto.com/id/1387743663/photo/happy-interested-millennial-man-studying-on-online-courses.jpg?s=612x612&w=0&k=20&c=jaDoO-PDlw821OaK-BUjmZbBQNddaH-FNIlmwN0vcFA=" alt="Test Paper Creation" />
                </div>

                {/* Social Media Management Card */}
                <div className="service-card">
                    <img className="service-image" src="https://plus.unsplash.com/premium_photo-1681883457631-e21611e38757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhJTIwbWFuZ2VtZW50JTIwd2l0aCUyMHNvY2lhbCUyMG1lZGlhJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Social Media Management" />
                    <div className="service-info">
                        <h1>SOCIAL MEDIA MANAGEMENT</h1>
                        <p>We manage your social media presence to enhance your brand's visibility and engagement. Our strategies ensure you connect with your audience effectively, creating a loyal customer base.</p>
                    </div>
                </div>
            </div>

            <div className="project-form-container">
                <h2>Request a Project</h2>
                <form className="project-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectTitle">Project Title</label>
                        <input className="form-control" type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectType">Project Type</label>
                        <input className="form-control" type="text" name="projectType" value={formData.projectType} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectDescription">Project Description</label>
                        <textarea className="form-control form-textarea" name="projectDescription" value={formData.projectDescription} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget">Budget</label>
                        <input className="form-control" type="text" name="budget" value={formData.budget} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input className="form-control" type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="additionalNotes">Additional Notes</label>
                        <textarea className="form-control form-textarea" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} />
                    </div>
                    <button className="submit-btn" type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Project'}
                    </button>
                    {submitted && <p className="success-message">Your project has been submitted successfully!</p>}
                </form>
            </div>
            
            {/* Movement Slider */}
            <div className="movement-slider">
                <div className="slider-content">
                    <h1>!........!</h1>
                </div>
            </div>
        </div>
    );
}; 

export default ProjectForm;
