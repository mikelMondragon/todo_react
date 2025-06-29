import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoSection } from './components/TodoSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <main>
        <TodoSection />
      </main>
      <footer>
        <h3>footer</h3>
      </footer>
    </>
  )
}

export default App
