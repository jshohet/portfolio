import Header from './components/Header'
import Homes from './components/Homes'
import Projects from './components/Projects'
import About from './components/About'
import Coursework from './components/Coursework'
import Footer from './components/Footer'



export default function Home() {
  return (
    <main>
      <Header />
      <Homes id="home"/>      
      <Projects id="projects"/>
      <About id="about"/>
      <Coursework id="coursework"/>
      <Footer />
    </main>
  );
}
