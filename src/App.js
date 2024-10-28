import img from "./images/card.jpeg"
import './App.css';
import Title from "./components/Title"
import Menu from "./components/MenuItems"
function App() {
  return (
    <div className="App">
      <Menu />
      <h1>Hello World - Thank You</h1>
      <img src={img} alt=""/>
      <Title />
    </div>

    
  );
}

export default App;
