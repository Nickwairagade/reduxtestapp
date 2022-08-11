import { useEffect } from 'react';
import './App.css';
import Auth from './components/Auth/Auth'
import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';
import { addToken } from './reducers/authReducer'
import { useSelector, useDispatch } from 'react-redux'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Auth/Signup';



function App() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addToken())
  }, [])

  return (
    <>
      <Header />
      <div className="App">

        {
          token ? <Todo /> : <Auth />

        }

      </div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
