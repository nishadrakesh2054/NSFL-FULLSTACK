import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact/submit",
        formData
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error sending message");
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/newsletter/subscribe",
        {
          email: newsletterEmail,
        }
      );
      toast.success("Successfully subscribed to newsletter!");
      setNewsletterEmail("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error subscribing to newsletter"
      );
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section with Breadcrumb */}

      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/image/about.jpeg')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <div className="text-white flex justify-center items-center space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-red-500">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 -left-10 w-72 h-72 bg-red-500 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 -right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Our Headquarters
              </h3>
              <address className="not-italic text-gray-600 space-y-1">
                <p>123 Soccer Avenue</p>
                <p>Sports City, SC 10001</p>
              </address>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Contact Us
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>
                  <a
                    href="tel:+18006735123"
                    className="hover:text-red-600 transition-colors"
                  >
                    +1 (800) NSFL-123
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@nsfl.com"
                    className="hover:text-red-600 transition-colors"
                  >
                    info@nsfl.com
                  </a>
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Office Hours
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>Mon-Fri: 9AM - 6PM</p>
                <p>Sat: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Have questions? Fill out the form below and we'll get back
                    to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiSend className="mr-3 text-lg" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Map + Social Media */}
            <div className="lg:w-1/2 flex flex-col gap-8">
              {/* Map */}
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132873!2d-73.9878449242395!3d40.74844097138996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251157714!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Follow NSFL
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: <FaFacebook className="text-xl" />,
                      color: "bg-blue-600",
                      hover: "bg-blue-700",
                      name: "Facebook",
                    },

                    {
                      icon: <FaInstagram className="text-xl" />,
                      color: "bg-pink-600",
                      hover: "bg-pink-700",
                      name: "Instagram",
                    },

                    {
                      icon: <FaYoutube className="text-xl" />,
                      color: "bg-red-600",
                      hover: "bg-red-700",
                      name: "YouTube",
                    },
                    {
                      icon: <FaTiktok className="text-xl" />,
                      color: "bg-black",
                      hover: "bg-gray-800",
                      name: "TikTok",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center hover:${social.hover} transition-colors shadow-sm hover:shadow-md`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-10 bg-gradient-to-r from-gray-700 to-gray-500 text-white overflow-hidden">
        {/* Optional Background Overlay Image */}
        <div className="absolute inset-0 opacity-30 bg-[url('/image/parallex.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
              Stay Updated with NSFL
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for{" "}
              <span className="text-white font-medium">exclusive updates</span>,
              ticket pre-sales, and behind-the-scenes content.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-6 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                disabled={newsletterLoading}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterLoading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-6 italic">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
