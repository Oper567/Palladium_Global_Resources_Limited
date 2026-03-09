"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry", // Set default to match select box
    message: "",
  });

  // Added states for UX feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this string with your actual access key
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          from_name: formData.name,
          ...formData,
          subject: `New Palladium Global Inquiry: ${formData.subject}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="
        py-24 bg-brand-light border-t border-slate-200 
        relative overflow-hidden
      "
    >
      {/* Premium Decorative Background Skew - Dark Olive Green */}
      <div
        className="
        absolute top-0 left-0 w-full h-[40%] bg-brand-primary 
        transform -skew-y-2 origin-top-left -z-0
      "
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Unified Split-Card Flexbox Container */}
        <div
          className="
          flex flex-col lg:flex-row w-full bg-white rounded-sm 
          shadow-2xl overflow-hidden border border-slate-100
        "
        >
          {/* Left Panel: Contact Information */}
          <div
            className="
            w-full lg:w-2/5 bg-brand-primary text-white p-12 
            flex flex-col justify-between relative overflow-hidden
          "
          >
            {/* Subtle decorative glow - Safety Yellow */}
            <div
              className="
              absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent 
              rounded-full opacity-20 blur-3xl
            "
            ></div>

            <div>
              <h2
                className="
                text-3xl md:text-4xl font-black uppercase 
                tracking-tight mb-6 leading-tight
              "
              >
                Let's Discuss <br />
                <span className="text-brand-accent">Your Project</span>
              </h2>
              <p className="text-gray-300 font-light leading-relaxed mb-12">
                Ready to start your next project or need a reliable energy and
                logistics partner? Reach out to Palladium Global Resources
                Limited today.
              </p>

              <div className="flex flex-col space-y-8">
                {/* Email Block */}
                <div className="flex items-start group">
                  <div
                    className="
                    flex-shrink-0 h-12 w-12 bg-brand-accent/10 
                    group-hover:bg-brand-accent transition-colors 
                    flex items-center justify-center rounded-sm 
                    border border-brand-accent/20
                  "
                  >
                    <svg
                      className="
                        h-6 w-6 text-brand-accent group-hover:text-brand-primary 
                        transition-colors
                      "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3
                      className="
                      text-sm font-bold text-gray-400 uppercase 
                      tracking-wider mb-1
                    "
                    >
                      Email Us
                    </h3>
                    <a
                      href="mailto:palladiumglobalresources@gmail.com"
                      className="
                        text-lg font-medium hover:text-brand-accent 
                        transition-colors break-all
                      "
                    >
                      palladiumglobalresources
                      <br />
                      @gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Block */}
                <div className="flex items-start group">
                  <div
                    className="
                    flex-shrink-0 h-12 w-12 bg-brand-accent/10 
                    group-hover:bg-brand-accent transition-colors 
                    flex items-center justify-center rounded-sm 
                    border border-brand-accent/20
                  "
                  >
                    <svg
                      className="
                        h-6 w-6 text-brand-accent group-hover:text-brand-primary 
                        transition-colors
                      "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3
                      className="
                      text-sm font-bold text-gray-400 uppercase 
                      tracking-wider mb-1
                    "
                    >
                      Call Us
                    </h3>
                    <p className="text-lg font-medium">
                      +234-806-660-5477 <br />
                      +234-807-176-4059
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Contact Form */}
          <div className="w-full lg:w-3/5 p-12 bg-white flex flex-col justify-center">
            <div
              className="
              mb-8 border-b-4 border-brand-accent pb-2 
              inline-block self-start
            "
            >
              <h3
                className="
                text-2xl font-black text-brand-primary 
                uppercase tracking-tight
              "
              >
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              {/* Row 1: Name and Email side-by-side */}
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="
                      block text-xs font-bold text-slate-500 
                      uppercase tracking-wider mb-2
                    "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="
                      w-full bg-slate-50 border border-slate-200 
                      text-slate-900 rounded-sm py-3 px-4 focus:outline-none 
                      focus:ring-2 focus:ring-brand-accent 
                      focus:border-transparent transition-all
                    "
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="
                      block text-xs font-bold text-slate-500 
                      uppercase tracking-wider mb-2
                    "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="
                      w-full bg-slate-50 border border-slate-200 
                      text-slate-900 rounded-sm py-3 px-4 focus:outline-none 
                      focus:ring-2 focus:ring-brand-accent 
                      focus:border-transparent transition-all
                    "
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Service Selection */}
              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="
                    block text-xs font-bold text-slate-500 
                    uppercase tracking-wider mb-2
                  "
                >
                  Service Required
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="
                    w-full bg-slate-50 border border-slate-200 
                    text-slate-900 rounded-sm py-3 px-4 focus:outline-none 
                    focus:ring-2 focus:ring-brand-accent 
                    focus:border-transparent transition-all
                  "
                >
                  <option>General Inquiry</option>
                  <option>Civil Engineering</option>
                  <option>Downstream Energy</option>
                  <option>Energy and Power</option>
                  <option>ICT Management</option>
                  <option>Supply Chain Management</option>
                </select>
              </div>

              {/* Row 3: Message Textarea */}
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="
                    block text-xs font-bold text-slate-500 
                    uppercase tracking-wider mb-2
                  "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="
                    w-full bg-slate-50 border border-slate-200 text-slate-900 
                    rounded-sm py-3 px-4 focus:outline-none focus:ring-2 
                    focus:ring-brand-accent focus:border-transparent 
                    transition-all resize-none
                  "
                  placeholder="How can we help you build?"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 text-green-800 border-l-4 border-green-500 text-sm font-medium">
                  Thank you! Your inquiry has been sent to our team
                  successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-800 border-l-4 border-red-500 text-sm font-medium">
                  Oops! Something went wrong. Please try emailing us directly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  self-start px-10 py-4 bg-brand-primary text-white 
                  font-black uppercase tracking-widest text-sm rounded-sm 
                  hover:bg-brand-accent hover:text-brand-primary 
                  transition-all shadow-md mt-2 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
