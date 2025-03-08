import React,{useState,useEffect} from 'react'
import EmojiData from './emoji.json'
import './App.css'

const App = () => {
  const [search,setSearch]=useState('');
  const [data,setData]=useState([])
  const handler=e=>{
    setSearch(e.target.value);
  }

  useEffect(()=>{
   const newData=EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
   setData(newData)
  },[search])

  return (
    <div>
      <center>
        <h4 className="m-3">React Emoji Search</h4>
        <input type="text" name="search" value={search} onChange={handler}/>
      </center>
      {data.map(emoji=><div>
        <div className="card m-2">
        <div className="card-body" onClick={()=>{navigator.clipboard.writeText(emoji.symbol);alert("Copied")}}>
          {emoji.symbol} {emoji.title}
        </div>
      </div>
      </div>)}
    </div>
  )
}

export default App
