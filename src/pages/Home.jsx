import React from 'react';
import { 
  ArrowRight, Cloud, Database, Car, CheckCircle, Code, Workflow,
  Shield, Zap, Users, Building2, HeartPulse, ShoppingBag, TrendingUp,
  MessageSquare, FileText, Award, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title animate-fade-in">
            Transform Your Business with <br/>
            <span className="text-gradient">Next-Gen Cloud Solutions</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            The Cad Labs specializes in providing top-tier CRM and ERP implementations. 
            We empower your operations through tailored Salesforce and Odoo integrations.
          </p>
          <div className="hero-actions animate-fade-in delay-200">
            <Link to="/services" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link to="/projects" className="btn btn-outline">View Projects</Link>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </header>

      {/* Why Choose Cad Labs Section */}
      <section className="why-choose-section container" style={{ padding: '80px 0' }}>
        <div className="section-header text-center animate-fade-in" style={{ marginBottom: '3.5rem' }}>
          <h2 className="text-3xl font-bold mb-4">Why Global Brands Partner with Cad Labs</h2>
          <p className="text-muted max-w-2xl mx-auto">
            We deliver tailored solutions backed by strong technical engineering, strategic design frameworks, and long-term business alignment.
          </p>
        </div>

        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel animate-fade-in delay-100" style={{ padding: '2.5rem', transition: 'transform 0.3s ease' }}>
            <div className="icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>
              <Layers size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Platform-Agnostic Advisory</h3>
            <p className="text-muted text-sm">
              We focus on independent consulting. Whether Salesforce or Odoo fits your operational workflows and scaling objectives best, we recommend the optimal technology stack without vendor bias.
            </p>
          </div>

          <div className="glass-panel animate-fade-in delay-100" style={{ padding: '2.5rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--secondary)', marginBottom: '1.25rem' }}>
              <TrendingUp size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Business-Driven Strategy</h3>
            <p className="text-muted text-sm">
              Our designs target tangible outcomes—minimizing operational redundancies, accelerating sales cycles, and optimizing customer touchpoints to achieve a clear, measurable return on investment.
            </p>
          </div>

          <div className="glass-panel animate-fade-in delay-100" style={{ padding: '2.5rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>
              <Workflow size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Scalable Architecture</h3>
            <p className="text-muted text-sm">
              We design integration-ready databases and modular CRM/ERP models to support enterprise expansion, seamless API integrations, and ongoing digital transformation.
            </p>
          </div>

          <div className="glass-panel animate-fade-in delay-200" style={{ padding: '2.5rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--secondary)', marginBottom: '1.25rem' }}>
              <Shield size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Data-First Execution</h3>
            <p className="text-muted text-sm">
              We prioritize data validation, cleansing, and integrity. Your automation workflows, executive dashboards, and decision pipelines remain secure and reliable.
            </p>
          </div>

          <div className="glass-panel animate-fade-in delay-200" style={{ padding: '2.5rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>
              <Zap size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Long-Term Support</h3>
            <p className="text-muted text-sm">
              Post-deployment, we support your systems with continuous optimization, proactive server fine-tuning, version upgrades, and dedicated SLA-backed troubleshooting.
            </p>
          </div>

          <div className="glass-panel animate-fade-in delay-200" style={{ padding: '2.5rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--secondary)', marginBottom: '1.25rem' }}>
              <Award size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Certified Experts</h3>
            <p className="text-muted text-sm">
              Our certified Salesforce consultants and Odoo developers have extensive experience mapping enterprise processes into lean, highly automated system configurations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="services-section container" style={{ padding: '80px 0' }}>
        <div className="section-header text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Our Core Platforms</h2>
          <p className="text-muted max-w-2xl mx-auto">
            We leverage industry-leading platforms to build scalable, efficient, and 
            powerful systems for your enterprise.
          </p>
        </div>

        {/* Salesforce Services */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="flex-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Cloud size={32} color="#1A73E8" />
            <h3 className="text-2xl font-bold">Salesforce CRM Solutions</h3>
          </div>
          <div className="grid-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel p-6 animate-fade-in delay-100" style={{ padding: '1.5rem' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Strategic Consulting</h4>
              <p className="text-muted text-sm">Guidance on selecting clouds and designing processes to optimize Salesforce ROI.</p>
            </div>
            <div className="glass-panel p-6 animate-fade-in delay-100" style={{ padding: '1.5rem' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2"><Code size={18} className="text-primary"/> Development & Customization</h4>
              <p className="text-muted text-sm">Tailoring your CRM with custom Apex code, LWC, workflows, and AppExchange integration.</p>
            </div>
            <div className="glass-panel p-6 animate-fade-in delay-100" style={{ padding: '1.5rem' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2"><Workflow size={18} className="text-primary"/> Cloud Implementation</h4>
              <p className="text-muted text-sm">End-to-end setup and deployment of Sales, Service, Marketing, and Revenue clouds.</p>
            </div>
          </div>
        </div>

        {/* Odoo Services */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="flex-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Database size={32} color="#34A853" />
            <h3 className="text-2xl font-bold">Odoo ERP Solutions</h3>
          </div>
          <div className="grid-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel p-6 animate-fade-in delay-200" style={{ padding: '1.5rem' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Full-Service Setup</h4>
              <p className="text-muted text-sm">Seamless rollout of Odoo modules including Sales, CRM, Inventory, and Accounting.</p>
            </div>
            <div className="glass-panel p-6 animate-fade-in delay-200" style={{ padding: '1.5rem' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2"><Code size={18} className="text-primary"/> Python Customization</h4>
              <p className="text-muted text-sm">Developing custom Odoo modules and tailoring native workflows to fit your operations.</p>
            </div>
            <div className="glass-panel p-6 animate-fade-in delay-200" style={{ padding: '1.5rem' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2"><Workflow size={18} className="text-primary"/> System Integrations</h4>
              <p className="text-muted text-sm">Connecting Odoo with third-party marketplaces, shipping carriers, and payment channels.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/services" className="btn btn-outline">View All Service Details</Link>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section container" style={{ padding: '80px 0' }}>
        <div className="section-header text-center animate-fade-in" style={{ marginBottom: '4rem' }}>
          <h2 className="text-3xl font-bold mb-4">A Proven Consulting Framework</h2>
          <p className="text-muted max-w-2xl mx-auto">
            From initial business discovery to post-launch optimization, our systematic methodology ensures your project is delivered on schedule and with absolute quality.
          </p>
        </div>

        <div className="methodology-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-panel animate-fade-in delay-100" style={{ padding: '1.75rem', position: 'relative' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.15, position: 'absolute', top: '10px', right: '15px' }}>01</span>
            <h3 className="text-lg font-bold mb-2">Discovery</h3>
            <p className="text-muted text-xs">We map your current processes, identify operational bottlenecks, and document exact functional requirements.</p>
          </div>

          <div className="glass-panel animate-fade-in delay-100" style={{ padding: '1.75rem', position: 'relative' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary)', opacity: 0.15, position: 'absolute', top: '10px', right: '15px' }}>02</span>
            <h3 className="text-lg font-bold mb-2">Architecture</h3>
            <p className="text-muted text-xs">We design a scalable database structure, specify robust security parameters, and map out API integrations.</p>
          </div>

          <div className="glass-panel animate-fade-in delay-200" style={{ padding: '1.75rem', position: 'relative' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.15, position: 'absolute', top: '10px', right: '15px' }}>03</span>
            <h3 className="text-lg font-bold mb-2">Build & Config</h3>
            <p className="text-muted text-xs">Our certified developers configure system modules, automate task workflows, and build interactive dashboards.</p>
          </div>

          <div className="glass-panel animate-fade-in delay-200" style={{ padding: '1.75rem', position: 'relative' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary)', opacity: 0.15, position: 'absolute', top: '10px', right: '15px' }}>04</span>
            <h3 className="text-lg font-bold mb-2">Testing & QA</h3>
            <p className="text-muted text-xs">We run comprehensive functional, data validation, and load tests to guarantee overall system reliability.</p>
          </div>

          <div className="glass-panel animate-fade-in delay-300" style={{ padding: '1.75rem', position: 'relative' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.15, position: 'absolute', top: '10px', right: '15px' }}>05</span>
            <h3 className="text-lg font-bold mb-2">Go-Live</h3>
            <p className="text-muted text-xs">We handle secure deployment migration, deliver hands-on training sessions, and facilitate staff adoption.</p>
          </div>
        </div>
      </section>

      {/* Custom Solutions & Apps */}
      <section className="custom-solutions-section container" style={{ padding: '80px 0' }}>
        <div className="section-header text-center animate-fade-in" style={{ marginBottom: '3.5rem' }}>
          <h2 className="text-3xl font-bold mb-4">Pre-built Custom CRM & ERP Utilities</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Accelerate your implementation with our suite of proprietary, ready‑to‑use integration components.
          </p>
        </div>

        <div className="solutions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
              <MessageSquare size={28} />
            </div>
            <h4 className="font-bold mb-2">SmartLead Integrator</h4>
            <p className="text-muted text-xs">Seamlessly capture and route leads from web forms, chat, and social channels directly into Salesforce or Odoo pipelines.</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
              <Shield size={28} />
            </div>
            <h4 className="font-bold mb-2">Secure eSignature Suite</h4>
            <p className="text-muted text-xs">Embedded electronic signing for contracts, quotes, and NDAs with audit‑ready compliance and real‑time status tracking.</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
              <FileText size={28} />
            </div>
            <h4 className="font-bold mb-2">Instant PDF Composer</h4>
            <p className="text-muted text-xs">Generate branded PDFs and reports on‑the‑fly using dynamic templates populated with live CRM/ERP data.</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
              <Zap size={28} />
            </div>
            <h4 className="font-bold mb-2">Mass Data Orchestrator</h4>
            <p className="text-muted text-xs">Batch‑update thousands of records in Salesforce or Odoo with a single click, eliminating manual imports.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section container" style={{ padding: '80px 0' }}>
        <div className="section-header text-center animate-fade-in" style={{ marginBottom: '3.5rem' }}>
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Discover how our tailored cloud CRM and ERP solutions drive operational excellence across sectors.
          </p>
        </div>

        <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="industry-card glass-panel animate-fade-in delay-100" style={{ padding: '2rem' }}>
             <div className="industry-icon" style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '12px', color: 'var(--primary)' }}>
               <Car size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Automotive</h3>
             <p className="text-muted text-sm mb-4">
               We deliver robust CRM and ERP custom modules for dealerships, repair hubs, and automotive distributors. Seamlessly manage parts inventory, track service bays, schedule appointments, and coordinate client vehicles.
             </p>
          </div>

          <div className="industry-card glass-panel animate-fade-in delay-100" style={{ padding: '2rem' }}>
             <div className="industry-icon" style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '12px', color: 'var(--secondary)' }}>
               <Building2 size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Real Estate</h3>
             <p className="text-muted text-sm mb-4">
               Simplify listings, lead tracking, and deal closings. Our custom property management portals sync listings directly into Salesforce pipelines, assisting brokers in automating client interactions.
             </p>
          </div>

          <div className="industry-card glass-panel animate-fade-in delay-200" style={{ padding: '2rem' }}>
             <div className="industry-icon" style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '12px', color: 'var(--primary)' }}>
               <HeartPulse size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Healthcare</h3>
             <p className="text-muted text-sm mb-4">
               We build patient communication portals and coordination dashboards that synchronize care paths and manage clinical schedules while keeping records organized and securely structured.
             </p>
          </div>

          <div className="industry-card glass-panel animate-fade-in delay-200" style={{ padding: '2rem' }}>
             <div className="industry-icon" style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '12px', color: 'var(--secondary)' }}>
               <Database size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
             <p className="text-muted text-sm mb-4">
               We implement complete Odoo ERP solutions linking bill of materials (BOM), production planning, and work centers with real-time inventory management and supply chain coordination.
             </p>
          </div>

          <div className="industry-card glass-panel animate-fade-in delay-300" style={{ padding: '2rem' }}>
             <div className="industry-icon" style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '12px', color: 'var(--primary)' }}>
               <ShoppingBag size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">E-Commerce</h3>
             <p className="text-muted text-sm mb-4">
               Connect your web storefront with Odoo inventory or Salesforce CRM. Sync orders automatically, manage multi-channel stock levels, and deliver personalized post-purchase email updates.
             </p>
          </div>

          <div className="industry-card glass-panel animate-fade-in delay-300" style={{ padding: '2rem' }}>
             <div className="industry-icon" style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '12px', color: 'var(--secondary)' }}>
               <TrendingUp size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Finance</h3>
             <p className="text-muted text-sm mb-4">
               Optimize financial advisory workflows with secure pipelines. Track portfolios, automate validation checks, and securely manage customer records in compliance with corporate guidelines.
             </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section container" style={{ padding: '80px 0 120px 0' }}>
        <div className="section-header text-center animate-fade-in" style={{ marginBottom: '4.5rem' }}>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted max-w-2xl mx-auto">
            We partner with businesses worldwide to drive technology adoption and success.
          </p>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
            <p className="text-muted text-sm italic mb-6">
              "Cad Labs transformed our digital workflow, delivering a seamless integration that cut processing time by 30%."
            </p>
            <div>
              <h4 className="font-bold text-main">Liam Patel</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>Head of Operations, NovaTech Solutions</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
            <p className="text-muted text-sm italic mb-6">
              "Their expertise in Salesforce redesign increased our lead conversion rate dramatically, boosting quarterly revenue by 20%."
            </p>
            <div>
              <h4 className="font-bold text-main">Sofia Delgado</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: '600' }}>VP of Sales, BrightEdge Solutions</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
            <p className="text-muted text-sm italic mb-6">
              "The custom document generator streamlined our reporting process, reducing manual effort by hours each week."
            </p>
            <div>
              <h4 className="font-bold text-main">Aarav Kapoor</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>CTO, Pinnacle Infra Group</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

