import React from 'react';
import blogImage1 from "../assets/img/blog/blog-image-1.jpg"
import blogImage2 from "../assets/img/blog/blog-image-2.jpg"
import blogImage3 from "../assets/img/blog/blog-image-3.jpg"
import blogImage4 from "../assets/img/blog/blog-image-4.jpg"
import { FaRegCalendarAlt, FaEye, FaChevronRight } from 'react-icons/fa';


const Blog = () => {
  const blogs = [
    {
      id: 1,
      category: 'Business',
      title: 'How to Improve Your Project Management Skills',
      date: '7 Feb 2023',
      views: 55,
      image: blogImage1,
    },
    {
      id: 2,
      category: 'Technology',
      title: 'Modern Cybersecurity Trends to Watch in 2023',
      date: '12 Aug 2023',
      views: 39,
      image: blogImage2,
    },
    {
      id: 3,
      category: 'Health',
      title: 'Health Care Job Growth Outpaces Other Industries',
      date: '21 Dec 2023',
      views: 61,
      image: blogImage3,
    },
    {
      id: 4,
      category: 'Networking',
      title: 'Five Essential Network Security Trends to Watch',
      date: '21 Feb 2023',
      views: 61,
      image: blogImage4 ,
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Our <span>Blog</span></h2>
        <p>Stay tuned and updated by the latest 
          <br/>
          updates from our blog.</p>
        <button className="more-plans-btn">More Plans</button>
      </div>
      
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}>
              <div className="hover-overlay">
                <FaChevronRight className="hover-icon" />
                <span>Read More</span>
              </div>
            </div>
            <div className="blog-content">
              <p className="blog-category">{blog.category}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <div className="blog-meta">
                <span><FaRegCalendarAlt /> {blog.date}</span>
                <span><FaEye /> {blog.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;



