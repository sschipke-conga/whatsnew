import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = ({story}) => (
  <article>
    <img src={story.img} alt=""/>
    <a href={story.url} target="blank">{story.headline}</a>
    <p>{story.description}</p>
  </article>
)
export default NewsArticle;