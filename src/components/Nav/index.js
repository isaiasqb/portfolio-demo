//  The Nav component will return a single JSX element, the <header>.
import React, { useEffect } from 'react';
import {capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory])

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
        <a href="#about" data-testid="about" onClick={() => setContactSelected(false)}>
          About Me
        </a>
      </li>
{/* ---------------------------------------------------------------------------- */}
        {categories.map((category) => (
          <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && ' navActive'}`}
          key={category.name}>
            <span onClick={() => 
              {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
              >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
{/* ---------------------------------------------------------------------------- */}
        <li className={`mx-3 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
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