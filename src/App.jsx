import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
// import {Home, About, Projets, Contact} from './pages/index.js'; // Importing pages from index.js
import {Home, About, Projects, Contact} from './pages'; // Importing pages directly


const ResumeRedirect = () => {
  // Triggers download when this component is rendered
  React.useEffect(() => {
    const link = document.createElement('a');
    link.href = '/Anurag_bhattacharya_Resume.pdf';
    link.download = 'Anurag_bhattacharya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   // window.location.href = '/';
  }, []);

  return null; // No UI needed
};

const App = () => {
  return (
    <main className="h-full bg-slate-500/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Portfolio" element={<Projects />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
