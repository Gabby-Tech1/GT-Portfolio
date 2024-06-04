import React from 'react'

const Skills = () => {
    const skills = [
        { name: 'HTML', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"},
        { name: 'CSS3', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"},
        { name: 'GitHub', image: "https://www.vectorlogo.zone/logos/github/github-icon.svg"},
        { name: 'Firebase', image: "https://cdn.freebiesupply.com/logos/thumbs/1x/firebase-1-logo.png"},
        { name: 'JavaScript', image: "https://techstack-generator.vercel.app/js-icon.svg"},
        { name: 'VS Code', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"},
        { name: 'Git', image: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Git.svg"},
        {name: 'React', image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"},
        {name: 'Python', image: "https://cdn.freebiesupply.com/logos/thumbs/1x/python-3-logo.png"},
        {name: 'React Native', image: "https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png"},
        {name: 'Tailwind CSS', image: "https://mythinkpond.com/img/logo/tailwindcss-logo.png"},
        {name: 'Bootstrap', image: "https://them.es/starter-bootstrap/wp-content/uploads/sites/7/2021/05/bootstrap-logo-300x239.png"}
      ]

  return (
    <div className='pt-12 md:pt-16 pb-12 my-8' id='skills'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center uppercase'>MY <span className='text-[#0ef]'>Skills</span></h1>
        <div className='flex flex-wrap justify-center gap-4 mt-8'>
        {skills.map((skill, index) => (
          <div key={index} className='grid border-[#0ef] md:grid-cols-2 items-center gap-2 px-4 py-2 rounded-md bg-transparent border flex-col text-white'>
            <img src={skill.image} alt="" className='w-28 h-28' />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills