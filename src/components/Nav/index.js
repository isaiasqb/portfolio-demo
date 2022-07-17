//  The Nav component will return a single JSX element, the <header>.
import React, { useEffect } from 'react';
import {capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
<header>
  <h2>
    <a href="/">
      My Portfolio
    </a>
  </h2>

  <nav>
    <ul className="flex-row">
      <li className="mx-3">
        <a href="#about">
          About Me
        </a>
      </li>
{/* ---------------------------------------------------------------------------- */}
        {categories.map((category) => (
          <li className={`mx-1 ${currentCategory.name === category.name && 'mx1 navActive'}`}
          key={category.name}>
            <span onClick={() => 
              {setCurrentCategory(category)}
              }>
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
{/* ---------------------------------------------------------------------------- */}
        <li className="mx-3">
          <span>Contact</span>
        </li>
        <li className="mx-3">
          <span>Resume</span>
        </li>
    </ul>
  </nav>

</header>
  );
}

export default Nav;