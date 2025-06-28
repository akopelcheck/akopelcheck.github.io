//import './home-page.css';
import Card from '../../components/card/card.component'
import useLocalStorage from 'use-local-storage'
import Header from '../../components/header/header.component'
import ImageCard from '../../components/img-card/img-card.component';

function Experience() {

 const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="Experience" data-theme='dark'>
      <Header />
      <h1>My Experience</h1>
      {/* <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button> */}
    </div>
  );
}

export default Experience;
