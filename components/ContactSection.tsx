"use client"

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: 'General Inquiry',
    message: '' 
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 1. Spread formData FIRST to avoid TypeScript overwrite errors
          ...formData,
          
          // 2. PASTE YOUR KEY HERE: This links the form to palladiumglobalresources@gmail.com
          access_key: "YOUR_NEW_ACCESS_KEY_HERE", 
          from_name: formData.name,
          
          // 3. Custom subject line formatting
          subject: `New Palladium Global Inquiry: ${formData.subject}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section 
      id="contact" 
      className="
        py-16 md:py-24 bg-brand-light border-t border-slate-200 
        relative overflow-hidden w-full
      "
    >
      {/* Premium Decorative Background Skew - Dark Olive Green */}
      <div className="
        absolute top-0 left-0 w-full h-[40%] bg-brand-primary 
        transform -skew-y-2 origin-top-left -z-0
      "></div>

      {/* Adjusted horizontal padding for snug mobile fit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Unified Split-Card Flexbox Container */}
        <div className="
          flex flex-col lg:flex-row w-full bg-white rounded-sm 
          shadow-2xl overflow-hidden border border-slate-100
        ">
          
          {/* Left Panel: Contact Information (Mobile Optimized Padding) */}
          <div className="
            w-full lg:w-2/5 bg-brand-primary text-white p-6 sm:p-8 md:p-12 
            flex flex-col justify-between relative overflow-hidden
          ">
            {/* Subtle decorative glow - Safety Yellow */}
            <div className="
              absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent 
              rounded-full opacity-20 blur-3xl
            "></div>
            
            <div className="relative z-10">
              <h2 className="
                text-3xl md:text-4xl font-black uppercase 
                tracking-tight mb-4 md:mb-6 leading-tight break-words
              ">
                Let's Discuss <br/>
                <span className="text-brand-accent">Your Project</span>
              </h2>
              <p className="text-gray-300 font-light leading-relaxed mb-8 md:mb-12 break-words text-left text-sm md:text-base">
                Ready to start your next project or need a reliable 
                energy and logistics partner? Reach out to Palladium 
                Global Resources Limited today.
              </p>
              
              {/* Tighter spacing on mobile (space-y-6 instead of 8) */}
              <div className="flex flex-col space-y-6 md:space-y-8">
                {/* Email Block */}
                <div className="flex items-start group">
                  <div className="
                    flex-shrink-0 h-10 w-10 md:h-12 md:w-12 bg-brand-accent/10 
                    group-hover:bg-brand-accent transition-colors 
                    flex items-center justify-center rounded-sm 
                    border border-brand-accent/20 mt-1 md:mt-0
                  ">
                    <svg 
                      className="h-5 w-5 md:h-6 md:w-6 text-brand-accent group-hover:text-brand-primary transition-colors" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 md:ml-5 flex-1 min-w-0">
                    <h3 className="
                      text-xs md:text-sm font-bold text-gray-400 uppercase 
                      tracking-wider mb-1 break-words
                    ">
                      Email Us
                    </h3>
                    <a 
                      href="mailto:palladiumglobalresources@gmail.com" 
                      className="
                        text-sm sm:text-base lg:text-lg font-medium hover:text-brand-accent 
                        transition-colors break-words block
                      "
                      style={{ wordBreak: 'break-word' }}
                    >
                      palladiumglobalresources@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Block */}
                <div className="flex items-start group">
                  <div className="
                    flex-shrink-0 h-10 w-10 md:h-12 md:w-12 bg-brand-accent/10 
                    group-hover:bg-brand-accent transition-colors 
                    flex items-center justify-center rounded-sm 
                    border border-brand-accent/20 mt-1 md:mt-0
                  ">
                    <svg 
                      className="h-5 w-5 md:h-6 md:w-6 text-brand-accent group-hover:text-brand-primary transition-colors" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 md:ml-5">
                    <h3 className="
                      text-xs md:text-sm font-bold text-gray-400 uppercase 
                      tracking-wider mb-1 break-words
                    ">
                      Call Us
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg font-medium break-words">
                      +234-806-660-5477 <br/> 
                      +234-807-176-4059
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Contact Form (Mobile Optimized Padding) */}
          <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-12 bg-white flex flex-col justify-center">
            <div className="
              mb-6 md:mb-8 border-b-4 border-brand-accent pb-2 
              inline-block self-start
            ">
              <h3 className="
                text-xl md:text-2xl font-black text-brand-primary 
                uppercase tracking-tight break-words
              ">
                Send a Message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 md:space-y-6">
              
              {/* Row 1: Name and Email side-by-side */}
              <div className="flex flex-col sm:flex-row gap-5 md:gap-6 w-full">
                <div className="flex-1 w-full">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 break-words">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    className="
                      w-full bg-slate-50 border border-slate-200 
                      text-slate-900 rounded-sm py-3 px-4 focus:outline-none 
                      focus:ring-2 focus:ring-brand-accent 
                      focus:border-transparent transition-all
                    " 
                    placeholder="John Doe" 
                  />
                </div>
                
                <div className="flex-1 w-full">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 break-words">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
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
                <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 break-words">
                  Service Required
                </label>
                <select 
                  id="subject" 
                  value={formData.subject} 
                  onChange={(e) => setFormData({...formData, subject: e.target.value})} 
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
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 break-words">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
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
              {submitStatus === 'success' && (
                <div className="p-3 md:p-4 bg-green-50 text-green-800 border-l-4 border-green-500 text-xs md:text-sm font-medium break-words">
                  Thank you! Your inquiry has been sent to our team successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 md:p-4 bg-red-50 text-red-800 border-l-4 border-red-500 text-xs md:text-sm font-medium break-words">
                  Oops! Something went wrong. Please check your connection or email us directly.
                </div>
              )}

              {/* Submit Button - Full width on mobile! */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="
                  w-full md:w-auto self-start px-8 md:px-10 py-4 bg-brand-primary text-white 
                  font-black uppercase tracking-widest text-xs md:text-sm rounded-sm 
                  hover:bg-brand-accent hover:text-brand-primary 
                  transition-all shadow-md mt-2 md:mt-4 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary
                  disabled:opacity-70 disabled:cursor-not-allowed break-words
                "
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;