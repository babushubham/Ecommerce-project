import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Layout_comp from "../component/Layout/Layout_comp";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout_comp>

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" name="name" placeholder="Your Name" required
              value={formData.name} onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-orange-300"
              />
            <input 
              type="email" name="email" placeholder="Your Email" required
              value={formData.email} onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-orange-300"
              />
            <input 
              type="text" name="subject" placeholder="Subject" required
              value={formData.subject} onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-orange-300"
              />
            <textarea 
              name="message" rows="5" placeholder="Your Message" required
              value={formData.message} onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-orange-300"
              />
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-orange-500 text-xl" />
              <span className="text-gray-700">support@yourecommerce.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-orange-500 text-xl" />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <span className="text-gray-700">123 E-commerce St, City, Country</span>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-orange-500 text-2xl hover:text-orange-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-orange-500 text-2xl hover:text-orange-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-orange-500 text-2xl hover:text-orange-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
                </Layout_comp>
  );
};

export default ContactUsPage;
