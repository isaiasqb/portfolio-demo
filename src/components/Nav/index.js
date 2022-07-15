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
  return (
    <header>
      <h2>
        <a href="/">
          <span> My Portfolio </span> 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span><a href="#about">
              About me
            </a></span>
          </li>
          <li className="mx-2">
            <span onClick={renderPortfolio}>
              <a href="#portfolio">
              Portfolio
              </a>
            </span>
          </li>
          <li className="mx-2">
            <span onClick={renderContact}>
              <a href="#contact">
              Contact
              </a>
            </span>
          </li>
          <li className="mx-2">
            <span onClick={renderResume}>
              <a href="#resume">
              Resume
              </a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;