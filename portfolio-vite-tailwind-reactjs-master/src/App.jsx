import Main from './components/Main';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Team from './components/Equipe';
import Footer from './components/footer'
function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
