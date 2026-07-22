import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRAND_CONTENT } from '../constants/content';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../utils/seo';
import { Button } from '../components/Button';
import { Timeline } from '../components/Timeline';
import { ScrollFadeIn, ScrollRevealText } from '../components/ScrollReveal';

export function Methodologies() {
  useSEO({
    title: 'Operating Methodologies',
    description: BRAND_CONTENT.methodologiesPage.hero.paragraph,
    canonical: 'https://marketerscafe.net/methodologies',
  });

  const content = BRAND_CONTENT.methodologiesPage;

  const workflowSteps = [
    { stage: 'Understand', title: 'Learn the business', description: 'Understand customers, competitors, and the market landscape to identify opportunities.' },
    { stage: 'Strategise', title: 'Develop solutions', description: 'Align every growth strategy directly with concrete commercial objectives.' },
    { stage: 'Build', title: 'Create assets', description: 'Build branding guidelines, performance websites, and marketing campaigns.' },
    { stage: 'Measure', title: 'Monitor outcomes', description: 'Log performance data using GA4 and dashboards to track absolute results.' },
    { stage: 'Improve', title: 'Optimise loops', description: 'Continuously adjust and refine initiatives to strengthen long-term velocity.' }
  ];

  const timelineItems = workflowSteps.map((step) => ({
    stage: step.stage,
    title: step.title,
    description: step.description,
  }));

  return (
    <div className="page-wrapper methodologies-page">
      
      {/* Page Header */}
      <section className="container py-24">
        <ScrollFadeIn className="header-meta-area">
          <span className="hero-badge">{content.hero.eyebrow}</span>
        </ScrollFadeIn>
        <h1 className="hero-title fade-in-up">
          <span className="sr-only">How We Work | </span>
          Methodologies
        </h1>
        <ScrollFadeIn className="max-w-xl mt-4" delay={200}>
          <p className="text-lead">
            {content.hero.paragraph}
          </p>
          <div className="hero-action-row" style={{ marginTop: 'var(--space-6)' }}>
            <Link to={ROUTES.CONTACT}>
              <Button variant="solid" icon={<ArrowRight size={16} />}>
                {content.hero.primaryCta}
              </Button>
            </Link>
            <Link to={ROUTES.SOLUTIONS}>
              <Button variant="outline">{content.hero.secondaryCta}</Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

      {/* Our Approach Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Our Approach">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">01 / Process</span>
            <h2 className="split-headline">{content.approach.heading}</h2>
          </div>
          <div className="split-right">
            <p className="text-lead" style={{ marginBottom: 'var(--space-4)' }}>
              {content.approach.paragraph}
            </p>
            <ScrollRevealText 
              text={content.approach.supporting} 
              className="text-secondary"
            />
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="container py-24 split-grid" aria-label="Our Philosophy">
        <div className="split-left">
          <span className="section-label">02 / Principle</span>
          <h2 className="split-headline">{content.philosophy.heading}</h2>
        </div>
        <div className="split-right">
          <p className="text-lead" style={{ marginBottom: 'var(--space-4)' }}>
            {content.philosophy.paragraph}
          </p>
          <ScrollRevealText 
            text={content.philosophy.supporting} 
            className="text-secondary"
          />
        </div>
      </section>

      {/* Our Operating Principles Explained */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Operating Principles">
        <div className="container py-32 split-grid">
          <div className="split-left">
            <span className="section-label">03 / Principles</span>
            <h2 className="split-headline">{content.principlesExplained.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.principlesExplained.paragraph}
            </p>
          </div>
          <div className="split-right">
            <div className="problem-points-stack">
              {content.principlesExplained.items.map((princ, index) => (
                <ScrollFadeIn key={princ.title} className="problem-item-wrapper" delay={index * 100}>
                  {index > 0 && <div className="problem-divider" style={{ margin: 'var(--space-6) 0' }}></div>}
                  <div className="problem-item">
                    <span className="problem-num">{index + 1}</span>
                    <div className="problem-desc">
                      <h3 className="problem-title" style={{ fontSize: 'var(--font-md)' }}>{princ.title}</h3>
                      <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                        {princ.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Methodologies */}
      <section className="container py-32" aria-label="Core Methodologies">
        <div className="split-grid">
          <div className="split-left">
            <span className="section-label">04 / Discipline</span>
            <h2 className="split-headline">{content.core.heading}</h2>
          </div>
          <div className="split-right">
            <div className="problem-points-stack">
              {content.core.items.map((item, index) => (
                <ScrollFadeIn key={item.title} className="problem-item-wrapper" delay={index * 100}>
                  {index > 0 && <div className="problem-divider" style={{ margin: 'var(--space-6) 0' }}></div>}
                  <div className="problem-item">
                    <span className="problem-num">0{index + 1}</span>
                    <div className="problem-desc">
                      <h3 className="problem-title" style={{ fontSize: 'var(--font-md)' }}>{item.title}</h3>
                      <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Workflow / Connected System */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Workflow">
        <div className="container py-32 split-grid">
          <div className="split-left">
            <span className="section-label">05 / Workflow</span>
            <h2 className="split-headline">{content.workflow.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.workflow.paragraph}
            </p>
          </div>
          <div className="split-right">
            <ScrollFadeIn>
              <Timeline items={timelineItems} />
            </ScrollFadeIn>
            <div className="border-all py-6 mt-8" style={{ borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', backgroundColor: 'var(--bg-primary)', borderColor: 'var(--brand-accent)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {content.workflow.flowMatrix}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcome */}
      <section className="container py-24 split-grid" aria-label="Outcomes">
        <div className="split-left">
          <span className="section-label">06 / Outcomes</span>
          <h2 className="split-headline">{content.expectedOutcome.heading}</h2>
        </div>
        <div className="split-right">
          <ScrollRevealText 
            text={content.expectedOutcome.paragraph} 
            className="text-lead"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-b bg-secondary-theme py-32 text-center" aria-label="CTA">
        <div className="container">
          <ScrollFadeIn className="conversion-cta-block">
            <span className="cta-small-label">Build With Purpose</span>
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
        </div>
      </section>

    </div>
  );
}
export default Methodologies;
