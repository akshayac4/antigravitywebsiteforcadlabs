import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import BusinessCard from './pages/BusinessCard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogPost />} />
        </Route>
        <Route path="card/:slug" element={<BusinessCard />} />
      </Routes>
    </Router>
  );
}

export default App;
