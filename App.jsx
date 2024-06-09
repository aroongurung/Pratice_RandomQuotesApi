import React, { useEffect, useState } from 'react';

function App() {
  const[quotes, setQuotes] = useState("");//UseState for Quotes Content
  const[author, setAuthor] = useState("");//UseState for Quotes Author
  const[count, setCount] = useState(0);//Usestate for Count Views

//Fetching data from Quote API
  async function getRandomQuotes(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    //console.log(data.content) 
    //console.log(data.author)
    setQuotes(data.content);
    setAuthor(data.author);
  
    setCount((c) => c + 1);//Counter Increment for Views

    //Using UseEffect 
    useEffect(()=> getRandomQuotes(),[])
  }
  return (
    <>
      <div className='main-container'>
          <h1 className='welcome-title'>Welcome to Quotes World</h1>
          <h3 className='main-quotes'>{quotes}</h3>
          <p className='author'>{author}</p>  
          <button onClick={getRandomQuotes} className='btn'>Get Quotes</button>
          <p className='countview'>{count} views</p>
          </div>
  </>
  )
}


export default App