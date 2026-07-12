import React, {useRef} from 'react'
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();

          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Failed to send message!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="flex flex-col justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <ToastContainer/>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <p className="text-gray-400 mt-4 text-lg font-semibold"> I'd love to hear from you — reach out for any opportunities or questions!</p>
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h1 className="text-xl font-semibold text-white text-center">Connect With Me</h1>
          <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
            <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-600" />
            <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-600"/>
            <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-600"/>
            <textarea name="message" placeholder="Message" rows="4" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-600"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90"> SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
