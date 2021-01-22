import React from 'react'

function About() {
  return (
    <div className="container about">
      <h2>Personal</h2>
      <p>
        My name is Luka Matuzić and I am web developer who is passionate about developing efficient, scalable, responsive and beautiful web applications and websites. My journey into
        web development evolved from a desire to make something completely on my own and while I'm at it - to make it look good. I have enjoyed doing web development for almost 2 years now. 
        I use a variety of techonologies for my personal projects, but also for a company in which I currently work. I have a great desire to learn and discover new things, to meet new 
        people and to solve the problems that are set before me.
      </p>

      <h2>Education</h2>
      <div className="education">
        <div>
          <h3>High school</h3>
          <div><a href="http://ss-duga-resa.skole.hr/" target="_blank" rel="noopener noreferrer">Gymnasium Duga Resa, Croatia</a></div>
        </div>

        <div>
          <h3>University</h3>
          <div><a href="https://uniri.hr/" target="_blank" rel="noopener noreferrer">University of Rijeka, Croatia</a></div>
          <ul>
            <li>
              Bachelor's degree
              <ul>
                <li>Computer Science and Philosophy</li>
                <li>2014. - 2017.</li>
              </ul>
            </li>

            <li>
              Master's degree
              <ul>
                <li>Computer Science</li>
                <li>2017. - 2019.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;
