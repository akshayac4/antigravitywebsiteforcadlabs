import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Global Automotive Dealership CRM",
      category: "Salesforce CRM",
      description: "Implemented a full-scale Salesforce solution for a network of 50+ automotive dealerships, streamlining their sales pipeline and service appointment tracking.",
      outcome: "Increased sales conversion by 25% and reduced service wait times by 40%.",
      imagePlaceholder: "linear-gradient(135deg, #00A1E0 0%, #005A80 100%)"
    },
    {
      id: 2,
      title: "Manufacturing ERP Overhaul",
      category: "Odoo ERP",
      description: "Migrated a legacy manufacturing system to a unified Odoo environment, integrating inventory management, accounting, and shop-floor operations.",
      outcome: "Achieved 99.9% inventory accuracy and reduced operational costs by 15%.",
      imagePlaceholder: "linear-gradient(135deg, #714B67 0%, #3A2635 100%)"
    },
    {
      id: 3,
      title: "Healthcare Patient Portal Integration",
      category: "Salesforce Health Cloud",
      description: "Developed a secure, HIPAA-compliant patient portal using Salesforce Health Cloud, allowing patients to schedule appointments and view medical records.",
      outcome: "Improved patient engagement scores by 60%.",
      imagePlaceholder: "linear-gradient(135deg, #4F46E5 0%, #29247A 100%)"
    },
    {
      id: 4,
      title: "E-Commerce Inventory Automation",
      category: "Odoo Integration",
      description: "Connected a high-volume Shopify storefront with Odoo ERP for real-time inventory syncing and automated purchase order generation.",
      outcome: "Eliminated stockouts during peak holiday seasons.",
      imagePlaceholder: "linear-gradient(135deg, #06B6D4 0%, #036575 100%)"
    }
  ];

  return (
    <div className="projects-page container" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
      <div className="page-header text-center animate-fade-in" style={{ marginBottom: '4rem' }}>
        <h1 className="text-4xl font-bold mb-4">Completed Projects & Case Studies</h1>
        <p className="text-muted max-w-2xl mx-auto">
          Explore how we've helped businesses across various industries transform their 
          operations through intelligent CRM and ERP solutions.
        </p>
      </div>

      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={project.id} className={`project-card glass-panel animate-fade-in delay-${(index % 3) * 100}`} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div className="project-image-placeholder" style={{ height: '200px', background: project.imagePlaceholder }}></div>
            <div className="project-content p-6" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="text-primary font-bold text-sm mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted mb-4">{project.description}</p>
              
              <div className="project-outcome mt-auto pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="font-semibold">Key Outcome:</p>
                <p className="text-muted text-sm">{project.outcome}</p>
              </div>
              
              <button className="btn btn-outline mt-4" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read Case Study <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
