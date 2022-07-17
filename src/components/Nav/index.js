//  The Nav component will return a single JSX element, the <header>.
import React, { useEffect } from 'react';
import {capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    setAboutDefault,
    setPortfolioSelected,

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
        <a href="#about" data-testid="about" onClick={() => { 
            setPortfolioSelected(false);
            setContactSelected(false);
            setAboutDefault(true);
            }}>
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
                setPortfolioSelected(true);
                setContactSelected(false);
                setAboutDefault(false);
              }}
              >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
{/* ---------------------------------------------------------------------------- */}
        <li className={`mx-3 ${contactSelected && 'navActive'}`}>
          <span onClick={() => {
                setPortfolioSelected(false);
                setContactSelected(true);
                setAboutDefault(false);
            }
            }>Contact</span>
        </li>
        <li className="mx-3">
          <span><a href='https://drive.google.com/file/d/1gYSIcnG5Y0EW7_m8ah1DeJ7SscU7NEBw/view?usp=sharing' target="blank">Resume</a></span>
        </li>
    </ul>
  </nav>

</header>
  );
}

export default Nav;