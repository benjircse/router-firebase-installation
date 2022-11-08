 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import RequerAuth from './components/RequerAuth/RequerAuth';
 
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>    
        <Route path='/order' element={
          <RequerAuth>
            <Orders></Orders>
          </RequerAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
 
    </div>
  );
}

export default App;
