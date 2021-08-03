import './App.css';
import{
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Routes />

      <Footer />
    </Router>
  );
}

export default App;
