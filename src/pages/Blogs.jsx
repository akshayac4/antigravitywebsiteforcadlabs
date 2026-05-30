import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

export default function Blogs() {
  const blogPosts = [
    {
      id: 'why-integrate-crm-erp',
      title: 'Why Integrating Your CRM and ERP is the Key to Scaling Your Business',
      excerpt: 'Discover how connecting Salesforce and Odoo can eliminate data silos and accelerate your company\'s growth.',
      author: 'The Cad Labs Team',
      date: 'May 5, 2026',
      readTime: '5 min read',
      imagePlaceholder: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)'
    }
    // More blog posts will go here
  ];

  return (
    <div className="blogs-page container" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
      <div className="page-header text-center animate-fade-in" style={{ marginBottom: '4rem' }}>
        <h1 className="text-4xl font-bold mb-4">Insights & Resources</h1>
        <p className="text-muted max-w-2xl mx-auto">
          Read our latest thoughts on digital transformation, cloud architecture, and industry trends.
        </p>
      </div>

      <div className="blogs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {blogPosts.map((post, index) => (
          <div key={post.id} className={`blog-card glass-panel animate-fade-in delay-${(index % 3) * 100}`} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div className="blog-image-placeholder" style={{ height: '200px', background: post.imagePlaceholder }}></div>
            <div className="blog-content p-6" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
              <p className="text-muted mb-4">{post.excerpt}</p>
              
              <div className="blog-meta mt-auto pt-4 flex justify-between items-center" style={{ borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><User size={14} /> {post.author}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Calendar size={14} /> {post.date}</span>
                </div>
              </div>
              
              <Link to={`/blogs/${post.id}`} className="btn btn-outline mt-4 text-center">
                Read Article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
