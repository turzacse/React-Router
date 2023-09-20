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
      
      <div className='ml-6 my-10'>
          <LineCharts></LineCharts>
      </div>
      <div className='mb-20'>
          <Price></Price>
      </div>
    </>
  )
}

export default App
