//  The Nav component will return a single JSX element, the <header>.
import React, { useState } from 'react';

function renderPortfolio () {
  console.log('You selected portfolio')
}

function renderContact () {
  console.log('You selected contact')
}

function renderResume () {
  console.log('You selected resume')
}

function Nav() {

  const categories = [
    {
      name: "productivity apps",
      description: "A few examples of recent apps that I've built, fully functional and guaranteed to boost your productivity.",
    },
    { name: "miscellaneous apps", 
    description: "A few examples of recent apps that have enjoyment and convenience as the main focus, fully functional and built form scratch" }
  ];

  return (
<header>
  <h2>
    <a href="/">
      My Portfolio
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About Me
        </a>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span>
            {category.name}
          </span>
        </li>
      ))}
        <li>
          <span>Contact</span>
        </li>
        <li>
          <span>Resume</span>
        </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;