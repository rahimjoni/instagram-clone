import logo from './logo.svg';
import './App.css';
import Post from "./Components/Post";
import {useEffect, useState} from "react";
import {db} from "./Components/firebase";

function App() {
      const [posts,setPosts] = useState([])

      useEffect(()=>{
            db.collection('posts').onSnapshot(snapshot => {
                  setPosts(snapshot.docs.map(doc=>({
                        id:doc.id,
                        post:doc.data()
                  })))
            })
      },[])

  return (
    <div className="App">
        {/*Header area*/}
        <div className="app__header">
            <img src="Instagram-Logo.png" alt="logo" className="app__headerLogo"/>
        </div>

          {
                posts.map(({post,id})=>(
                    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
                )
                )
          }
        </div>
  );
}

export default App;
