import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRAND_CONTENT } from '../constants/content';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../utils/seo';
import { Button } from '../components/Button';
import { ScrollFadeIn, ScrollRevealText } from '../components/ScrollReveal';

export function About() {
  useSEO({
    title: 'About the Partner',
    description: BRAND_CONTENT.about.philosophy.paragraph,
    canonical: 'https://marketerscafe.net/about',
  });

  const content = BRAND_CONTENT.about;
  const principles = BRAND_CONTENT.home.howWeThink.principles;

  return (
    <div className="page-wrapper about-page">
      
      {/* Page Header */}
      <section className="container py-24">
        <ScrollFadeIn className="header-meta-area">
          <span className="hero-badge">{content.hero.eyebrow}</span>
        </ScrollFadeIn>
        <h1 className="hero-title fade-in-up">
          <span className="sr-only">About Marketers Cafe | </span>
          Building Brands<br />
          People <span>Choose.</span>
        </h1>
        <ScrollFadeIn className="max-w-xl mt-4" delay={200}>
          <p className="text-lead">
            {content.hero.paragraph}
          </p>
        </ScrollFadeIn>
      </section>

      {/* Purpose Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Our Purpose">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">01 / Objective</span>
            <h2 className="split-headline">{content.purpose.heading}</h2>
          </div>
          <div className="split-right">
            <ScrollRevealText 
              text={content.purpose.paragraph} 
              className="text-lead"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container py-32" aria-label="Vision & Mission">
        <div className="split-grid">
          <div className="split-left">
            <span className="section-label">02 / Focus</span>
            <h2 className="split-headline">Vision & Mission</h2>
          </div>
          <div className="split-right">
            <div className="problem-points-stack">
              <div className="problem-item">
                <span className="problem-num">01</span>
                <div className="problem-desc">
                  <h3 className="problem-title">{content.vision.heading}</h3>
                  <p className="text-lead" style={{ fontSize: 'var(--font-md)' }}>
                    {content.vision.paragraph}
                  </p>
                </div>
              </div>
              <div className="problem-divider"></div>
              <div className="problem-item">
                <span className="problem-num">02</span>
                <div className="problem-desc">
                  <h3 className="problem-title">{content.mission.heading}</h3>
                  <p className="text-lead" style={{ fontSize: 'var(--font-md)' }}>
                    {content.mission.paragraph}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Philosophy">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">03 / Concept</span>
            <h2 className="split-headline">{content.philosophy.heading}</h2>
          </div>
          <div className="split-right">
            <ScrollRevealText 
              text={content.philosophy.paragraph} 
              className="text-lead"
            />
          </div>
        </div>
      </section>

      {/* Operating Principles (Visual Embed) */}
      <section className="container py-32" aria-label="Operating Principles">
        <div className="split-grid">
          <div className="split-left">
            <span className="section-label">04 / Discipline</span>
            <h2 className="split-headline">Operating Principles</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              These principles guide every recommendation, strategy, and campaign we deliver.
            </p>
          </div>
          <div className="split-right">
            <div className="problem-points-stack">
              {principles.map((principle, index) => (
                <ScrollFadeIn key={index} className="problem-item-wrapper" delay={index * 100}>
                  {index > 0 && <div className="problem-divider" style={{ margin: 'var(--space-4) 0' }}></div>}
                  <div className="problem-item">
                    <span className="problem-num">{index + 1}</span>
                    <div className="problem-desc" style={{ display: 'flex', alignItems: 'center' }}>
                      <p className="text-lead" style={{ fontSize: 'var(--font-md)', color: 'var(--text-primary)', margin: 0 }}>
                        {principle}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Belief / Why We Exist */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Core Belief">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">05 / Belief</span>
            <h2 className="split-headline">{content.coreBelief.heading}</h2>
          </div>
          <div className="split-right">
            <ScrollRevealText 
              text={content.coreBelief.paragraph} 
              className="text-lead"
            />
          </div>
        </div>
      </section>

      {/* Final About CTA Section */}
      <section className="container py-32 text-center" aria-label="Collaborate CTA">
        <ScrollFadeIn className="conversion-cta-block">
          <span className="cta-small-label">{content.buildBetter.heading}</span>
          <h2 className="cta-large-title">{content.buildBetter.heading}</h2>
          <p className="cta-description max-w-xl mx-auto">
            {content.buildBetter.paragraph}
          </p>
          <div className="cta-action-wrapper" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
            <Link to={ROUTES.CONTACT}>
              <Button variant="solid" icon={<ArrowRight size={16} />}>
                {content.buildBetter.cta}
              </Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

    </div>
  );
}
export default About;
