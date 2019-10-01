import React from 'react';
import './Menu.css'
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import local from '../../data/local'

const Menu = ({handleButton}) => (
  <nav>
    <h2>What's <span>New?</span></h2>
    <button name="health" type="button" onClick={() => handleButton(health)}>Health</button>
    <button name="entertainment" type="button" onClick={() => handleButton(entertainment)}>Entertainment</button>
    <button name="science" type="button" onClick={() => handleButton(science)}>Science</button>
    <button name="technology" type="button" onClick={() => handleButton(technology)}>Technology</button>
    <button name="local" type="button" onClick={() => handleButton(local)}>Local</button>
  </nav>
)

export default Menu;