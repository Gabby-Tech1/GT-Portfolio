import React from 'react'
import Project1 from '../Assets/recipe.png'
import Project2 from '../Assets/Chat.png'
import Project3 from '../Assets/gtmovies.png'
import Project4 from '../Assets/gpt.png'
import Project5 from '../Assets/otp.png'

const project = [
    {
        name: 'Hot Prepare Recipe',
        image: Project1,
        description: 'A recipe site built with react and tailwind by fetch the data from an API using the fetch method.',
        github: 'https://github.com/Gabby-Tech1/Hot-Prepare-Recipe',
        link: 'https://hot-prepare-recipe.vercel.app'
    },
    {
        name: 'Chat Interface',
        image: Project2,
        description: 'Coding out a UI design with react and tailwindcss',
        github: 'https://github.com/Ideation-Axis-Intern/UI-Challenge-',
        // link: 'https://hot-prepare-recipe.vercel.app'
    },
    {
        name: 'GT Movies',
        image: Project3,
        description: 'A fullstack netflix clone project built with a movie api and firebase as backend',
        github: 'https://github.com/Gabby-Tech1/GTMovie',
        link: 'https://gtmovies-website.web.app/'
    },
    {
        name: 'GT Chat AI',
        image: Project4,
        description: 'A fullstack gemini clone project built with a gemini api and firebase as backend',
        github: 'https://github.com/Gabby-Tech1/Chat-AI',
        link: 'https://gt-chat-ai.firebaseapp.com/chat'
    },
    {
        name: 'OTP System',
        image: Project5,
        description: 'One Time Password system built with react, no backend to receive code included',
        github: 'https://github.com/Gabby-Tech1/OTP-System',
        link: 'https://otp-system.vercel.app/'
    },
       
]

const Projects = () => {
  return (
    <div id='projects'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center uppercase'>MY Latest {' '}<span className='text-[#0ef]'>Projects</span></h1>

        <div className='w-[90%] pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {
                project.map((item, id )=> {
                    return(
                        <div className="card md:w-96 bg-gray-100 shadow-xl hover:scale-110 duration-300 ease-linear" key={id}>
                            <figure><img src={item.image} alt="Shoes" className='h-60'/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.description}</p>
                                <div className="card-actions justify-end">
                                    <a href={item.link} target='blank' className="btn hover:bg-transparent bg-[#0ef] border-[#0ef] duration-300 ease-linear">Visit Site</a>
                                    <a href={item.github} target='blank' className="btn bg-transparent hover:bg-[#0ef] border-[#0ef] duration-300 ease-linear">View Code</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            

        </div>
    </div>
  )
}

export default Projects 