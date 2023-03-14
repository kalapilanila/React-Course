import './App.css';
// import Header from './Header'
import Student from './Components/Student';

function App() {
  return (
    <div className="App">
      <Student 
        name="Nilay" 
        age={21}
      />
    </div>
  );
}

export default App;
