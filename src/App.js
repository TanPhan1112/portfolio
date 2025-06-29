import './App.css';
import { Landing, Navbar, AboutMe, Technologies, Portfolio } from './screens';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
      <Portfolio />
    </div>
  );
}

export default App;
