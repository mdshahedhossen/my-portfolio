
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './Pages/ContactMe/ContactMe';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutme' element={<ContactMe></ContactMe>}></Route>
        <Route path='/contact' element={<ContactMe></ContactMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
