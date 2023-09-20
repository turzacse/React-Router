import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Nav from './Components/Nav/Nav'
import Price from './Components/Price/Price'
import LineCharts from './Components/LineCharts/LineCharts'

function App() {

  return (
    <>
      <Nav></Nav>
      {/* <DaisyNav></DaisyNav> */}
      <Price></Price>
      <div className='ml-6 my-10'>
          <LineCharts></LineCharts>
      </div>
    </>
  )
}

export default App
