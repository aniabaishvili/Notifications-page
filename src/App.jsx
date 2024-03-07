import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import data from '../src/components/data.json'


function App() {
  const [userData, setUserData] = useState(data)

  return (
   <div className='container'>
    <Header/>
    <div className='notif-div'>
      {userData.map((item) => {
        return(
          <div>
          <img id="image"src={`./assets/avatar-${item.author.replace(" ", "-").toLocaleLowerCase()}.webp`}/>
          <div>
          <p className='notif-text'>
            <span id="author">{item.author}</span>
            {" "}
         
            <span style={styles.type}>
              {item.type}
               </span>

          {/* <span>{item.type}</span> */}
            {" "}
            {item.content.includes(".webp") ? (
            <img src={item.content} alt="Notification Content" />
              ) : (
              
             <span style={{ color: item.type === "Left the group" || item.type === "has joined your group" 
               ? "#0A327B"  : "#5E6778", fontWeight: 600  }}>
                 {item.content}
                   </span>
                  )}
                 

            <p id='time'>{item.time}</p>
          </p>
          </div>
        </div>
        
        )
      })}
    </div>
   </div>
   
  
     
  )
}
const styles ={
  type: {
  color: "#5E6778",
  }
}


export default App
