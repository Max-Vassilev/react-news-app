import React, { useState } from 'react'
import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import noImg from '../assets/images/no-img.png'
import './News.css'

const categories = [
  'general',
  'world',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health',
  'nation',
]

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('general')

  const handleCategoryClick = (e, category) => {
    e.preventDefault()
    setSelectedCategory(category)
  }

  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category) => (
              <a
                href="#"
                className="nav-link"
                key={category}
                onClick={(e) => handleCategoryClick(e, category)}
              >
                {category}
              </a>
            ))}
          </div>
        </nav>
        <div className="news-section">
          <div className="headline">
            <img src={techImg} alt="Headling image" />
            <h2 className="headline-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, accusamus.
            </h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={worldImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={sportsImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={scienceImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={healthImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={entertainmentImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={nationImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
        <p>&copy; All Rights Reserved. By Code And Create</p>
      </footer>
    </div>
  )
}

export default News
