import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './login';
import PrivateRoute from './privateRouter';
import Home from './home';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/signin' element={<SignIn/>}></Route>
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
