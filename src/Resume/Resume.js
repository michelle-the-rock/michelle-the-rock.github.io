import ResumeHeader from "./ResumeHeader";

// not sure how to structure
function Resume() {
    return (
      <div className="Resume">
        <ResumeHeader/>
        <body>
          <h2>
            Work Experience
          </h2>
          <body>
            <ul>
              <li>Software Engineer Co-op at Energy Action Partners</li>
              <li>Software Engineer Co-op at ezCater</li>
              <li>Teaching Assistant at Northeastern University</li>
              <li>IT Co-op at Johnson & Johnson</li>
              <li>Software Intern at Ohio Health Choice
              </li>
            </ul>
          </body>
          <h2>
            Education
          </h2>
          <body>
            <ul>
              <li>2020 - Graduated from Northeastern University (Boston, MA) with a Bachelor's Degree in Computer Science with a Minor in Spanish, Magna Cum Laude with Honors (3.84 GPA)</li>
              <li>2018 - Semester Abroad studying Computer Sciene, Spanish, and Intercultural Communication at La Universidad de Carlos III de Madrid</li>
              <li>2015 - Graduated Normandy High School (Parma, OH), Summa Cum Laude with Honors (4.62 GPA)</li>
            </ul>
          </body>
          <h2>
            Computer Knowledge
          </h2>
          <body>
            <ul>
              <li>Professional Experience with Javascript (React), Ruby/Rails, C#, GraphQL, SQL, CSS, Python</li>
              <li>Classroom experience with Java, Racket, ACL2s, Python, SQL, C, C++</li>
              <li>Worked with many software management tools such as git/Github, Jira, Trello, and Slack</li>
            </ul>
          </body>
          <h2>
            Projects
          </h2>
          <body>
            <ul>
              <li>
                <a href="https://github.com/michelle-the-rock/raft">Raft Concensus Protocol implementation</a>
                 - for CS 3700 Networks and Distributed Systems 
              </li>
            </ul>
          </body>
          <h2>
            Interests
          </h2>
          <body>
            <ul>
              <li>
                NU Pep Band, international travel, Major League Baseball (Cleveland Indians), independent/international film, alternative music
              </li>
            </ul>
          </body>
        </body>
      </div>
    );
  }
  
  export default Resume;