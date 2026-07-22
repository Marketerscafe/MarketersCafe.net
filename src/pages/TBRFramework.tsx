import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';
import { BRAND_CONTENT } from '../constants/content';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../utils/seo';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ScrollFadeIn, ScrollRevealText } from '../components/ScrollReveal';

export function TBRFramework() {
  useSEO({
    title: 'The TBR Framework™',
    description: BRAND_CONTENT.tbrPage.hero.paragraph,
    canonical: 'https://marketerscafe.net/tbr-framework',
  });

  const content = BRAND_CONTENT.tbrPage;
  const principles = BRAND_CONTENT.home.howWeThink.principles;

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'trust':
        return <ShieldCheck size={28} />;
      case 'brand':
        return <Cpu size={28} />;
      case 'revenue':
        return <TrendingUp size={28} />;
      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper tbr-page">
      
      {/* Page Header */}
      <section className="container py-24">
        <ScrollFadeIn className="header-meta-area">
          <span className="hero-badge">{content.hero.eyebrow}</span>
        </ScrollFadeIn>
        <h1 className="hero-title fade-in-up">
          <span className="sr-only">Our Framework | </span>
          Trust. Brand.<br />
          <span>Revenue.</span>
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

      {/* Why TBR? Section */}
      <section className="border-t border-b bg-secondary-theme" aria-label="Why TBR">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">01 / Concept</span>
            <h2 className="split-headline">{content.whyTbr.heading}</h2>
          </div>
          <div className="split-right">
            <p className="text-lead" style={{ marginBottom: 'var(--space-4)' }}>
              {content.whyTbr.paragraph}
            </p>
            <ScrollRevealText 
              text={content.whyTbr.systemPillars} 
              className="text-secondary"
            />
          </div>
        </div>
      </section>

      {/* The Three Pillars in Detail */}
      <section className="container py-32" aria-label="Pillars In Detail">
        <div className="framework-pillars-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {content.pillarsDetail.map((p, index) => (
            <ScrollFadeIn key={p.id} className="pillar-detail-card" delay={index * 150}>
              <Card 
                title={p.title} 
                number={`0${index + 1}`}
                hoverEffect={true}
              >
                <div className="pillar-detailed-body" style={{ paddingTop: 'var(--space-6)' }}>
                  <div className="pillar-icon-area" style={{ marginBottom: 'var(--space-4)' }}>
                    {getPillarIcon(p.id)}
                  </div>
                  <h3 className="problem-title" style={{ fontSize: 'var(--font-md)', marginBottom: 'var(--space-2)' }}>
                    {p.heading}
                  </h3>
                  <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {p.paragraph}
                  </p>
                  <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-4)' }}>
                    {p.supporting}
                  </p>
                  <p style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-6)' }}>
                    {p.closing}
                  </p>
                  <div className="solution-deliverable-list">
                    {p.focus.map((item) => (
                      <span key={item} className="solution-deliverable-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* The TBR Cycle */}
      <section className="border-t border-b bg-secondary-theme" aria-label="The TBR Cycle">
        <div className="container py-24 split-grid">
          <div className="split-left">
            <span className="section-label">02 / Loop</span>
            <h2 className="split-headline">{content.cycle.heading}</h2>
          </div>
          <div className="split-right text-center">
            <div className="border-all py-8" style={{ borderRadius: 'var(--radius-lg)', borderColor: 'var(--brand-accent)', marginBottom: 'var(--space-6)', backgroundColor: 'var(--bg-primary)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-md)', color: 'var(--text-primary)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.05em', margin: 0 }}>
                {content.cycle.flow}
              </p>
            </div>
            <p className="text-lead text-left" style={{ marginBottom: 'var(--space-4)' }}>
              {content.cycle.paragraph}
            </p>
            <p className="text-secondary text-left" style={{ margin: 0 }}>
              {content.cycle.closing}
            </p>
          </div>
        </div>
      </section>

      {/* How We Think / Operating Principles Embed */}
      <section className="container py-32" aria-label="Philosophy">
        <div className="split-grid">
          <div className="split-left">
            <span className="section-label">03 / Principles</span>
            <h2 className="split-headline">{content.closingSummary.heading}</h2>
            <p className="text-secondary mt-4" style={{ fontSize: 'var(--font-sm)' }}>
              {content.closingSummary.paragraph}
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

      {/* CTA Section */}
      <section className="border-t border-b bg-secondary-theme py-32 text-center" aria-label="CTA">
        <div className="container">
          <ScrollFadeIn className="conversion-cta-block">
            <span className="cta-small-label">Build Better</span>
            <h2 className="cta-large-title">{content.closingSummary.heading}</h2>
            <p className="cta-description max-w-xl mx-auto">
              {content.closingSummary.paragraph}
            </p>
            <div className="cta-action-wrapper" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
              <Link to={ROUTES.CONTACT}>
                <Button variant="solid" icon={<ArrowRight size={16} />}>
                  {content.closingSummary.primaryCta}
                </Button>
              </Link>
              <Link to={ROUTES.SOLUTIONS}>
                <Button variant="outline">{content.closingSummary.secondaryCta}</Button>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

    </div>
  );
}
export default TBRFramework;
