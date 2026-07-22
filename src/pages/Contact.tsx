import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Mail, MapPin, Clock } from 'lucide-react';
import { BRAND_CONTENT, WHATSAPP_URL } from '../constants/content';
import { useSEO } from '../utils/seo';
import { Button } from '../components/Button';
import { Accordion } from '../components/Accordion';
import { ScrollFadeIn } from '../components/ScrollReveal';
import './Contact.css';

export function Contact() {
  useSEO({
    title: 'Schedule Meeting',
    description: BRAND_CONTENT.contactPage.hero.paragraph,
    canonical: 'https://marketerscafe.net/contact',
  });

  const content = BRAND_CONTENT.contactPage;

  // React State for Form Validation and UI States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    constraint: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitTrackerRef = useRef(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const stateKey = name === 'entry.93694989' ? 'industry' : name === 'entry.1934251866' ? 'constraint' : name;
    setFormData((prev) => ({ ...prev, [stateKey]: value }));
  };

  const getFormPayload = () => {
    const formPayload = new FormData();
    formPayload.append('entry.910564968', formData.name.trim());
    formPayload.append('entry.412218000', formData.email.trim());
    formPayload.append('entry.734640528', formData.company.trim());
    formPayload.append('entry.93694989', formData.industry.trim());
    formPayload.append('entry.1934251866', formData.constraint.trim());
    formPayload.append('entry.1833853541', formData.phone.trim());
    formPayload.append('entry.1634060792', formData.message.trim());
    return formPayload;
  };

  const isFormComplete = Boolean(
    formData.name.trim() &&
    formData.email.trim() &&
    formData.company.trim() &&
    formData.phone.trim() &&
    formData.industry.trim() &&
    formData.constraint.trim() &&
    formData.message.trim()
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isFormComplete) {
      alert('Please fill in all required fields before requesting a strategic briefing.');
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    const formPayload = getFormPayload();
    const formAction = 'https://docs.google.com/forms/d/e/1FAIpQLSd6ITkTd7eMr1bsKKJBO5JBll0K0NnvAtbUB9BBn4XTk5Nr1Q/formResponse';

    fetch(formAction, {
      method: 'POST',
      body: formPayload,
      mode: 'no-cors',
    })
      .then(() => {
        submitTrackerRef.current = true;
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch(() => {
        submitTrackerRef.current = true;
        setIsSubmitting(false);
        setIsSubmitted(true);
      });
  };

  const handleIframeLoad = () => {
    if (submitTrackerRef.current) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      submitTrackerRef.current = false;
    }
  };

  // Programmatic Structured Schema Markup Injection for E-E-A-T
  useEffect(() => {
    // 1. LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Marketers Cafe",
      "image": "https://marketerscafe.net/logo-red.png",
      "telephone": "+918121110210",
      "email": "hello@marketerscafe.net",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Across India",
        "addressCountry": "IN"
      },
      "url": "https://marketerscafe.net/",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    };

    // 2. FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.faq.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Append script elements to document head
    const businessScript = document.createElement('script');
    businessScript.type = 'application/ld+json';
    businessScript.id = 'ld-json-localbusiness';
    businessScript.innerHTML = JSON.stringify(localBusinessSchema);
    document.head.appendChild(businessScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'ld-json-faq';
    faqScript.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Cleanup scripts on unmount
    return () => {
      const existingBusiness = document.getElementById('ld-json-localbusiness');
      if (existingBusiness) existingBusiness.remove();

      const existingFaq = document.getElementById('ld-json-faq');
      if (existingFaq) existingFaq.remove();
    };
  }, [content.faq.items]);

  return (
    <div className="page-wrapper contact-page">
      
      {/* Header / Hero Section */}
      <section className="container py-24">
        <ScrollFadeIn className="header-meta-area">
          <span className="hero-badge">{content.hero.eyebrow}</span>
        </ScrollFadeIn>
        <h1 className="hero-title fade-in-up">
          <span className="sr-only">{content.hero.eyebrow} | </span>
          Let's make<br />
          people <span>choose you.</span>
        </h1>
        <ScrollFadeIn className="max-w-xl mt-4" delay={200}>
          <p className="text-lead">
            {content.hero.paragraph}
          </p>
        </ScrollFadeIn>
      </section>

      {/* Main Conversation Split */}
      <section className="border-t border-b bg-secondary-theme">
        <div className="container py-32 split-grid">
          
          {/* Reach Us / Info Area */}
          <div className="split-left contact-info-column">
            <span className="section-label">01 / Assets</span>
            <h2 className="split-headline" style={{ marginBottom: 'var(--space-8)' }}>{content.info.heading}</h2>
            <p className="text-secondary" style={{ fontSize: 'var(--font-sm)', marginBottom: 'var(--space-8)' }}>
              {content.info.paragraph}
            </p>
            
            <div className="contact-info-blocks">
              <div className="info-block">
                <Mail size={18} className="info-icon" />
                <div>
                  <span className="info-title">Email Us</span>
                  <span className="info-detail">{content.info.email}</span>
                </div>
              </div>

              <div className="info-block">
                <MapPin size={18} className="info-icon" />
                <div>
                  <span className="info-title">Where we operate</span>
                  <span className="info-detail">{content.info.office}</span>
                </div>
              </div>

              <div className="info-block">
                <Clock size={18} className="info-icon" />
                <div>
                  <span className="info-title">Operational Hours</span>
                  <span className="info-detail">{content.info.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area - Connected to Google Forms via Hidden Iframe */}
          <div className="split-right">
            <ScrollFadeIn className="contact-form-card">
              {isSubmitted ? (
                <div className="form-success-state">
                  <CheckCircle size={48} className="success-icon" style={{ color: 'var(--brand-accent)' }} />
                  <h3 className="success-title">Briefing Requested</h3>
                  <p className="success-text">
                    Thank you, {formData.name}. We have logged your request directly into our system. Our strategy advisors will review your company outline and contact you at {formData.email} to coordinate our strategy briefing.
                  </p>
                  <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', company: '', phone: '', industry: '', constraint: '', message: '' }); }}>
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form 
                  onSubmit={handleFormSubmit}
                  className="briefing-form"
                >
                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="name" className="field-label">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="entry.910564968" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} 
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-field">
                      <label htmlFor="email" className="field-label">Business Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="entry.412218000" 
                        required 
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email} 
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} 
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="company" className="field-label">Company Name *</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="entry.734640528" 
                        required 
                        value={formData.company} 
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))} 
                        placeholder="Acme Corp"
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone" className="field-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="entry.1833853541"
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))} 
                        placeholder="+91 77722 33355"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="industry" className="field-label">Industry</label>
                      <select 
                        id="industry" 
                        name="entry.93694989" 
                        value={formData.industry} 
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select Industry...</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Retail">Retail</option>
                        <option value="PRO Services">PRO Services</option>
                        <option value="Start ups">Start ups</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Ecommerce">Ecommerce</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="constraint" className="field-label">How can we help you</label>
                      <select 
                        id="constraint" 
                        name="entry.1934251866" 
                        value={formData.constraint} 
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select Constraint...</option>
                        <option value="Build Customer Trust">Build Customer Trust</option>
                        <option value="Brand Positioning">Brand Positioning</option>
                        <option value="CRO">CRO</option>
                        <option value="Data">Data</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="field-label">Brief Description of Project *</label>
                    <textarea 
                      id="message" 
                      name="entry.1634060792" 
                      rows={5} 
                      required
                      value={formData.message} 
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} 
                      placeholder="Tell us about your conversion pathways and branding objectives..."
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-submit-row">
                    <Button 
                      type="submit" 
                      variant="solid" 
                      disabled={isSubmitting || !isFormComplete} 
                      icon={isSubmitting ? undefined : <ArrowRight size={16} />}
                      className="form-submit-btn"
                    >
                      {isSubmitting ? 'Submitting Details...' : 'Request Strategic Briefing'}
                    </Button>
                  </div>
                </form>
              )}
            </ScrollFadeIn>
            
            {/* Hidden Iframe to prevent redirect on form submit */}
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: 'none' }} 
              onLoad={handleIframeLoad}
              title="Form Submission Target"
            ></iframe>
          </div>

        </div>
      </section>

      {/* Onboarding Process Section */}
      <section className="container py-32" aria-label="Onboarding Process">
        <div className="split-grid">
          <div className="split-left">
            <span className="section-label">02 / Workflow</span>
            <h2 className="split-headline">{content.onboarding.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.onboarding.paragraph}
            </p>
          </div>
          <div className="split-right">
            <div className="problem-points-stack">
              {content.onboarding.steps.map((step, index) => (
                <ScrollFadeIn key={step.stage} className="problem-item-wrapper" delay={index * 100}>
                  {index > 0 && <div className="problem-divider" style={{ margin: 'var(--space-4) 0' }}></div>}
                  <div className="problem-item">
                    <span className="problem-num">{index + 1}</span>
                    <div className="problem-desc">
                      <h3 className="problem-title" style={{ fontSize: 'var(--font-md)' }}>{step.stage}</h3>
                      <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Panel */}
      <section className="border-t border-b bg-secondary-theme" aria-label="FAQ">
        <div className="container py-32 split-grid">
          <div className="split-left">
            <span className="section-label">03 / Answers</span>
            <h2 className="split-headline">{content.faq.heading}</h2>
          </div>
          <div className="split-right">
            <ScrollFadeIn>
              <Accordion items={[...content.faq.items]} />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Final Converter */}
      <section className="container py-32 text-center" aria-label="Closing CTA">
        <ScrollFadeIn className="conversion-cta-block">
          <span className="cta-small-label">Schedule Call</span>
          <h2 className="cta-large-title">{content.lasts.heading}</h2>
          <p className="cta-description max-w-xl mx-auto" style={{ marginBottom: 'var(--space-4)' }}>
            {content.lasts.paragraph}
          </p>
          <p className="text-secondary" style={{ fontSize: 'var(--font-sm)', marginBottom: 'var(--space-8)' }}>
            {content.lasts.closing}
          </p>
          <div className="cta-action-wrapper" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="solid" icon={<ArrowRight size={16} />}>
                {content.lasts.primaryCta}
              </Button>
            </a>
          </div>
        </ScrollFadeIn>
      </section>

    </div>
  );
}
export default Contact;
