import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Header'
import About from './About'
import UserPage from './UserPage'


function App() {
  return (
    <div className="App">
      <Header />
      <UserPage />
      <About />
      
    </div>
  );
}

export default App;
