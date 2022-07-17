import React from 'react';
import ExampleList from '../ExampleList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid='portfolio-title'>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ExampleList category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;