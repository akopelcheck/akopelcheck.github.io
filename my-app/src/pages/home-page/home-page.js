import './home-page.css';
import Card2 from '../../components/card/card.component'
import useLocalStorage from 'use-local-storage'
import Header from '../../components/header/header.component'
import ImageCard from '../../components/img-card/img-card.component';
import resume from "../../pdfs/Alexandra-Kopelcheck-Resume-2025 (1).pdf"
import transcript from "../../pdfs/unoffical-transcript-2025.pdf"


function Home() {

 const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="Home" data-theme='dark'>
      <div className='home-page'>
        <h1 className='title'>Alexandra Kopelcheck</h1>
        <Card2 
          title="About Me!" 
          description="I'm a recent graduate from The Ohio State University, 
                      where I earned my degree in Computer Science
                      and Engineering with a minor in Information Security, 
                      finishing with a GPA of 3.8.
                      
                      During my time at OSU, I engaged in 
                      research at the Ohio State University Driving Simulation Lab,
                      where I used Python to create a data analysis UI application for 
                      looking at driving behavioral data. I also developed custom 
                      driving scenarios for simulation studies that focused on driver 
                      safety and human factors.
                      
                      During my summers, I completed internships at Nationwide and WillowTree, 
                      gaining hands-on experience in web and app development, 
                      accessibility-focused design improvements, and presenting 
                      technical solutions to stakeholders.
                      
                      These experiences helped me develop strong technical and 
                      collaborative skills. I have a strong interest in software 
                      engineering roles, specifically in web development, where I 
                      can continue learning and contributing in fast-paced, 
                      team-oriented environments."
          hasImg={true}
          imgName="smile.JPG"
          imgW="200"
          imgH="200"
        />

        <Card2 
          title="Documents" 
          description={
            <>
              Resume: <a href={resume} target="_blank">Alexandra-Kopelcheck-Resume-2025</a>
              <br></br>
              Unoffical Transcript: <a href={transcript} target="_blank">unoffical-transcript-2025.pdf</a>
            </>
          } 
          hasImg={false}
        />

        <Card2 
          title="Socials" 
          description={
            <>
              LinkedIn: <a href="https://www.linkedin.com/in/alexandra-kopelcheck" target="_blank">https://www.linkedin.com/in/alexandra-kopelcheck</a>
              <br></br>
              GitHub: <a href="https://github.com/akopelcheck" target="_blank">https://github.com/akopelcheck</a>
            </>
          } 
          hasImg={false}
        />
     </div>
    </div>
  );
}

export default Home;
