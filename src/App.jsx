import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import './style.scss';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return <div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>}/>
        </Route >
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
