import { 
  Cloud, Database, Code, Layers, Settings, CheckCircle, 
  ArrowRight, Award, Briefcase, Users, ShieldCheck, Zap, Workflow, RefreshCw, TrendingUp
} from 'lucide-react';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page animate-fade-in">
      <div className="services-redesign">
        
        {/* Hero Introduction Section */}
        <header className="services-hero">
          <div className="services-badge">Our Services</div>
          <h1>Salesforce & Odoo Solutions That Drive Real Business Impact</h1>
          <p>
            From strategy to support, we help businesses streamline operations, 
            improve customer experiences, and accelerate growth through Salesforce and Odoo.
          </p>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-val">8+</span>
              <span className="trust-label">Years Experience</span>
            </div>
            <div className="trust-item">
              <span className="trust-val">50+</span>
              <span className="trust-label">Successful Projects</span>
            </div>
            <div className="trust-item">
              <span className="trust-val">End-to-End</span>
              <span className="trust-label">Delivery Guarantee</span>
            </div>
            <div className="trust-item">
              <span className="trust-val">Client-First</span>
              <span className="trust-label">Dedicated Solutions</span>
            </div>
          </div>
        </header>

        {/* Salesforce CRM Services Section */}
        <section className="services-brand-section salesforce-theme">
          <div className="services-section-header">
            <div className="section-title-wrap">
              <div className="section-label">Salesforce CRM Services</div>
              <h2>Build stronger customer relationships and streamline operations with the world’s #1 CRM platform</h2>
            </div>
            <a href="#contact" className="btn-section-cta">
              Book a Salesforce Consultation <ArrowRight size={18} />
            </a>
          </div>

          <div className="services-layout-grid">
            {/* Featured Service Card: Cloud Implementation */}
            <div className="service-card-premium service-card-featured">
              <div className="card-top">
                <div className="featured-badge">Most Requested</div>
                <div className="card-icon-wrap">
                  <Cloud size={32} />
                </div>
                <div className="card-content">
                  <h3>Cloud Implementation</h3>
                  <p>
                    End-to-end setup, data models, configuration, and user adoption plans. 
                    We tailor deployment strategies that guarantee clean rollouts and high long-term utilization.
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="tech-tags-list">
                    <span className="tech-tag-pill">Sales Cloud</span>
                    <span className="tech-tag-pill">Service Cloud</span>
                    <span className="tech-tag-pill">Marketing Cloud</span>
                    <span className="tech-tag-pill">Data Cloud</span>
                    <span className="tech-tag-pill">CPQ</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="learn-more-link">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Supporting Salesforce Cards */}
            <div className="supporting-services-grid">
              
              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Users size={24} />
                  </div>
                  <h3>Salesforce Consulting</h3>
                  <p>Strategic guidance on cloud selection, mapping business processes, and blueprinting roadmaps to optimize Salesforce ROI.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Code size={24} />
                  </div>
                  <h3>Development & Customization</h3>
                  <p>Tailoring your CRM with custom Apex code, Lightning Web Components (LWC), custom objects, validation rules, and automation flows.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Layers size={24} />
                  </div>
                  <h3>AppExchange Development</h3>
                  <p>Designing, engineering, and publishing custom packages on the AppExchange marketplace, ensuring strict security review compliance.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Database size={24} />
                  </div>
                  <h3>Data Migration Services</h3>
                  <p>Secure extraction, mapping, cleansing, validation, and migration of legacy database records to Salesforce with zero business downtime.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium service-card-wide">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Settings size={24} />
                  </div>
                  <h3>Support & Maintenance</h3>
                  <p>Proactive system monitoring, security audits, release updates, custom enhancements, and SLA-backed administrative support.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>

          {/* Salesforce Success Snapshot Banner */}
          <div className="success-snapshot-banner">
            <div className="snapshot-content">
              <div className="snapshot-icon">
                <Award size={36} />
              </div>
              <div className="snapshot-info">
                <h4>Success Snapshot</h4>
                <p>“Helped a manufacturing company automate sales processes and improve visibility, resulting in significantly faster operations and better reporting.”</p>
              </div>
            </div>
            <a href="#projects" className="btn-snapshot-cta">
              View Case Study <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Odoo ERP Services Section */}
        <section className="services-brand-section odoo-theme">
          <div className="services-section-header">
            <div className="section-title-wrap">
              <div className="section-label">Odoo ERP Services</div>
              <h2>Comprehensive Odoo solutions to automate operations, reduce costs, and scale business efficiency</h2>
            </div>
            <a href="#contact" className="btn-section-cta">
              Talk to an Odoo Expert <ArrowRight size={18} />
            </a>
          </div>

          <div className="services-layout-grid">
            {/* Featured Service Card: Odoo Implementation */}
            <div className="service-card-premium service-card-featured">
              <div className="card-top">
                <div className="featured-badge">Most Requested</div>
                <div className="card-icon-wrap">
                  <Workflow size={32} />
                </div>
                <div className="card-content">
                  <h3>Odoo Implementation</h3>
                  <p>
                    Seamless mapping and setup of Odoo modules. We construct customized system 
                    architectures that streamline operational tasks and enable clear visibility.
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="tech-tags-list">
                    <span className="tech-tag-pill">Sales</span>
                    <span className="tech-tag-pill">CRM</span>
                    <span className="tech-tag-pill">Inventory</span>
                    <span className="tech-tag-pill">Purchase</span>
                    <span className="tech-tag-pill">Manufacturing</span>
                    <span className="tech-tag-pill">Accounting</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="learn-more-link">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Supporting Odoo Cards */}
            <div className="supporting-services-grid">
              
              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Code size={24} />
                  </div>
                  <h3>Module Customization</h3>
                  <p>Custom Python development to build specialized Odoo apps and modify standard workflows to fit specific company procedures.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Layers size={24} />
                  </div>
                  <h3>Integration Services</h3>
                  <p>Connecting Odoo seamlessly with third-party systems, e-commerce stores, payment gateways, and shipping carrier APIs.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <Zap size={24} />
                  </div>
                  <h3>Theme Development</h3>
                  <p>Designing beautiful, fully responsive website themes and optimizing backend Odoo admin UI/UX configurations.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <RefreshCw size={24} />
                  </div>
                  <h3>Upgrade & Migration</h3>
                  <p>Upgrading legacy Odoo databases and custom scripts to the latest Odoo Enterprise version, preserving data integrity.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              <div className="service-card-premium service-card-wide">
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <TrendingUp size={24} />
                  </div>
                  <h3>Support & Tuning</h3>
                  <p>Post-launch employee training, PostgreSQL server query tuning, troubleshooting, and continuous optimization support.</p>
                </div>
                <a href="#contact" className="learn-more-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>

          {/* Odoo Success Snapshot Banner */}
          <div className="success-snapshot-banner">
            <div className="snapshot-content">
              <div className="snapshot-icon">
                <ShieldCheck size={36} />
              </div>
              <div className="snapshot-info">
                <h4>Success Snapshot</h4>
                <p>“Implemented Odoo for an auto-parts distributor, automating operations and reducing operational effort by nearly 50%.”</p>
              </div>
            </div>
            <a href="#projects" className="btn-snapshot-cta">
              View Case Study <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Final Conversion Section */}
        <section className="conversion-section animate-fade-in">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let’s discuss how Salesforce or Odoo can help your organization achieve its goals.</p>
          <div className="conversion-buttons">
            <a href="#contact" className="btn-conv-primary">
              Schedule a Call
            </a>
            <a href="#contact" className="btn-conv-secondary">
              Contact Us
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
