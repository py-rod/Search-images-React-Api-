import { useRef, useState } from 'react'
import { AddCategory } from './components/AddCategory/AddCategory'
import "./App.css"
import { GrifGrid } from './components/GifGrid/GifGrid'

function App() {
  const [categories, setCategories] = useState([])



  const onAddCategory = (inputvalue) => {
    if (categories.includes(inputvalue) == false) {
      setCategories([...categories, inputvalue])
    }
  }

  return (
    <>
      <main>
        <h1>Gift expert App</h1>

        <AddCategory onAddCategory={onAddCategory}></AddCategory>

        {categories.map(category => {
          return (
            <GrifGrid category={category} key={category}></GrifGrid>
          )
        })}
      </main>
    </>
  )
}

export default App
