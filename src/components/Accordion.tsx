import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-group">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span className="accordion-question">{item.question}</span>
              <ChevronDown className="accordion-icon" />
            </button>
            <div 
              className="accordion-content" 
              style={{ 
                maxHeight: isOpen ? '400px' : '0',
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden'
              }}
            >
              <div className="accordion-content-inner">
                <p className="accordion-answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Accordion;
