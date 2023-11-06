import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import Login from './pages/Login';

export const UserContext = createContext() //outside of the component

function App() {
  const [userState, setUserState] = useState({})

  // const user = {
  //   userName: 'Johndoe@gmail.com',
  //   accountType: 'admin',
  //   _id: '7345632475607'
  // }

  console.log('userState in app ->', userState)

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{userState, setUserState}}>
          <Header />
          <main className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
