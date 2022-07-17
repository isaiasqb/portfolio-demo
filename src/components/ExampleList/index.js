import React, { useState } from 'react'

function ExampleList({ category }) {

  const [exampleImages] = useState([
    {
      name: 'Weather Finder',
      category: 'miscellaneous',
      descrption: 'A weather application',
      url: '../../assets/miscellaneous/0.png'
    },
    {
      name: 'Food Festival App',
      category: 'miscellaneous',
      descrption: 'An example of a PWA',
      url: '../../assets/miscellaneous/1.png'
    },
    {
      name: 'Animal Quiz',
      category: 'miscellaneous',
      descrption: 'A fun quiz about your favourite animals',
      url: '../../assets/miscellaneous/2.png'
    },
    {
      name: 'Taskinator',
      category: 'productivity',
      descrption: 'A Kanban-style to-do list example',
      url: '../../assets/productivity/0.png'
    },
    {
      name: 'Day Scheduler',
      category: 'productivity',
      descrption: 'A application that helps you plan out your day',
      url: '../../assets/productivity/1.png'
    },
    {
      name: 'Password Generator',
      category: 'productivity',
      descrption: 'A qick generator for original passwords',
      url: '../../assets/productivity/2.png'
    }
  ]);

  const currentExamples = exampleImages.filter((example) => example.category === category);

  return (
    <div>

      <div className='flex-row'>
        {currentExamples.map((example, i) => (
          
          <img
          src={require(`../../assets/${category}/${i}.png`)}
          alt={example.name}
          className='img-thumbnail mx-1'
          key={example.name}
        />

        ))}
      </div>

    </div>
  )
}

export default ExampleList;