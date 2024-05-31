import React, { useState } from "react";
import emailjs from "emailjs-com";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        templateParams,
        'YOUR_USER_ID' 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
        <form
          onSubmit={handleSubmit}
          className="w-[85%] bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <h1 className="hover:translate-y-[-5px] transition-all duration-300 ease-linear hover:text-[#fe964d] text-5xl font-bold font-sans text-center capitalize text-white">
            Contact Me
          </h1>

          <div className="flex flex-wrap -mx-3 my-10">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-base font-sans font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-base font-sans font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-white text-base font-sans font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-white text-base font-sans font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="hover:translate-y-[-10px] transition-all duration-300 ease-linear hover:buttonshadow mt-10 capitalize bg-[#fe964d] rounded-md text-base font-bold py-3 px-8"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
