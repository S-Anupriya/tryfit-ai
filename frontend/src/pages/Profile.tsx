import React, { useState } from 'react';
import { User, Camera, Sparkles, LogOut, Settings } from 'lucide-react';
import './Profile.css';

const Profile: React.FC = () => {
  const [user] = useState({
    name: 'Anupriya',
    email: 'anupriya@example.com',
    defaultModelImg: '', // Add image URL here when available
  });

  const [savedFits] = useState([
    { id: 1, title: 'Summer Outfit', date: 'Sept 2026', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300' },
    { id: 2, title: 'Casual Jacket', date: 'Aug 2026', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300' },
  ]);

  return (
    <div className="profile-container">
      {/* Header Profile Card */}
      <div className="profile-card profile-header">
        <div className="user-info">
          <div className="avatar-wrapper">
            <div className="avatar">
              {user.defaultModelImg ? (
                <img src={user.defaultModelImg} alt="Profile" className="avatar" />
              ) : (
                <User size={36} color="#94a3b8" />
              )}
            </div>
            <button className="camera-btn" title="Change Photo">
              <Camera size={14} />
            </button>
          </div>
          <div className="user-details">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
        <button className="btn-secondary">
          <Settings size={16} />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Default Try-On Body Photo */}
      <div className="profile-card">
        <div className="photo-section-header">
          <div>
            <h2>Default Try-On Photo</h2>
            <p>Save your full-body photo to automatically load it in the Virtual Try-On studio.</p>
          </div>
          <button className="btn-primary">Upload New Photo</button>
        </div>
      </div>

      {/* Saved Virtual Fits Gallery */}
      <div className="profile-card">
        <div className="section-title">
          <Sparkles size={20} color="#6366f1" />
          <h2>Saved Try-On Looks</h2>
        </div>

        <div className="fits-grid">
          {savedFits.map((fit) => (
            <div key={fit.id} className="fit-card">
              <img src={fit.img} alt={fit.title} />
              <div className="fit-card-info">
                <p>{fit.title}</p>
                <span>{fit.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Out Action */}
      <button className="btn-logout">
        <LogOut size={16} />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default Profile;