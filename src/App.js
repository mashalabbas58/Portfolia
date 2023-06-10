import './App.css';
import NavBar from './components/NavBar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Project from './components/pages/Project';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/skills' exact Component={Skills}/>
        <Route path='/project' exact Component={Project}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
