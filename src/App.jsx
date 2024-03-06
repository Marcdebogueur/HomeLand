// importer Routes et route
import {Routes, Route} from 'react-router-dom';
import Home from './Home'
import './css/output.css'

function App() {
 

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
