import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();

  // Simulated fetching of the blog post based on ID
  const post = {
    title: 'Why Integrating Your CRM and ERP is the Key to Scaling Your Business',
    author: 'The Cad Labs Team',
    date: 'May 5, 2026',
    content: `
      <h2>The Problem of Data Silos</h2>
      <p>As businesses grow, they often adopt different software solutions to handle specific tasks. Your sales team might use Salesforce to manage customer relationships, while your operations team relies on Odoo to handle inventory, accounting, and manufacturing. Over time, these disconnected systems create "data silos."</p>
      <p>When CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) systems don't talk to each other, employees spend countless hours manually entering data from one system into another. This not only wastes time but also increases the risk of costly errors.</p>
      
      <h2>Why Integration is the Solution</h2>
      <p>Integrating your CRM and ERP is like building a superhighway between your front-office and back-office operations. Here are the top benefits of a unified system:</p>
      
      <h3>1. Complete 360-Degree Customer View</h3>
      <p>When sales reps are on a call with a client, they need more than just past email interactions. With integration, they can see the client's entire order history, current account balance, and whether their latest shipment has been dispatched—all without leaving Salesforce.</p>
      
      <h3>2. Automated Workflows</h3>
      <p>Imagine a world where a closed-won opportunity in Salesforce automatically triggers a sales order and invoice generation in Odoo. Inventory levels are adjusted instantly, and the fulfillment team is notified immediately. This level of automation drastically reduces fulfillment times and improves customer satisfaction.</p>
      
      <h3>3. Accurate Forecasting and Reporting</h3>
      <p>A unified data model means your executives can finally trust the reports they are reading. Sales forecasts can be matched directly against real-time production capacities and inventory levels, allowing for smarter, data-driven decisions.</p>

      <h2>How The Cad Labs Can Help</h2>
      <p>At The Cad Labs, we specialize in bridging the gap between world-class CRM systems like Salesforce and robust ERPs like Odoo. We don't just connect APIs; we map out your unique business processes to ensure data flows exactly when and where it needs to.</p>
      <p>If you're tired of manual data entry and disjointed reports, it's time to integrate. Contact us today to learn how we can tailor a solution for your enterprise.</p>
    `
  };

  if (id !== 'why-integrate-crm-erp') {
    return <div className="container" style={{ paddingTop: '100px' }}><h2>Blog post not found.</h2></div>;
  }

  return (
    <div className="blog-post-page container" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
      <Link to="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>
        <ArrowLeft size={20} /> Back to Blogs
      </Link>
      
      <article className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="blog-meta mb-8 pb-8" style={{ borderBottom: '1px solid var(--border)', display: 'flex', gap: '2rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={18} /> {post.author}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> {post.date}</span>
        </div>

        <div 
          className="blog-content-body" 
          style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Add some basic styling for the HTML content injected */}
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content-body h2 { font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--text-main); }
        .blog-content-body h3 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--secondary); }
        .blog-content-body p { margin-bottom: 1.5rem; color: var(--text-muted); }
      `}} />
    </div>
  );
}
