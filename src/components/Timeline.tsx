import './Timeline.css';

interface TimelineItem {
  stage: string;
  title: string;
  subtitle?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-line-indicator"></div>
      <div className="timeline-items-grid">
        {items.map((item, index) => (
          <div key={index} className="timeline-row">
            <div className="timeline-left-column">
              <div className="timeline-node">
                <span className="timeline-node-value">{item.stage}</span>
              </div>
            </div>
            <div className="timeline-right-column">
              <div className="timeline-details-card">
                {item.subtitle && <span className="timeline-label">{item.subtitle}</span>}
                <h3 className="timeline-headline">{item.title}</h3>
                <p className="timeline-body">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Timeline;
