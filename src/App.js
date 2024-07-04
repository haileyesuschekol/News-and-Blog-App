import "./App.css"
import { useState } from "react"
import AnimalShow from "./AnimalShow"

function getRandomAnimal() {
  const animal = ["bird", "cat", "dog", "gator", "horse", "cow"]
  return animal[Math.floor(Math.random() * animal.length)]
}

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderdAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app">
      <button className="button" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-last">{renderdAnimal}</div>
    </div>
  )
}

export default App
