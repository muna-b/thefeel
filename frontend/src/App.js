import './App.css';
import{
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes />

      <Contact />
    </Router>
  );
}

export default App;
