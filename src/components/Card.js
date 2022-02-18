import React from 'react'

export default function Card() {
  return (
    <div class="card">
    <div class="header">
        
    </div>
    <div class="main">
        <div class="frame">
            <a href="https://lancetoledo.github.io">
                <img class="profile" src="./profile.jpg" alt=""/>
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
  )
}
