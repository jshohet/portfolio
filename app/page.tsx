import Header from './components/Header'
import Homes from './components/Homes'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import projects from './assets/projects.json';
import skills from './assets/skills.json';
import coursework from './assets/coursework.json';
import currentlyExploring from './assets/currentlyexploring.json';



export default function Home() {
  return (
    <main>
      <Header />
      <Homes id="home" />
      <About
        id="about"
        courseworks={coursework}
        currentlyExploring={currentlyExploring}
        skills={skills}
      />
      <Projects id="projects" projects={projects} />

      <Contact id="contact" />
      <Footer />
    </main>
  );
}
