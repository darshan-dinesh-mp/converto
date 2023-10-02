import a from './App.module.css'
import Nav from './Components/Nav/Nav'
import Options from './Components/Options/Options'

function App() {

  return (
    <>
      <div className={`${a.appmain}`}>
        <Nav />
        <Options />
      </div>
    </>
  )
}

export default App
