import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body'
import Footer from './components/Footer';
import Billing from './components/Billing';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Dashboard /> */}
      <Body />
      <Billing />
      <Footer />
    </div>
  );
}

export default App;
