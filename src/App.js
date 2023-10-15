// import logo from './logo.svg';
import './App.css';
import Update from './Components/Update';
import Create from './Components/Create';
import View from './Components/View';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Abcd from './Components/Abcd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
 


// import Create from './Components/create';


function App() {
  return (
    <div className="App">

      
          {/* <Create/> */}
          {/* <View/> */}
          {/* <Update/> */}


          {/* <Abcd/> */}
<BrowserRouter>

<Navbar/>

<Routes>

<Route path='/Create' element={<Create/>} />
<Route path='/' element={<View/>} />
<Route path='/Update/:id' element={<Update/>} />


</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
