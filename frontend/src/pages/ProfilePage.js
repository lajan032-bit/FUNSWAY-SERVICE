import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage({ user }) {
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Profile</h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 font-semibold">First Name</label>
                <p className="text-lg">{user.firstName}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-semibold">Last Name</label>
                <p className="text-lg">{user.lastName}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-semibold">Email</label>
                <p className="text-lg">{user.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
            <div className="bg-gray-100 p-4 rounded text-center text-gray-600">
              <p>No bookings yet</p>
              <button className="mt-4 text-blue-600 hover:underline">View bookings</button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Edit Profile
          </button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
