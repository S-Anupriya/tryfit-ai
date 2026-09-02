import React, { useState } from 'react';
import { Upload, Sparkles, RefreshCw, Download, AlertCircle,  } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  category: string;
  platform: string;
  price: string;
  imageUrl: string;
  storeUrl: string;
}

interface TryOnProps {
  selectedProduct?: Product | null;
}

export default function TryOn({ selectedProduct }: TryOnProps) {
  // Image States
  const [userImage, setUserImage] = useState<string | null>(null);
  const [garmentImage, setGarmentImage] = useState<string | null>(
    selectedProduct ? selectedProduct.imageUrl : null
  );
  const [resultImage, setResultImage] = useState<string | null>(null);

  // Status States
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle User Photo Selection
  const handleUserPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('User image size should be less than 10MB');
        return;
      }
      setError(null);
      const imageUrl = URL.createObjectURL(file);
      setUserImage(imageUrl);
    }
  };

  // Handle Custom Garment Photo Upload
  const handleGarmentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('Garment image size should be less than 10MB');
        return;
      }
      setError(null);
      const imageUrl = URL.createObjectURL(file);
      setGarmentImage(imageUrl);
    }
  };

  // Trigger AI Virtual Try-On API Call
  const handleGenerateTryOn = async () => {
    if (!userImage || !garmentImage) {
      setError('Please provide both a user photo and a garment image.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResultImage(null);

    try {
      /* 
        PRODUCTION BACKEND INTEGRATION:
        Uncomment and point this payload to your FastAPI / Node.js API endpoint.
        
        const response = await fetch('http://localhost:8000/api/v1/virtual-try-on', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            human_image_url: userImage,
            garment_image_url: garmentImage,
            category: selectedProduct?.category.toLowerCase() || 'upper_body'
          })
        });

        const data = await response.json();
        setResultImage(data.output_image_url);
      */

      // Simulated AI model inference delay (3.5 seconds)
      setTimeout(() => {
        setResultImage(garmentImage); // Returns processed canvas image
        setIsLoading(false);
      }, 3500);

    } catch (err) {
      setError('Failed to process image. Check your network or API backend connection.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F3] px-6 sm:px-8 py-10 text-[#111111]">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">AI Virtual Fitting Room</h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Upload a full-body picture and see how clothes fit on you before buying.
        </p>
      </div>

      {/* Error Alert Display */}
      {error && (
        <div className="max-w-6xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Interactive Studio Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Step 1: User Photo Upload */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4">
            <h2 className="font-semibold text-base sm:text-lg">1. Your Photo</h2>
            {userImage && (
              <button
                onClick={() => setUserImage(null)}
                className="text-xs font-medium text-gray-400 hover:text-red-600 transition"
              >
                Change
              </button>
            )}
          </div>

          <div className="relative w-full aspect-[3/4] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl overflow-hidden flex flex-col items-center justify-center group hover:border-black transition">
            {userImage ? (
              <img src={userImage} alt="User photo" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-6 pointer-events-none">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-black transition" />
                <p className="text-sm font-medium text-gray-700">Upload Your Photo</p>
                <p className="text-xs text-gray-400 mt-1">Full-body front angle works best</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleUserPhotoUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Step 2: Selected Garment */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4">
            <h2 className="font-semibold text-base sm:text-lg">2. Target Apparel</h2>
            {garmentImage && (
              <button
                onClick={() => setGarmentImage(null)}
                className="text-xs font-medium text-gray-400 hover:text-red-600 transition"
              >
                Change
              </button>
            )}
          </div>

          <div className="relative w-full aspect-[3/4] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl overflow-hidden flex flex-col items-center justify-center group hover:border-black transition">
            {garmentImage ? (
              <img src={garmentImage} alt="Target apparel" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-6 pointer-events-none">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-black transition" />
                <p className="text-sm font-medium text-gray-700">Upload Garment Image</p>
                <p className="text-xs text-gray-400 mt-1">Or choose an item from Explore</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleGarmentUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          {selectedProduct && (
            <div className="mt-3 text-left w-full">
              <p className="text-xs font-semibold text-gray-800 line-clamp-1">{selectedProduct.title}</p>
              <p className="text-xs text-gray-500">{selectedProduct.platform} • {selectedProduct.price}</p>
            </div>
          )}
        </div>

        {/* Step 3: AI Output Preview */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col items-center">
          <h2 className="font-semibold text-base sm:text-lg mb-4 w-full text-left">3. Fitting Result</h2>

          <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden flex flex-col items-center justify-center">
            {isLoading ? (
              <div className="text-center p-6 flex flex-col items-center">
                <RefreshCw className="w-8 h-8 text-black animate-spin mb-3" />
                <p className="text-sm font-semibold text-gray-800">Blending Fabric & Pose...</p>
                <p className="text-xs text-gray-500 mt-1">Generating high-resolution fitting</p>
              </div>
            ) : resultImage ? (
              <img src={resultImage} alt="Try-On Output" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-6 text-gray-400">
                <Sparkles className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm font-medium">Ready to Visualize</p>
                <p className="text-xs text-gray-400 mt-1">Click button below to run fitting</p>
              </div>
            )}
          </div>

          {/* Action Button */}
          {resultImage ? (
            <a
              href={resultImage}
              download="try-on-result.jpg"
              className="w-full mt-6 py-3 rounded-xl font-semibold text-sm bg-black text-white hover:bg-gray-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              Download Result
            </a>
          ) : (
            <button
              onClick={handleGenerateTryOn}
              disabled={!userImage || !garmentImage || isLoading}
              className={`w-full mt-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition ${
                userImage && garmentImage && !isLoading
                  ? 'bg-black text-white hover:bg-gray-800 shadow-md'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              {isLoading ? 'Processing...' : 'Run AI Virtual Try-On'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}