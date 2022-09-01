import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import WelcomeSection from './components/WelcomeSection';
import Greetings from './components/Greetings';
import Footer from './components/Footer';
import { BrowserRouter , Routes, Route, Link , Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeAdd from './components/Employeeadd';
import PrivateRoute from './components/util/PrivateRoute';
import EditEmployee from './components/EditEmployee';
import Forget from './components/Forget';

function App() {
  return (
    <>
    {/* <Forget/> */}
      <Routes>
       <Route exact path="/" element={<Login/>}/>
       <Route  path="/resetpassword/:tkn" element={<ResetPassword/>}/>
       <Route exact path="/landingpage/:role" element={<PrivateRoute><LandingPage/></PrivateRoute>}/>
       <Route exact path="/landingpage/admin/employeedetails" element={<PrivateRoute><EmployeeDetail/></PrivateRoute>}/>
       <Route exact path="/landingpage/admin/addemployee" element={<PrivateRoute><EmployeeAdd/></PrivateRoute>}/>
       <Route exact path="/landingpage/admin/:id" element={<EditEmployee/>}/>
       <Route exact path="/forget/" element={<Forget/>}/>
    </Routes>
    </>
  );
}

export default App;
