import React, { useState, useEffect } from 'react';
import { Upload, Sparkles, RefreshCw, Layers, Zap } from 'lucide-react';
import './TryOn.css';

const PRESET_CLOTHES = [
  { id: '1', name: 'Cosmic Hoodie', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500' },
  { id: '2', name: 'Cyberpunk Leather', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500' },
  { id: '3', name: 'Nebula Dress', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500' },
];

const TryOn: React.FC = () => {
  const [humanImg, setHumanImg] = useState<string | null>(null);
  const [garmentImg, setGarmentImg] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImg, setResultImg] = useState<string | null>(null);

  // Auto-load default photo saved from Profile.tsx
  useEffect(() => {
    const savedPhoto = localStorage.getItem('default_human_img');
    if (savedPhoto) {
      setHumanImg(savedPhoto);
    }
  }, []);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setter(url);
    }
  };

  const handleGenerate = () => {
    if (!humanImg || !garmentImg) return;
    setIsProcessing(true);

    // Simulate Replicate IDM-VTON API Processing
    setTimeout(() => {
      setIsProcessing(false);
      setResultImg(garmentImg); // Replace with actual API response output
    }, 3500);
  };

  return (
    <div className="tryon-container">
      <div className="tryon-header">
        <div className="badge-glow">
          <Zap size={14} /> AI Fitting Room
        </div>
        <h1>Virtual Try-On Studio</h1>
        <p>Combine your photo with any garment to visualize your look powered by IDM-VTON.</p>
      </div>

      <div className="tryon-workspace">
        {/* Step 1: Human Model Selection */}
        <div className="upload-card">
          <div className="card-header">
            <span>01</span>
            <h3>Your Photo</h3>
          </div>
          <div className="dropzone">
            {humanImg ? (
              <div className="preview-frame">
                <img src={humanImg} alt="Model Preview" />
                <button className="change-btn" onClick={() => setHumanImg(null)}>Change</button>
              </div>
            ) : (
              <label className="upload-label">
                <Upload size={28} className="upload-icon" />
                <span>Upload Body Photo</span>
                <small>PNG, JPG up to 10MB</small>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setHumanImg)}
                  hidden
                />
              </label>
            )}
          </div>
        </div>

        {/* Action Column */}
        <div className="action-column">
          <button
            className={`generate-btn ${humanImg && garmentImg ? 'ready' : ''}`}
            disabled={!humanImg || !garmentImg || isProcessing}
            onClick={handleGenerate}
          >
            <Sparkles size={20} className={isProcessing ? 'spin' : ''} />
            <span>{isProcessing ? 'Generating Fit...' : 'Generate Try-On'}</span>
          </button>
        </div>

        {/* Step 2: Garment Selection */}
        <div className="upload-card">
          <div className="card-header">
            <span>02</span>
            <h3>Garment Photo</h3>
          </div>
          <div className="dropzone">
            {garmentImg ? (
              <div className="preview-frame">
                <img src={garmentImg} alt="Garment Preview" />
                <button className="change-btn" onClick={() => setGarmentImg(null)}>Change</button>
              </div>
            ) : (
              <label className="upload-label">
                <Layers size={28} className="upload-icon" />
                <span>Upload Clothing Piece</span>
                <small>Clean white/flat lay works best</small>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setGarmentImg)}
                  hidden
                />
              </label>
            )}
          </div>

          {/* Quick Preset Selector */}
          <div className="presets-wrapper">
            <small>Or pick a preset:</small>
            <div className="presets-grid">
              {PRESET_CLOTHES.map((item) => (
                <button
                  key={item.id}
                  className={`preset-thumb ${garmentImg === item.img ? 'selected' : ''}`}
                  onClick={() => setGarmentImg(item.img)}
                >
                  <img src={item.img} alt={item.name} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Processing Modal Overlay */}
      {isProcessing && (
        <div className="processing-overlay">
          <div className="processing-modal">
            <div className="nebula-spinner">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <Sparkles size={32} className="sparkle-core" />
            </div>
            <h2>Running Neural Fitting...</h2>
            <p>IDM-VTON model is mapping garment geometry to your photo.</p>
          </div>
        </div>
      )}

      {/* Result Display Section */}
      {resultImg && !isProcessing && (
        <div className="result-section">
          <h2>Your Try-On Result</h2>
          <div className="result-card">
            <img src={resultImg} alt="Virtual Result" />
            <div className="result-actions">
              <button className="save-fit-btn" onClick={() => alert('Look saved to Profile!')}>
                <Sparkles size={16} /> Save Look to Profile
              </button>
              <button className="reset-btn" onClick={() => setResultImg(null)}>
                <RefreshCw size={16} /> Try Another
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TryOn;