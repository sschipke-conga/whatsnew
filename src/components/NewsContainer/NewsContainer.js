import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({articles}) => {
  let newsArticles = articles.map((story,i) => (
    <NewsArticle key={i} story={story} />
  ))
  return <main>{newsArticles}</main>
}

export default NewsContainer;