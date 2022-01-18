import './App.css';
import { useEffect , useState} from 'react';

function App() {
  const url = 'https://api.github.com/users/';

  const [user,setUser] = useState("profile.jpg")

  useEffect(() => {

    fetch(url+"lancetoledo")
    .then(response => response.json())
    .then(data => {
      
        if(data.message === "Not Found") {
            
            console.log("Not found!")
        }
        else {
            console.log(data)
            setUser(data.avatar_url)
        }
        
    })


    return  
  }, [])

  




  return (
    <div className="App">

       <div class="card">
        <div class="header">
            
        </div>
        <div class="main">
            <div class="frame">
                <a href="https://lancetoledo.github.io">
                    <img class="profile" src={user} alt=""/>
                </a>
                
                
            </div>
            <div class="name">
                <p id="full_name">Lance Toledo</p>
                <p id="age">23</p>
            </div>

            <p id="location">New Jersey</p>
        </div>
        <div class="footer">
            <div class="stats">
                <p class="number">120K</p>
                <p class="metric">Followers</p>
            </div>
            <div class="stats">
                <p class="number">780K</p>
                <p class="metric">Likes</p>
            </div>
            <div class="stats">
                <p class="number">1.2K</p>
                <p class="metric">Photos</p>
            </div>
        </div>
     </div>
    </div>
  );
}

export default App;
