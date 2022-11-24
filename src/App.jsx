import React from 'react'
import { Header } from './Header'
import { SectionInitial } from './SectionInitial'
import { Information } from './Information'
import './App.scss'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Header/>
      <SectionInitial/>
      <Information/>
    </React.Fragment>
  )
}

export default App
