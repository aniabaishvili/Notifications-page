import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import data from '../src/components/data.json'






function App() {
  const [userData, setUserData] = useState(data)

  const markAsRead = () => {
    const clone = userData.map(item => {
      item.read = true;
      return item;
    })
    setUserData([...clone])
  }
  
  return (
  
   <div className='container'>
    <Header userData={userData} markAsRead={markAsRead} />
    <div  className="notif-div">
      {userData.map((item,index) => {
        return(
          <div key={index}>
          <img id="image"src={`./assets/avatar-${item.author.replace(" ", "-").toLocaleLowerCase()}.webp`}/>
          <div style={item.read ? {} : read.read}> {}
          

          <p className='notif-text'>
            <span id="author">{item.author}</span>
            {" "}
         
            <span style={styles.type}>
              {item.type}
               </span>

          
            {" "}
            {item.content.includes(".webp") ? (
            <img src={item.content} alt="Notification Content" />
              ) : (
              
             <span id="content"style={{ color: item.type === "Left the group" || item.type === "has joined your group" 
               ? "#0A327B"  : "#5E6778", fontWeight: 600, ...(item.content.includes("Hello") ? bg.bg : {})
               
               }}>
                
                {item.content}
                   </span>
                  )}
                  
                 
                  
                    {/* <span style={circle.circle}>...</span> */}
                    {item.read === false ? <span style={circle.circle}>...</span>
                    : null}
                   
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

const read = {
  read:{
    backgroundColor:"#F7FAFD",
    borderRadius:"10px",
  }
}
const bg = {
  '@media (min-width: 768px)':{
  bg:{
    // backgroundColor: '#E5EFFA',
    // backgroundClip:' initial',
    // backgroundColor: 'rgb(255, 255, 255)',
       paddingTop:' 17px',
       paddingRight: '25px',
       paddingBottom:' 22px',
       paddingLeft: '10px',
       color: 'rgb(94, 103, 120)',
       fontSize: '1rem',
       fontWeight:' 500',
       lineHeight: '1.25rem',
  }

  },
  bg:{
    color:'#5E6778',
    fontSize:'12px',
    fontWeight:'500',
    
    }
}

const circle = {
  circle:{
    backgroundColor:'red',
    borderRadius:'50%',
    color:'red',
    fontSize:'8px',
    marginLeft:'3px',
  }
}



export default App
