import React, { useState } from 'react';
import { User, Camera, Sparkles, LogOut, Settings } from 'lucide-react';

export const Profile: React.FC = () => {
  const user = {
    name: 'Anupriya',
    email: 'anupriya@example.com',
    defaultModelImg: 'https://via.placeholder.com/150', // Replace with uploaded default image URL
  };

  const [savedFits] = useState([
    { id: 1, title: 'Summer Outfit', date: 'Sept 2026', img: 'https://via.placeholder.com/120' },
    { id: 2, title: 'Casual Jacket', date: 'Aug 2026', img: 'https://via.placeholder.com/120' },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Profile Card */}
      <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
              {user.defaultModelImg ? (
                <img src={user.defaultModelImg} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User className="w-10 h-10 text-slate-400" />
              )}
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
            <p className="text-slate-500 dark:text-slate-400">{user.email}</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
          <Settings className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Default Try-On Body Photo */}
      <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Default Try-On Photo</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Save your full-body photo to automatically load it in the Virtual Try-On studio.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-medium">
            Upload New Photo
          </button>
        </div>
      </div>

      {/* Saved Virtual Fits Gallery */}
      <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Saved Try-On Looks</h2>
        </div>

        {savedFits.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {savedFits.map((fit) => (
              <div key={fit.id} className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
                <img src={fit.img} alt={fit.title} className="w-full h-40 object-cover group-hover:scale-105 transition duration-300" />
                <div className="p-2 bg-white dark:bg-slate-800">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{fit.title}</p>
                  <p className="text-xs text-slate-500">{fit.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-sm">No saved fits yet. Go to the Virtual Try-On tab to generate your first look!</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        <button className="flex items-center space-x-2 px-4 py-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition font-medium text-sm">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
export default Profile;