import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = ({story}) => (
  <article>
    Article
    <img src={story.img} alt=""/>
    <h2>{story.headline}</h2>
    <p>{story.description}</p>
    <a href={story.url} target="blank" >Click here</a>
  </article>
)
export default NewsArticle;