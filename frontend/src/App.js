import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Sample1 } from './Components/Education/education';
import { Sample } from './Components/Personal/sample';
import { SignIn } from './Components/Signin/signin';

import { UseStateFunction } from './useState&useEffect/useState&useEffect';
import { SignUp } from './Components/Signup/signup';





function App() {
  return (
    <>

<ChakraProvider >
      <SignUp/>
     </ChakraProvider>

     <ChakraProvider >
      <SignIn/>
     </ChakraProvider>
     <Sample/>
     <Sample1/>
     <UseStateFunction/>
      </>
    
  );
}

export default App;
