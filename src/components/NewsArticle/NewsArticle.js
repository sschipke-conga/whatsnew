import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = ({story}) => (
  <article>
    <div className="img-div">
    <img src={story.img} alt=""/>
    </div>
    <h3>{story.headline}</h3>
    <p>{story.description}</p>
    <a href={story.url} target="blank">Click here for full story</a>
  </article>
)
export default NewsArticle;