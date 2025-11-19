import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './ContactForm.css';

interface IContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IContactFormInputs>();

  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);


  const onSubmit: SubmitHandler<IContactFormInputs> = async (data) => {
    console.log('Form Data Submitted:', data);
    
 
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSubmitSuccess(true);
    reset(); 
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      
      {submitSuccess && (
        <div className="success-message">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className={errors.name ? 'input-error' : ''}
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters'} 
            })}
          />
          {errors.name && <span className="error-text">{errors.name.message}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={errors.email ? 'input-error' : ''}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address format',
              },
            })}
          />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            className={errors.message ? 'input-error' : ''}
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters'}
            })}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;