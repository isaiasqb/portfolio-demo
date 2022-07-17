//  The Nav component will return a single JSX element, the <header>.
import React from 'react';

function categorySelected (name) {
  console.log(`${name} clicked`)
}

function Nav() {

  const categories = [
    {
      name: "productivity",
      description: "A few examples of recent apps that I've built, fully functional and guaranteed to boost your productivity.",
    },
    { name: "miscellaneous", 
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
      <li className="mx-3">
        <a href="#about">
          About Me
        </a>
      </li>
       {categories.map((category) => (
        <li
          className="mx-2"
          key={category.name}
        >
          <span onClick={categorySelected(category.name)}>
            {category.name}
          </span>
        </li>
      ))}
        <li li className="mx-3">
          <span>Contact</span>
        </li>
        <li li className="mx-3">
          <span>Resume</span>
        </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;