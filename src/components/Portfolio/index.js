import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpes';
import projectImage from '../../assets/miscellaneous/2.png';

function Portfolio(props) {

  const currentCategory = {
    name: "miscellaneous",
    description:
      "Examples of my most recent work",
  };
  // const [ projects ] = useState(
  // [
  //   {
  //     index: 0,
  //     name: 'Weather Finder',
  //     url: 'https://isaiasqb.github.io/weather-finder/',
  //     descrption: 'A weather application',
  //     url: '../../assets/projects/0.png'
  //   },
  //   { 
  //     index: 1,
  //     name: 'Taskinator',
  //     url: 'https://isaiasqb.github.io/weather-finder/',
  //     descrption: 'A weather application',
  //     url: '../../assets/projects/1.png'
  //   },
  //   { 
  //     index: 2,
  //     name: 'The Animal Quiz',
  //     url: 'https://isaiasqb.github.io/taskinator/',
  //     descrption: 'A fun quiz about animnals',
  //     url: '../../assets/projects/2.png'
  //   },
  //   { 
  //     index: 3,
  //     name: 'Day Scheduler',
  //     url: 'https://isaiasqb.github.io/day-scheduler/',
  //     descrption: 'A task scheduler app',
  //     url: '../../assets/projects/3.png'
  //   },
  // ]);


  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
          <img
            src={projectImage}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Portfolio;