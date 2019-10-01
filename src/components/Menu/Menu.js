import React from 'react';
import './Menu.css'
// import entertainment from '../../data/entertainment'
// import health from '../../data/health'
// import science from '../../data/science'
// import technology from '../../data/technology'
// import local from '../../data/local'

const Menu = ({handleButton}) => (
  <nav>
    <h2>What's <span>New?</span></h2>
    <button name="health" type="button" onClick={(e) => handleButton(e)}>Health</button>
    <button name="entertainment" type="button" onClick={(e) => handleButton(e)}>Entertainment</button>
    <button name="science" type="button" onClick={(e) => handleButton(e)}>Science</button>
    <button name="technology" type="button" onClick={(e) => handleButton(e)}>Technology</button>
    <button name="local" type="button" onClick={(e) => handleButton(e)}>Local</button>
  </nav>
)

export default Menu;