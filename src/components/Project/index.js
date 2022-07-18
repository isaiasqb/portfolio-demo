import React, { useState } from 'react'

function Project({ category }) {

  const [exampleImages] = useState([
    {
      name: 'Weather Finder',
      category: 'miscellaneous',
      descrption: `A weather application
      
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
      Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      url: 'https://isaiasqb.github.io/weather-finder/'
    },
    {
      name: 'Food Festival App',
      category: 'miscellaneous',
      descrption: `An example of a PWA
      
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
      Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      url: 'https://isaiasqb.github.io/food-festival-app/'
    },
    {
      name: 'Animal Quiz',
      category: 'miscellaneous',
      descrption: `A fun quiz about your favourite animals
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      url: 'https://isaiasqb.github.io/quiz-challange/'
    },
    {
      name: 'Taskinator',
      category: 'productivity',
      descrption: `A Kanban-style to-do list example. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      url: 'https://isaiasqb.github.io/taskinator/'
    },
    {
      name: 'Day Scheduler',
      category: 'productivity',
      descrption: `A application that helps you plan out your day.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      url: 'https://isaiasqb.github.io/day-scheduler/'
    },
    {
      name: 'Password Generator',
      category: 'productivity',
      descrption: `A qick generator for original passwords.
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
      Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `,
      url: 'https://isaiasqb.github.io/password-generator/'
    }
  ]);

  const currentExamples = exampleImages.filter((example) => example.category === category);

  return (

    <div className=''>
      <div className='flex-row my-7'>
        {currentExamples.map((example, i) => (
        <>
          <h3 className='my-1 m-auto'>
            {example.name}
          </h3>
          <a href={example.url} target='_blank' rel="noopener noreferrer">
          <img
          src={require(`../../assets/${category}/${i}.png`)}
          alt={example.name}
          className='img-thumbnail mx-1 m-auto w40'
          key={example.name}
        /></a>
          <p className='my-p-7 description-p'>
          {example.descrption}
          </p>
        </>
        ))}
      </div>

    </div>
  )
}

export default Project;