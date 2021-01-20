import React from 'react'

function Project() {
  const projects = [
    {
      name: "Asset Manager",
      description: "Internal web application for managing company assets ",
      role: "Frontend web development",
      technologies: "HTML, CSS, SCSS, Javascript, Ruby on Rails",
      id: 1,
    },
    {
      name: "Komyoon",
      description: "Web application for storing, sharing and sorting art",
      role: "Frontend web development",
      technologies: "HTML, CSS, SCSS, Javascript, Ruby on Rails",
      id: 2,
    },
    {
      name: "Archibrix",
      description: "Web application for selling BIM blueprints",
      role: "Frontend web development",
      technologies: "HTML, CSS, SCSS, Javascript, Ruby on Rails",
      id: 3,
    },
    {
      name: "Pink Bibs",
      description: "Web application for valet parking and keeping your car secure in South Africa",
      role: "Full stack web development",
      technologies: "HTML, CSS, SCSS, Javascript, Ruby on Rails",
      id: 4,
    },
  ];
  
  return (
    <div className="project">
      <h4 className="project__name">
        {
          projects.map((project) => { 
            return (
              project.name
            ) 
          })
        } 
      </h4>
    </div>
  )
}

export default Project
