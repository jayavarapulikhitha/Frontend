//import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { SignIn} from './Components/Signin/signin';
import { SignUp } from './Components/Signup/signup';
import { ForgetPassword } from './Components/Forgetpassword/forgetpassword';
import { StudentData } from './Components/studentdetails/students';
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
      
      <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/students' element={<StudentData/>}/>

    </Routes>
    </BrowserRouter>
 
      </>
    
  );
}

export default App;
