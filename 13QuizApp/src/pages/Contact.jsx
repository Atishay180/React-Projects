import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg fade-in">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary-dark">Contact Us</h1>
        <p className="mb-10 text-gray-700 text-center">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </p>
        <form className="space-y-6 fade-in">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-darkHover focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-darkHover focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-darkHover focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-primary-dark text-white font-medium rounded-lg hover:bg-primary-darkHover focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
