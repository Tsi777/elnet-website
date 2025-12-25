import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ContactFormData } from '../types';
import { contactInfoCards, contactContent } from '../data/contact';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const emailServiceConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID ?? 'service_29g27kl',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? 'template_axvp4wf',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? 'BWo5PNeFgh7I5hSPu',
  };

  const isEmailConfigured = Object.values(emailServiceConfig).every(
    (value) => value && !value.toLowerCase().includes('xxx')
  );

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }


    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!isEmailConfigured) {
      setSubmitStatus('error');
      setStatusMessage(
        'Email service is not configured. Please set REACT_APP_EMAILJS_* environment variables.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailServiceConfig.serviceId,
          template_id: emailServiceConfig.templateId,
          user_id: emailServiceConfig.publicKey,
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            sent_at: new Date().toLocaleString(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setStatusMessage("Thank you! We've received your message and will respond shortly.");
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 6000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      setStatusMessage(
        'Something went wrong while sending your message. Please try again later or use the direct contact channels.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Section
        title="Contact Us"
        subtitle="Get in Touch"
        background="gray"
        className="pt-24"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary-200/60 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-emerald-200/50 blur-3xl" />
          <Card className="relative rounded-[40px] border border-white/60 bg-white p-8 md:p-12 shadow-[0_45px_140px_-60px_rgba(15,23,42,0.65)] backdrop-blur">
            <div className="flex flex-col gap-4 text-center mb-10">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-700">
                {contactContent.badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">{contactContent.title}</h3>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                {contactContent.description}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
              {/* Contact Form */}
              <div className="rounded-[28px] border border-primary-100/70 bg-white/90 p-6 shadow-lg shadow-primary-100/60">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{contactContent.formTitle}</h4>
                <p className="text-sm text-gray-500 mb-6">{contactContent.formSubtitle}</p>

                {submitStatus !== 'idle' && statusMessage && (
                  <div
                    className={`mb-6 rounded-2xl border p-4 ${submitStatus === 'success'
                      ? 'border-green-200 bg-green-50 text-green-800'
                      : 'border-rose-200 bg-rose-50 text-rose-800'
                      }`}
                  >
                    <p className="font-medium">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl bg-white/70 shadow-inner shadow-primary-50 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition ${errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl bg-white/70 shadow-inner shadow-primary-50 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition ${errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>


                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-2xl bg-white/70 shadow-inner shadow-primary-50 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full rounded-2xl shadow-[0_20px_45px_-20px_rgba(16,185,129,0.8)]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="rounded-[28px] border border-primary-100 bg-gradient-to-br from-primary-50/80 via-white to-primary-100/70 p-8 shadow-lg shadow-primary-100/40">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">{contactContent.directChannelsTitle}</h4>
                  <div className="space-y-5">
                    {contactInfoCards.map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <span className="text-2xl h-12 w-12 flex items-center justify-center rounded-2xl bg-white shadow-inner">
                          {item.icon}
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                            {item.label}
                          </p>
                          <p className="mt-2 text-gray-800">
                            <span className={item.label !== 'Address' ? 'text-primary-600 font-semibold' : ''}>
                              {item.value}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>


                </div>

                <div className="relative rounded-[28px] border border-primary-100 overflow-hidden shadow-lg shadow-primary-100/40">
                  <iframe
                    title="ELNET Group location on Google Maps"
                    src={contactContent.mapEmbedUrl}
                    className="h-64 w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 shadow-lg border border-primary-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                      {contactContent.mapLabel}
                    </p>
                    <p className="text-sm font-bold text-gray-900">{contactContent.mapLocation}</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="rounded-[28px] border border-primary-100 bg-white p-6 shadow-lg shadow-primary-100/40">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Connect with us</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 text-gray-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1"
                      aria-label="Facebook"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 text-gray-600 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 hover:text-black hover:shadow-lg hover:-translate-y-1"
                      aria-label="X"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                      </svg>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 text-gray-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-lg hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

