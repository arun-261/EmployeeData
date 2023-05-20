import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from "./component/Home";
import Add from "./component/Add";
import Edit from "./component/Edit";
import Main from "./component/Main"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element= {<Main/>}/>
       <Route path='/Home' element= {<Home/>}/>
        <Route path='/edit' element= {<Edit/>}/>
        <Route path='/add' element= {<Add/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
