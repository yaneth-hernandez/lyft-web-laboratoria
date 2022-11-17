import React from 'react'
import { Header } from './Header'
import { SectionInitial } from './SectionInitial'
import './App.scss'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Header/>
      <SectionInitial/>
    </React.Fragment>
  )
}

export default App
