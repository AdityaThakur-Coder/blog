import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const api = 'https://my-blog-app-6bjg.onrender.com'
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${api}/api/posts`);
        setPosts(res.data);
        if (res.data.length > 0) {
          setFeaturedPost(res.data[0]);
        }
      } catch (err) {
        console.error('Error fetching posts', err);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container">
      {featuredPost && (
        <div className="featured-post">
          <div className="featured-content">
            <h2 className="featured-title">{featuredPost.title}</h2>
            <p className="featured-excerpt">{featuredPost.content.slice(0, 200)}...</p>
            <div className="featured-meta">
              <span className="featured-author">By {featuredPost.author}</span>
              <span className="featured-date">
                {formatDate(featuredPost.createdAt)}
              </span>
            </div>
            <Link to={`/post/${featuredPost._id}`} className="featured-read-more">
              Read More
            </Link>
          </div>
        </div>
      )}

      <h2 className="page-title">Recent Posts</h2>
      <div className="posts-grid">
        {posts.slice(1).map((post) => (
          <div key={post._id} className="post-card">
            <div className="post-card-content">
              <h3 style={{ 
                color: 'green', 
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                lineHeight: '1.4',
                letterSpacing: '-0.025em',
                fontFamily: "'Playfair Display', serif"
              }}>{post.title}</h3>
              <p className="post-excerpt">{post.content.slice(0, 150)}...</p>
              <div className="post-meta">
                <span className="post-author">By {post.author}</span>
                <span className="post-date">
                  {formatDate(post.createdAt)}
                </span>
              </div>
              <Link to={`/post/${post._id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
