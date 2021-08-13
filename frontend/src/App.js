import './App.css';
import{
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes />

      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
