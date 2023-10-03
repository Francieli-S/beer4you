import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const apiBeer = 'https://ih-beers-api2.herokuapp.com/beers'

  const data = async () => {
    try {
      const response = await axios.get(apiBeer)      
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
