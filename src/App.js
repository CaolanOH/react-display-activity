import './index.css';
import data from './data.json'
import Card from './components/card'
function App() {



  return (
    <div className="App grid">

      {data.results.map((person) => (
      <Card data={person}/>
      ))}
    </div>
  );
}

export default App;
