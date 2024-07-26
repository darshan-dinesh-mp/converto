import a from './App.module.css'
import Nav from './Components/Nav/Nav'
import Options from './Components/Options/Options'

function App() {

  return (
    <>
      <div className={`${a.appmain}`}>
        <Nav />
        <Options />
        <div className='absolute bottom-0 text-red-400 z-10 bg-black rounded-md py-1 px-2'>
          <h1>Please bring it to my notice if there is any error or suggestion. <a href="mailto:your.email@example.com" className='underline underline-offset-2'>Connect me</a>
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
