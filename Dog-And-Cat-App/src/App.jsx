import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //WORKING API structure
fetch('')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("There has been an error: " + error));

  return (
    <>
        <h1>The Dog and Cat App</h1>
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Location</li>
        </ul>
    </nav>
    <h2>Where would you like to check the weather?</h2>
    <h3>Search</h3>
    <footer>
        <h6>copyright blah blah blah 2024</h6>
    </footer>
      
    </>
  )
}

export default App
