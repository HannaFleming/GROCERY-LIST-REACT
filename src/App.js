import './App.css';
import { Grocery } from './Grocery';
import image from './shoppingbag.jpg';
import imageTwo from './woman.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">
      <img src= { image } width="200px" alt="shoppingbag"/>
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <Grocery />
      <div className="container">
      <img src= { imageTwo } width="200px" alt="woman"/>
    </div>
    </div>
  );
}

export default App;
