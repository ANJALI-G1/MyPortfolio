import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mdkdgbnb", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id={ id }
      className="py-20 px-6 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-15 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">Let's Connect</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects or creative ideas. Feel
              free to drop a message below or reach out through social links.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-purple-400" />
                <a href="mailto:anjaligupta3406@gmail.com" className="hover:underline text-gray-300 hover:text-blue-400">
                  anjaligupta3406@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub className="text-purple-400" />
                <a
                  href="https://github.com/ANJALI-G1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300 hover:text-blue-400"
                >
                  https://github.com/ANJALI-G1
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-purple-400" />
                <a
                  href="https://www.linkedin.com/in/anjali-gupta-189863292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300 hover:text-blue-400"
                >
                  https://www.linkedin.com/in/anjali-gupta-189863292/
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center text-center p-8 bg-gray-900/50 rounded-lg border border-gray-800"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Thank You!</h3>
              <p className="text-gray-300">
                Your message has been sent successfully. I'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-1 text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;