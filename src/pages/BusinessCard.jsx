import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, Mail, Globe, MapPin, 
  Download, Share2, AlertTriangle, ArrowLeft
} from 'lucide-react';
import './BusinessCard.css';

// Custom inline SVG icons for social networks
const LinkedinIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// User card datasets. Easy to expand without refactoring.
const CARDS_DATA = {
  akshay: {
    name: 'Akshay Chauhan',
    designation: 'CRM Consultant',
    company: 'Cad Labs Technology LLP',
    phone: '+91 88666 17388',
    whatsapp: '+91 88666 17388',
    email: 'akshay@thecadlabs.com',
    website: 'https://www.thecadlabs.com',
    address: 'Mondeal Heights, B Wing, 6th Floor, Sarkhej - Gandhinagar Hwy, Near Novotel Hotel, Ahmedabad, Gujarat 380015',
    addressVcf: 'Mondeal Heights, B Wing, 6th Floor, Sarkhej-Gandhinagar Hwy, Near Novotel Hotel, Ahmedabad, Gujarat 380015, India',
    profileImage: '/akshay_profile.png',
    about: 'Cad Labs helps businesses streamline operations, improve customer engagement, and implement scalable CRM and business systems. We specialize in CRM consulting, process optimization, system implementation, and digital transformation.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/thecadlabs/', // structure ready with placeholder/business links
      instagram: '',
      facebook: ''
    }
  }
};

export default function BusinessCard() {
  const { slug } = useParams();
  const [showToast, setShowToast] = useState(false);
  const card = CARDS_DATA[slug?.toLowerCase()];

  // Update SEO title
  useEffect(() => {
    if (card) {
      document.title = `${card.name} | ${card.designation} | ${card.company}`;
    } else {
      document.title = 'Card Not Found | Cad Labs';
    }
  }, [card]);

  if (!card) {
    return (
      <div className="card-page-wrapper">
        <div className="card-container glass-panel card-error-container animate-fade-in">
          <AlertTriangle size={48} className="text-primary" style={{ color: 'var(--secondary)' }} />
          <h1>Card Not Found</h1>
          <p>The digital business card you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={18} /> Go to Home
          </Link>
        </div>
      </div>
    );
  }

  // Generate VCF card download
  const handleSaveContact = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${card.name}`,
      `ORG:${card.company}`,
      `TITLE:${card.designation}`,
      `TEL;TYPE=CELL,VOICE:${card.phone}`,
      `EMAIL;TYPE=PREF,INTERNET:${card.email}`,
      `URL:${card.website}`,
      `ADR;TYPE=WORK,POSTAL,PARCEL:;;${card.addressVcf};;;;`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${card.name.replace(/\s+/g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Web Share API with Clipboard fallback
  const handleShareCard = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: `${card.name} - ${card.designation}`,
      text: `Connect with ${card.name}, ${card.designation} at ${card.company}`,
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled or failed', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      } catch (err) {
        console.error('Could not copy link', err);
      }
    }
  };

  return (
    <div className="card-page-wrapper">
      <div className="card-container glass-panel animate-fade-in">
        
        {/* Profile Header */}
        <section className="card-profile-section">
          <div className="card-avatar-container">
            <img 
              src={card.profileImage} 
              alt={card.name} 
              className="card-avatar-image" 
            />
          </div>
          <h1>{card.name}</h1>
          <p className="card-designation">{card.designation}</p>
          <p className="card-company">{card.company}</p>
        </section>

        {/* Quick Touch Actions */}
        <section className="card-actions-grid">
          <a href={`tel:${card.phone.replace(/\s+/g, '')}`} className="card-action-btn" aria-label="Call">
            <Phone size={24} />
            <span>Call</span>
          </a>
          <a 
            href={`https://wa.me/${card.whatsapp.replace(/[^0-9]/g, '')}`} 
            className="card-action-btn" 
            target="_blank" 
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
            <span>WhatsApp</span>
          </a>
          <a href={`mailto:${card.email}`} className="card-action-btn" aria-label="Email">
            <Mail size={24} />
            <span>Email</span>
          </a>
          <a href={card.website} className="card-action-btn" target="_blank" rel="noreferrer" aria-label="Website">
            <Globe size={24} />
            <span>Website</span>
          </a>
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(card.address)}`} 
            className="card-action-btn card-action-btn-full" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Location Map"
          >
            <MapPin size={20} />
            <span>View Office Location</span>
          </a>
        </section>

        {/* About Business Section */}
        <section className="card-about-section">
          <h2>About Cad Labs</h2>
          <p>{card.about}</p>
        </section>

        {/* Social Links List */}
        <section className="card-social-links">
          {card.socials.linkedin && (
            <a href={card.socials.linkedin} target="_blank" rel="noreferrer" className="card-social-icon" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          )}
          {card.socials.instagram && (
            <a href={card.socials.instagram} target="_blank" rel="noreferrer" className="card-social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
          )}
          {card.socials.facebook && (
            <a href={card.socials.facebook} target="_blank" rel="noreferrer" className="card-social-icon" aria-label="Facebook">
              <FacebookIcon />
            </a>
          )}
          <button onClick={handleShareCard} className="card-social-icon" aria-label="Share contact page">
            <Share2 size={20} />
          </button>
        </section>
      </div>

      {/* Sticky Save Contact Button Footer */}
      <div className="sticky-save-wrapper">
        <button className="btn-save-contact" onClick={handleSaveContact}>
          <Download size={20} /> Save Contact
        </button>
      </div>

      {/* Toast Notification for Fallback Sharing */}
      {showToast && (
        <div className="card-share-toast">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}
