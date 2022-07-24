// import './App.css';
import './App2.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/banner/Banner';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import NavBar2 from './components/navBar/NavBar2';

function App() {
  return (
    <div className='App'>
      {/* <NavBar /> */}
      <NavBar2 />
      {/* <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
