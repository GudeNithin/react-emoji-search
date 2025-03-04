import React from 'react'
import { auth } from './firebase';
const Home = ({presentUser}) => {
  return (
    <div>
      <center>
        <h4>Welcome {presentUser.email}</h4>
        <button onClick={()=>auth.signOut()}>SignOut</button>
      </center>
    </div>
  )
}

export default Home
