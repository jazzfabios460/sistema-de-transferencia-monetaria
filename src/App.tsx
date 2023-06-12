import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './login';
import PrivateRoute from './privateRouter';
import Home from './home';
import Register from './register';
import CardTransferencia from './home/cardTransferencia';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/' 
              element={
                <PrivateRoute>
                  <Home/>
                </PrivateRoute>
              }>
            </Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
