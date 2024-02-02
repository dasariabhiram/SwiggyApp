import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full lg:w-1/2">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded-md"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border rounded-md"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full p-2 border rounded-md"
                            rows="4"
                            placeholder="How can we assist you?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
