import logo from './logo.svg';
import './App.css';
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
        {/*Header area*/}
        <div className="app__header">
            <img src="Instagram-Logo.png" alt="logo" className="app__headerLogo"/>
        </div>
        <Post/>
    </div>
  );
}

export default App;
