import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid='portfolio-title'>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p className='my-p-list'>{currentCategory.description}</p>
      <Project category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;