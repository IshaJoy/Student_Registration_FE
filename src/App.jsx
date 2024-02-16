import {Navigate,Route,Routes} from 'react-router-dom'
import LandingPg from './Pages/LandingPg';
import Form from './Pages/Form';
import StudentDetails from './Pages/StudentDetail'
import Header from './Components/Header'





function App() {
  return (
    <>

<Header/>

    <Routes>
      
        <Route path='/' element={<LandingPg />} />
        <Route path='/form' element={<Form />} />
        <Route path='/details' element={<StudentDetails />} />

        
        <Route path='/*' element = {<Navigate to={'/'}/>}></Route>

    </Routes>
    </>
  )
}

export default App
