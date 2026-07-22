import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';
import { BRAND_CONTENT } from '../constants/content';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../utils/seo';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ScrollRevealText, ScrollFadeIn } from '../components/ScrollReveal';
import './Pages.css';

export function Home() {
  useSEO({
    title: 'Building Brands People Choose',
    description: BRAND_CONTENT.home.hero.paragraph,
    canonical: 'https://marketerscafe.net/',
  });

  const content = BRAND_CONTENT.home;

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck size={20} className="pillar-icon-svg" />;
      case 1:
        return <Cpu size={20} className="pillar-icon-svg" />;
      case 2:
        return <TrendingUp size={20} className="pillar-icon-svg" />;
      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper home-page">
      
      {/* Hero Section */}
      <section className="hero-section container" aria-label="Introduction">
        <ScrollFadeIn className="hero-meta-area" delay={100}>
          <span className="hero-badge">{content.hero.eyebrow}</span>
        </ScrollFadeIn>
        
        <div className="hero-text-block">
          <h1 className="hero-title fade-in-up">
            <span className="sr-only">{content.hero.eyebrow} | </span>
            Building Brands<br />
            People <span>Choose.</span>
          </h1>
        </div>

        <ScrollFadeIn className="hero-description-block" delay={300}>
          <p className="hero-description text-lead">
            {content.hero.paragraph}
          </p>
          <div className="hero-action-row">
            <Link to={ROUTES.CONTACT}>
              <Button variant="solid" icon={<ArrowRight size={16} />}>
                {content.hero.primaryCta}
              </Button>
            </Link>
            <Link to={ROUTES.SOLUTIONS} className="hero-secondary-action">
              <Button variant="outline">{content.hero.secondaryCta}</Button>
            </Link>
          </div>
        </ScrollFadeIn>

        <div className="hero-visual-mesh">
          <div className="mesh-line-vertical"></div>
          <div className="mesh-line-horizontal"></div>
        </div>
      </section>

      {/* Beyond Marketing / Who We Are Section */}
      <section className="section-divider border-t border-b" aria-label="Who We Are">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">01 / Concept</span>
            <h2 className="split-headline">{content.beyondMarketing.heading}</h2>
          </div>
          <div className="split-right">
            <ScrollRevealText 
              text={content.beyondMarketing.paragraph} 
              className="text-lead text-revealing"
            />
          </div>
        </div>
      </section>

      {/* Our Solutions / What We Do Section */}
      <section className="container py-32" aria-label="Solutions">
        <div className="section-header-row">
          <div>
            <span className="section-label">02 / Capabilities</span>
            <h2>{content.ourSolutions.heading}</h2>
            <p className="max-w-xl text-secondary mt-2" style={{ fontSize: 'var(--font-sm)' }}>
              {content.ourSolutions.paragraph}
            </p>
          </div>
          <Link to={ROUTES.SOLUTIONS} className="desktop-only-link link-with-arrow">
            Explore All Solutions <ArrowRight size={16} />
          </Link>
        </div>

        <div className="solutions-grid">
          {content.ourSolutions.cards.map((sol, index) => (
            <ScrollFadeIn key={sol.title} className="solution-card-holder" delay={index * 100}>
              <Card 
                title={sol.title} 
                description={sol.description}
                number={`SOL-0${index + 1}`}
                hoverEffect={true}
              />
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Why Marketers Cafe / Why Choose Us Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Why Choose Us">
        <div className="container py-32">
          <div className="framework-header">
            <div className="header-meta">
              <span className="section-label">03 / Distinction</span>
              <h2>{content.whyChooseUs.heading}</h2>
            </div>
            <p className="framework-header-desc text-lead">
              {content.whyChooseUs.paragraph}
            </p>
          </div>

          <div className="solutions-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {content.whyChooseUs.cards.map((card, index) => (
              <ScrollFadeIn key={card.title} className="solution-card-holder" delay={index * 100}>
                <Card 
                  title={card.title} 
                  description={card.description}
                  number={`WHY-0${index + 1}`}
                  hoverEffect={true}
                />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TBR Framework Section */}
      <section className="container py-32" aria-label="TBR Framework">
        <div className="framework-header">
          <div className="header-meta">
            <span className="section-label">04 / Architecture</span>
            <h2>{content.tbrFramework.heading}</h2>
          </div>
          <p className="framework-header-desc text-lead">
            {content.tbrFramework.paragraph}
          </p>
        </div>

        <div className="framework-pillars-grid">
          {content.tbrFramework.pillars.map((pillar, index) => (
            <ScrollFadeIn key={pillar.title} className="pillar-card-wrapper" delay={index * 150}>
              <Card 
                title={pillar.title} 
                number={`0${index + 1}`}
                hoverEffect={true}
              >
                <div className="pillar-inner-content">
                  <div className="pillar-icon-area">
                    {getPillarIcon(index)}
                  </div>
                  <p className="pillar-details">{pillar.description}</p>
                </div>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>

        <div className="framework-footer-cta">
          <Link to={ROUTES.TBR_FRAMEWORK} className="link-with-arrow">
            {content.tbrFramework.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* How We Think / Operating Principles Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Operating Principles">
        <div className="container py-32 split-grid">
          <div className="split-left">
            <span className="section-label">05 / Philosophy</span>
            <h2 className="split-headline">{content.howWeThink.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.howWeThink.paragraph}
            </p>
          </div>
          <div className="split-right">
            <div className="problem-points-stack">
              {content.howWeThink.principles.map((principle, index) => (
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

      {/* Who We Serve / Industries Section */}
      <section className="container py-32" aria-label="Industries">
        <div className="split-grid">
          <div className="split-left">
            <span className="section-label">06 / Sectors</span>
            <h2 className="split-headline">{content.whoWeServe.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.whoWeServe.paragraph}
            </p>
          </div>
          <div className="split-right">
            <ScrollFadeIn className="solution-deliverable-list">
              {content.whoWeServe.industries.map((ind) => (
                <span 
                  key={ind} 
                  className="solution-deliverable-tag" 
                  style={{ padding: '0.5rem 1rem', fontSize: 'var(--font-xs)', borderRadius: 'var(--radius-md)' }}
                >
                  {ind}
                </span>
              ))}
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* How We Work / Process Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Process">
        <div className="container py-32 split-grid">
          <div className="split-left">
            <span className="section-label">07 / Execution</span>
            <h2 className="split-headline">{content.howWeWork.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.howWeWork.paragraph}
            </p>
          </div>
          <div className="split-right">
            <div className="problem-points-stack">
              {content.howWeWork.steps.map((step, index) => (
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

      {/* Final Home CTA Section */}
      <section className="container py-32 text-center" aria-label="Contact Call-to-Action">
        <ScrollFadeIn className="conversion-cta-block">
          <span className="cta-small-label">Build Enduring Assets</span>
          <h2 className="cta-large-title">{content.readyToBuild.heading}</h2>
          <p className="cta-description max-w-xl mx-auto">
            {content.readyToBuild.paragraph}
          </p>
          <div className="cta-action-wrapper" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
            <Link to={ROUTES.CONTACT}>
              <Button variant="solid" icon={<ArrowRight size={16} />}>
                {content.readyToBuild.primaryCta}
              </Button>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <Button variant="outline">{content.readyToBuild.secondaryCta}</Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </section>
      
    </div>
  );
}
export default Home;
