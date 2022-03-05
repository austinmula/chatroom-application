import 'bulma/css/bulma.min.css';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className=' container is-fluid'>
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
