import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Palette } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle registration logic here
      console.log('Form submitted:', formData);
      navigate('/'); // Redirect to home after registration
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="absolute top-4 left-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 mr-2" /> Back
        </Button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-indigo-600 p-6 text-center">
            <div className="flex justify-center mb-4">
              <Palette className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Join Our CraftCanvas</h1>
            <p className="text-indigo-100 mt-2">
              Create your account to explore authentic tribal artworks
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${
                    errors.username ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${
                    errors.mobile ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              Create Account
            </Button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}