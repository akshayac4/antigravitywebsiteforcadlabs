import { 
  Cloud, Database, CheckCircle, Code, Workflow, BarChart, 
  Layers, Settings, Zap, RefreshCw, PhoneCall, ArrowRight
} from 'lucide-react';

export default function Services() {
  return (
    <div className="services-page container" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
      <div className="page-header text-center animate-fade-in" style={{ marginBottom: '4rem' }}>
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-muted max-w-2xl mx-auto">
          We provide comprehensive consulting, development, and implementation services 
          for industry-leading CRM and ERP platforms.
        </p>
      </div>

      {/* Salesforce Detailed Section */}
      <section className="service-detail-section mb-16">
        <div className="flex-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Cloud size={40} color="var(--primary)" />
          <h2 className="text-3xl font-bold">Salesforce CRM Services</h2>
        </div>
        
        <div className="grid-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle size={20} className="text-primary"/> Salesforce Consulting</h3>
            <p className="text-muted text-sm">Strategic guidance on cloud selection, mapping business processes, and blueprinting roadmaps to optimize Salesforce ROI.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Code size={20} className="text-primary"/> Development & Customization</h3>
            <p className="text-muted text-sm">Tailoring your CRM with custom Apex code, Lightning Web Components (LWC), custom objects, validation rules, and automation flows.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Workflow size={20} className="text-primary"/> Cloud Implementation</h3>
            <p className="text-muted text-sm">End-to-end setup, data models, configuration, and adoption for Sales Cloud, Service Cloud, Marketing Cloud, and Revenue (CPQ) Cloud.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Layers size={20} className="text-primary"/> AppExchange Development</h3>
            <p className="text-muted text-sm">Designing, engineering, and publishing custom packages on the AppExchange marketplace, ensuring strict security review compliance.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Database size={20} className="text-primary"/> Data Migration Services</h3>
            <p className="text-muted text-sm">Secure extraction, mapping, cleansing, validation, and migration of legacy database records to Salesforce with zero business downtime.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Settings size={20} className="text-primary"/> Support & Maintenance</h3>
            <p className="text-muted text-sm">Proactive system monitoring, security audits, release updates, custom enhancements, and SLA-backed administrative support.</p>
          </div>
        </div>
      </section>

      {/* Odoo Detailed Section */}
      <section className="service-detail-section mb-16">
        <div className="flex-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Database size={40} color="var(--secondary)" />
          <h2 className="text-3xl font-bold">Odoo ERP Services</h2>
        </div>
        
        <div className="grid-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle size={20} className="text-primary"/> Odoo Implementation</h3>
            <p className="text-muted text-sm">Seamless mapping and setup of Odoo modules including Sales, CRM, Inventory, Purchase, Manufacturing (MRP), and Accounting.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Code size={20} className="text-primary"/> Module Customization</h3>
            <p className="text-muted text-sm">Custom Python development to build specialized Odoo apps and modify standard workflows to fit specific company procedures.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Workflow size={20} className="text-primary"/> Integration Services</h3>
            <p className="text-muted text-sm">Connecting Odoo seamlessly with third-party systems, e-commerce stores, payment gateways, and shipping carrier APIs.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Zap size={20} className="text-primary"/> Theme Development</h3>
            <p className="text-muted text-sm">Designing beautiful, fully responsive website themes and optimizing backend Odoo admin UI/UX configurations.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><RefreshCw size={20} className="text-primary"/> Upgrade & Migration</h3>
            <p className="text-muted text-sm">Upgrading legacy Odoo databases and custom scripts to the latest Odoo Enterprise version, preserving data integrity.</p>
          </div>
          <div className="glass-panel p-6" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><BarChart size={20} className="text-primary"/> Support & Tuning</h3>
            <p className="text-muted text-sm">Post-launch employee training, PostgreSQL server query tuning, troubleshooting, and continuous optimization support.</p>
          </div>
        </div>
      </section>

      {/* CTA Consultation Section */}
      <section className="cta-section glass-panel text-center animate-fade-in" style={{ padding: '3.5rem 2rem', marginTop: '6rem' }}>
        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'inline-block' }}>
          <PhoneCall size={48} />
        </div>
        <h2 className="text-3xl font-bold mb-3">Ready to Accelerate Your Operations?</h2>
        <p className="text-muted max-w-xl mx-auto mb-6">
          Schedule a free diagnostic call with our certified cloud consultants. Let us map out a customized Salesforce or Odoo strategy that drives scalability and growth.
        </p>
        <a href="#contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Get Free Consultation <ArrowRight size={18} />
        </a>
      </section>
    </div>
  );
}
