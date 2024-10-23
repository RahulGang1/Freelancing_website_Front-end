import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://freelancing-website-eta.vercel.app/api/auth/profile');
        setProfile(response.data); // Assuming the API response is the user object
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/api/auth/profile', profile);
      setProfile(response.data); // Update profile state with new data
      alert('Profile updated successfully!');
    } catch (err) {
      setError(err.message);
      alert('Error updating profile.');
    }
  };

  // Handle profile delete
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile? This action is irreversible.');
    if (confirmDelete) {
      try {
        await axios.delete('http://localhost:5000/api/auth/profile');
        alert('Profile deleted successfully.');
        // Optionally, redirect to another page after deletion
        window.location.href = '/'; // Redirect to home page
      } catch (err) {
        setError(err.message);
        alert('Error deleting profile.');
      }
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  if (loading) return <div className="loading-message">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">User Profile</h1>
      <p className="profile-description">
        Update your profile details below. Be sure to fill in accurate information to keep your account secure and up to date.
      </p>
      <form onSubmit={handleUpdate} className="profile-form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="update-button">Update Profile</button>
        <button type="button" onClick={handleDelete} className="delete-button">Delete Profile</button>
      </form>
    </div>
  );
};

export default Profile;
