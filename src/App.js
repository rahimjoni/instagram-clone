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
        <Post username="Rahim Joni" caption="Caption from here" imageUrl="original.jpeg"/>
        <Post username="Fahimul Imam" caption="Caption from Fahim" imageUrl="Marathi-sad-image-download.jpg"/>
        <Post username="Rahim Joni" caption="Caption from here" imageUrl="google-search-feature-image.jpg"/>
    </div>
  );
}

export default App;
