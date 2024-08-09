import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ideojsp", // Replace with your EmailJS service ID
        "template_jdpg19e", // Replace with your EmailJS template ID
        formData,
        "yqp60yOY0Akd0wrzg" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
    <div className="w-[100vw] mx-auto mt-10 pBgColor py-12">
    <div className="w-[100vw] flex justify-center flex-col items-center gap-3">
    <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <a
        href="mailto:dhinaashwin11@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[300px] text-center bg-[#ee8b8b] py-2 flex items-center justify-center gap-2 rounded-[10px]"
        >
        <div>
          <img
            src="https://res.cloudinary.com/dhina11/image/upload/v1723026131/message_z1qswh.png"
            alt="Email Icon"
            width="50px"
          />
        </div>
        <div className="text-white">dhinaashwin11@gmail.com</div>
      </a>
      <a
        href="tel:8939075292"
        className="w-[200px] text-center bg-[#ee8b8b] py-2 flex items-center justify-center gap-3 rounded-[10px]"
      >
        <div>
          <img
            src="https://res.cloudinary.com/dhina11/image/upload/v1723026644/phone_874555_wbtmsl.png"
            alt="Phone Icon"
            width="50px"
          />
        </div>
        <div className="text-white">8939075292</div>
      </a>
    </div>
      <div className="w-[75vw] m-auto mt-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 pb-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
              </section>
  );
};
export default Contact;
