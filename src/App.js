import './App.css';
import AddEmp from './Component/AddEmp';
import EditEmp from './Component/EditEmp';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />}>  </Route>
         <Route path="/addEmp" element={<AddEmp />}>  </Route>
         <Route path="/editEmp/:id" element={<EditEmp />}>  </Route>
      </Routes>
    </div>
  );
}

export default App;
