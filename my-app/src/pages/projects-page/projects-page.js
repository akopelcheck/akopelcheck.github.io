import './projects-page.css';
import ProjectCard from '../../components/project-card/projectCard.component';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const projectdesc = [
    [
      <>
        ▪ Designed and developed a personal portfolio website using React and Bootstrap to showcase experience, skills, projects, and background
      <br></br>
      <br></br>
        ▪ Built responsive, clean UI components to ensure accessibility and performance across devices
      <br></br>
      <br></br>
        ▪ Completed the project independently over a few days, demonstrating initiative and front-end development skills
      </>
    ],
    [
      <>
        ▪ Built a user-friendly data analysis application for the OSU Driving Simulation Lab using Python and NiceGUI
      <br></br>
      <br></br>
        ▪ Designed the interface to visualize driving study data interactively, supporting efficient exploration of participant metrics
      <br></br>
      <br></br>
        ▪ Integrated features for plotting, filtering, and exporting datasets to assist researchers in analyzing behavioral trends
      </>
    ],
    [<>
      ▪ Created a GUI for a portable anesthesia system using React and Flask while communicating with a Raspberry Pi 
      <br></br>
      <br></br>
      ▪ Worked in a team of six to present multiple demos for the project sponsor 
      <br></br>
      <br></br>
      ▪ Coordinated with a Biomedical Engineering team to better understand project requirements and functions
    </>],
    [
      <>
      ▪ Created a golf and basketball shot-tracking Android app using Kotlin and Android Studio
      <br></br>
      <br></br>
      ▪ Worked in a team of three to present completed app to several potential users
      </>
    ],
         [
      <>
      ▪ Created a working prototype app for the organization, Mentoring Youth Through Technology
      <br></br>
      <br></br>
      ▪ Worked with a team of interns in 8 hours using Figma and React Native to create the working prototype
      <br></br>
      <br></br>
      ▪ Participated in a pitch to the client, Mentoring Youth Through Technology
      </>
     ],

    [ 
      <>
      ▪ Created a website to help monitor health activity using Ruby, Bootstrap, Javascript, HTML, and CSS
      <br></br>
      <br></br>
      ▪ Used API calls to automatically query nutrition information for the user
      </>
    ],
    [
      <>
        ▪ Developed a terminal-based version of the card game Set using Ruby
      <br></br>
      <br></br>
        ▪ Implemented game logic to handle card generation, set validation, and scoring
      <br></br>
      <br></br>
        ▪ Used object-oriented programming principles to structure cards, deck, and game flow
      </>
    ],
    [
      <>
        ▪ Worked closely with a group of interns to brainstorm, plan, and build a new business application in 21 hours
        <br></br>
        <br></br>
        ▪ Lead development of the website and used Angular, TypeScript, HTML, and CSS to create it
      </>
    ]
    
  ]

  const projects = [
    ['personalweb.JPG','Personal Portfolio', '2025',projectdesc[0],'React, JavaScript, Bootstrap, HTML, CSS'],
    ['datplot.JPG','DatPlot', '2025',projectdesc[1],'Python'],
    ['healthhub.JPG','Nora', '2025',projectdesc[2],'React, Python, Raspberry Pi, Flask, HTML, CSS. JavaScript'],
    ['hotshot.JPG','HotShot', '2024',projectdesc[3],'Kotlin, Andriod Studio'],
    ['willowtree.png','WillowTree Hackathon', '2024',projectdesc[4],'XCode, Figma, React','JavaScript','HTML','CSS'],
    ['countcalorie.JPG','Calorie Counter', '2023',projectdesc[5],'Ruby, HTML, Bootstrap, SCSS'],
    ['gameofset.JPG','The Game of Set', '2023',projectdesc[6],'Ruby'],
    ['Nationwide.jpg','Nationwide Hackathon', '2023',projectdesc[7],'Angular, Figma, TypeScript, HTML, CSS'],
  ]

  return (
    <div className="Projects" data-theme='dark'>
      <div className='proj-page'>
        <h1 className='title'>My Projects</h1>
        {projects.map((project) => (
                  <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
          <ProjectCard imgName={project[0]} name={project[1]} year={project[2]} desc={project[3]} skills={project[4]} />
        </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
