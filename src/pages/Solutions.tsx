import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRAND_CONTENT } from '../constants/content';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../utils/seo';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ScrollFadeIn, ScrollRevealText } from '../components/ScrollReveal';

export function Solutions() {
  useSEO({
    title: 'Strategic Growth Solutions',
    description: BRAND_CONTENT.solutionsPage.hero.paragraph,
    canonical: 'https://marketerscafe.net/solutions',
  });

  const content = BRAND_CONTENT.solutionsPage;

  return (
    <div className="page-wrapper solutions-page">
      
      {/* Page Header */}
      <section className="container py-24">
        <ScrollFadeIn className="header-meta-area">
          <span className="hero-badge">{content.hero.eyebrow}</span>
        </ScrollFadeIn>
        <h1 className="hero-title fade-in-up">
          <span className="sr-only">Our Solutions | </span>
          Solutions Built<br />
          Around <span>Growth.</span>
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
            <Link to={ROUTES.TBR_FRAMEWORK}>
              <Button variant="outline">{content.hero.secondaryCta}</Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

      {/* Introduction Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Overview">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">01 / Introduction</span>
            <h2 className="split-headline">{content.introduction.heading}</h2>
          </div>
          <div className="split-right">
            <p className="text-lead" style={{ marginBottom: 'var(--space-4)' }}>
              {content.introduction.paragraph}
            </p>
            <p className="text-secondary" style={{ marginBottom: 'var(--space-6)', lineHeight: 'var(--lh-relaxed)' }}>
              {content.introduction.supportingParagraph}
            </p>
            <div className="border-all" style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', borderColor: 'var(--brand-accent)' }}>
              <p style={{ color: 'var(--text-primary)', fontWeight: 'var(--weight-semibold)', marginBottom: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--font-xs)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {content.introduction.corePillarsCallout}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 01 | TRUST SOLUTIONS */}
      <section className="container py-32" aria-label="Trust Solutions">
        <div className="framework-header">
          <div className="header-meta">
            <span className="section-label">Pillar 01 / Credibility</span>
            <h2>{content.trustSolutions.heading}</h2>
            <p className="max-w-xl text-secondary mt-2" style={{ fontSize: 'var(--font-sm)' }}>
              {content.trustSolutions.paragraph}
            </p>
          </div>
          <p className="framework-header-desc text-lead">
            {content.trustSolutions.subParagraph}
          </p>
        </div>

        <div className="solutions-grid">
          {content.trustSolutions.items.map((sol, index) => (
            <ScrollFadeIn key={sol.id} className="solution-card-holder" delay={index * 100}>
              <Card 
                title={sol.title} 
                description={sol.description}
                number={`T-SOL-0${index + 1}`}
                hoverEffect={true}
              >
                <div className="solution-deliverable-list">
                  {sol.deliverables.map((deliv, i) => (
                    <span key={i} className="solution-deliverable-tag">{deliv}</span>
                  ))}
                </div>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* PILLAR 02 | BRAND SOLUTIONS */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Brand Solutions">
        <div className="container py-32">
          <div className="framework-header">
            <div className="header-meta">
              <span className="section-label">Pillar 02 / Identity</span>
              <h2>{content.brandSolutions.heading}</h2>
            </div>
            <p className="framework-header-desc text-lead">
              {content.brandSolutions.paragraph}
            </p>
          </div>

          <div className="solutions-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
            {content.brandSolutions.items.map((sol, index) => (
              <ScrollFadeIn key={sol.id} className="solution-card-holder" delay={index * 100}>
                <Card 
                  title={sol.title} 
                  description={sol.description}
                  number={`B-SOL-0${index + 1}`}
                  hoverEffect={true}
                >
                  <div className="solution-deliverable-list">
                    {sol.deliverables.map((deliv, i) => (
                      <span key={i} className="solution-deliverable-tag">{deliv}</span>
                    ))}
                  </div>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PILLAR 03 | REVENUE SOLUTIONS */}
      <section className="container py-32" aria-label="Revenue Solutions">
        <div className="framework-header">
          <div className="header-meta">
            <span className="section-label">Pillar 03 / Capture</span>
            <h2>{content.revenueSolutions.heading}</h2>
          </div>
          <p className="framework-header-desc text-lead">
            {content.revenueSolutions.paragraph}
          </p>
        </div>

        <div className="solutions-grid">
          {content.revenueSolutions.items.map((sol, index) => (
            <ScrollFadeIn key={sol.id} className="solution-card-holder" delay={index * 100}>
              <Card 
                title={sol.title} 
                description={sol.description}
                number={`R-SOL-0${index + 1}`}
                hoverEffect={true}
              >
                {(sol as any).platforms && (
                  <div className="solution-deliverable-list" style={{ marginBottom: 'var(--space-2)' }}>
                    {(sol as any).platforms.map((plat: string) => (
                      <span key={plat} className="solution-deliverable-tag" style={{ borderColor: 'var(--brand-accent)', color: 'var(--brand-accent)' }}>
                        {plat}
                      </span>
                    ))}
                  </div>
                )}
                <div className="solution-deliverable-list">
                  {sol.deliverables.map((deliv, i) => (
                    <span key={i} className="solution-deliverable-tag">{deliv}</span>
                  ))}
                </div>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Why Our Solutions Work */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Solutions Integration">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">02 / System</span>
            <h2 className="split-headline">{content.whyWork.heading}</h2>
          </div>
          <div className="split-right">
            <p className="text-lead" style={{ marginBottom: 'var(--space-4)' }}>
              {content.whyWork.paragraph}
            </p>
            <ScrollRevealText 
              text={content.whyWork.matrix} 
              className="text-secondary"
            />
          </div>
        </div>
      </section>

      {/* Industries Extra Cap */}
      <section className="container py-32" aria-label="Industries">
        <div className="split-grid">
          <div className="split-left">
            <span className="section-label">03 / Sectors</span>
            <h2 className="split-headline">{content.industriesExtra.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.industriesExtra.paragraph}
            </p>
          </div>
          <div className="split-right">
            <ScrollFadeIn className="solution-deliverable-list">
              {content.industriesExtra.industries.map((ind) => (
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

      {/* Our Approach Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Our Approach">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">04 / Philosophy</span>
            <h2 className="split-headline">{content.approach.heading}</h2>
          </div>
          <div className="split-right">
            <p className="text-lead" style={{ marginBottom: 'var(--space-4)' }}>
              {content.approach.paragraph}
            </p>
            <ScrollRevealText 
              text={content.approach.closingInsight} 
              className="text-secondary"
            />
          </div>
        </div>
      </section>

      {/* Final Solutions CTA Section */}
      <section className="container py-32 text-center" aria-label="CTA">
        <ScrollFadeIn className="conversion-cta-block">
          <span className="cta-small-label">Grow Safely</span>
          <h2 className="cta-large-title">{content.readyToGrow.heading}</h2>
          <p className="cta-description max-w-xl mx-auto">
            {content.readyToGrow.paragraph}
          </p>
          <div className="cta-action-wrapper" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
            <Link to={ROUTES.CONTACT}>
              <Button variant="solid" icon={<ArrowRight size={16} />}>
                {content.readyToGrow.primaryCta}
              </Button>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <Button variant="outline">{content.readyToGrow.secondaryCta}</Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

    </div>
  );
}
export default Solutions;
