import React, { useState } from "react";
import axios from "axios";
import { images } from "../constants/images";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      const res = await axios.post("https://claponn-backend-2.onrender.com", formData);
      if (res && res.data) {
        console.log(res.data);
        // Clear the form after successful submission
        setFormData({ name: "", email: "", message: "" });
        setSuccessMessage("Your message has been sent successfully!");
      } else {
        setErrorMessage("Unexpected response format.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err.response?.data?.message ||
          "There was an error sending your message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="font-uncut md:px-10 sm:px-20">
        <h2 className="text-4xl font-semibold mb-4 mt-10">Contact Us</h2>
        <p className="mb-7 text-xl text-gray-600">
          Get in Touch With Claponn! We're here to assist you with any
          questions, feedback, or inquiries.
        </p>
        <div className="md:px-0">
          <form onSubmit={onSubmit}>
            <div className="mb-5">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-5">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="email"
                id="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-7">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                id="message"
                placeholder="Message"
                rows="4"
                value={message}
                onChange={onChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-5 py-3 border border-gray-800 w-full lg:w-[10rem] h-[3.5rem] lg:mt-6 rounded-[45px] font-bold mx-auto lg:mx-0 hover:bg-slate-100 transition ease-in"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            {successMessage && (
              <p className="mt-4 text-center text-green-500">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="mt-4 text-center text-red-500">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

const ContactImage = ({ src, alt }) => {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <img className="w-full h-auto" src={src} alt={alt} />
    </div>
  );
};

const FAQ = () => {
  const questions = [
    {
      question: "What is Claponn?",
      answer:
        "Claponn is a consulting firm specializing in media and telecommunications. We work with clients across multiple domains to provide strategic advice and innovative solutions.",
    },
    {
      question: "What services does Claponn offer?",
      answer: "Answer to question 2.",
    },
    {
      question: "Which industries does Claponn serve?",
      answer: "Answer to question 3.",
    },
    {
      question: "How can Claponn help my business?",
      answer: "Answer to question 4.",
    },
    {
      question: "Does Claponn offer customized solutions?",
      answer: "Answer to question 5.",
    },
    {
      question:
        "Does Claponn work with small businesses or only large corporations?",
      answer: "Answer to question 6.",
    },
    {
      question: "Can I get a quote for Claponn's services?",
      answer: "Answer to question 7.",
    },
  ];

  return (
    <>
      <div className="w-full bg-white p-6 rounded-lg text-center font-uncut">
        <h2 className="text-4xl font-semibold mb-10">FAQs</h2>
        {questions.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <div
        className="flex justify-between items-center cursor-pointer p-4 border-t-2 border-gray-300"
        onClick={toggleOpen}
      >
        <span className="font-semibold">{question}</span>
        <button className="focus:outline-none">
          <svg
            className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && <div className="p-4 text-left rounded-b-lg">{answer}</div>}
    </div>
  );
};

const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center font-uncut text-center w-full lg:w-[55%] px-4 lg:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Have questions or need assistance? You're in the right place.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 w-full lg:w-[60%] mt-4">
            If you can't find what you're looking for, don't hesitate to reach
            out directly.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        {/* Upper div with form and image */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
          {/* Left div with form */}
          <div className="w-full lg:w-1/2 p-4">
            <ContactForm />
          </div>
          {/* Right div with image */}
          <ContactImage src={images.contactus} alt="Contact Us" />
        </div>

        {/* Lower div with FAQs */}
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
